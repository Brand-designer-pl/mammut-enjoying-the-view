"""Upload only the campaign to its fixed LH directory. Never delete remote files."""
import ftplib
import os
from pathlib import Path
import ssl
import subprocess

DESTINATION = "/mammut.sat.poznan.pl/view"

def main():
    credentials = [os.environ.get(key) for key in ("FTP_HOST", "FTP_USER", "FTP_PASSWORD")]
    if not all(credentials):
        raise SystemExit("Configure LH_FTP_HOST, LH_FTP_USER and LH_FTP_PASSWORD in the lh-view environment.")
    root = Path(__file__).resolve().parents[1]
    tracked = subprocess.check_output(["git", "ls-files", "-z"], cwd=root).decode().split("\0")
    files = sorted(name for name in tracked if name in ("index.html", "style.css", "app.js") or name.startswith("assets/"))
    assert "index.html" in files
    with ftplib.FTP_TLS(context=ssl.create_default_context(), timeout=60) as ftp:
        ftp.connect(credentials[0], 21)
        ftp.login(credentials[1], credentials[2])
        ftp.prot_p()
        # The directory must already exist: never fall back to a parent directory.
        ftp.cwd(DESTINATION)
        for name in sorted(files, key=lambda name: name == "index.html"):
            path = Path(name)
            if path.is_absolute() or ".." in path.parts or (root / path).is_symlink():
                raise ValueError("Invalid deployment path")
            ftp.cwd(DESTINATION)
            for part in path.parts[:-1]:
                try:
                    ftp.cwd(part)
                except ftplib.error_perm:
                    ftp.mkd(part)
                    ftp.cwd(part)
            with (root / path).open("rb") as source:
                ftp.storbinary("STOR " + path.name, source)
            print("Uploaded " + name)
    print("Deployment complete: https://mammut.sat.poznan.pl/view/")

if __name__ == "__main__":
    main()
