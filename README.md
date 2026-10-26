# Mammut — Enjoying the View

Interaktywny brief współpracy w sześciu sekcjach, z fotografiami Skitour, natywnym parallaxem i obsługą ograniczonego ruchu.

HTML / CSS / vanilla JavaScript. Lokalny podgląd: `python3 -m http.server 8778`.

Materiały Mammut pozostają własnością ich właścicieli. Inspiracje do rolek i link produktów oczekują na uzupełnienie.

Typografia: AG Next i Basel Grotesk Mono z oficjalnej strony Mammut. Zdjęcia: MIA / Winter 26–27 / Ski touring / Commercial Images / Crans Montana, kadry 02, 04, 18, 19, 22, 26.

## Publikacja LH /view/
Adres docelowy: https://mammut.sat.poznan.pl/view/. Osobny katalog FTP `/mammut.sat.poznan.pl/view`; skrypt nie usuwa plików, nie zmienia katalogu nadrzędnego i przesyła index.html na końcu. FTPS z weryfikacją certyfikatu.
GitHub Actions: `.github/workflows/deploy-lh.yml`, środowisko `lh-view`, sekrety `LH_FTP_HOST`, `LH_FTP_USER`, `LH_FTP_PASSWORD`. Obecne konto FTP ma szersze uprawnienia; docelowo zalecane konto ograniczone do kampanii (wtedy należy zmienić DESTINATION na katalog główny tego konta).
Pierwsze przesłanie 2026-10-23 przez FileZillę. Automatyzacja wymaga uzupełnienia hasła w Secrets i sprawdzenia pierwszego uruchomienia.

2026-10-26: zakres skitour 4 rolki / 8 stories / wyłączność XII 2026–III 2027; osobne zestawy męski (1608 EUR) i damski (1618 EUR), po 8 produktów. Orientacyjne PLN: 7079 / 7123, kurs NBP tabela 208/A/NBP/2026 z 26.10.2026, EUR=4.4026. Formularz freeride pozostawiony bez zmian na najnowsze polecenie użytkownika. Wdrożenie FTPS do /view/; automatyzacja nadal bez hasła w GitHub Secrets.
