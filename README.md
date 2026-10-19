# KI-Praxiswerkstatt · EJA München

Statische Workshop-Website von Max Fröhlich. Praxisaufgaben für Ausflugsplanung, Förderantrag und Dokumentanalyse, optimiert für Handy und Laptop. Ohne Framework, Backend, Anmeldung oder externe Laufzeit-Abhängigkeiten.

## Lokal ansehen

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Dann `http://127.0.0.1:4173/` öffnen. Nicht die HTML-Datei direkt öffnen: Zwischenablage und Dateipfade funktionieren über den lokalen Server zuverlässiger.

## Inhalte

- `#start`: Aufgabenübersicht
- `#ausflug`: Aufgabe 1
- `#foerderantrag`: Aufgabe 2
- `#dokumente`: neue Aufgabe 3 zur siebenseitigen Dokumentanalyse (lokaler Entwurf, noch nicht veröffentlicht)
- `materialien/`: Originalantrag, Übungsdossier, Markdown-Vorlagen und CSV-Kostenpläne

Die Veröffentlichung wurde am 19.10.2026 freigegeben.

Website: https://maxfroehlich1410.github.io/eja-ki-praxiswerkstatt/

Der gemeinsame QR-Code in `assets/workshop-qr.png` und `assets/workshop-qr.svg` führt auf diese Startseite und erschließt beide Aufgaben. Der PNG-Code wurde mit einem unabhängigen Decoder überprüft.

Aufgabe 1: 600 Euro Gesamtbudget einschließlich 60 Euro Reserve, also höchstens 540 Euro verplanbar. Optionale Zusatzrunde: 480 Euro einschließlich 48 Euro Reserve.

Die Checklisten speichern ausschließlich im lokalen Browser. Bei gesperrtem Browserspeicher funktioniert die Seite weiterhin; der Fortschritt bleibt gegebenenfalls nur während der Sitzung erhalten. Keine Ergebnissammlung, kein KI-API-Schlüssel, keine externen Schrift-/Tracking-Aufrufe. Die mitgelieferte Schrift Poppins steht unter SIL OFL (siehe `assets/fonts/OFL.txt`).

## Quellen und Trennung von Übung und Original

BuntStiftung München:
- Förderinformationen: https://www.buntstiftung-muenchen.de/de-de/foerderung/
- Unveränderter Originalantrag: https://www.buntstiftung-muenchen.de/media/mupbazdo/projektantrag.pdf
- Abgerufen: 19.10.2026. Formularstand: 06/2013.

Der alte Originalantrag nennt Posteinreichung; die aktuelle Website beschreibt auch Online-Bewerbung. Diese Differenz wird in der Aufgabe ausdrücklich zur Prüfung gestellt. Keine Zusammenarbeit mit der Stiftung. Übungsdossier, Budgets, Träger und Kostenbausteine sind frei erfunden und keine Förderbedingungen. Keine Einreichung oder echte personenbezogene Daten im Workshop.

## Veröffentlichung und spätere Aktualisierungen

Das Repository ist öffentlich; GitHub Pages verwendet GitHub Actions. Der Workflow ist ausschließlich manuell auslösbar (`workflow_dispatch`). Ein Push löst keine Veröffentlichung aus. Nach freigegebenen Änderungen committen, pushen und den Workflow manuell starten. Anschließend die Live-Seite und Downloads prüfen. Der gemeinsame QR-Code bleibt bei unveränderter Website-Adresse gültig.

## Prüfung

Lokal: Desktop- und Mobilansicht, beide Aufgaben, Abschnittslinks, Material-Downloads, Kopierfunktion, Checklisten mit Neuladen und Zurücksetzen, Dialog und Druckansicht. Die Original-PDF bleibt bytegleich zur heruntergeladenen Quelle. Das Übungsdossier ist als Simulation gekennzeichnet.

## Lokaler Entwurf: Dokumentanalyse

Die zusätzliche Aufgabe ist zunächst zur Sichtprüfung lokal ergänzt. Noch nicht pushen oder veröffentlichen, bevor der Nutzer die Fassung geprüft hat. Die bisherige Live-Seite und der QR-Code bleiben unverändert.

`document-task.js` enthält Aufgabenstellung, Belegpflicht, Ablauf für 25 Minuten, Hilfen und Abschlusscheck. Das siebenseitige fiktive PDF in `materialien/freizeithaus-bergwiese-angebot-7-seiten.pdf` enthält: internen Auftrag, Angebot, Zimmer/Zugang, Raumplan/Technik, Bedingungen, Preisblatt und eine spätere korrigierende E-Mail. Alle Namen, Daten, Bedingungen und Preise sind erfunden. Der Prüfzeitpunkt im Szenario ist der 04.11.2026.

Die Antwortvorlage liegt unter `materialien/arbeitsvorlage-dokumentanalyse.md`. Keine Musterlösung auf die Teilnehmerseite stellen. Die vorhandenen Aufgaben und das 600-Euro-Ausflugsbudget bleiben erhalten.
