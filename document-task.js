function documentAnalysisTask(){
  const claims=['Die geplante Ankunft passt sowohl zum Zeitfenster der Zimmerübergabe als auch zum Beginn der enthaltenen Verpflegung.', 'Der Gruppenraum steht am Samstag durchgehend zur Verfügung.', 'Das Haus ist für unsere gesamte Gruppe barrierefrei nutzbar.', 'Für Bettwäsche und Endreinigung sind zusammen 376 Euro zusätzlich zur Grundpauschale einzuplanen.', 'Die besondere Verpflegung ist bereits bestätigt.'];
  return {
    number:'01',compact:true,theme:'peach',checkVersion:'v4',shortTitle:'Dokumente analysieren',materialTitle:'Sieben Seiten. Geprüfte Belege.',
    topic:'Dokumente mit KI prüfen',duration:'20 Minuten + 5 Minuten Austausch',
    title:'Was steht wirklich im Dokument?',
    subtitle:'Prüfe mit KI, was das PDF belegt – und was offenbleibt.',
    copy:`AUFGABE 1 · WAS STEHT WIRKLICH IM DOKUMENT?
20 Minuten Einzelarbeit + 5 Minuten Austausch. Ein fiktives PDF, insgesamt 7 Seiten. Prüfdatum im Szenario: 04.11.2026.

1. Lies Seite 1 selbst und lade das vollständige PDF in dein KI-Tool.
2. Prüfe mit KI diese fünf Aussagen:
${claims.map((s,i)=>`${i+1}. ${s}`).join('\n')}

Je Aussage: belegt / widerlegt / nicht ausreichend beantwortbar, dazu Seite, Abschnitt und kurzer Originalbeleg. Falsches mit Beleg korrigieren, Informationslücken benennen und spätere Änderungen beachten.
3. Stelle drei weitere eigene Fragen. Verlange auch hier Belege oder einen ausdrücklichen Hinweis auf fehlende Informationen.
4. Prüfe jede KI-Antwort im Original samt Kontext, auch Antworten auf Nachfragen und Überarbeitungen. Vergleiche bei mindestens einer Prüfung ältere und spätere Angaben. Notiere Fundstelle, Kontext und dein Ergebnis: bestätigt / korrigiert / offen. Fehler nicht erfinden.

Ergebnis: ein eigenes Dokument mit fünf geprüften Aussagen, drei Fragen samt Antworten und dokumentierten Eigenprüfungen zu allen KI-Antworten. Nutze nur das PDF; schließe keine Lücken mit allgemeinem KI-Wissen. Budget und Anforderungen sind Kontext, keine vollständige Aufenthaltsplanung. Alles ist fiktiv; nichts buchen oder versenden.`,
    claims,
    reality:`<section class="notice reality"><p class="eyebrow">Hier übt ihr eine eigene KI-Kompetenz</p><h2>Eine Antwort braucht einen passenden Beleg.</h2><p>Unterscheidet <strong>belegt, widerlegt und nicht ausreichend beantwortbar</strong>. Die KI darf Lücken nicht mit allgemeinem Wissen schließen. Prüft auch, ob eine spätere Nachricht frühere Angaben geändert hat.</p></section>`,
    briefing:`<p>Du prüfst Unterlagen für einen fiktiven Jugendaufenthalt. <strong>Nutze nur dieses PDF.</strong> Prüfdatum im Szenario: 04.11.2026.</p>`,
    steps:[
      ['PDF vorbereiten','Lies Seite 1 selbst. Lade danach das vollständige PDF in dein KI-Tool.','0–3 Minuten'],
      ['Fünf Aussagen prüfen','Lass jede Aussage einordnen: <strong>belegt / widerlegt / nicht ausreichend beantwortbar.</strong> Verlange Seite, Abschnitt und kurzen Originalbeleg. Falsches korrigieren, Lücken benennen und spätere Änderungen beachten.','3–10 Minuten'],
      ['Drei eigene Fragen stellen','Stelle drei weitere Fragen an das PDF. Verlange Belege oder einen klaren Hinweis, wenn die Information fehlt.','10–14 Minuten'],
      ['Alle KI-Antworten selbst nachlesen','Prüfe jede KI-Antwort im Original samt Kontext – auch Nachfragen und Überarbeitungen. Vergleiche bei mindestens einer Prüfung ältere und spätere Angaben. Notiere Fundstelle und Urteil: <strong>bestätigt / korrigiert / offen.</strong>','14–20 Minuten']
    ],
    results:[
      ['Fünf Aussagen mit Beleg','Jeweils Status, Seite, Abschnitt, kurzer Originalbeleg und gegebenenfalls Korrektur oder genaue Informationslücke.'],
      ['Drei eigene Fragen mit Antworten','Eure Fragen, die KI-Antwort und eine passende Fundstelle oder ein ausdrücklicher Hinweis auf fehlende Informationen.'],
      ['Alle KI-Antworten selbst geprüft','Zu jeder Antwort: KI-Aussage, selbst gelesene Fundstelle und eigenes Prüfergebnis. Mindestens ein Beispiel berücksichtigt unterschiedliche Dokumentstände.']
    ],
    materials:`<p><strong>Ein PDF · insgesamt 7 Seiten.</strong> Seite 1: dein Auftrag im Szenario. Seiten 2–7: Hausunterlagen und spätere E-Mail. Lade die vollständige Datei hoch.</p><div class="download-list">${download('materialien/freizeithaus-bergwiese-angebot-7-seiten.pdf','PDF herunterladen · 7 Seiten','Freizeithaus Bergwiese · fiktive Übungsunterlagen','PDF')}${download('materialien/arbeitsvorlage-dokumentanalyse.md','Arbeitsvorlage herunterladen','Leere Tabellen für deine Ergebnisse · optional','MD')}</div>`,
    extras:`<details><summary>Starthilfe: ein begrenzter Analyseauftrag</summary><div><p class="prompt">Nutze ausschließlich das beigefügte PDF. Prüfe die folgenden fünf Aussagen. Ordne sie als belegt, widerlegt oder nicht ausreichend beantwortbar ein. Nenne Seite, Abschnitt und einen kurzen Originalbeleg. Korrigiere falsche Aussagen mit Beleg und benenne Informationslücken genau. Berücksichtige spätere Änderungen. Ergänze kein allgemeines Wissen. Die Aussagen lauten: …</p><p>Fehlen Seiten im Upload, muss die KI ihre Antwort entsprechend begrenzen.</p></div></details><details><summary>Was ist ein guter Beleg?</summary><div><p>Der Beleg muss die konkrete Aussage tragen. Ein Preis für eine einzelne Leistung belegt keine Gesamtkosten. Lest den Originaltext samt Kontext und prüft den Dokumentstand. Auch ein korrektes Zitat kann später geändert worden sein.</p></div></details><details><summary>Wie stelle ich eine gute eigene Frage?</summary><div><p>Fragt konkret nach einer benötigten Information, einer Bestätigung oder einer zeitlichen Änderung. Verlangt eine Fundstelle. Wiederholt nicht lediglich eine der fünf Vorgaben. Eine gute Antwort kann auch heißen: „Das geht aus dem Dokument nicht hervor.“</p></div></details><details><summary>Für Fortgeschrittene: Fakt, Schlussfolgerung oder Lücke?</summary><div><p>Lasst eine Antwort in belegte Information, Schlussfolgerung und offene Frage zerlegen. Prüft selbst, ob die Schlussfolgerung aus dem Text folgt. Eine Lücke darf nicht als positive Zusage formuliert werden.</p></div></details>`,
    checklist:[
      'Die fünf Aussagen sind als belegt, widerlegt oder nicht ausreichend beantwortbar eingeordnet.',
      'Jede Einordnung hat Seite, Abschnitt und passenden Originalbeleg; Korrekturen und Lücken sind sichtbar.',
      'Ich habe drei eigene konkrete Fragen gestellt und Antworten mit Belegen oder klaren Informationslücken erhalten.',
      'Alle KI-Antworten einschließlich Nachfragen und Überarbeitungen habe ich selbst im Original geprüft und mein Ergebnis dokumentiert.',
      'Mindestens eine Eigenprüfung vergleicht ältere Angaben mit einer späteren Änderung.',
      'Fehlende Informationen wurden nicht durch Vermutungen, Internetrecherche oder allgemeines KI-Wissen ersetzt.'
    ],
    closing:'Zeigt eine geprüfte Aussage samt Originalbeleg und ein Beispiel für eine Informationslücke oder spätere Änderung. Erklärt, was eure eigene Kontrolle gegenüber der KI-Antwort geklärt hat.',
    next:'<a class="button button-dark" href="#ausflug">Weiter zu Aufgabe 2 <span aria-hidden="true">→</span></a>'
  };
}
