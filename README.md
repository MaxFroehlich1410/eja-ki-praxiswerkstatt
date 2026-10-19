# KI-Praxiswerkstatt · EJA München

Statische Workshop-Website von Max Fröhlich. Praxisaufgaben für Ausflugsplanung, Förderantrag und Dokumentanalyse, optimiert für Handy und Laptop. Ohne Framework, Backend, Anmeldung oder externe Laufzeit-Abhängigkeiten.

## Lokal ansehen

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Dann `http://127.0.0.1:4173/` öffnen. Nicht die HTML-Datei direkt öffnen: Zwischenablage und Dateipfade funktionieren über den lokalen Server zuverlässiger.

## Inhalte

- `#start`: Aufgabenübersicht
- `#ausflug`: Aufgabe 2
- `#foerderantrag`: Aufgabe 3
- `#dokumente`: Aufgabe 1 zur siebenseitigen Dokumentanalyse (lokaler Entwurf, noch nicht veröffentlicht)
- `materialien/`: Originalantrag, Übungsdossier, Markdown-Vorlagen und CSV-Kostenpläne

Die Veröffentlichung wurde am 19.10.2026 freigegeben.

Website: https://maxfroehlich1410.github.io/eja-ki-praxiswerkstatt/

Der gemeinsame QR-Code in `assets/workshop-qr.png` und `assets/workshop-qr.svg` führt auf diese Startseite und erschließt beide Aufgaben. Der PNG-Code wurde mit einem unabhängigen Decoder überprüft.

Aufgabe 2: 600 Euro Gesamtbudget einschließlich 60 Euro Reserve, also höchstens 540 Euro verplanbar. Optionale Zusatzrunde: 480 Euro einschließlich 48 Euro Reserve.

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

`document-task.js` enthält Aufgabenstellung, Belegpflicht, Ablauf für 20 Minuten, Hilfen und Abschlusscheck. Das siebenseitige fiktive PDF in `materialien/freizeithaus-bergwiese-angebot-7-seiten.pdf` enthält: internen Auftrag, Angebot, Zimmer/Zugang, Raumplan/Technik, Bedingungen, Preisblatt und eine spätere korrigierende E-Mail. Alle Namen, Daten, Bedingungen und Preise sind erfunden. Der Prüfzeitpunkt im Szenario ist der 04.11.2026.

Die Antwortvorlage liegt unter `materialien/arbeitsvorlage-dokumentanalyse.md`. Keine Musterlösung auf die Teilnehmerseite stellen. Die vorhandenen Aufgaben und das 600-Euro-Ausflugsbudget bleiben erhalten.

## Überarbeitung: getrennte KI-Kompetenzen

Lokal überarbeitet, noch nicht veröffentlicht:
- Aufgabe 2: offene Recherche, iteratives Planen und Bildgestaltung; 600/60-EUR-Budget bleibt erhalten.
- Aufgabe 3: vorbereitete Faktenbasis und ausgefüllte Musterfinanzierung; eigene Projektidee, ein zusammenhängender Antragsentwurf mit drei Abschnitten (600/900/600 Zeichen inklusive Leerzeichen) sowie selbstständige Prüfung und Überarbeitung mit KI. Keine verpflichtende PDF-Analyse oder Förderrecherche. `grant-task.js` enthält die Aufgabe. `materialien/zeichencounter.html` zählt die Zeichen lokal im Browser.
- Aufgabe 1: fünf Aussagen mit Belegen prüfen, drei eigene Fragen ans PDF und die Prüfung aller KI-Antworten im Original; keine vollständige Kalkulation, kein Fristenplan oder Entscheidungstext. Das siebenseitige Quelldokument bleibt erhalten.
- Geänderte Checklisten verwenden eigene Versionsschlüssel, damit alte Häkchen keine anderen Anforderungen als erledigt markieren.

Die Zeichenlimits und Bewertungskriterien sind ausdrücklich Workshopvorgaben. Kein neuer Live-Deploy ohne Freigabe.

## Arbeitsform

Alle drei Aufgaben werden vollständig in Einzelarbeit bearbeitet: eigener KI-Dialog, eigene Entscheidungen und eigenes Ergebnis. Keine Rollenverteilung oder parallele Teamarbeit. Der gemeinsame Austausch folgt nach der Arbeitsphase. Jugendgruppen und Betreuungsteams in den Szenarien bleiben fachlicher Kontext.

Reihenfolge im lokalen Entwurf: Dokumentanalyse → Ausflugsplanung → Förderantrag. Die Dokumentanalyse zeigt den vollständigen Auftrag kompakt in vier Schritten; Hilfen und Selbstcheck sind aufklappbar. Die Quelle bleibt ein PDF mit insgesamt sieben Seiten.

## Ausflugsvorlagen in vertrauten Dateiformaten

Die Ausflugsplanung verlinkt eine bearbeitbare Word-Arbeitsvorlage (`materialien/arbeitsvorlage-ausflug.docx`, drei Seiten) und einen Excel-Kostenplan (`materialien/kostenplan-ausflug.xlsx`). Der Kostenplan berechnet Mengen mal Einzelpreise, Summen und verbleibenden Spielraum bei 600 Euro Gesamtbudget und 60 Euro Reserve. Leere Eingaben bleiben leer; bei unvollständigen Preisangaben erscheint ein Hinweis. Die bisherigen MD- und CSV-Quellen werden auf der Aufgabenseite nicht mehr angeboten.

## Ausflugsaufgabe ohne Arbeitsvorlagen

Die Ausflugsaufgabe bietet keine optionalen Downloads mehr an. Eigene Ideen und KI-Brainstorming sind von Beginn an erlaubt. Gefordert sind Kostenkalkulation, Ablaufplan einschließlich Betreuung und Regenalternative, Elterninformation als E-Mail-Entwurf oder DIN-A4-PDF sowie ein Flyer. Eine kurze Prüfnotiz hält Zielvergleich, Quellen, offene Punkte und eine KI-Korrektur fest. Die früheren Vorlagendateien bleiben als Arbeitsstand erhalten und werden nicht mehr verlinkt. Die Förderaufgabe behält ihre erforderliche Faktenbasis.

## Förderaufgabe mit einer PDF-Faktenbasis

Die Förderaufgabe bietet nur die benötigte zweiseitige Faktenbasis zum Download an. Optionale Arbeitsvorlage, separates Finanzierungs-CSV und Originalformular werden nicht mehr angeboten. Der Zeichenzähler bleibt als Werkzeug im Prüfschritt erreichbar. Ergebnis ist ein zusammenhängender, geprüfter Antragsentwurf mit drei Abschnitten und markierten offenen Angaben in einem Dokument. Nur die Endfassung wird festgehalten.

## Freigegebene Veröffentlichung vom 20.10.2026

Die aktuelle Fassung ist zur Veröffentlichung freigegeben: Dokumentanalyse als Aufgabe 1, Ausflugsplanung als Aufgabe 2 und ein zusammenhängender Förderantragsentwurf als Aufgabe 3. Alle Aufgaben sind Einzelarbeit. Die optionalen Vorlagen für Ausflug und Förderantrag werden nicht mehr angeboten; die benötigten PDF-Unterlagen bleiben verfügbar. Die öffentliche Adresse und der bestehende QR-Code bleiben unverändert.
