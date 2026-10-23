# Mammut — Enjoying the View

Interaktywny brief współpracy w sześciu sekcjach, z fotografiami Skitour, natywnym parallaxem i obsługą ograniczonego ruchu.

HTML / CSS / vanilla JavaScript. Lokalny podgląd: `python3 -m http.server 8778`.

Materiały Mammut pozostają własnością ich właścicieli. Inspiracje do rolek i link produktów oczekują na uzupełnienie.

Typografia: AG Next i Basel Grotesk Mono z oficjalnej strony Mammut. Zdjęcia: MIA / Winter 26–27 / Ski touring / Commercial Images / Crans Montana, kadry 02, 04, 18, 19, 22, 26.

## Publikacja LH /view/
Adres docelowy: https://mammut.sat.poznan.pl/view/. Osobny katalog FTP `/mammut.sat.poznan.pl/view`; skrypt nie usuwa plików, nie zmienia katalogu nadrzędnego i przesyła index.html na końcu. FTPS z weryfikacją certyfikatu.
GitHub Actions: `.github/workflows/deploy-lh.yml`, środowisko `lh-view`, sekrety `LH_FTP_HOST`, `LH_FTP_USER`, `LH_FTP_PASSWORD`. Obecne konto FTP ma szersze uprawnienia; docelowo zalecane konto ograniczone do kampanii (wtedy należy zmienić DESTINATION na katalog główny tego konta).
Pierwsze przesłanie 2026-10-23 przez FileZillę. Automatyzacja wymaga uzupełnienia hasła w Secrets i sprawdzenia pierwszego uruchomienia.
