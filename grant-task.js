function grantWritingTask(){
  return {
    number:'03',theme:'lilac',checkVersion:'v3',shortTitle:'Förderantragstellung',materialTitle:'Deine Faktenbasis.',materialLabel:'PDF-Faktenbasis',topic:'Eigene Inhalte strukturieren, formulieren & überarbeiten',
    title:'Ein Förderantrag für deine Projektidee.',
    subtitle:'Erstelle mit KI einen zusammenhängenden, geprüften Antragsentwurf auf Grundlage der PDF-Faktenbasis.',
    sectionTitle:'Von der Projektidee zum Antragsentwurf.',
    resultSummary:'Ein zusammenhängender, selbst geprüfter Antragsentwurf mit drei Abschnitten in einem Dokument. Fehlende Angaben sind deutlich markiert.',
    copy:`AUFGABE 3 · EIN FÖRDERANTRAG FÜR DEINE PROJEKTIDEE
20 Minuten Einzelarbeit + 5 Minuten Austausch. Entwickle eine eigene Projektidee und erstelle mit KI einen realistischen, zusammenhängenden Förderantragsentwurf auf Grundlage der PDF-Faktenbasis. Prüfe ihn selbst und überarbeite unklare oder unpassende Stellen mit der KI.

Rahmen: Fiktiver Jugendhilfeträger Jugendwerk Miteinander München e. V.; 20 Jugendliche (12–17 Jahre), drei Termine in München innerhalb von höchstens acht Wochen. Thema, Projektname, Aktivitäten, pädagogisches Ziel und Mitgestaltung wählst du. Die Musterfinanzierung ist vorbereitet: 2.000 Euro Gesamtkosten, 400 Euro gesicherte Eigenmittel einschließlich 200 Euro Spende und 1.600 Euro beantragte, noch nicht bewilligte Förderung. Alles sind Übungsvorgaben.

1. Halte deine Projektidee kurz fest: Bedarf, Zielgruppe, Ziel, Aktivitäten, Beteiligung der Jugendlichen und Erfolgskontrolle. Beachte Ressourcen, Grenzen und offene Angaben.
2. Formuliere mit KI einen einzigen Antragsentwurf mit drei zusammenpassenden Abschnitten: Hintergrund und Zielgruppe (höchstens 600 Zeichen), Projektziel und Ablauf (höchstens 900 Zeichen), Beteiligung und Erfolgskontrolle (höchstens 600 Zeichen). Alle Limits gelten inklusive Leerzeichen und sind Workshopvorgaben.
3. Lies den Entwurf selbst: Sind Bedarf, Wirkung, Jugendbeteiligung, Aktivitäten und Erfolgskontrolle konkret und realistisch? Besprich unklare oder unpassende Stellen mit der KI und überarbeite sie.
4. Prüfe jede Aussage gegen deine eigenen Inhalte und die Faktenbasis. Erfinde keine Erfahrungen, Wirkungsnachweise, Zahlen oder Partnerzusagen. Markiere fehlende Informationen. Prüfe Zeichenlängen und ob alle drei Abschnitte zusammenpassen.

Ergebnis: ein zusammenhängender, geprüfter Antragsentwurf in einem Dokument, mit markierten offenen Angaben. Halte nur die Endfassung fest.

Workshop-Simulation: nichts unterschreiben, bei der Stiftung hochladen oder einreichen. Keine realen Bank-, Steuer- oder Personendaten verwenden. Eine eigene Gesamtkalkulation, PDF-Analyse oder Förderrecherche ist nicht gefordert.`,
    briefing:`<p>Du entwickelst ein Jugendprojekt für den fiktiven <strong>Jugendwerk Miteinander München e. V.</strong> Thema, Name, Aktivitäten, pädagogisches Ziel und Mitgestaltung wählst du.</p><div class="conditions"><div class="condition"><span>Zielgruppe</span><strong>20 Jugendliche · 12–17 Jahre</strong></div><div class="condition"><span>Umfang</span><strong>3 Termine · München · bis 8 Wochen</strong></div><div class="condition"><span>Musterfinanzierung · vorbereitet</span><strong>2.000 € Kosten · 400 € Eigenmittel</strong></div><div class="condition"><span>Beantragte Förderung</span><strong>1.600 € · nicht bewilligt</strong></div></div><p>Die 400 € gesicherten Eigenmittel enthalten 200 € Spende. Nutze die Faktenbasis; keine eigene Gesamtkalkulation, Förderrecherche oder PDF-Analyse nötig. <strong>Simulation:</strong> nichts unterschreiben oder bei der Stiftung hochladen / einreichen; keine realen Bank-, Steuer- oder Personendaten.</p>`,
    steps:[
      ['Projektidee kurz festhalten', 'Notiere deinen konkreten Bedarf, Zielgruppe, Ziel, Aktivitäten, Mitgestaltung und Erfolgskontrolle. Beachte Ressourcen, Grenzen und offene Angaben.', '0–4 Minuten'],
      ['Mit KI einen Antragsentwurf schreiben', 'Gib der KI deine Idee und die Faktenbasis. Formuliere <strong>einen zusammenhängenden Entwurf mit drei Abschnitten</strong> für ein Stiftungsgremium. Fehlende Inhalte soll die KI erfragen. Die Workshoplimits gelten inklusive Leerzeichen:', '4–9 Minuten'],
      ['Selbst lesen & mit KI verbessern', 'Sind <strong>Bedarf, Wirkung, Jugendbeteiligung, Aktivitäten und Erfolgskontrolle</strong> konkret und realistisch? Besprich unklare oder unpassende Stellen mit der KI und überarbeite sie.', '9–15 Minuten'],
      ['Endfassung prüfen & festhalten', 'Prüfe jede Aussage gegen deine Idee und die Faktenbasis. Keine Erfahrungen, Wirkungsnachweise, Zahlen oder Partnerzusagen erfinden; fehlende Angaben markieren. Prüfe die Zeichen mit dem <a href="materialien/zeichencounter.html" target="_blank" rel="noopener">Zeichenzähler</a> oder deinem Textprogramm und speichere den gesamten Entwurf in einem Dokument.', '15–20 Minuten']
    ],
    stepDetails: {
      1: `<ul><li><strong>Hintergrund und Zielgruppe:</strong> höchstens 600 Zeichen.</li><li><strong>Projektziel und Ablauf:</strong> höchstens 900 Zeichen.</li><li><strong>Beteiligung und Erfolgskontrolle:</strong> höchstens 600 Zeichen.</li></ul>`
    },
    materials:`<p>Diese PDF-Datei brauchst du für die Aufgabe. Sie enthält den fiktiven Träger, den Förderkontext, die vorbereitete Finanzierung und die Schreibkriterien.</p><div class="download-list">${download('materialien/uebungsdossier-foerderantrag.pdf?v=43985fd9d7','PDF-Faktenbasis herunterladen · 2 Seiten','Alle vorbereiteten Informationen für deinen Antragsentwurf','PDF')}</div><p class="source-note">Musterbudget, Gliederung, Kriterien und Zeichenlimits sind Workshopvorgaben, keine Förderbedingungen. Die Stiftung ist keine Partnerin dieses Workshops.</p>`,
    extras:`<details><summary>Starthilfe für den Antragsentwurf</summary><div><p class="prompt">Meine Projektidee: …
Der vorgegebene Rahmen aus der Faktenbasis: …
Hilf mir, daraus einen zusammenhängenden Förderantragsentwurf für ein Stiftungsgremium zu erstellen. Gliedere ihn in Hintergrund und Zielgruppe (max. 600 Zeichen), Projektziel und Ablauf (max. 900) sowie Beteiligung und Erfolgskontrolle (max. 600). Alle Limits inklusive Leerzeichen. Nutze nur meine Inhalte und die Faktenbasis. Frage nach, wenn Wesentliches fehlt, und erfinde keine Nachweise oder Zusagen.</p></div></details><details><summary>Wie verbessere ich einen unklaren Entwurf?</summary><div><p>Benenne konkret, was fehlt oder nicht stimmt. Zum Beispiel: „Der Ablauf ist zu ungenau. Beschreibe anhand meiner Idee, was an den drei Terminen passiert.“ Lies die neue Fassung erneut und übernimm nur, was fachlich passt.</p></div></details>`,
    checklist:[
      'Der Antragsentwurf beschreibt meine eigene Projektidee und passt zum vorbereiteten Rahmen.',
      'Alle drei Abschnitte stehen in einem Dokument und passen inhaltlich zusammen.',
      'Ich habe den Entwurf selbst gelesen und unklare oder unpassende Stellen mit KI überarbeitet.',
      'Jede Aussage ist durch meine Inhalte oder die Faktenbasis gedeckt; Nachweise und Zusagen wurden nicht erfunden.',
      'Die Abschnitte halten 600 / 900 / 600 Zeichen inklusive Leerzeichen ein.',
      'Fehlende Informationen sind im Antragsentwurf deutlich markiert.'
    ],
    closing:'Stelle deine Projektidee kurz vor. Was hast du im KI-Entwurf verbessert und welche Frage bleibt noch offen?',
    next:'<a class="button button-dark" href="#start">Zur Übersicht <span aria-hidden="true">→</span></a>'
  };
}
