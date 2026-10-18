# KI-Praxiswerkstatt · EJA München

Statische Workshop-Website von Max Fröhlich. Zwei aufeinanderfolgende Aufgaben, optimiert für Handy und Laptop. Ohne Framework, Backend, Anmeldung oder externe Laufzeit-Abhängigkeiten.

## Lokal ansehen

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Dann `http://127.0.0.1:4173/` öffnen. Nicht die HTML-Datei direkt öffnen: Zwischenablage und Dateipfade funktionieren über den lokalen Server zuverlässiger.

## Inhalte

- `#start`: Aufgabenübersicht
- `#ausflug`: Aufgabe 1
- `#foerderantrag`: Aufgabe 2
- `materialien/`: Originalantrag, Übungsdossier, Markdown-Vorlagen und CSV-Kostenpläne

Ein gemeinsamer späterer QR-Code soll auf die Startseite zeigen. Noch keinen QR-Code auf eine vermutete Pages-Adresse erstellen: Erst die tatsächliche Live-Adresse nach Freigabe prüfen.

Die Checklisten speichern ausschließlich im lokalen Browser. Bei gesperrtem Browserspeicher funktioniert die Seite weiterhin; der Fortschritt bleibt gegebenenfalls nur während der Sitzung erhalten. Keine Ergebnissammlung, kein KI-API-Schlüssel, keine externen Schrift-/Tracking-Aufrufe. Die mitgelieferte Schrift Poppins steht unter SIL OFL (siehe `assets/fonts/OFL.txt`).

## Quellen und Trennung von Übung und Original

BuntStiftung München:
- Förderinformationen: https://www.buntstiftung-muenchen.de/de-de/foerderung/
- Unveränderter Originalantrag: https://www.buntstiftung-muenchen.de/media/mupbazdo/projektantrag.pdf
- Abgerufen: 19.10.2026. Formularstand: 06/2013.

Der alte Originalantrag nennt Posteinreichung; die aktuelle Website beschreibt auch Online-Bewerbung. Diese Differenz wird in der Aufgabe ausdrücklich zur Prüfung gestellt. Keine Zusammenarbeit mit der Stiftung. Übungsdossier, Budgets, Träger und Kostenbausteine sind frei erfunden und keine Förderbedingungen. Keine Einreichung oder echte personenbezogene Daten im Workshop.

## Veröffentlichung erst nach Freigabe

Der Workflow ist ausschließlich manuell auslösbar (`workflow_dispatch`). Ein Push löst keine Veröffentlichung aus. GitHub Pages ist vor Nutzerfreigabe nicht einzuschalten. Nach Freigabe gegebenenfalls Repository-Sichtbarkeit / GitHub-Plan prüfen, Pages auf GitHub Actions konfigurieren, Workflow manuell starten, Live-Adresse und Downloads überprüfen und erst dann den gemeinsamen QR-Code erzeugen.

## Prüfung

Lokal: Desktop- und Mobilansicht, beide Aufgaben, Abschnittslinks, Material-Downloads, Kopierfunktion, Checklisten mit Neuladen und Zurücksetzen, Dialog und Druckansicht. Die Original-PDF bleibt bytegleich zur heruntergeladenen Quelle. Das Übungsdossier ist als Simulation gekennzeichnet.
