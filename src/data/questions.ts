import { Question } from '../types/quiz';

export const INITIAL_QUESTIONS: Question[] = [
  {
    id: 1,
    bereich: 1,
    frage: 'Was bedeutet Führung?',
    optionen: [
      {
        text: 'Zielgerichtete soziale Beeinflussung von Menschen zur Erreichung gemeinsamer Aufgaben und Unternehmensziele.',
        korrekt: true,
        erklaerung: 'Führung wird in der Managementlehre als zielgerichtete soziale Einflussnahme definiert, um Mitarbeiter zur Zielerreichung zu bewegen.',
      },
      {
        text: 'Ausschließliche formale Ausübung statischer Weisungsbefugnis über hierarchisch untergeordnete Planstellen.',
        korrekt: false,
        erklaerung: 'Dies beschreibt rein bürokratische Weisungsmacht, blendet aber Beziehungsgestaltung, Motivation und Zielausrichtung aus.',
      },
      {
        text: 'Reine operative Ablaufkoordination von Sachressourcen und Terminen ohne zwischenmenschliche Interaktion.',
        korrekt: false,
        erklaerung: 'Hierbei handelt es sich um bloßes Sach- und Prozessmanagement; Führung erfordert immer zwischenmenschliche Beziehungsarbeit.',
      },
      {
        text: 'Spontane situative Problemlösung im Tagesgeschäft ohne übergeordnete Zielvereinbarung oder Strategiebezug.',
        korrekt: false,
        erklaerung: 'Dies beschreibt ad-hoc Krisenmanagement, aber keine kontinuierliche zielgerichtete Führungsarbeit.',
      }
    ],
    pruefen: false,
  },
  {
    id: 2,
    bereich: 1,
    frage: 'Was sind die Aufgaben einer Führungskraft?',
    optionen: [
      {
        text: 'Operative Fachaufgaben stets persönlich vorrangig erledigen und das Team als Zuarbeiter für Einzeltätigkeiten einsetzen.',
        korrekt: false,
        erklaerung: 'Eine Führungskraft muss führen und befähigen, statt sich in operativen Fachaufgaben zu verstricken.',
      },
      {
        text: 'Ziele vereinbaren, organisieren, entscheiden, kontrollieren sowie Mitarbeiter gezielt fördern und entwickeln.',
        korrekt: true,
        erklaerung: 'Diese Kernaufgaben entsprechen dem klassischen Management-Kanon wirksamer Führung (u. a. nach Fredmund Malik).',
      },
      {
        text: 'Sämtliche Arbeitsabläufe standardisiert vorschreiben und jede Abweichung im Team sofort sanktionieren.',
        korrekt: false,
        erklaerung: 'Starre Einengung und permanente Sanktionen ersticken Eigenverantwortung und widersprechen wirksamer Führung.',
      },
      {
        text: 'Ausschließlich langfristige Zukunftsvisionen formulieren und die operative Zielsteuerung komplett unbegleitet lassen.',
        korrekt: false,
        erklaerung: 'Visionen allein genügen nicht; wirksame Führung erfordert auch Organisation, Entscheidung und Ergebniskontrolle.',
      }
    ],
    pruefen: false,
  },
  {
    id: 3,
    bereich: 1,
    frage: 'Was ist der Unterschied zwischen Führungsstil und Führungsverhalten?',
    optionen: [
      {
        text: 'Führungsstil beschreibt das spontane Reagieren im Einzelfall, während Führungsverhalten die unveränderliche Haltung meint.',
        korrekt: false,
        erklaerung: 'Hier wurden die Begriffe vertauscht: Der Stil ist das stabile Muster, das Verhalten die konkrete Einzelsituation.',
      },
      {
        text: 'Führungsstil bezieht sich nur auf Top-Manager, während Führungsverhalten ausschließlich für Teamleiter relevant ist.',
        korrekt: false,
        erklaerung: 'Beide Konzepte gelten für jede Führungsebene, vom operativen Teamleiter bis zum Vorstand.',
      },
      {
        text: 'Führungsstil ist das zeitlich überdauernde Grundmuster, während Führungsverhalten das konkrete situative Handeln darstellt.',
        korrekt: true,
        erklaerung: 'Führungsstil meint die habitualisierte Grundhaltung; Führungsverhalten die situative Ausprägung im Alltag.',
      },
      {
        text: 'Führungsstil ist angeboren und unveränderbar, während Führungsverhalten beliebig täglich gewechselt werden kann.',
        korrekt: false,
        erklaerung: 'Führungsstile sind erlern- und entwickelbar, während Verhalten durch Werte und situative Reflexion gesteuert wird.',
      }
    ],
    pruefen: false,
  },
  {
    id: 4,
    bereich: 1,
    frage: 'Wie heißen die 7 Grundsätze der Führung nach Malik?',
    optionen: [
      {
        text: 'Zielvereinbarung, Delegation, permanente Leistungskontrolle, Mitarbeitergespräche, Budgetdisziplin, Prozessoptimierung und Risikovermeidung.',
        korrekt: false,
        erklaerung: 'Dies sind klassische Management-Aufgaben und Kontrollwerkzeuge, jedoch nicht Maliks verhaltensleitende Grundsätze wirksamer Führung.',
      },
      {
        text: 'Planen, Organisieren, Entscheiden, Kontrollieren, Entwickeln, Kommunizieren und Koordinieren aller operativen Arbeitsprozesse.',
        korrekt: false,
        erklaerung: 'Dies beschreibt klassische Managementfunktionen (Aufgaben des Managers), keine Grundsätze im Sinne der St. Galler Managementlehre.',
      },
      {
        text: 'Agilität leben, Hierarchien abbauen, Konsens anstreben, Selbstorganisation fördern, Iterationen planen, Transparenz sichern und Feedback geben.',
        korrekt: false,
        erklaerung: 'Dies sind Prinzipien agiler Arbeitsweisen, keine Management-Grundsätze nach Malik.',
      },
      {
        text: 'Resultatorientierung, Beitrag zum Ganzen, Konzentration auf Weniges, Stärken nutzen, Vertrauen schaffen, Positiv denken und Sinn vermitteln.',
        korrekt: true,
        erklaerung: 'Fredmund Malik formuliert diese Grundsätze wirksamer Führung (in vielen Weiterbildungen um «Sinn vermitteln» erweitert).',
      }
    ],
    pruefen: false,
  },
  {
    id: 5,
    bereich: 1,
    frage: 'Welche Arten der Verantwortung kennen Sie?',
    optionen: [
      {
        text: 'Handlungs- bzw. Ausführungsverantwortung, Ergebnis- bzw. Sachverantwortung sowie Führungs- bzw. Leitungsverantwortung.',
        korrekt: true,
        erklaerung: 'Diese klassische Dreiteilung trennt sauber zwischen Aufgabendurchführung, Sachzielerreichung und Leitungsverantwortung.',
      },
      {
        text: 'Disziplinarische Vorgesetztenverantwortung, gesellschaftliche Unternehmensverantwortung und persönliche Ethikverantwortung.',
        korrekt: false,
        erklaerung: 'Dies vermischt arbeitsrechtliche Hierarchiebegriffe mit Corporate Social Responsibility (CSR) und individueller Ethik.',
      },
      {
        text: 'Strategische Marktverantwortung, operative Budgetverantwortung und formale Freigabeverantwortung im Unternehmen.',
        korrekt: false,
        erklaerung: 'Dies sind betriebswirtschaftliche Funktionsbereiche, nicht die klassischen Führungsverantwortungsarten.',
      },
      {
        text: 'Prozessverantwortung, agile Projektverantwortung und zwischenmenschliche Fürsorgeverantwortung im Team.',
        korrekt: false,
        erklaerung: 'Dies beschreibt funktionale Rollenprofile im Projekt- und Prozessmanagement.',
      }
    ],
    pruefen: false,
  },
  {
    id: 6,
    bereich: 1,
    frage: 'Was macht eine effektive Führungskraft aus?',
    optionen: [
      {
        text: 'Sie erledigt operative Fachaufgaben stets persönlich und kontrolliert jeden einzelnen Handlungsschritt engmaschig.',
        korrekt: false,
        erklaerung: 'Dies kennzeichnet schädliches Mikromanagement und überlastet die Führungskraft, statt Wirksamkeit zu schaffen.',
      },
      {
        text: 'Sie fokussiert auf Resultate, nutzt vorhandene Stärken, konzentriert sich auf Wesentliches und schafft ein Umfeld des Vertrauens.',
        korrekt: true,
        erklaerung: 'Effektivität bedeutet nach Drucker und Malik, die richtigen Dinge zu tun: Stärkenfokus, Resultate und Vertrauen.',
      },
      {
        text: 'Sie meidet unpopuläre Leistungsentscheidungen und stellt Harmonie und persönliche Beliebtheit über die Aufgabenerfüllung.',
        korrekt: false,
        erklaerung: 'Reines Harmoniestreben («People Pleasing») vernachlässigt Sachziele und schwächt die Orientierung im Team.',
      },
      {
        text: 'Sie steuert die Mitarbeiter ausschließlich über monetäre Anreize und verzichtet auf Sinnvermittlung und Feedback.',
        korrekt: false,
        erklaerung: 'Reine extrinsische Reiz-Reaktions-Steuerung erzeugt Dienst nach Vorschrift, aber keine nachhaltige Wirksamkeit.',
      }
    ],
    pruefen: false,
  },
  {
    id: 7,
    bereich: 2,
    frage: 'Was versteht man unter Menschenbilder und welche Arten kennen Sie?',
    optionen: [
      {
        text: 'Die vier Reifegrade von Mitarbeitern im situativen Führungsmodell zur Festlegung von Lenkung und Unterstützung.',
        korrekt: false,
        erklaerung: 'Reifegrade beschreiben die situative Aufgabenkompetenz, sind aber keine grundlegenden Menschenbilder.',
      },
      {
        text: 'Die Unterscheidung von Persönlichkeitsstilen anhand von Aufgaben- und Mitarbeiterorientierung im Verhaltensgitter.',
        korrekt: false,
        erklaerung: 'Das Verhaltensgitter beschreibt Führungsstile von Managern, keine Menschenbilder der geführten Mitarbeiter.',
      },
      {
        text: 'Grundlegende Annahmen über Wesen, Motive und Verhalten von Menschen, wie Theorie X/Y oder die Typologien von Edgar Schein.',
        korrekt: true,
        erklaerung: 'Menschenbilder sind handlungsleitende Grundannahmen über menschliche Arbeitsmotivation und Leistungsbereitschaft.',
      },
      {
        text: 'Die Einteilung von Führungskräften nach den klassischen Herrschaftsformen patriarchalisch, charismatisch und bürokratisch.',
        korrekt: false,
        erklaerung: 'Dies bezieht sich auf Max Webers Herrschaftssoziologie, nicht auf psychologische Menschenbilder.',
      }
    ],
    pruefen: false,
  },
  {
    id: 8,
    bereich: 2,
    frage: 'Von wem ist die Theorie X und Theorie Y?',
    optionen: [
      {
        text: 'Kurt Lewin, der Führungsstile anhand von Gruppenexperimenten mit Jugendlichen empirisch erforschte.',
        korrekt: false,
        erklaerung: 'Kurt Lewin begründete die klassische Dreiteilung autoritär, demokratisch und Laissez-faire.',
      },
      {
        text: 'Frederick Winslow Taylor, der diese Einteilung im Rahmen der wissenschaftlichen Betriebsführung zur Arbeitszerlegung schuf.',
        korrekt: false,
        erklaerung: 'Taylor begründete das Scientific Management, nicht die expliziten Theorien X und Y.',
      },
      {
        text: 'Max Weber, der diese Klassifikation zur Analyse legitimer Herrschaftsformen und bürokratischer Organisationen entwarf.',
        korrekt: false,
        erklaerung: 'Max Weber formulierte Herrschaftsformen (charismatisch, traditionell, legal-rational).',
      },
      {
        text: 'Douglas McGregor, der diese beiden gegensätzlichen Menschenbilder 1960 in «The Human Side of Enterprise» formulierte.',
        korrekt: true,
        erklaerung: 'Douglas McGregor entwickelte Theorie X (negatives Menschenbild) und Theorie Y (positives Menschenbild).',
      }
    ],
    pruefen: false,
  },
  {
    id: 9,
    bereich: 2,
    frage: 'Wie können Sie die Theorie X erklären?',
    optionen: [
      {
        text: 'Der Mensch ist von Natur aus träge, meidet Verantwortung und muss durch Zwang, Kontrolle und extrinsische Anreize gelenkt werden.',
        korrekt: true,
        erklaerung: 'Theorie X geht von einer angeborenen Arbeitsunlust und dem Bedürfnis nach straffer äußerer Lenkung aus.',
      },
      {
        text: 'Der Mensch sucht von Natur aus Sinn, entfaltet kreative Potenziale eigenständig und benötigt primär Gestaltungsfreiräume.',
        korrekt: false,
        erklaerung: 'Dies beschreibt das optimistische Menschenbild der Theorie Y.',
      },
      {
        text: 'Der Mitarbeiter ist vorrangig durch soziale Beziehungen motiviert und stellt Gruppenzugehörigkeit über monetäre Anreize.',
        korrekt: false,
        erklaerung: 'Dies entspricht dem Menschenbild des «Social Man» aus den Hawthorne-Studien.',
      },
      {
        text: 'Der Mitarbeiter besitzt vielschichtige, wandelbare Motive, die sich im Lebensverlauf situationsabhängig kontinuierlich verändern.',
        korrekt: false,
        erklaerung: 'Dies beschreibt das differenzierte Menschenbild des «Complex Man» nach Edgar Schein.',
      }
    ],
    pruefen: false,
  },
  {
    id: 10,
    bereich: 2,
    frage: 'Wie können Sie die Theorie Y erklären?',
    optionen: [
      {
        text: 'Der Mitarbeiter arbeitet nur bei lückenloser Überwachung und verlangt nach engmaschigen detaillierten Vorgaben.',
        korrekt: false,
        erklaerung: 'Dies ist die Kernaussage des pessimistischen Menschenbilds der Theorie X.',
      },
      {
        text: 'Der Mensch sieht Arbeit als Quelle der Zufriedenheit, ist lern- und leistungsbereit und übernimmt bei passenden Bedingungen gerne Verantwortung.',
        korrekt: true,
        erklaerung: 'Theorie Y nimmt an, dass Menschen intrinsisch motiviert, kreativ und eigenverantwortlich handeln wollen.',
      },
      {
        text: 'Der Mitarbeiter strebt rein nach Maximierung von Freizeit und meidet jede zusätzliche geistige Anstrengung.',
        korrekt: false,
        erklaerung: 'Dies spiegelt die Annahme der Theorie X wider, nicht der Theorie Y.',
      },
      {
        text: 'Menschliche Leistung hängt ausschließlich von monetären Prämien ab, zwischenmenschliche Werte spielen keine Rolle.',
        korrekt: false,
        erklaerung: 'Dies beschreibt den Homo Oeconomicus (Rational-Economic Man), nicht Theorie Y.',
      }
    ],
    pruefen: false,
  },
  {
    id: 11,
    bereich: 2,
    frage: 'Wie erklären Sie den Führungskreis der Theorie X und Y?',
    optionen: [
      {
        text: 'Als hierarchischen Kreislauf, bei dem Mitarbeiter je nach Betriebszugehörigkeit automatisch von Theorie X zu Theorie Y aufsteigen.',
        korrekt: false,
        erklaerung: 'Der Führungskreis ist kein Beförderungsmodell, sondern ein sozialpsychologischer Wirkungskreislauf.',
      },
      {
        text: 'Als zyklisches Wechselmodell, in dem die Führungskraft quartalsweise zwischen autoritärer und partizipativer Führung wechselt.',
        korrekt: false,
        erklaerung: 'Der Kreis meint keine willkürlichen Wechsel, sondern die psychologische Rückkopplungsschleife von Annahmen und Verhalten.',
      },
      {
        text: 'Als selbsterfüllende Prophezeiung: Das Menschenbild prägt das Führungsverhalten, worauf Mitarbeiter spiegelbildlich reagieren und die Annahme bestätigen.',
        korrekt: true,
        erklaerung: 'Misstrauen führt zu Kontrollen, was Passivität erzeugt; Vertrauen führt zu Freiräumen, was Initiative weckt (Pygmalion-Effekt).',
      },
      {
        text: 'Als Feedback-Schleife zur rein rechnerischen Anpassung von variablen Gehaltsbestandteilen an den gemessenen Fleiß.',
        korrekt: false,
        erklaerung: 'Hier geht es um psychologische Verhaltensdynamiken, nicht um Vergütungssysteme.',
      }
    ],
    pruefen: false,
  },
  {
    id: 12,
    bereich: 2,
    frage: 'Was ist das Menschenbild der Z-Theorie?',
    optionen: [
      {
        text: 'Fokus auf kurzfristige Projektarbeit, radikale Eigenverantwortung und vollständige emotionale Unabhängigkeit vom Arbeitgeber.',
        korrekt: false,
        erklaerung: 'Theorie Z betont gerade das Gegenteil: langfristige Bindung, Loyalität und kollektives Wir-Gefühl.',
      },
      {
        text: 'Betrachtung des Mitarbeiters als rein rationalen Einzelkämpfer, der nur unter formalem Druck vertragliche Pflichten erfüllt.',
        korrekt: false,
        erklaerung: 'Dies entspricht Theorie X bzw. Taylorismus, keinesfalls der Z-Theorie.',
      },
      {
        text: 'Annahme, dass Mitarbeiter am wirksamsten durch algorithmische Zielvorgaben und lückenloses digitales Monitoring gelenkt werden.',
        korrekt: false,
        erklaerung: 'Theorie Z basiert auf Vertrauen, sozialer Verbundenheit und kollektiver Entscheidungsfindung, nicht auf digitaler Überwachung.',
      },
      {
        text: 'Geprägt von Loyalität, kollektiver Verantwortung, hoher Identifikation und langfristiger Bindung zwischen Mitarbeiter und Organisation (nach Ouchi).',
        korrekt: true,
        erklaerung: 'William Ouchi beschreibt mit Theorie Z ein ganzheitliches, partnerschaftliches Organisationsmodell (angelehnt an japanische Unternehmenskultur).',
      }
    ],
    pruefen: false,
  },
  {
    id: 13,
    bereich: 2,
    frage: 'Wie können Sie die Typologie der Menschenbilder nach Edgar Schein erklären?',
    optionen: [
      {
        text: 'Einteilung in vier Grundtypen: Rational-ökonomischer Mensch, Sozialer Mensch, Selbstverwirklichender Mensch und Komplexer Mensch.',
        korrekt: true,
        erklaerung: 'Edgar Schein differenziert diese 4 Menschenbilder, die den historischen Wandel der Organisationspsychologie widerspiegeln.',
      },
      {
        text: 'Klassifikation nach den vier Verhaltenstypen Dominant, Initiativ, Stetig und Gewissenhaft auf Basis von Fragebögen.',
        korrekt: false,
        erklaerung: 'Dies beschreibt das DISG-Persönlichkeitsmodell, nicht Edgar Scheins Menschenbilder.',
      },
      {
        text: 'Unterscheidung von Managern anhand der Achsen Aufgabenorientierung, Beziehungsorientierung und situative Effektivität.',
        korrekt: false,
        erklaerung: 'Dies beschreibt Reddins 3-D-Führungsmodell, keine Menschenbilder von Edgar Schein.',
      },
      {
        text: 'Gliederung von menschlichen Motiven nach den drei angeborenen Grundbedürfnissen Leistung, Macht und soziale Bindung.',
        korrekt: false,
        erklaerung: 'Dies entspricht David McClellands Theorie der erlernten Bedürfnisse.',
      }
    ],
    pruefen: false,
  },
  {
    id: 14,
    bereich: 2,
    frage: 'Welche Eigenheiten hat der rational-ökonomische Mensch nach Edgar Schein?',
    optionen: [
      {
        text: 'Er stellt soziale Beziehungen und Teamzusammenhalt stets über das eigene Gehalt und strebt vor allem nach Gruppenharmonie.',
        korrekt: false,
        erklaerung: 'Dies kennzeichnet den «Social Man», nicht den rational-ökonomischen Menschen.',
      },
      {
        text: 'Er handelt zweckrational zur Maximierung des eigenen Nutzens, wird durch finanzielle Anreize motiviert und agiert im Betrieb eher passiv.',
        korrekt: true,
        erklaerung: 'Der «Rational-Economic Man» (Homo Oeconomicus) wird primär materiell gesteuert und verhält sich organisationell reaktiv.',
      },
      {
        text: 'Er strebt vor allem nach Autonomie, Sinnfindung und fachlicher Selbstentfaltung bei völliger Gleichgültigkeit gegenüber Bezahlung.',
        korrekt: false,
        erklaerung: 'Dies beschreibt den «Self-actualizing Man» (selbstverwirklichenden Menschen).',
      },
      {
        text: 'Seine Motive sind hochgradig wandlungsfähig und passen sich kontinuierlich neuen situativen Bedingungen an.',
        korrekt: false,
        erklaerung: 'Dies charakterisiert den «Complex Man».',
      }
    ],
    pruefen: false,
  },
  {
    id: 15,
    bereich: 2,
    frage: 'Welche Unterscheidung der Menschenbilder kennen Sie im Zeitablauf?',
    optionen: [
      {
        text: 'Kontinuierliche Ablösung intrinsischer Selbstmotivation durch rein monetäre Akkordlohnsysteme in der modernen Wissensgesellschaft.',
        korrekt: false,
        erklaerung: 'Akkordlöhne prägten das frühe Industriezeitalter, während heute Sinnstiftung und Autonomie im Vordergrund stehen.',
      },
      {
        text: 'Entwicklung vom selbstorganisierten agilen Teammitglied des 19. Jahrhunderts zum patriarchalisch geführten Fabrikarbeiter der Gegenwart.',
        korrekt: false,
        erklaerung: 'Die historische Entwicklung verlief umgekehrt: von autoritärer Hierarchie hin zu partizipativen und agilen Ansätzen.',
      },
      {
        text: 'Historischer Wandel vom rational-ökonomischen Menschen über den sozialen und selbstverwirklichenden Menschen bis hin zum komplexen Menschen.',
        korrekt: true,
        erklaerung: 'Dieser Verlauf spiegelt die Entwicklung von Taylorismus über Human-Relations bis zur modernen Organisationspsychologie wider.',
      },
      {
        text: 'Wandel vom ausschließlich individualistischen Einzelkämpfer der Frühzeit zum völlig unselbstständigen Kollektivarbeiter.',
        korrekt: false,
        erklaerung: 'Die moderne Arbeitswelt fördert sowohl Teamkollaboration als auch persönliche Eigenverantwortung.',
      }
    ],
    pruefen: false,
  },
  {
    id: 16,
    bereich: 2,
    frage: 'Welche Eigenschaften kennen Sie von der Generation Y?',
    optionen: [
      {
        text: 'Bedingungslose Unterordnung unter starre Hierarchien, bewusster Verzicht auf Freizeit und Ablehnung digitaler Arbeitsmittel.',
        korrekt: false,
        erklaerung: 'Dies steht im diametralen Gegensatz zu den empirisch beschriebenen Werten der Generation Y.',
      },
      {
        text: 'Vollständige Ablehnung von Teamarbeit und konsequente Bevorzugung isolierter Einzelarbeit ohne jede Rückmeldung.',
        korrekt: false,
        erklaerung: 'Generation Y ist stark kollaborativ geprägt und legt großen Wert auf regelmäßiges Feedback und Teamkultur.',
      },
      {
        text: 'Streben nach lebenslanger Betriebszugehörigkeit im selben Großkonzern unter strikter Beibehaltung reiner Anwesenheitskultur.',
        korrekt: false,
        erklaerung: 'Generation Y schätzt Agilität, Mobilität, Homeoffice und persönliche Weiterentwicklung über starre Betriebstreue.',
      },
      {
        text: 'Hinterfragen des Sinns («Why?»), Streben nach Work-Life-Integration, Digitalaffinität sowie Wunsch nach Transparenz und Feedback.',
        korrekt: true,
        erklaerung: 'Die Generation Y (Millennials) zeichnet sich durch Sinnsuche, Flexibilität, Partizipation und digitale Vernetzung aus.',
      }
    ],
    pruefen: false,
  },
  {
    id: 17,
    bereich: 2,
    frage: 'Was ist der Unterschied der «Generation Y» zu den «Baby Boomern»?',
    optionen: [
      {
        text: 'Baby Boomer priorisieren Pflichtbewusstsein, Loyalität und Status («Leben, um zu arbeiten»), Generation Y sucht Sinn, Flexibilität und Partizipation.',
        korrekt: true,
        erklaerung: 'Baby Boomer definieren sich stark über Fleiß und Status; Generation Y strebt nach Vereinbarkeit («Arbeiten, um zu leben») und Sinn.',
      },
      {
        text: 'Baby Boomer arbeiten primär in agilen Netzwerken ohne Hierarchie, während Generation Y auf formalen Befehlswegen beharrt.',
        korrekt: false,
        erklaerung: 'Die Generation Y prägte agile Netzwerke, während Baby Boomer in klassisch hierarchischen Strukturen sozialisiert wurden.',
      },
      {
        text: 'Baby Boomer lehnen materielle Vergütung vollkommen ab, während Generation Y ausschließlich durch kurzfristige Boni motiviert wird.',
        korrekt: false,
        erklaerung: 'Materielle Sicherheit und Aufstieg waren für Baby Boomer zentral; Generation Y gewichtet Freiräume und Sinn oft höher als reine Boni.',
      },
      {
        text: 'Es bestehen keinerlei arbeitspsychologische Unterschiede, da beide Kohorten unter denselben soziokulturellen Einflüssen aufwuchsen.',
        korrekt: false,
        erklaerung: 'Wirtschaftswunder, Digitalisierung und gesellschaftlicher Wandel prägten die Generationen grundlegend unterschiedlich.',
      }
    ],
    pruefen: false,
  },
  {
    id: 18,
    bereich: 3,
    frage: 'Was verstehen Sie unter Führungsstil und Führungsverhalten?',
    optionen: [
      {
        text: 'Führungsstil beschreibt das situative, kurzfristige Reaktionsmuster, während Führungsverhalten die feste Persönlichkeitsdisposition umfasst.',
        korrekt: false,
        erklaerung: 'Hier liegt eine Begriffsumkehr vor: Der Stil ist das übergeordnete Muster, das Verhalten die konkrete situative Ausprägung.',
      },
      {
        text: 'Führungsstil ist das grundlegende, relativ stabile Handlungsmuster, während Führungsverhalten das dynamische, situationsbezogene Agieren meint.',
        korrekt: true,
        erklaerung: 'Der Führungsstil bildet die überdauernde Grundhaltung, während das Führungsverhalten im konkreten Einzelfall sichtbar wird.',
      },
      {
        text: 'Führungsstil und Führungsverhalten sind in der Managementtheorie vollkommen synonym und beschreiben dieselbe unveränderliche Verhaltensdimension.',
        korrekt: false,
        erklaerung: 'Die Führungsforschung unterscheidet klar zwischen habituellem Stil (Muster) und beobachtbarem Verhalten in der Situation.',
      },
      {
        text: 'Führungsstil bezieht sich ausschließlich auf die strategische Zielausrichtung, während Führungsverhalten die operative Fachaufsicht meint.',
        korrekt: false,
        erklaerung: 'Beide Begriffe betreffen das Führen von Menschen über alle Aufgabenbereiche hinweg, nicht nur Strategie vs. Fachaufsicht.',
      }
    ],
    pruefen: false,
  },
  {
    id: 19,
    bereich: 3,
    frage: 'Welche Dimensionen der Führungsstile kennen Sie?',
    optionen: [
      {
        text: 'Hierarchische Dimensionen (direkte vs. indirekte Führung), laterale Dimensionen und funktionale Dimensionen im Unternehmen.',
        korrekt: false,
        erklaerung: 'Dies sind Organisationsebenen von Führung, nicht die klassischen theoretischen Dimensionen von Führungsstilmodellen.',
      },
      {
        text: 'Transaktionale Steuerungsdimensionen, transformationale Visionsdimensionen und disziplinarische Kontrolldimensionen.',
        korrekt: false,
        erklaerung: 'Dies beschreibt spezifische Führungskonzepte (Bass/Burns), nicht die formale Systematik der Führungsstildimensionen.',
      },
      {
        text: 'Eindimensionale Ansätze (Entscheidungsgrad), zweidimensionale Modelle (Aufgaben- und Mitarbeiterorientierung) sowie mehrdimensionale Modelle (Effektivität/Situation).',
        korrekt: true,
        erklaerung: 'Die Führungslehre unterscheidet Stilmodelle nach der Anzahl ihrer Dimensionen: 1D (z. B. Lewin), 2D (Blake/Mouton) und 3D (Reddin).',
      },
      {
        text: 'Personenbezogene Eigenschaften, aufgabenbezogene Zielvereinbarungen und gruppendynamische Interaktionsmuster.',
        korrekt: false,
        erklaerung: 'Dies sind allgemeine Einflussfaktoren der Führung, keine Klassifikation der Führungsstildimensionen.',
      }
    ],
    pruefen: false,
  },
  {
    id: 20,
    bereich: 3,
    frage: 'Welche eindimensionalen Führungsstile von Kurt Lewin kennen Sie?',
    optionen: [
      {
        text: 'Transaktionaler, transformationaler, charismatischer und visionärer Führungsstil im Management.',
        korrekt: false,
        erklaerung: 'Dies sind moderne transformationale Führungsmodelle (u. a. Bass, Burns), nicht Lewins klassische Stile.',
      },
      {
        text: 'Patriarchalischer, bürokratischer, autokratischer und traditioneller Führungsstil in Unternehmen.',
        korrekt: false,
        erklaerung: 'Dies sind Webers soziologische Herrschaftsformen, nicht Lewins Führungsstile.',
      },
      {
        text: 'Aufgabenorientierter, beziehungsorientierter, integrativer und delegierender Führungsstil im Team.',
        korrekt: false,
        erklaerung: 'Dies stammt aus mehrdimensionalen Modellen (Blake/Mouton, Hersey/Blanchard), nicht von Lewin.',
      },
      {
        text: 'Autoritärer (autokratischer), demokratischer (kooperativer) und Laissez-faire-Führungsstil.',
        korrekt: true,
        erklaerung: 'Kurt Lewin definierte 1939 diese drei grundlegenden Stile anhand des Grads an Entscheidungsbeteiligung der Geführten.',
      }
    ],
    pruefen: false,
  },
  {
    id: 21,
    bereich: 3,
    frage: 'Was verstehen Sie unter einem autoritären Führungsstil?',
    optionen: [
      {
        text: 'Die Führungskraft entscheidet allein ohne Einbindung der Mitarbeiter, gibt detaillierte Anweisungen vor und kontrolliert deren Durchführung engmaschig.',
        korrekt: true,
        erklaerung: 'Kennzeichen autoritärer Führung sind strikte Distanz, alleinige Entscheidungsmacht, Vorgaben von Einzelschritten und enge Kontrolle.',
      },
      {
        text: 'Die Führungskraft delegiert sämtliche Entscheidungen an das Team und greift auch bei gravierenden Zielabweichungen bewusst nicht ein.',
        korrekt: false,
        erklaerung: 'Dies beschreibt den Laissez-faire-Stil, das genaue Gegenteil von autoritärer Führung.',
      },
      {
        text: 'Entscheidungen werden im Team partnerschaftlich diskutiert, und die Führungskraft moderiert lediglich den gemeinsamen Gruppenprozess.',
        korrekt: false,
        erklaerung: 'Dies charakterisiert den kooperativen bzw. demokratischen Führungsstil.',
      },
      {
        text: 'Die Führungskraft motiviert durch inspirierende Zukunftsvisionen und fördert die persönliche Selbstverwirklichung der Mitarbeiter.',
        korrekt: false,
        erklaerung: 'Dies kennzeichnet transformationale Führung, nicht autoritäre Führung.',
      }
    ],
    pruefen: false,
  },
  {
    id: 22,
    bereich: 3,
    frage: 'Was verstehen Sie unter einem demokratischen Führungsstil – welche Vor- und Nachteile kennen Sie?',
    optionen: [
      {
        text: 'Entscheidungen fallen extrem schnell durch zentrale Anweisung; Vorteil ist sofortige Handlungssicherheit, Nachteil ist fehlende Mitarbeiterbindung.',
        korrekt: false,
        erklaerung: 'Schnelle Alleinentscheidungen sind ein Merkmal autoritärer Führung, nicht des demokratischen Stils.',
      },
      {
        text: 'Mitarbeiter werden in Entscheidungen einbezogen; Vorteile sind hohe Motivation und Akzeptanz, Nachteile sind höherer Zeitaufwand und mögliche Kompromisse.',
        korrekt: true,
        erklaerung: 'Partizipation stärkt Verantwortungsgefühl und Zufriedenheit, erfordert aber Abstimmungszeit und Diskussionsbereitschaft.',
      },
      {
        text: 'Führungskräfte verzichten komplett auf Zielvorgaben; Vorteil ist absolute persönliche Freiheit, Nachteil ist mangelnde Koordination im Projekt.',
        korrekt: false,
        erklaerung: 'Das Fehlen jeglicher Zielvorgaben beschreibt Laissez-faire, nicht demokratische Führung.',
      },
      {
        text: 'Mitarbeiter folgen der Führungskraft aufgrund persönlicher Faszination; Vorteil ist bedingungslose Loyalität, Nachteil die totale Personenabhängigkeit.',
        korrekt: false,
        erklaerung: 'Dies beschreibt charismatische Führung nach Max Weber, nicht demokratische Führung.',
      }
    ],
    pruefen: false,
  },
  {
    id: 23,
    bereich: 3,
    frage: 'Welche Führungsstile unterscheidet Max Weber und erklären Sie diese?',
    optionen: [
      {
        text: 'Autoritär, demokratisch und Laissez-faire anhand des Ausmaßes an Mitarbeiterpartizipation und Mitsprache im Gruppenalltag.',
        korrekt: false,
        erklaerung: 'Dies sind die Stile nach Kurt Lewin, nicht nach Max Weber.',
      },
      {
        text: 'Aufgabenorientiert (9.1), mitarbeiterorientiert (1.9) und teamorientiert (9.9) anhand eines zweidimensionalen Verhaltensgitters.',
        korrekt: false,
        erklaerung: 'Dies ist das Managerial Grid von Blake und Mouton, nicht Max Webers Modell.',
      },
      {
        text: 'Patriarchalisch (väterliche Fürsorge/Autorität), autokratisch (persönliche Herrschaft), bürokratisch (formale Dienstwege/Regeln) und charismatisch (Glaube an die Führerpersönlichkeit).',
        korrekt: true,
        erklaerung: 'Max Webers Typologie basiert auf den Grundlagen legitimer Herrschaft (traditionell, bürokratisch/legal und charismatisch).',
      },
      {
        text: 'Reifegradbezogene Führungsstile: Dirigieren, Überzeugen, Partizipieren und Delegieren nach dem situativen Reifegradansatz.',
        korrekt: false,
        erklaerung: 'Dies ist das situative Reifegradmodell von Hersey und Blanchard.',
      }
    ],
    pruefen: false,
  },
  {
    id: 24,
    bereich: 3,
    frage: 'Was sind die Merkmale des Führungsmodells nach Tannenbaum/Schmidt?',
    optionen: [
      {
        text: 'Ein 2-Achsen-Raster zur Einteilung von Führungskräften anhand der Dimensionen Aufgabenorientierung und Beziehungsorientierung.',
        korrekt: false,
        erklaerung: 'Das zweidimensionale Achsenmodell stammt von Blake und Mouton (Managerial Grid).',
      },
      {
        text: 'Eine Reifegradtheorie, bei der die fachliche und psychologische Reife der Mitarbeiter den optimalen Führungsstil vorgibt.',
        korrekt: false,
        erklaerung: 'Dies beschreibt das situative Modell von Hersey und Blanchard.',
      },
      {
        text: 'Ein 3-D-Modell, das grundlegende Führungsstile um die situative Effektivitätsdimension von Managementhandlungen erweitert.',
        korrekt: false,
        erklaerung: 'Das 3-D-Modell stammt von William J. Reddin, nicht von Tannenbaum und Schmidt.',
      },
      {
        text: 'Ein Kontinuum-Modell mit 7 Abstufungen zwischen autoritärer Führungskraft (hohe Willensdurchsetzung) und demokratischem Team (hoher Entscheidungsspielraum).',
        korrekt: true,
        erklaerung: 'Tannenbaum und Schmidt beschreiben das Führungskontinuum zwischen autoritär und demokratisch in 7 Stufen.',
      }
    ],
    pruefen: false,
  },
  {
    id: 25,
    bereich: 3,
    frage: 'Was sind nach Tannenbaum/Schmidt die wichtigsten Faktoren, die bei der Wahl des Führungsverhaltens ausschlaggebend sind?',
    optionen: [
      {
        text: 'Kräfte in der Person der Führungskraft, Kräfte in den geführten Mitarbeitern sowie Kräfte in der jeweiligen situativen Umwelt.',
        korrekt: true,
        erklaerung: 'Tannenbaum/Schmidt nennen die drei Kräftefelder: Manager (Werte, Vertrauen), Mitarbeiter (Reife, Interesse) und Situation (Kultur, Zeitdruck).',
      },
      {
        text: 'Reifegrad der Mitarbeiter hinsichtlich Fähigkeit und Bereitschaft sowie die Dringlichkeit der operativen Aufgabenstellung.',
        korrekt: false,
        erklaerung: 'Dies sind die Kernfaktoren im situativen Führungsmodell nach Hersey und Blanchard.',
      },
      {
        text: 'Aufgabenstruktur, Positionsmacht der Führungskraft und die persönliche Führer-Mitarbeiter-Beziehung.',
        korrekt: false,
        erklaerung: 'Dies sind die drei Situationsvariablen aus Fiedlers Kontingenzmodell der Führung.',
      },
      {
        text: 'Ausmaß der Aufgabenorientierung und Ausmaß der Mitarbeiterorientierung im zweidimensionalen Verhaltensgitter.',
        korrekt: false,
        erklaerung: 'Dies beschreibt die Verhaltensdimensionen nach Blake und Mouton, keine situativen Kräftefelder.',
      }
    ],
    pruefen: false,
  },
  {
    id: 26,
    bereich: 3,
    frage: 'Erklären Sie die Führungsstile nach Homburg und welche Dimension findet bei ihm Berücksichtigung?',
    optionen: [
      {
        text: 'Homburg erweitert das Führungsverhalten um die Dimension der formalen juristischen Compliance und arbeitsrechtlichen Vertragstreue.',
        korrekt: false,
        erklaerung: 'Homburgs Fokus liegt auf marktorientierter Unternehmensführung und Kundenorientierung, nicht auf juristischer Compliance.',
      },
      {
        text: 'Homburg überträgt Führungsstile speziell auf das Vertriebsmanagement und ergänzt die Mitarbeiterorientierung um die Dimension der Kundenorientierung.',
        korrekt: true,
        erklaerung: 'Christian Homburg erweitert die klassische Führungsforschung um die spezifische Ausrichtung auf den Kunden und das Vertriebsumfeld.',
      },
      {
        text: 'Homburg integriert die Dimension der technologischen Automatisierung und algorithmischen Mitarbeitersteuerung in das Modell.',
        korrekt: false,
        erklaerung: 'Homburgs Modell ist ein verhaltensorientierter Vertriebsansatz, kein technologisches Automatisierungsmodell.',
      },
      {
        text: 'Homburg reduziert Führung auf die reine Dimension der finanziellen Margenoptimierung und des kurzfristigen Deckungsbeitrags.',
        korrekt: false,
        erklaerung: 'Homburg betont die Balance zwischen Mitarbeiterzufriedenheit und echter Kundenbeziehungsorientierung.',
      }
    ],
    pruefen: false,
  },
  {
    id: 27,
    bereich: 3,
    frage: 'Was versteht Homburg unter dem kooperativen Führungsstil?',
    optionen: [
      {
        text: 'Strikte Vorgabe täglicher Besuchsquoten und standardisierter Gesprächsleitfäden bei permanenter Kontrollpflicht der Verkäufer.',
        korrekt: false,
        erklaerung: 'Dies beschreibt einen autoritären Mikromanagement-Stil im Vertrieb, nicht kooperative Führung.',
      },
      {
        text: 'Vollständiger Rückzug der Führungskraft aus dem Vertriebsalltag bei völlig ungesteuerter Selbstorganisation des Außendienstes.',
        korrekt: false,
        erklaerung: 'Dies entspricht einem Laissez-faire-Verhalten, das Vertriebsmitarbeiter ohne Orientierung allein lässt.',
      },
      {
        text: 'Partnerschaftliche Führung im Vertrieb mit Delegation von Spielräumen, Unterstützung bei Kundenproblemen und gemeinsamer Zielabstimmung.',
        korrekt: true,
        erklaerung: 'Kooperative Führung bei Homburg zeichnet sich durch Dialog, Vertrauen, Freiräume und partnerschaftliche Unterstützung aus.',
      },
      {
        text: 'Einseitige Fokussierung auf Teamevents und Wohlfühlatmosphäre unter bewusster Vernachlässigung von Vertriebszielen und Kundenfeedback.',
        korrekt: false,
        erklaerung: 'Kooperative Führung verbindet Mitarbeiterförderung eng mit klaren vertrieblichen Leistungs- und Kundenzielen.',
      }
    ],
    pruefen: false,
  },
  {
    id: 28,
    bereich: 3,
    frage: 'Wie kann man nach Homburg Defizite im Führungsstil abbauen?',
    optionen: [
      {
        text: 'Durch standardisierte Wissensprüfungen und theoretische Fachvorträge über Betriebswirtschaft ohne praktische Reflexion.',
        korrekt: false,
        erklaerung: 'Reine Wissensvermittlung verändert kein Führungsverhalten; nötig sind Feedback, Coaching und gezielte Reflexion.',
      },
      {
        text: 'Durch unmoderiertes Peer-Feedback im Team bei gleichzeitigem Verzicht auf strukturierte Managemententwicklungsprogramme.',
        korrekt: false,
        erklaerung: 'Unmoderiertes Peer-Feedback allein ersetzt keine systematische Personalentwicklung und kein professionelles Führungscoaching.',
      },
      {
        text: 'Durch jährliche anonyme Mitarbeiterbefragungen mit aggregierten Kennzahlen ohne nachgelagerte vertriebsspezifische Trainingspläne.',
        korrekt: false,
        erklaerung: 'Reine Kennzahlenbefragungen ohne konkrete Entwicklungs- und Verhaltensmaßnahmen bauen keine Führungsdefizite ab.',
      },
      {
        text: 'Durch systematische Führungskräfteentwicklung, strukturiertes Feedback von Mitarbeitern und Kunden sowie zielgerichtetes Coaching.',
        korrekt: true,
        erklaerung: 'Homburg empfiehlt die Verknüpfung von Führungskräftetraining, 360-Grad-Feedback (inkl. Kundenperspektive) und individuellem Coaching.',
      }
    ],
    pruefen: false,
  },
  {
    id: 29,
    bereich: 3,
    frage: 'Von wem ist das Verhaltensgitter (Managerial Grid) und was verstehen Sie darunter?',
    optionen: [
      {
        text: 'Von Blake und Mouton; ein zweidimensionales Modell zur Klassifizierung von Führungsstilen nach Aufgaben- und Menschenorientierung.',
        korrekt: true,
        erklaerung: 'Robert R. Blake und Jane Mouton entwickelten das Grid mit den Achsen «Sorge um Produktion» und «Sorge um Menschen».',
      },
      {
        text: 'Von Paul Hersey und Ken Blanchard; ein Verhaltensmodell zur Anpassung des Führungsverhaltens an die Reife der Mitarbeiter.',
        korrekt: false,
        erklaerung: 'Hersey und Blanchard entwickelten das situative Reifegradmodell, nicht das Managerial Grid.',
      },
      {
        text: 'Von Fredmund Malik; ein St. Galler Management-Raster zur Zuordnung von Führungsaufgaben zu konkreten Steuerungsinstrumenten.',
        korrekt: false,
        erklaerung: 'Maliks Management-System umfasst Grundsätze, Aufgaben und Werkzeuge, ist aber kein 9x9-Verhaltensgitter.',
      },
      {
        text: 'Von William J. Reddin; ein dreidimensionales Modell zur methodischen Bewertung der situativen Wirksamkeit von Führungsstilen.',
        korrekt: false,
        erklaerung: 'Reddin erweiterte das Gitter um die Dimension Effektivität (3-D-Modell), das ursprüngliche Grid stammt von Blake/Mouton.',
      }
    ],
    pruefen: false,
  },
  {
    id: 30,
    bereich: 3,
    frage: 'Was verstehen Sie unter «People Pleaser»?',
    optionen: [
      {
        text: 'Einen autoritären Führungsverantwortlichen, der Vorgaben mit Härte durchsetzt und persönliche Befindlichkeiten im Team ignoriert.',
        korrekt: false,
        erklaerung: 'Dies beschreibt den autoritären Stil (9.1 im Grid), das genaue Gegenteil eines People Pleasers.',
      },
      {
        text: 'Eine Führungskraft, die Konflikte um jeden Preis meidet, es allen recht machen will und Sachziele vernachlässigt, um Beliebtheit zu sichern.',
        korrekt: true,
        erklaerung: 'People Pleaser (im Grid nahe 1.9 Glacehandschuh) opfern Leistungsziele und Klarheit dem Wunsch nach ständiger Zuneigung.',
      },
      {
        text: 'Eine transformative Führungspersönlichkeit, die Teams durch hohe Leistungsstandards und inspirierende Zukunftsvisionen begeistert.',
        korrekt: false,
        erklaerung: 'Transformationale Leader fordern und fördern; sie scheuen notwendige Auseinandersetzungen keineswegs.',
      },
      {
        text: 'Einen transaktionalen Manager, der Leistung rein über vertraglich fixierte Zielvereinbarungen und materielle Prämien steuert.',
        korrekt: false,
        erklaerung: 'Dies kennzeichnet sachorientierte transaktionale Führung (Management by Objectives).',
      }
    ],
    pruefen: false,
  },
  {
    id: 31,
    bereich: 3,
    frage: 'Was bedeutet im Verhaltensgitter die Position 9+9?',
    optionen: [
      {
        text: 'Integrierte Teamführung (9,9): Höchste Aufgaben- und Mitarbeiterorientierung durch gemeinsame Zielerarbeitung und Vertrauen.',
        korrekt: false,
        erklaerung: '9,9 ist Teamführung. 9+9 bezeichnet jedoch die Kombination aus patriarchalischer Autorität (9,1) und väterlicher Fürsorge (1,9).',
      },
      {
        text: 'Opportunistischer Führungsstil: Die Führungskraft wechselt ihr Verhalten taktisch je nach unmittelbarem Karriervorteil.',
        korrekt: false,
        erklaerung: 'Der opportunistische Stil nutzt beliebige Grid-Positionen taktisch aus, ist aber nicht die formale 9+9-Position.',
      },
      {
        text: 'Paternalistischer Führungsstil («väterlich/mütterlich»): Hohe Leistungsforderung (9,1) wird mit persönlicher Fürsorge (1,9) verknüpft, solange Loyalität herrscht.',
        korrekt: true,
        erklaerung: 'Blake und McCanse ergänzten die Position 9+9: Strikter Gehorsam wird mit persönlichem Wohlwollen und Schutz belohnt.',
      },
      {
        text: 'Organisationsmanagement (5,5): Pragmatischer Kompromiss zwischen Leistungsanforderungen und ausreichender Mitarbeiterzufriedenheit.',
        korrekt: false,
        erklaerung: '5,5 ist das mittlere Kompromiss-Management («Balancing»), nicht 9+9.',
      }
    ],
    pruefen: false,
  },
  {
    id: 32,
    bereich: 3,
    frage: 'Was bedeutet im Verhaltensgitter die Position 1,1?',
    optionen: [
      {
        text: 'Glacehandschuh-Methode (1,9): Maximale Aufmerksamkeit für zwischenmenschliche Beziehungen bei Vernachlässigung von Leistungszielen.',
        korrekt: false,
        erklaerung: 'Glacehandschuh ist Position 1,9 (hohe Mitarbeiterorientierung, niedrige Aufgabenorientierung).',
      },
      {
        text: 'Befehl-Gehorsam-Management (9,1): Maximale Aufgabenorientierung bei minimaler Rücksichtnahme auf persönliche Bedürfnisse.',
        korrekt: false,
        erklaerung: 'Autoritäres Management entspricht Position 9,1, nicht 1,1.',
      },
      {
        text: 'Team-Management (9,9): Hohe Leistungsbegeisterung verbunden mit maximalem gegenseitigem Vertrauen und Respekt.',
        korrekt: false,
        erklaerung: 'Team-Management ist das Ideal 9,9, das genaue Gegenstück zu 1,1.',
      },
      {
        text: 'Überlebensmanagement («verarmte Führung»): Minimaler Einsatz für Aufgaben und minimale Sorge um Menschen zur reinen Sicherung der eigenen Position.',
        korrekt: true,
        erklaerung: 'Position 1,1 («Impoverished Management») zeichnet sich durch minimale Anstrengung sowohl bei Sachaufgaben als auch bei Beziehungen aus.',
      }
    ],
    pruefen: false,
  },
  {
    id: 33,
    bereich: 3,
    frage: 'Beschreiben Sie einen dreidimensionalen Führungsstil?',
    optionen: [
      {
        text: 'Ein Führungsmodell, das Aufgaben- und Beziehungsorientierung um eine dritte Dimension – die situative Effektivität (Wirksamkeit) – erweitert.',
        korrekt: true,
        erklaerung: 'William J. Reddin ergänzte die beiden Achsen um «Effektivität», da jeder Stil je nach Situation wirksam oder unwirksam sein kann.',
      },
      {
        text: 'Ein Führungsansatz, der neben Führungskraft und Team die Kundenorientierung als dritte Dimension im Vertrieb berücksichtigt.',
        korrekt: false,
        erklaerung: 'Kundenorientierung als Zusatzdimension stammt aus Homburgs Vertriebsführungsmodell, nicht aus dem klassischen 3-D-Modell.',
      },
      {
        text: 'Ein Planungskonzept, das Führungsentscheidungen nach den drei Zeithorizonten kurzfristig, mittelfristig und langfristig gliedert.',
        korrekt: false,
        erklaerung: 'Dies betrifft Zeithorizonte der strategischen Planung, keinen dreidimensionalen Führungsstil.',
      },
      {
        text: 'Ein Persönlichkeitsansatz, der Führungsverhalten ausschließlich nach Intelligenz, Durchsetzungsstärke und Charisma klassifiziert.',
        korrekt: false,
        erklaerung: 'Dies bezieht sich auf traditionelle Eigenschaftstheorien der Führung, nicht auf mehrdimensionale Stilmodelle.',
      }
    ],
    pruefen: false,
  },
  {
    id: 34,
    bereich: 3,
    frage: 'Was sind die Merkmale des «3-D-Modells» nach Reddin?',
    optionen: [
      {
        text: 'Ein lineares Kontinuum mit 7 Abstufungen vom autoritären Vorgesetztenentscheid bis zum autonomen Mitarbeiterentscheid.',
        korrekt: false,
        erklaerung: 'Das Kontinuum mit 7 Stufen stammt von Tannenbaum und Schmidt.',
      },
      {
        text: 'Die Dimensionen Aufgabenorientierung, Beziehungsorientierung und Effektivität; je nach Situationspassung entstehen 4 effektive und 4 ineffektive Stile.',
        korrekt: true,
        erklaerung: 'Reddin definiert 4 Grundstile (Verfahrens-, Beziehungs-, Aufgaben-, Integrationsstil), die je nach Situation wirksam oder unwirksam werden.',
      },
      {
        text: 'Ein 9x9-Koordinatengitter zur Zuordnung von Führungskräften nach Sorge um Produktion und Sorge um Menschen.',
        korrekt: false,
        erklaerung: 'Das 9x9-Gitter ist das zweidimensionale Managerial Grid von Blake und Mouton.',
      },
      {
        text: 'Eine Vier-Felder-Matrix zur Diagnose des Reifegrads von Mitarbeitern nach Aufgabenkompetenz und Leistungsmotivation.',
        korrekt: false,
        erklaerung: 'Dies ist das Modell von Hersey und Blanchard (Situational Leadership).',
      }
    ],
    pruefen: false,
  },
  {
    id: 35,
    bereich: 3,
    frage: 'Was verstehen Sie unter «transaktionaler Führung»?',
    optionen: [
      {
        text: 'Führung durch emotionale Inspiration, tiefgreifende Sinnstiftung, persönliche Vorbildfunktion und intellektuelle Förderung.',
        korrekt: false,
        erklaerung: 'Dies beschreibt transformationale Führung nach Bernard Bass.',
      },
      {
        text: 'Vollständiger Führungsverzicht bei uneingeschränkter Handlungsfreiheit ohne Zielkontrollen oder Leistungsrückmeldungen.',
        korrekt: false,
        erklaerung: 'Dies beschreibt Laissez-faire-Führung, nicht transaktionale Führung.',
      },
      {
        text: 'Führung auf Basis einer rationalen Austauschbeziehung: Klare Zielvorgaben, bedingte Belohnung bei Zielerreichung und Korrektur bei Abweichungen.',
        korrekt: true,
        erklaerung: 'Transaktionale Führung beruht auf dem Prinzip «Leistung gegen Gegenleistung» (Geben und Nehmen, Management by Objectives).',
      },
      {
        text: 'Führung über informelle Gruppenprozesse ohne messbare Leistungsziele oder institutionalisierte Anreizsysteme.',
        korrekt: false,
        erklaerung: 'Transaktionale Führung zeichnet sich gerade durch explizite Zielvereinbarungen und klare Leistungskriterien aus.',
      }
    ],
    pruefen: false,
  },
  {
    id: 36,
    bereich: 3,
    frage: 'Was verstehen Sie unter «transformationaler Führung»?',
    optionen: [
      {
        text: 'Führung über sachliche Zielvereinbarungen und leistungsorientierte Bonuszahlungen im Rahmen eines nüchternen Austauschprinzips.',
        korrekt: false,
        erklaerung: 'Dies beschreibt transaktionale Führung, nicht transformationale Führung.',
      },
      {
        text: 'Führung durch engmaschige operative Verhaltenskontrolle und detaillierte Handlungsvorschriften ohne eigene Mitspracherechte.',
        korrekt: false,
        erklaerung: 'Dies kennzeichnet autoritäres Mikromanagement.',
      },
      {
        text: 'Führung durch passive Nicht-Einmischung, bei der die Führungskraft erst bei gravierenden Zielverfehlungen reaktiv eingreift.',
        korrekt: false,
        erklaerung: 'Dies beschreibt passives Management by Exception bzw. Laissez-faire.',
      },
      {
        text: 'Führung durch Vorbildfunktion (Charisma), inspirierende Zukunftsvisionen, intellektuelle Anregung und individuelle Wertschätzung (die 4 «I»s).',
        korrekt: true,
        erklaerung: 'Transformationale Führung verändert Werte und Einstellungen der Geführten durch Idealized Influence, Inspirational Motivation, Intellectual Stimulation und Individualized Consideration.',
      }
    ],
    pruefen: false,
  },
  {
    id: 37,
    bereich: 3,
    frage: 'Wie definieren Sie den «situativen Führungsstil» und erklären Sie dessen Merkmale?',
    optionen: [
      {
        text: 'Führungsverhalten wird flexibel an den Entwicklungsstand bzw. Reifegrad (Können und Wollen) der Mitarbeiter angepasst (Dirigieren, Überzeugen, Partizipieren, Delegieren).',
        korrekt: true,
        erklaerung: 'Hersey und Blanchard postulieren: Je höher Fachkompetenz und Motivation, desto mehr wandelt sich Führung von Anweisung zu Delegation.',
      },
      {
        text: 'Das Führungsverhalten richtet sich ausschließlich nach der formalen Hierarchiestufe des Mitarbeiters im Organigramm.',
        korrekt: false,
        erklaerung: 'Situative Führung orientiert sich am tatsächlichen Reifegrad für eine konkrete Aufgabe, nicht am formalen Titel.',
      },
      {
        text: 'Die Führungskraft behält über alle Situationen und Mitarbeiter hinweg denselben festen Führungsstil bei, um Berechenbarkeit zu demonstrieren.',
        korrekt: false,
        erklaerung: 'Dies ist ein statischer Führungsstil; situative Führung verlangt ausdrücklich flexible Verhaltensanpassung.',
      },
      {
        text: 'Führungskräfte überlassen das Führungsverhalten dem Zufallsprinzip und wechseln Stile je nach persönlicher Tagesstimmung.',
        korrekt: false,
        erklaerung: 'Situative Führung folgt fundierten diagnostischen Kriterien (Fähigkeit und Bereitschaft), keinen Launen.',
      }
    ],
    pruefen: false,
  },
  {
    id: 38,
    bereich: 4,
    frage: 'Welche «Management by…»-Techniken kennen Sie?',
    optionen: [
      {
        text: 'Management by Decision (Entscheidung), Management by Motivation (Antrieb) und Management by Communication (Dialog).',
        korrekt: false,
        erklaerung: 'Dies sind allgemeine Führungsaktivitäten, aber keine etablierten «Management by…»-Führungskonzepte.',
      },
      {
        text: 'Management by Objectives (Zielvereinbarung), Management by Delegation (Aufgabenübertragung) und Management by Exception (Eingriff bei Abweichungen).',
        korrekt: true,
        erklaerung: 'Dies sind die klassischen, in der Führungslehre anerkannten Führungstechniken zur systematischen Entlastung und Steuerung.',
      },
      {
        text: 'Management by Controlling (Finanzen), Management by Marketing (Absatz) und Management by Sourcing (Einkauf).',
        korrekt: false,
        erklaerung: 'Dies sind funktionale Unternehmensbereiche der Betriebswirtschaftslehre, keine personellen Führungstechniken.',
      },
      {
        text: 'Management by Hierarchy (Rangordnung), Management by Supervision (Aufsicht) und Management by Instruction (Anweisung).',
        korrekt: false,
        erklaerung: 'Dies sind bürokratische Kontrollmechanismen, aber keine anerkannten Führungskonzepte.',
      }
    ],
    pruefen: false,
  },
  {
    id: 39,
    bereich: 4,
    frage: 'Was kennzeichnet einen «modernen Führungsstil»?',
    optionen: [
      {
        text: 'Zentralistische Entscheidungsfindung, starre Hierarchiestufen, lückenlose Präsenzkontrolle und Dienst nach Vorschrift.',
        korrekt: false,
        erklaerung: 'Dies sind Relikte traditionell bürokratischer Führungskulturen, die moderner Führung widersprechen.',
      },
      {
        text: 'Vollkommene Abschaffung von Verantwortlichkeiten und verbindlichen Unternehmenszielen zugunsten ungesteuerter Selbstfindung.',
        korrekt: false,
        erklaerung: 'Moderne Führung benötigt klare Leitplanken und Zielsysteme (z. B. OKRs), keine Orientierungslosigkeit.',
      },
      {
        text: 'Partizipation, Vertrauenskultur, Coaching-Haltung, flexible Arbeitsformen, Sinnvermittlung («Purpose») und Stärkung von Eigenverantwortung.',
        korrekt: true,
        erklaerung: 'Moderne Führung («New Work») setzt auf Enabler-Mentalität, psychologische Sicherheit, Agilität und Sinnkopplung.',
      },
      {
        text: 'Ausschließliche Steuerung über monetäre Boni bei vollständigem Verzicht auf persönliche Mitarbeitergespräche.',
        korrekt: false,
        erklaerung: 'Moderne Führung lebt von kontinuierlichem Dialog, Wertschätzung und Feedbackkultur, nicht von reiner Kennzahlensteuerung.',
      }
    ],
    pruefen: false,
  },
  {
    id: 40,
    bereich: 4,
    frage: 'Was ist eine Führungskraft für den Mitarbeiter und Kunden 3.0?',
    optionen: [
      {
        text: 'Ein autoritärer Informationsfilter, der den direkten Kundenkontakt für Teammitglieder untersagt und alle Entscheidungen zentralisiert.',
        korrekt: false,
        erklaerung: 'Ein Informationsmonopol verlangsamt Prozesse und verhindert agile Kundenorientierung.',
      },
      {
        text: 'Ein rein administrativer Verwalter, der Vorgaben der Geschäftsleitung unreflektiert weiterleitet und Teams sich selbst überlässt.',
        korrekt: false,
        erklaerung: 'Bloße Administration bietet weder Führung noch Unterstützung in komplexen Kundenumfeldern.',
      },
      {
        text: 'Ein Fachexperte, der alle Kundenkontakte persönlich führt und Mitarbeiter nur für operative Hilfstätigkeiten einsetzt.',
        korrekt: false,
        erklaerung: 'Dies blockiert das Empowerment der Mitarbeiter und überlastet die Führungskraft im Alltag.',
      },
      {
        text: 'Ein agiler Netzwerkkoordinator, Mentor und Enabler, der Transparenz fördert, Kollaboration ermöglicht und Kundenbedürfnisse zügig integriert.',
        korrekt: true,
        erklaerung: 'Im Web-3.0-Zeitalter vernetzt die Führungskraft Kompetenzen, baut Hürden ab und stellt den Kundennutzen ins Zentrum.',
      }
    ],
    pruefen: false,
  },
  {
    id: 41,
    bereich: 4,
    frage: 'Wie beschreiben Sie den modernen Führungsstil «Clean Leadership»?',
    optionen: [
      {
        text: 'Wertschätzende Führung frei von eigener Wertung und verdeckter Beeinflussung, geprägt von ehrlicher Selbstreflexion, klarer Sprache und Respekt für das Denken des Mitarbeiters.',
        korrekt: true,
        erklaerung: 'Clean Leadership (basierend auf Clean Language) vermeidet Projektionen der Führungskraft und lässt Mitarbeiter eigene Metaphern und Lösungen entwickeln.',
      },
      {
        text: 'Führung über verdeckte Verhaltensbeeinflussung und rhetorische Manipulation zur reibungslosen Zielerreichung.',
        korrekt: false,
        erklaerung: 'Clean Leadership lehnt Manipulation und suggestive Beeinflussung ausdrücklich ab.',
      },
      {
        text: 'Ein Führungsstil, bei dem die Führungskraft ausschließlich vorgefertigte Standardlösungen als Denkmuster vorschreibt.',
        korrekt: false,
        erklaerung: 'Clean Leadership zeichnet sich gerade dadurch aus, keine eigenen Deutungen oder Lösungen überzustülpen.',
      },
      {
        text: 'Führung durch rein schriftliche Protokolle und automatisierte Feedbackbögen ohne persönliches Gespräch.',
        korrekt: false,
        erklaerung: 'Clean Leadership ist ein tiefgehendes dialogisches Gesprächs- und Coachingkonzept.',
      }
    ],
    pruefen: false,
  },
  {
    id: 42,
    bereich: 4,
    frage: 'Was verstehen Sie unter dem «3 Säulen Modell»?',
    optionen: [
      {
        text: 'Die klassische Einteilung der Unternehmensorganisation in Beschaffung, Fertigung und Absatz im betrieblichen Wertschöpfungsprozess.',
        korrekt: false,
        erklaerung: 'Dies sind betriebswirtschaftliche Funktionsbereiche, nicht das moderne organisatorische 3-Säulen-Modell.',
      },
      {
        text: 'Ganzheitlicher organisatorischer Ansatz basierend auf den drei Säulen Mensch/Kultur, Struktur/Organisation und Technologie/Prozesse.',
        korrekt: true,
        erklaerung: 'Erfolgreiche Transformation gelingt nur, wenn Kultur (Mensch), Prozesse/Technologie und Organisation synchron entwickelt werden.',
      },
      {
        text: 'Die Dreiteilung der Unternehmensleitung in operative Geschäftsführung, strategischen Beirat und externe Unternehmensberater.',
        korrekt: false,
        erklaerung: 'Dies betrifft Gremienstrukturen der Corporate Governance, nicht das 3-Säulen-Führungsmodell.',
      },
      {
        text: 'Das Führungskonzept bestehend aus harter Weisungsmacht, engmaschiger Fachkontrolle und disziplinarischer Maßregelung.',
        korrekt: false,
        erklaerung: 'Dies beschreibt autoritäre Kontrollmuster, kein zukunftsfähiges Organisationsmodell.',
      }
    ],
    pruefen: false,
  },
  {
    id: 43,
    bereich: 4,
    frage: 'Was sind die Herausforderungen von «Clean Leadership» für die Führungskraft?',
    optionen: [
      {
        text: 'Sämtliche Richtungsentscheidungen stets ohne jede Rücksprache autoritär innerhalb von Sekunden durchzusetzen.',
        korrekt: false,
        erklaerung: 'Autoritäres Durchdrücken widerspricht dem Grundgedanken von Clean Leadership vollkommen.',
      },
      {
        text: 'Mitarbeitern alle schwierigen Fachaufgaben abzunehmen und persönliche Verantwortung komplett auf die eigene Kappe zu nehmen.',
        korrekt: false,
        erklaerung: 'Clean Leadership stärkt die Eigenverantwortung der Mitarbeiter, statt sie ihnen abzunehmen.',
      },
      {
        text: 'Eigene Vorannahmen, Interpretationen und Lösungsimpulse bewusst zurückzustellen, emotionale Reife zu zeigen und Mitarbeitern echten Raum zur Lösungsfindung zu geben.',
        korrekt: true,
        erklaerung: 'Die größte Hürde für Führungskräfte ist das Aushalten von Nicht-Wissen und das Vermeiden eigener Ratschläge und Vorurteile.',
      },
      {
        text: 'Ausschließlich Fachkennzahlen zu analysieren und persönliche Gespräche auf das absolute Minimum zu beschränken.',
        korrekt: false,
        erklaerung: 'Clean Leadership erfordert hohe Dialogbereitschaft, Achtsamkeit und Gesprächskompetenz.',
      }
    ],
    pruefen: false,
  },
  {
    id: 44,
    bereich: 4,
    frage: 'Was sind Kompetenzen eines «Digital Leaders»?',
    optionen: [
      {
        text: 'Ausgeprägte Programmierkenntnisse in Hardware-Codes sowie persönliche technische Reparatur aller IT-Geräte.',
        korrekt: false,
        erklaerung: 'Ein Digital Leader muss kein IT-Programmierer sein, sondern digitale Kultur, Prozesse und Zusammenarbeit führen.',
      },
      {
        text: 'Fähigkeit zur lückenlosen elektronischen Verhaltenskontrolle und Software-Überwachung von Mitarbeitern im Homeoffice.',
        korrekt: false,
        erklaerung: 'Digitale Überwachung zerstört Vertrauen und widerspricht moderner Führung auf Distanz.',
      },
      {
        text: 'Strikte Verweigerung kollaborativer Online-Plattformen und Festhalten an rein physischer Aktenführung im Büro.',
        korrekt: false,
        erklaerung: 'Dies ist digitale Verweigerungshaltung, keine Kompetenz moderner Führung.',
      },
      {
        text: 'Digitale Medienkompetenz, agile Moderationsfähigkeit, vernetztes Denken, Ambiguitätstoleranz, Vertrauensführung auf Distanz und Förderung von Lernkultur.',
        korrekt: true,
        erklaerung: 'Digital Leadership erfordert VUKA-Kompetenzen: Führen auf Distanz, Fehlertoleranz, Agilität und kollaboratives Netzwerken.',
      }
    ],
    pruefen: false,
  },
  {
    id: 45,
    bereich: 4,
    frage: 'Was sind die 6 Führungsinstrumente beim Digital Leadership?',
    optionen: [
      {
        text: 'Virtuelle Kommunikationstools, transparente Zielsysteme (z. B. OKRs), regelmäßige Feedbackschleifen, digitale Wissensplattformen, agile Rituale und digitale Kollaborationsräume.',
        korrekt: true,
        erklaerung: 'Diese Instrumente sichern Kollaboration, Ausrichtung, Transparenz und Teamgefühl auch über räumliche Distanz hinweg.',
      },
      {
        text: 'Statische Stellenbeschreibungen, jährliche Beurteilungsbögen, monatliche Abteilungsrundschreiben, zentrale Urlaubsakten, Dienstreiseanträge und Aktennotizen.',
        korrekt: false,
        erklaerung: 'Dies sind Instrumente klassisch-analoger Bürokratie, keine digitalen Führungswerkzeuge.',
      },
      {
        text: 'Monetäre Prämienlisten, Provisionsstaffeln, Überstundenkonten, Spesenrichtlinien, Dienstwagenvereinbarungen und Provisionsabrechnungen.',
        korrekt: false,
        erklaerung: 'Dies sind Vergütungs- und Administrationsinstrumente, keine digitalen Führungsinstrumente.',
      },
      {
        text: 'Organigramme, Weisungsbefugniskataloge, Arbeitsplatzbeschreibungen, Unterschriftenordnungen, Prüfpfade und Kontrollberichte.',
        korrekt: false,
        erklaerung: 'Dies sind formale Aufbauorganisations-Elemente der klassischen Unternehmenssteuerung.',
      }
    ],
    pruefen: false,
  },
  {
    id: 46,
    bereich: 4,
    frage: 'Wie beschreiben Sie «agile Führung»?',
    optionen: [
      {
        text: 'Tägliche unüberlegte Änderung aller Unternehmensziele bei gleichzeitigem Verbot langfristiger Ausrichtungen.',
        korrekt: false,
        erklaerung: 'Agilität bedeutet Anpassungsfähigkeit bei stabiler Vision, nicht ziellose Beliebigkeit.',
      },
      {
        text: 'Führung als dienende Funktion («Servant Leadership»): Rahmenbedingungen schaffen, Hindernisse beseitigen, Selbstorganisation fördern und iterativ aus Feedback lernen.',
        korrekt: true,
        erklaerung: 'Agile Führungskräfte steuern nicht über Befehle, sondern befähigen Teams zur autonomen Lösung und schnellen Wertschöpfung.',
      },
      {
        text: 'Autoritäre Führung, bei der Aufgaben stündlich neu zugewiesen und im Minutentakt kontrolliert werden.',
        korrekt: false,
        erklaerung: 'Agile Teams organisieren sich selbst; engmaschige Zuweisung ist das Gegenteil von Agilität.',
      },
      {
        text: 'Vollständiger Rückzug der Führungskraft ohne Bereitstellung von Ressourcen, Zielen oder Rückkopplungsschleifen.',
        korrekt: false,
        erklaerung: 'Agile Führung ist hochgradig präsent als Coach und Unterstützer, kein passives Laissez-faire.',
      }
    ],
    pruefen: false,
  },
  {
    id: 47,
    bereich: 4,
    frage: 'Was bedeutet «laterale Führung» für Sie?',
    optionen: [
      {
        text: 'Führung von Teams, die ausschließlich räumlich getrennt an verschiedenen internationalen Standorten arbeiten.',
        korrekt: false,
        erklaerung: 'Dies bezeichnet Remote Leadership bzw. virtuelle Führung, unabhängig von der Weisungsbefugnis.',
      },
      {
        text: 'Führung durch strikte disziplinarische Vorgesetztenfunktion über direkt unterstellte Linienmitarbeiter im Organigramm.',
        korrekt: false,
        erklaerung: 'Dies beschreibt klassisch vertikale Linienführung mit formaler Weisungsbefugnis.',
      },
      {
        text: 'Führung ohne formale hierarchische Weisungsbefugnis durch Vertrauen, Verhandlung, Überzeugungskraft, Perspektivenwechsel und gemeinsame Interessen.',
        korrekt: true,
        erklaerung: 'Laterale Führung («Führung von der Seite») wirkt über Kooperation, Dialog und Verständigung, etwa in Projekt- oder Querschnittsfunktionen.',
      },
      {
        text: 'Die formale Übertragung aller Führungsaufgaben an externe Unternehmensberater im Rahmen eines Management-Vertrags.',
        korrekt: false,
        erklaerung: 'Laterale Führung ist ein internes Führungsprinzip für Zusammenarbeit ohne disziplinarische Überordnung.',
      }
    ],
    pruefen: false,
  },
  {
    id: 48,
    bereich: 4,
    frage: 'Was sind die Merkmale von «Scrum»?',
    optionen: [
      {
        text: 'Lineares Phasenmodell mit sequenziellen Stufen von Lastenheft, Pflichtenheft, Programmierung, Integrationstest und Abnahme.',
        korrekt: false,
        erklaerung: 'Dies beschreibt das klassische Wasserfallmodell, das genaue Gegenmodell zum agilen Scrum-Framework.',
      },
      {
        text: 'Ein hierarchisches Freigabeverfahren für strategische Unternehmensinvestitionen durch den Vorstand.',
        korrekt: false,
        erklaerung: 'Scrum ist ein agiles Produktentwicklungs- und Kooperationsrahmenwerk, kein Investitionsfreigabeverfahren.',
      },
      {
        text: 'Ein kontinuierliches Flussmodell zur Visualisierung von Aufgaben auf Kanban-Boards ohne feste Sprint-Zyklen.',
        korrekt: false,
        erklaerung: 'Dies kennzeichnet Kanban; Scrum arbeitet zwingend mit festen Zeittakten (Sprints).',
      },
      {
        text: 'Agiles Rahmenwerk mit festen Rollen (Product Owner, Scrum Master, Developers), zeitlich fixierten Sprints und definierten Ereignissen (Planning, Daily, Review, Retro).',
        korrekt: true,
        erklaerung: 'Scrum basiert auf Empirie (Transparenz, Überprüfung, Anpassung), festen Timeboxen und klar definierten Verantwortlichkeiten.',
      }
    ],
    pruefen: false,
  },
  {
    id: 49,
    bereich: 4,
    frage: 'Was bedeutet Holocracy und Bottom Up im Rahmen von «Digital Leadership»?',
    optionen: [
      {
        text: 'Holacracy verteilt Autorität auf rollenbasierte Kreise statt Hierarchien; Bottom Up meint Entscheidungs- und Impulsfindung ausgehend von operativen Teams nach oben.',
        korrekt: true,
        erklaerung: 'Holacracy ersetzt starre Chef-Hierarchien durch autonome Kreise; Bottom Up nutzt das Praxiswissen der Mitarbeiterebene.',
      },
      {
        text: 'Holacracy ist ein zentralistisches Führungsmodell mit Alleinherrscher; Bottom Up bezeichnet Weisungen von oben nach unten.',
        korrekt: false,
        erklaerung: 'Hier sind beide Definitionen verkehrt: Bottom Up kommt von unten nach oben; Holacracy ist dezentral.',
      },
      {
        text: 'Holacracy beschreibt die vollständige Verlagerung von Führungsaufgaben auf externe Aufsichtsräte im Konzern.',
        korrekt: false,
        erklaerung: 'Holacracy ist ein internes Organisationsmodell zur Verteilung von Autorität im operativen Alltag.',
      },
      {
        text: 'Bottom Up bedeutet, dass strategische Vorgaben geheim im Vorstand beschlossen und ungeprüft an das Team übergeben werden.',
        korrekt: false,
        erklaerung: 'Dies beschreibt striktes Top Down, nicht Bottom Up.',
      }
    ],
    pruefen: false,
  },
  {
    id: 50,
    bereich: 4,
    frage: 'Was verstehen Sie unter Kamin- bzw. Silodenken?',
    optionen: [
      {
        text: 'Ganzheitliche, abteilungsübergreifende Prozessorientierung zur optimalen Befriedigung von Kundenwünschen.',
        korrekt: false,
        erklaerung: 'Dies ist das Ideal agiler End-to-End-Organisationen, das genaue Gegenteil von Silodenken.',
      },
      {
        text: 'Isoliertes Abteilungsdenken, bei dem Fachbereiche nur ihre eigenen Bereichsziele verfolgen und bereichsübergreifende Zusammenarbeit behindern.',
        korrekt: true,
        erklaerung: 'Silodenken («Kamin-Effekt») führt zu Schnittstellenverlusten, Informationsbarrieren und mangelndem Gesamtnutzen.',
      },
      {
        text: 'Ein architektonisches Raumkonzept zur Optimierung von Frischluft und Belüftung in modernen Bürokomplexen.',
        korrekt: false,
        erklaerung: 'Der Begriff wird in der Organisationslehre metaphorisch für Informationsabschottung von Abteilungen verwendet.',
      },
      {
        text: 'Die systematische Zusammenlegung aller Fachbereiche in interdisziplinäre Projektteams zur schnellen Problemlösung.',
        korrekt: false,
        erklaerung: 'Cross-funktionale Teams bauen Silos ab, während Silodenken die Zersplitterung in starre Abteilungsgrenzen meint.',
      }
    ],
    pruefen: false,
  },
  {
    id: 51,
    bereich: 4,
    frage: 'Was sind «Bar Camps»?',
    optionen: [
      {
        text: 'Informelle After-Work-Treffen in Gastronomiebetrieben zur reinen Pflege privater Freizeitbekanntschaften.',
        korrekt: false,
        erklaerung: 'Barcamps sind professionelle Wissens- und Innovationsformate, keine privaten Feierabendtreffen.',
      },
      {
        text: 'Frontale Management-Seminare mit vorgegebenen Referatsfolien und strikt festgelegten Pausenzeiten für Führungskräfte.',
        korrekt: false,
        erklaerung: 'Klassische Frontalkonferenzen sind das genaue Gegenteil des partizipativen Barcamp-Prinzips.',
      },
      {
        text: 'Offene «Unkonferenzen», deren Ablauf und Inhalte zu Beginn von den Teilnehmern selbst ad hoc vorgeschlagen und moderiert werden.',
        korrekt: true,
        erklaerung: 'Barcamps brechen starre Tagungsstrukturen auf: Jeder Teilnehmer kann spontan eine «Session» zu einem Thema anbieten.',
      },
      {
        text: 'Standardisierte Schulungen zur Einhaltung von Sicherheitsvorschriften und betrieblichen Brandschutzauflagen.',
        korrekt: false,
        erklaerung: 'Barcamps dienen dem offenen Wissensaustausch über Zukunftsthemen, nicht formalen Pflichtunterweisungen.',
      }
    ],
    pruefen: false,
  },
  {
    id: 52,
    bereich: 4,
    frage: 'Was sind «Digital Natives» und welchen Führungsstil erwarten sie?',
    optionen: [
      {
        text: 'Ausschließlich freiberufliche Softwareentwickler, die Führungskräfte grundsätzlich ablehnen und isoliert arbeiten.',
        korrekt: false,
        erklaerung: 'Der Begriff meint eine gesamte Alterskohorte, keine isolierte Berufsgruppe, und sie arbeiten gerne in agilen Teams.',
      },
      {
        text: 'Mitarbeiter, die digitale Medien meiden; sie verlangen nach autoritärer Einzeldiktatur und rein schriftlicher Papierkommunikation.',
        korrekt: false,
        erklaerung: 'Digital Natives sind technikaffin und lehnen rein hierarchisch-papierhafte Weisungsstrukturen ab.',
      },
      {
        text: 'Ausgebildete Informatiker, die ausschließlich durch automatisierte Kennzahlensysteme ohne menschlichen Kontakt geführt werden wollen.',
        korrekt: false,
        erklaerung: 'Digital Natives schätzen Technologie, suchen in der Führung jedoch gerade Empathie, Sinn und zwischenmenschlichen Dialog.',
      },
      {
        text: 'Personen, die mit digitalen Technologien aufgewachsen sind; sie erwarten transparente, partizipative und coachende Führung auf Augenhöhe.',
        korrekt: true,
        erklaerung: 'Digital Natives (Gen Y/Z) fordern Vernetzung, schnelles Feedback, Selbstbestimmung und Führung durch Coaching statt Befehl.',
      }
    ],
    pruefen: false,
  },
  {
    id: 53,
    bereich: 4,
    frage: 'Was bedeutet «Social Intranet» für die moderne Führung?',
    optionen: [
      {
        text: 'Eine interaktive Plattform für Wissensaustausch, bereichsübergreifende Vernetzung, Feedback und horizontale Zusammenarbeit im Unternehmen.',
        korrekt: true,
        erklaerung: 'Das Social Intranet verbindet klassische Unternehmensinformation mit Social-Media-Funktionen (Liken, Kommentieren, Communities).',
      },
      {
        text: 'Ein rein administratives Dokumentenarchiv, auf das nur die Unternehmensleitung und Personalabteilung Lesezugriff besitzt.',
        korrekt: false,
        erklaerung: 'Ein passives Dokumentenarchiv bietet keine soziale Interaktion oder kollaborative Vernetzung.',
      },
      {
        text: 'Ein firmeninternes Chatprogramm zur lückenlosen Protokollierung und Überwachung privater Pausengespräche.',
        korrekt: false,
        erklaerung: 'Social Intranets dienen der transparenten Kollaboration und Wissensvernetzung, nicht der Überwachung.',
      },
      {
        text: 'Eine öffentliche Marketing-Website zur Präsentation von Unternehmensnachrichten an externe Kunden und Medien.',
        korrekt: false,
        erklaerung: 'Ein Intranet ist per Definition firmenintern und richtet sich an Mitarbeiter, nicht an die externe Öffentlichkeit.',
      }
    ],
    pruefen: false,
  },
  {
    id: 54,
    bereich: 5,
    frage: 'Was sind die 5 Management-Grundsätze wirksamer Führung nach Malik?',
    optionen: [
      {
        text: 'Zielvereinbarung, Delegation, permanente Leistungskontrolle, Abteilungsbudgetierung und Prozessoptimierung.',
        korrekt: false,
        erklaerung: 'Dies sind operative Aufgaben und Werkzeuge, keine verhaltensleitenden Grundsätze nach Malik.',
      },
      {
        text: 'Resultatorientierung, Beitrag zum Ganzen, Konzentration auf Weniges, Stärken nutzen und Vertrauen schaffen.',
        korrekt: true,
        erklaerung: 'Fredmund Malik formuliert diese Grundsätze als unverzichtbare Handlungsmaximen wirksamer Führungskräfte.',
      },
      {
        text: 'Autoritäre Anweisung, lückenlose Überwachung, Null-Fehler-Toleranz, Einzelfallprüfung und disziplinäre Härte.',
        korrekt: false,
        erklaerung: 'Dies widerspricht Maliks Ansatz selbstverantwortlicher Wirksamkeit fundamental.',
      },
      {
        text: 'Planen, Organisieren, Entscheiden, Kontrollieren und Fördern von Mitarbeitern im täglichen Arbeitsablauf.',
        korrekt: false,
        erklaerung: 'Dies sind die 5 Führungsaufgaben bei Malik, nicht die verhaltensleitenden Führungsgrundsätze.',
      }
    ],
    pruefen: false,
  },
  {
    id: 55,
    bereich: 5,
    frage: 'Was bedeutet der Grundsatz «Verantwortung übernehmen»?',
    optionen: [
      {
        text: 'Vor jeder schwierigen Entscheidung die schriftliche Freigabe höherer Hierarchieebenen einzuholen, um persönliche Risiken zu vermeiden.',
        korrekt: false,
        erklaerung: 'Dies ist bürokratische Risikoabsicherung («Cover your back»), keine Übernahme von Führungsverantwortung.',
      },
      {
        text: 'Fehlschläge im Team primär auf unzureichende Rahmenbedingungen oder mangelnde Mitarbeitermotivation zurückzuführen.',
        korrekt: false,
        erklaerung: 'Schuldzuweisungen an Dritte sind das Gegenteil gelebter Führungsverantwortung.',
      },
      {
        text: 'Für die Konsequenzen der eigenen Entscheidungen uneingeschränkt einzustehen und Ursachen von Fehlern bei sich selbst zu suchen.',
        korrekt: true,
        erklaerung: 'Echte Verantwortung zeigt sich im Einstehen für Ergebnisse und Fehler, statt Schuld auf andere abzuwälzen.',
      },
      {
        text: 'Ausschließlich für fehlerfreie Vorzeigeerfolge öffentlich einzutreten und bei Misserfolgen auf Distanz zum Team zu gehen.',
        korrekt: false,
        erklaerung: 'Verantwortung bewährt sich gerade in der Krise und bei Misserfolgen.',
      }
    ],
    pruefen: false,
  },
  {
    id: 56,
    bereich: 5,
    frage: 'Was heißt für Sie «Ergebnisverantwortung übernehmen»?',
    optionen: [
      {
        text: 'Ziele zu Jahresbeginn bewusst so niedrig anzusetzen, dass eine Übererfüllung ohne jede Anstrengung garantiert ist.',
        korrekt: false,
        erklaerung: 'Dies ist taktisches Ziel-Herunterhandeln («Sandbagging»), keine echte Ergebnisverantwortung.',
      },
      {
        text: 'Den Nachweis möglichst vieler abgeleisteter Überstunden und gefüllter Terminkalender als Erfolgsbeleg vorzulegen.',
        korrekt: false,
        erklaerung: 'Viel Beschäftigung («Busywork») ist kein Beweis für erzielte Resultate.',
      },
      {
        text: 'Bei Nichterreichen von Kennzahlen die Gründe stets bei unvorhersehbaren Marktturbulenzen und Kunden zu suchen.',
        korrekt: false,
        erklaerung: 'Ergebnisverantwortung bedeutet, trotz Hürden Wege zur Erreichung der Ziele zu finden.',
      },
      {
        text: 'Sich nicht am reinen Zeiteinsatz oder Fleiß, sondern an der tatsächlichen Erreichung der vereinbarten Zielresultate messen zu lassen.',
        korrekt: true,
        erklaerung: 'Ergebnisverantwortung trennt die eingesetzte Energie (Input) vom tatsächlich geschaffenen Wert (Output).',
      }
    ],
    pruefen: false,
  },
  {
    id: 57,
    bereich: 5,
    frage: 'Was bedeutet der Grundsatz «Beitrag leisten»?',
    optionen: [
      {
        text: 'Das eigene Handeln stets am Nutzen für das Gesamtsystem auszurichten: «Was kann ich beitragen, damit das Ganze erfolgreich ist?».',
        korrekt: true,
        erklaerung: 'Nach Malik und Drucker denkt die wirksame Führungskraft vom Gesamtnutzen und Kunden her, nicht vom eigenen Ressort.',
      },
      {
        text: 'Die eigene Fachabteilung als autarke Einheit zu führen und Ressourcen anderer Bereiche vorrangig für eigene Zwecke zu sichern.',
        korrekt: false,
        erklaerung: 'Dies fördert schädliches Silodenken und schadet dem übergeordneten Gesamterfolg.',
      },
      {
        text: 'Möglichst viele anspruchsvolle Aufgaben an Nachbarbereiche abzuschieben, um das eigene Team spürbar zu entlasten.',
        korrekt: false,
        erklaerung: 'Aufgabenverschiebung schwächt den Gesamterfolg des Unternehmens.',
      },
      {
        text: 'Ausschließlich eng umrissene Stellenbeschreibungen ohne jede abteilungsübergreifende Kooperationsbereitschaft zu erfüllen.',
        korrekt: false,
        erklaerung: 'Dienst nach Vorschrift verhindert wertschöpfende Beiträge zum Ganzen.',
      }
    ],
    pruefen: false,
  },
  {
    id: 58,
    bereich: 5,
    frage: 'Was hat George A. Miller festgestellt?',
    optionen: [
      {
        text: 'Dass Führungskräfte am produktivsten arbeiten, wenn sie parallel mehr als zehn anspruchsvolle Projekte gleichzeitig steuern.',
        korrekt: false,
        erklaerung: 'Multitasking senkt die Produktivität massiv; Millers Erkenntnis belegt die Notwendigkeit von Fokussierung.',
      },
      {
        text: 'Die Begrenztheit des menschlichen Kurzzeitgedächtnisses auf ca. 7 (± 2) Informationseinheiten («Chunks»), was Konzentration auf Weniges erfordert.',
        korrekt: true,
        erklaerung: 'Millers berühmte «magische Zahl 7» zeigt kognitive Kapazitätsgrenzen auf und begründet den Managementgrundsatz der Fokussierung.',
      },
      {
        text: 'Dass Individuen in Teams automatisch ihre Leistung halbieren, sobald die Gruppe größer als fünf Personen wird.',
        korrekt: false,
        erklaerung: 'Dies beschreibt den Ringelmann-Effekt des sozialen Faulenzens, nicht Millers Erkenntnisse.',
      },
      {
        text: 'Dass menschliche Arbeitszufriedenheit ausschließlich durch das Vorhandensein von Hygienefaktoren im Büro bedingt ist.',
        korrekt: false,
        erklaerung: 'Dies ist die Zwei-Faktoren-Theorie von Frederick Herzberg.',
      }
    ],
    pruefen: false,
  },
  {
    id: 59,
    bereich: 5,
    frage: 'Wie erklären Sie das «Eisenhower Prinzip»?',
    optionen: [
      {
        text: 'Klassifizierung von Mitarbeitern nach Reifegraden zur Auswahl des passenden Führungsstils im Führungsalltag.',
        korrekt: false,
        erklaerung: 'Dies ist das situative Führungsmodell nach Hersey und Blanchard.',
      },
      {
        text: 'Chronologische Abarbeitung aller eingehenden Aufgaben streng nach dem Eingangsstempel («First In, First Out»).',
        korrekt: false,
        erklaerung: 'FIFO ignoriert Prioritäten vollkommen und führt zur Vernachlässigung strategisch wichtiger Aufgaben.',
      },
      {
        text: 'Kategorisierung von Aufgaben nach Wichtigkeit und Dringlichkeit in 4 Felder: A (sofort selbst), B (terminieren), C (delegieren) und D (eliminieren).',
        korrekt: true,
        erklaerung: 'Die Eisenhower-Matrix trennt Dringlichkeit (Zeitdruck) von Wichtigkeit (Zielbezug) für wirksames Selbstmanagement.',
      },
      {
        text: 'Gliederung von Führungsaufgaben nach den Managementfunktionen Planen, Organisieren, Entscheiden und Kontrollieren.',
        korrekt: false,
        erklaerung: 'Dies beschreibt klassische Managementfunktionen (Fayol/Malik), nicht das Eisenhower-Prinzip.',
      }
    ],
    pruefen: false,
  },
  {
    id: 60,
    bereich: 5,
    frage: 'Welche Zeitspartipps kennen Sie?',
    optionen: [
      {
        text: 'Aufschieben aller anspruchsvollen Kernaufgaben auf den späten Feierabend bei gleichzeitiger Übernahme fremder Aufgaben.',
        korrekt: false,
        erklaerung: 'Prokrastination und mangelnde Abgrenzung zerstören Produktivität und Erholungsphasen.',
      },
      {
        text: 'Permanentes paralleles Bearbeiten aller eingehenden Benachrichtigungen während anspruchsvoller strategischer Arbeiten.',
        korrekt: false,
        erklaerung: 'Ständige Unterbrechungen erzeugen Fragmentierung und kosten nachweislich erhebliche Arbeitszeit.',
      },
      {
        text: 'Vollständiger Verzicht auf schriftliche Tages- oder Wochenplanung zugunsten rein spontaner ad-hoc Reaktionen.',
        korrekt: false,
        erklaerung: 'Planungslose Arbeit macht reaktiv und führt zu Zeitverlust durch fehlende Priorisierung.',
      },
      {
        text: 'Bündelung gleichartiger Aufgaben (Batching), Timeboxing, Vermeidung von Multitasking, Einplanen von Pufferzeiten und konsequentes Neinsagen.',
        korrekt: true,
        erklaerung: 'Diese Methoden minimieren Rüstkosten im Gehirn, schaffen Fokuszeit und schützen vor Überlastung.',
      }
    ],
    pruefen: false,
  },
  {
    id: 61,
    bereich: 5,
    frage: 'Wie schaffen Sie als Führungskraft «Vertrauen»?',
    optionen: [
      {
        text: 'Durch Verlässlichkeit und Worttreue («Walk the talk»), ehrliche Wertschätzung, transparente Kommunikation und das Einräumen von Handlungsspielräumen.',
        korrekt: true,
        erklaerung: 'Vertrauen wächst durch berechenbares, faires Verhalten, Integrität und den Mut, Mitarbeitern Verantwortung zu übertragen.',
      },
      {
        text: 'Durch permanente lückenlose Kontrolle aller Zwischenschritte und tägliche schriftliche Rechenschaftsberichte.',
        korrekt: false,
        erklaerung: 'Engmaschige Überwachung signalisiert Misstrauen und erstickt Eigeninitiative im Keim.',
      },
      {
        text: 'Indem man Mitarbeitern unerfüllbare Karrieresprünge verspricht, um deren kurzfristige Einsatzbereitschaft zu erzwingen.',
        korrekt: false,
        erklaerung: 'Leere Versprechungen zerstören die Glaubwürdigkeit der Führungskraft dauerhaft.',
      },
      {
        text: 'Durch Vermeidung jeglicher kritischer Leistungsrückmeldungen, um persönliche Spannungen im Team grundsätzlich auszublenden.',
        korrekt: false,
        erklaerung: 'Echtes Vertrauen braucht Ehrlichkeit und konstruktives Feedback; falsche Harmonie schwächt die Orientierung.',
      }
    ],
    pruefen: false,
  },
  {
    id: 62,
    bereich: 5,
    frage: 'Was ist der Unterschied zwischen extrinsischer und intrinsischer Motivation?',
    optionen: [
      {
        text: 'Intrinsische Motivation wird ausschließlich durch Gehaltserhöhungen geweckt, während extrinsische Motivation die innere Berufung meint.',
        korrekt: false,
        erklaerung: 'Hier sind die Begriffe genau vertauscht: Gehalt ist extrinsisch, innere Haltung intrinsisch.',
      },
      {
        text: 'Intrinsische Motivation speist sich aus der Freude und Sinnhaftigkeit des Tuns selbst; extrinsische Motivation wird durch äußere Anreize wie Geld oder Status gesteuert.',
        korrekt: true,
        erklaerung: 'Intrinsisch motivierte Personen handeln aus innerem Antrieb; extrinsisch motivierte Personen streben nach Belohnung oder Strafvermeidung.',
      },
      {
        text: 'Intrinsische Motivation existiert nur bei leitenden Führungskräften, während Teammitglieder ausschließlich extrinsisch motivierbar sind.',
        korrekt: false,
        erklaerung: 'Jeder Mensch besitzt das Potenzial für intrinsische Motivation (Autonomie, Kompetenzerleben, Sinn).',
      },
      {
        text: 'Beide Motivationsformen sind identisch und bezeichnen denselben biochemischen Prozess bei der reinen Entlohnung von Arbeitszeit.',
        korrekt: false,
        erklaerung: 'Die Motivationspsychologie unterscheidet qualitativ grundlegend zwischen innerem Antrieb und äußerer Belohnung.',
      }
    ],
    pruefen: false,
  },
  {
    id: 63,
    bereich: 5,
    frage: 'Was heißt bei wirksamer Führung «Resultatorientierung»?',
    optionen: [
      {
        text: 'Das kurzfristige Erreichen finanzieller Quartalsmargen unter bewusster Zerstörung von Teamgesundheit und Kundenvertrauen.',
        korrekt: false,
        erklaerung: 'Wirksame Resultate müssen nachhaltig geschaffen werden, nicht durch Raubbau an Ressourcen.',
      },
      {
        text: 'Ausschließlich die Anzahl der physisch am Schreibtisch verbrachten Arbeitsstunden als Leistungsnachweis heranzuziehen.',
        korrekt: false,
        erklaerung: 'Dies ist reine Präsenzkultur (Input-Orientierung), das Gegenteil von Resultatorientierung.',
      },
      {
        text: 'Leistung konsequent am tatsächlichen, wertschöpfenden Ergebnis (Output) zu messen und nicht an bloßem Fleiß, Anwesenheit oder Beschäftigung (Input).',
        korrekt: true,
        erklaerung: 'Malik betont: Nicht wie viel jemand arbeitet zählt, sondern was am Ende tatsächlich als nutzbares Resultat herauskommt.',
      },
      {
        text: 'Starres Festhalten an veralteten Projektplänen, selbst wenn das Ziel am Markt keinen Kundennutzen mehr stiftet.',
        korrekt: false,
        erklaerung: 'Resultate müssen Kundennutzen stiften; blindes Planbefolgen widerspricht unternehmerischer Wirksamkeit.',
      }
    ],
    pruefen: false,
  },
  {
    id: 64,
    bereich: 5,
    frage: 'Worauf muss die Führungskraft als «Coach» aufpassen?',
    optionen: [
      {
        text: 'Dem Mitarbeiter sofort alle schwierigen Aufgaben und Problemlösungen abzunehmen, sobald erste Zweifel aufkommen.',
        korrekt: false,
        erklaerung: 'Coaching bedeutet Befähigung zur Selbsthilfe, nicht das Abnehmen von Aufgaben durch den Vorgesetzten.',
      },
      {
        text: 'Das vertrauliche Coaching-Gespräch als verdecktes Disziplinierungs- und Abmahnungsgespräch zu missbrauchen.',
        korrekt: false,
        erklaerung: 'Vermischung von Coaching und Sanktion zerstört die notwendige Vertrauensbasis sofort.',
      },
      {
        text: 'Ausschließlich theoretische Fachvorträge zu halten, ohne auf die Praxisherausforderungen des Mitarbeiters einzugehen.',
        korrekt: false,
        erklaerung: 'Coaching ist individueller lösungsorientierter Dialog, kein akademischer Monolog.',
      },
      {
        text: 'Keine fertigen Ratschläge zu diktieren, die Lösungsverantwortung beim Mitarbeiter zu belassen und die Grenze zu Therapie und Weisung zu wahren.',
        korrekt: true,
        erklaerung: 'Ein Coach hört aktiv zu, fragt systemisch und hilft dem Mitarbeiter, eigene Lösungen zu entwickeln, ohne therapeutische Grenzen zu überschreiten.',
      }
    ],
    pruefen: false,
  },
  {
    id: 65,
    bereich: 5,
    frage: 'Was ist der innere Rollenkonflikt beim Coaching und wie bekommen Sie diesen in den Griff?',
    optionen: [
      {
        text: 'Der Spagat zwischen wohlwollender Entwicklungsbegleitung und disziplinarischer Beurteilungsmacht; Lösung durch Transparenz und strikte Trennung der Gesprächsanlässe.',
        korrekt: true,
        erklaerung: 'Führungskräfte müssen klar deklarieren, mit welchem «Hut» sie sprechen: als fördernder Coach oder als beurteilende Führungskraft.',
      },
      {
        text: 'Der Widerspruch zwischen strategischer Unternehmensplanung und operativer Zeiterfassung; Lösung durch Einführung neuer Software.',
        korrekt: false,
        erklaerung: 'Dies ist ein organisatorischer Schnittstellenkonflikt, kein Rollenkonflikt beim Führungscoaching.',
      },
      {
        text: 'Der fachliche Streit zwischen Vertrieb und Innendienst über Rabattfreigaben; Lösung durch Schlichtungsgespräche.',
        korrekt: false,
        erklaerung: 'Dies beschreibt einen interpersonellen Bereichskonflikt, keinen inneren Rollenkonflikt der Führungskraft.',
      },
      {
        text: 'Die Rivalität zweier Teammitglieder um dieselbe Beförderungsstelle; Lösung durch Zuweisung gleicher Titel.',
        korrekt: false,
        erklaerung: 'Dies betrifft Teamkonflikte und Nachfolgeplanung, nicht die Doppelrolle Führungskraft/Coach.',
      }
    ],
    pruefen: false,
  },
  {
    id: 66,
    bereich: 5,
    frage: 'Welche 8 Kontrollfragen während des Coaching-Gesprächs würden Sie sich stellen?',
    optionen: [
      {
        text: 'Reicht die Redezeit für meinen Vortrag? Habe ich alle Einwände widerlegt? Zeigt der Mitarbeiter Reue? Wird die Weisung befolgt? Wann gibt es Boni? Wer protokolliert? Ist die Strafe verhängt? Wann endet das Meeting?',
        korrekt: false,
        erklaerung: 'Diese Fragen spiegeln autoritäres Maßregeln und Verhörmethoden wider, haben aber nichts mit Coaching gemein.',
      },
      {
        text: 'Höre ich aktiv zu? Halte ich Pausen aus? Gebe ich Lösungen vor? Bleibe ich empathisch neutral? Verstehe ich das Kernanliegen? Sind Ziele klar? Wer redet mehr? Was ist der nächste Schritt?',
        korrekt: true,
        erklaerung: 'Diese Fragen sichern die Qualität der Coaching-Haltung: Zuhören, Zurückhaltung mit Ratschlägen und Fokus auf Selbstreflexion des Coachees.',
      },
      {
        text: 'Habe ich mein Budget für Weiterbildung ausgeschöpft? Welche Reisekosten fallen an? Welche Zertifikate erhalte ich? Welche Software brauche ich? Wer zahlt den Raum? Wer übernimmt die Vertretung? Gibt es Catering? Wann gibt es Zeugnisse?',
        korrekt: false,
        erklaerung: 'Dies sind administrative Seminarorganisationsfragen, keine Coaching-Prozessfragen.',
      },
      {
        text: 'Welche Kennzahlen wurden im Quartal verfehlt? Wer trägt die Hauptschuld? Wie hoch ist der finanzielle Schaden? Welche Abmahnungen sind nötig? Wer informiert die Rechtsabteilung? Wann tagt der Vorstand? Wer haftet persönlich? Wann erfolgt die Kündigung?',
        korrekt: false,
        erklaerung: 'Dies sind Fragen einer disziplinarischen Krisenintervention, kein Entwicklungs-Coaching.',
      }
    ],
    pruefen: false,
  },
  {
    id: 67,
    bereich: 5,
    frage: 'Was bedeutet der Begriff Führungsspanne?',
    optionen: [
      {
        text: 'Die zeitliche Dauer, die eine Führungskraft durchschnittlich in derselben Führungsposition im Betrieb verbringt.',
        korrekt: false,
        erklaerung: 'Die Verweildauer in einer Position wird als Amtszeit oder Betriebszugehörigkeit bezeichnet, nicht als Führungsspanne.',
      },
      {
        text: 'Die formale Hierarchieebene einer Führungskraft gemessen vom Vorstand bis zur operativen Teamebene.',
        korrekt: false,
        erklaerung: 'Dies beschreibt die Führungstiefe (Anzahl der Hierarchiestufen), nicht die Führungsspanne (Breite).',
      },
      {
        text: 'Die Anzahl der Mitarbeiter, die einer Führungskraft unmittelbar und direkt disziplinarisch unterstellt sind.',
        korrekt: true,
        erklaerung: 'Führungsspanne (Leitungsspanne, Span of Control) bezeichnet die Zahl der direkt an eine Führungskraft berichtenden Mitarbeiter.',
      },
      {
        text: 'Die prozentuale Gehaltsspanne zwischen dem niedrigsten und höchsten Einkommen innerhalb einer Abteilung.',
        korrekt: false,
        erklaerung: 'Dies bezeichnet die Entgelt- oder Gehaltsspreizung im Vergütungssystem.',
      }
    ],
    pruefen: false,
  },
  {
    id: 68,
    bereich: 5,
    frage: 'Was ist die optimale Führungsspanne?',
    optionen: [
      {
        text: 'Die optimale Führungsspanne beträgt im modernen agilen Management stets genau eine einzige Person pro Führungsebene.',
        korrekt: false,
        erklaerung: 'Eine 1:1-Führungsbeziehung führt zu extremer Hierarchieaufblähung und ist betriebswirtschaftlich unsinnig.',
      },
      {
        text: 'In der klassischen Organisationstheorie gilt ausnahmslos eine feste Spanne von exakt 30 Mitarbeitern pro Vorgesetztem.',
        korrekt: false,
        erklaerung: '30 direkt unterstellte Personen führen bei qualifizierter Arbeit zur Überlastung der Führungskraft.',
      },
      {
        text: 'Grundsätzlich gilt: Je mehr Mitarbeiter direkt unterstellt sind, desto intensiver und individueller gelingt die Mitarbeiterförderung.',
        korrekt: false,
        erklaerung: 'Mit steigender Zahl vervielfachen sich die Beziehungsrelationen, wodurch individuelle Förderung unmöglich wird.',
      },
      {
        text: 'Es gibt keine pauschale Zahl; sie hängt von Aufgabenkomplexität, Standardisierungsgrad, Mitarbeiterqualifikation und Führungsstil ab (häufig 4–10 Personen).',
        korrekt: true,
        erklaerung: 'Bei komplexen, individuellen Aufgaben ist eine kleinere Spanne nötig; bei stark standardisierten Routinetätigkeiten kann sie deutlich größer sein.',
      }
    ],
    pruefen: false,
  },
  {
    id: 69,
    bereich: 6,
    frage: 'Was bedeutet das Kauf-Verhalten von Kunden?',
    optionen: [
      {
        text: 'Die Gesamtheit aller beobachtbaren Handlungen und psychologischen Prozesse von Personen im Zusammenhang mit der Auswahl, dem Kauf und der Nutzung von Gütern.',
        korrekt: true,
        erklaerung: 'Kaufverhalten umfasst den gesamten Entscheidungsprozess von der Problemwahrnehmung über Informationssuche bis zum Nachkaufverhalten.',
      },
      {
        text: 'Das ausschließliche Begleichen einer Rechnung an der Ladenkasse oder im Online-Zahlungsterminal.',
        korrekt: false,
        erklaerung: 'Dies ist lediglich der technische Zahlungsakt, umfasst aber nicht das eigentliche psychologische Kaufverhalten.',
      },
      {
        text: 'Die rein logistische Bereitstellung und Auslieferung von Waren aus dem Lager an den Einzelhandel.',
        korrekt: false,
        erklaerung: 'Dies beschreibt Distributionslogistik, nicht das Konsumentenverhalten.',
      },
      {
        text: 'Die juristische Formulierung allgemeiner Geschäftsbedingungen für gewerbliche Kundenverträge.',
        korrekt: false,
        erklaerung: 'Dies ist Vertragsrecht, kein kaufpsychologisches Phänomen.',
      }
    ],
    pruefen: false,
  },
  {
    id: 70,
    bereich: 6,
    frage: 'Wie heißen die 4 Arten des Kaufverhaltens?',
    optionen: [
      {
        text: 'Spekulatives, risikoaverses, renditeorientiertes und steueroptimiertes Kaufverhalten an Kapitalmärkten.',
        korrekt: false,
        erklaerung: 'Dies sind Anlagestrategien im Finanzsektor, keine allgemeinen Arten des Konsumentenkaufverhaltens.',
      },
      {
        text: 'Echtes (extensives), gewohnheitsmäßiges (habituelles), limitiertes (vereinfachtes) sowie impulsives (emotionales) Kaufverhalten.',
        korrekt: true,
        erklaerung: 'Diese klassische Typologie (nach Kroeber-Riel/Weinberg) differenziert Kaufentscheidungen nach kognitiver Steuerung und emotionaler Beteiligung.',
      },
      {
        text: 'Stationäres, mobiles, telefonisches und katalogbasiertes Kaufverhalten nach der Art des Vertriebswegs.',
        korrekt: false,
        erklaerung: 'Dies klassifiziert Einkaufskanäle (Multichannel), nicht die psychologischen Entscheidungsarten.',
      },
      {
        text: 'Preisfokussiertes, markenfokussiertes, rabattgetriebenes und provisionsorientiertes Kaufverhalten.',
        korrekt: false,
        erklaerung: 'Dies beschreibt situative Käuferpräferenzen, aber nicht die vier wissenschaftlichen Entscheidungstypen.',
      }
    ],
    pruefen: false,
  },
  {
    id: 71,
    bereich: 6,
    frage: 'Was sind Emotionen und wo entstehen diese?',
    optionen: [
      {
        text: 'Angeborene Muskelreflexe, die autonom im Rückenmark ohne jede Beteiligung zentraler Gehirnareale gesteuert werden.',
        korrekt: false,
        erklaerung: 'Rückenmarksreflexe sind rein motorisch; Emotionen umfassen Gefühle, Bewertung und körperliche Reaktionen im Gehirn.',
      },
      {
        text: 'Rein kognitive mathematische Rechenoperationen, die ausschließlich in der Großhirnrinde zur Kostenminimierung berechnet werden.',
        korrekt: false,
        erklaerung: 'Logische Rechenoperationen sind kognitiver Natur, während Emotionen affektive neurobiologische Prozesse sind.',
      },
      {
        text: 'Psychophysiologische Reaktionsmuster auf relevante Reize zur Handlungssteuerung; neurobiologisch entstehen sie maßgeblich im limbischen System (u. a. Amygdala).',
        korrekt: true,
        erklaerung: 'Emotionen bereiten blitzschnell Handlungen vor und sind eng an stammesgeschichtlich alte Hirnareale gekoppelt.',
      },
      {
        text: 'Ausschließlich bewusst erlernte Verhaltensregeln, die im motorischen Sprachzentrum des Schläfenlappens generiert werden.',
        korrekt: false,
        erklaerung: 'Emotionen sind tief verwurzelte biologische Prozesse im limbischen System, keine bloßen Sprachregeln.',
      }
    ],
    pruefen: false,
  },
  {
    id: 72,
    bereich: 6,
    frage: 'Was sind Emotionssysteme und welche kennen Sie?',
    optionen: [
      {
        text: 'Psychologische Abwehrmechanismen nach Sigmund Freud: Verdrängung, Projektion, Sublimierung und Reaktionsbildung.',
        korrekt: false,
        erklaerung: 'Freuds Abwehrmechanismen sind tiefenpsychologische Schutzfunktionen des Ichs, keine neurobiologischen Emotionssysteme.',
      },
      {
        text: 'Die Big-Five-Persönlichkeitsdimensionen: Extraversion, Offenheit, Verträglichkeit, Gewissenhaftigkeit und Neurotizismus.',
        korrekt: false,
        erklaerung: 'Das Big-Five-Modell beschreibt Persönlichkeitseigenschaften, nicht die limbischen Emotionssysteme nach Häusel.',
      },
      {
        text: 'Die vier Temperamentstypen der antiken Medizin: Choleriker, Sanguiniker, Phlegmatiker und Melancholiker.',
        korrekt: false,
        erklaerung: 'Dies ist die historische Vier-Säfte-Lehre von Galen, kein modernes neurobiologisches Modell.',
      },
      {
        text: 'Neurobiologische Grundsysteme zur Verhaltenssteuerung im Gehirn nach Häusel: Balance-System (Sicherheit), Stimulanz-System (Neugier) und Dominanz-System (Macht).',
        korrekt: true,
        erklaerung: 'Dr. Hans-Georg Häusel identifizierte diese drei Instruktionssysteme im limbischen System, die jede Kaufentscheidung steuern.',
      }
    ],
    pruefen: false,
  },
  {
    id: 73,
    bereich: 6,
    frage: 'Wer hat das Limbic®-System entwickelt und wie erklären Sie die Emotionssysteme?',
    optionen: [
      {
        text: 'Hans-Georg Häusel; das Modell erklärt Konsumentenverhalten über die drei Emotionssysteme Balance (Stabilität), Stimulanz (Erlebnis) und Dominanz (Status).',
        korrekt: true,
        erklaerung: 'Häusel entwickelte den Limbic-Ansatz, der Neurobiologie mit Marketing und Kundenmotiven verbindet.',
      },
      {
        text: 'Daniel Kahneman; das Modell trennt das Denken in intuitives System 1 und langsames analytisches System 2.',
        korrekt: false,
        erklaerung: 'Kahneman prägte die Verhaltensökonomie (System 1 & 2), während das Limbic-System im Neuromarketing von Häusel stammt.',
      },
      {
        text: 'Paul Ekman; das Modell erklärt Gesichtsausdrücke bei den Basisemotionen Freude, Wut, Ekel, Furcht und Trauer.',
        korrekt: false,
        erklaerung: 'Ekman erforschte die universelle Mimik von Basisemotionen (FACS), nicht die Limbic-Map.',
      },
      {
        text: 'Philip Kotler; das Konzept strukturiert Marketingentscheidungen in die 4Ps Product, Price, Place und Promotion.',
        korrekt: false,
        erklaerung: 'Kotler ist der Urvater des klassischen Marketing-Mix, nicht des neurobiologischen Limbic-Modells.',
      }
    ],
    pruefen: false,
  },
  {
    id: 74,
    bereich: 6,
    frage: 'Was ist das Stimulanzsystem?',
    optionen: [
      {
        text: 'Das neurobiologische System für Sicherheit, Risikovermeidung, Stabilität, Geborgenheit, Vertrautheit und Ordnung (Neurotransmitter Serotonin).',
        korrekt: false,
        erklaerung: 'Dies beschreibt das Balance-System, das auf Risikominimierung und Ruhe ausgerichtet ist.',
      },
      {
        text: 'Das neurobiologische System für Neugier, Entdeckerdrang, Abwechslung, Belohnung und das Vermeiden von Langeweile (Neurotransmitter Dopamin).',
        korrekt: true,
        erklaerung: 'Das Stimulanz-System strebt nach Neuem, Erlebnissen, Belohnung und Inspiration; Botenstoff ist vor allem Dopamin.',
      },
      {
        text: 'Das neurobiologische System für Status, Durchsetzungskraft, Macht, Überlegenheit, Wettbewerb und Autonomie (Hormon Testosteron).',
        korrekt: false,
        erklaerung: 'Dies kennzeichnet das Dominanz-System, das nach Selbstbehauptung und Rangordnung strebt.',
      },
      {
        text: 'Das vegetative Nervensystem zur automatischen Steuerung von Blutdruck, Atmung und Verdauung in Ruhephasen.',
        korrekt: false,
        erklaerung: 'Dies beschreibt den Parasympathikus im vegetativen Nervensystem, kein limbisches Emotionssystem.',
      }
    ],
    pruefen: false,
  },
  {
    id: 75,
    bereich: 6,
    frage: 'Was ist das Dominanzsystem?',
    optionen: [
      {
        text: 'Das System für Neugier, Kreativität, Spieltrieb, Erlebnishunger und das Ausprobieren neuer Trends.',
        korrekt: false,
        erklaerung: 'Dies beschreibt das Stimulanz-System.',
      },
      {
        text: 'Das System für Sicherheit, Stabilität, Risikominimierung, Fürsorge und Geborgenheit im vertrauten Umfeld.',
        korrekt: false,
        erklaerung: 'Dies beschreibt das Balance-System nach Häusel.',
      },
      {
        text: 'Das System für Macht, Status, Durchsetzung, Überlegenheit, Konkurrenzkampf und Ressourcenkontrolle (u. a. Testosteron).',
        korrekt: true,
        erklaerung: 'Das Dominanz-System zielt auf Siege, Verdrängung von Konkurrenten, Karriere und exklusiven Rang ab.',
      },
      {
        text: 'Das vegetative Alarmsystem zur plötzlichen Ausschüttung von Insulin bei der Nahrungsaufnahme.',
        korrekt: false,
        erklaerung: 'Insulinausschüttung ist ein endokriner Stoffwechselprozess, kein limbisches Verhaltenssystem.',
      }
    ],
    pruefen: false,
  },
  {
    id: 76,
    bereich: 7,
    frage: 'Welche Persönlichkeitsprofile von Verkäufern kennen Sie und erklären Sie diese?',
    optionen: [
      {
        text: 'Den transaktionalen Verkäufer, den transformationalen Verkäufer und den Laissez-faire-Verkäufer nach Kurt Lewin.',
        korrekt: false,
        erklaerung: 'Dies vermischt Führungsstile (Lewin, Bass) statt spezifische Verkäuferprofile im Vertrieb zu nennen.',
      },
      {
        text: 'Den bürokratischen Verkäufer, den traditionellen Verkäufer und den charismatischen Verkäufer nach Max Weber.',
        korrekt: false,
        erklaerung: 'Dies überträgt Webers soziologische Herrschaftsformen auf den Vertrieb, ist aber kein Vertriebsprofil.',
      },
      {
        text: 'Den extensiven Verkäufer, den habituellen Verkäufer und den impulsiven Verkäufer nach der Kaufverhaltenstypologie.',
        korrekt: false,
        erklaerung: 'Extensiv, habituell und impulsiv beschreiben das Kaufverhalten von Kunden, nicht Verkäuferprofile.',
      },
      {
        text: 'Den Hard Seller (abschlussorientiert, dominant), den Beziehungsmanager/Kunden-Versteher (empathisch, partnerschaftlich) und den Fachexperten (detailorientiert, analytisch).',
        korrekt: true,
        erklaerung: 'Diese klassische Typologie im Vertrieb unterscheidet Verkäufer nach Dominanz, Empathie und fachlicher Detailtiefe.',
      }
    ],
    pruefen: false,
  },
  {
    id: 77,
    bereich: 7,
    frage: 'Was verstehen Sie unter einem Hard Seller?',
    optionen: [
      {
        text: 'Einen abschlussfokussierten, dominanten Verkäufer, der schnellen Verkaufsdruck aufbaut und den unmittelbaren Deal über die Kundenbindung stellt.',
        korrekt: true,
        erklaerung: 'Hard Selling setzt auf Überredung, Druck und sofortigen Abschluss, birgt aber das Risiko hoher Stornoquoten und geringer Loyalität.',
      },
      {
        text: 'Einen Verkäufer, der sich ausschließlich auf langfristige Kundenbeziehungen konzentriert und den Abschluss dem Kunden überlässt.',
        korrekt: false,
        erklaerung: 'Dies beschreibt einen Soft Seller oder Relationship Manager, nicht den Hard Seller.',
      },
      {
        text: 'Einen detailorientierten Ingenieur, der Produkte nur anhand technischer Datenblätter und Normen sachlich vorstellt.',
        korrekt: false,
        erklaerung: 'Dies charakterisiert den beratenden Expertenverkäufer (Consultative Seller), keinen Hard Seller.',
      },
      {
        text: 'Einen passiven Verkäufer, der im Ladenlokal wartet, bis der Kunde von sich aus nach der Kasse fragt.',
        korrekt: false,
        erklaerung: 'Dies ist ein reiner Order-Taker oder Verteilverkäufer ohne aktive Verkaufsimpulse.',
      }
    ],
    pruefen: false,
  },
  {
    id: 78,
    bereich: 7,
    frage: 'Was sind Kunden-Versteher?',
    optionen: [
      {
        text: 'Verkäufer, die durch rhetorische Fangfragen und Einwandwiderlegungen den Kunden gezielt in die Enge treiben.',
        korrekt: false,
        erklaerung: 'Dies sind manipulative Verkaufstaktiken, die das Gegenteil eines echten Kundenverstehers darstellen.',
      },
      {
        text: 'Empathische Verkäufer, die aktiv zuhören, die tatsächlichen Motive und Probleme des Kunden ergründen und partnerschaftliche Lösungen entwickeln.',
        korrekt: true,
        erklaerung: 'Kundenversteher agieren als vertrauensvolle Berater («Consultative Selling»); sie bauen stabile, loyale Kundenbeziehungen auf.',
      },
      {
        text: 'Kaufleute, die Kunden ausschließlich nach deren Bonität und Zahlungsfähigkeit im Register einstufen.',
        korrekt: false,
        erklaerung: 'Bonitätsprüfung ist ein buchhalterischer Vorgang, keine vertriebspsychologische Haltung.',
      },
      {
        text: 'Verkäufer, die Kunden sofort bei jedem noch so kleinen Zweifel bedingungslose Maximalrabatte anbieten.',
        korrekt: false,
        erklaerung: 'Rabattvergabe ohne Beratung zeugt von Preisschwäche, nicht von kundenorientiertem Verständnis.',
      }
    ],
    pruefen: false,
  },
  {
    id: 79,
    bereich: 7,
    frage: 'Was sind Kunden-Profile und erklären Sie den Performer?',
    optionen: [
      {
        text: 'Ein sicherheitsorientierter Kunde, der vor allem Risikominimierung, Garantien und etablierte Referenzen sucht.',
        korrekt: false,
        erklaerung: 'Dies beschreibt den Bewahrer bzw. den Balance-Typen, nicht den Performer.',
      },
      {
        text: 'Ein neugieriger Erlebniskunde, der primär nach spielerischer Abwechslung und spontanem Spaß sucht.',
        korrekt: false,
        erklaerung: 'Dies charakterisiert den hedonistischen Abenteurer (Stimulanz-Typ).',
      },
      {
        text: 'Ein ziel- und erfolgsorientierter Kunde (Dominanz-Typ), der Wert auf Status, Effizienz, Prestige und Wettbewerbsvorteile legt.',
        korrekt: true,
        erklaerung: 'Performer wollen gewinnen, streben nach Anerkennung, Status und schnellen sichtbaren Resultaten.',
      },
      {
        text: 'Ein rein preissensibler Schnäppchenjäger, der ausschließlich Sonderangebote vergleicht und keinen Wert auf Marken legt.',
        korrekt: false,
        erklaerung: 'Performer suchen exklusiven Wert und Status, keine reinen Billigprodukte.',
      }
    ],
    pruefen: false,
  },
  {
    id: 80,
    bereich: 7,
    frage: 'Was sind Kunden-Profile und erklären Sie den Bewahrer?',
    optionen: [
      {
        text: 'Ein impulsiver Gefühlskäufer, der sich spontan von visuellen Verpackungsreizen leiten lässt.',
        korrekt: false,
        erklaerung: 'Bewahrer handeln überlegt und gründlich, niemals unbedacht oder impulsiv.',
      },
      {
        text: 'Ein dominanter Entscheider, der schnelle Risiken liebt und Angebote stets aggressiv nachverhandelt.',
        korrekt: false,
        erklaerung: 'Dies ist der dominante Performer, das genaue Gegenstück zum vorsichtigen Bewahrer.',
      },
      {
        text: 'Ein experimentierfreudiger Trendsetter, der immer als Erster die neuesten und ausgefallensten Produkte testen möchte.',
        korrekt: false,
        erklaerung: 'Dies beschreibt den Innovator bzw. Stimulanz-Kunden.',
      },
      {
        text: 'Ein Kunde, der durch das Balance-System geprägt ist: Er sucht Sicherheit, Stabilität, Zuverlässigkeit, bewährte Qualität und scheut Risiken.',
        korrekt: true,
        erklaerung: 'Bewahrer brauchen Zertifikate, Referenzen, langfristige Garantien und vertraute Abläufe zur Beruhigung ihres Sicherheitsbedürfnisses.',
      }
    ],
    pruefen: false,
  },
  {
    id: 81,
    bereich: 7,
    frage: 'Was verstehen Sie unter dem DISG®-4-Quadranten-Modell für Verkäufer?',
    optionen: [
      {
        text: 'Ein Verhaltensmodell zur Unterscheidung von vier Grundtypen: Dominant (rot), Initiativ (gelb), Stetig (grün) und Gewissenhaft (blau).',
        korrekt: true,
        erklaerung: 'DISG hilft Verkäufern, eigene Verhaltensstile zu reflektieren und sich flexibel auf das Verhalten des Kunden einzustellen.',
      },
      {
        text: 'Ein strategisches Portfoliomodell zur Einteilung von Kunden in Question Marks, Stars, Cash Cows und Poor Dogs.',
        korrekt: false,
        erklaerung: 'Dies ist die BCG-Matrix der strategischen Unternehmensplanung, nicht das DISG-Verhaltensmodell.',
      },
      {
        text: 'Ein vierstufiges Verhandlungskonzept zur schrittweisen Verhandlung von Skonto, Zahlungsziel, Lieferfrist und Garantie.',
        korrekt: false,
        erklaerung: 'Dies betrifft Konditionsverhandlungen, nicht das psychologische DISG-Persönlichkeitsmodell.',
      },
      {
        text: 'Ein Reifegradmodell zur Einteilung von Kunden in unselbstständig, lernend, mitwirkend und vollkommen autonom.',
        korrekt: false,
        erklaerung: 'Dies ist an das Reifegradmodell der Führung angelehnt, beschreibt aber nicht DISG.',
      }
    ],
    pruefen: false,
  },
  {
    id: 82,
    bereich: 7,
    frage: 'Was bedeutet in diesem Modell der «gewissenhafte Verkäufertyp»?',
    optionen: [
      {
        text: 'Extrem tempoorientiert, durchsetzungsstark, abschlussfokussiert und risikobereit im Wettbewerb um Prestige.',
        korrekt: false,
        erklaerung: 'Dies charakterisiert den dominanten (roten) Typen im DISG-Modell.',
      },
      {
        text: 'Detail- und faktenorientiert, analytisch, qualitätsbewusst und exakt vorbereitet; überzeugt durch logische Argumente und verlässliche Daten.',
        korrekt: true,
        erklaerung: 'Der gewissenhafte (blaue) Typ punktet mit Präzision, Gründlichkeit, Struktur und fehlerfreien Berechnungen.',
      },
      {
        text: 'Geduldig, teamorientiert, sicherheitsliebend und harmoniebedürftig bei der Betreuung langjähriger Stammkunden.',
        korrekt: false,
        erklaerung: 'Dies beschreibt den stetigen (grünen) Typen.',
      },
      {
        text: 'Begeisternd, kontaktfreudig, expressiv und beziehungsorientiert mit Fokus auf Networking und Smalltalk.',
        korrekt: false,
        erklaerung: 'Dies beschreibt den initiativen (gelben) Typen.',
      }
    ],
    pruefen: false,
  },
  {
    id: 83,
    bereich: 7,
    frage: 'Welche Käufertypen nach dem Insights®-MDI-Modell kennen Sie?',
    optionen: [
      {
        text: 'Konsumpsychologische Grundtypen: Spontankäufer, Gewohnheitskäufer, kognitiver Plankäufer und Schnäppchenjäger.',
        korrekt: false,
        erklaerung: 'Dies sind allgemeine Kaufentscheidungstypen, nicht das Insights-MDI-Farbenergiemodell.',
      },
      {
        text: 'Buying-Center-Rollen: Anwender, Initiator, Beeinflusser, Einkäufer und wirtschaftlicher Entscheider.',
        korrekt: false,
        erklaerung: 'Dies beschreibt funktionale Rollen im B2B-Kaufgremium (Buying Center), keine Insights-MDI-Typen.',
      },
      {
        text: 'Farbenergie-Typen: Roter Typ (direkt/handlungsorientiert), Gelber Typ (inspirierend/beziehungsorientiert), Grüner Typ (unterstützend/bedacht) und Blauer Typ (analytisch/systematisch).',
        korrekt: true,
        erklaerung: 'Insights MDI basiert auf C.G. Jungs Typologie und differenziert die 4 Farbenergien für Kommunikation und Verkauf.',
      },
      {
        text: 'Limbische Kundentypen: Bewahrer, Performer, Abenteurer, Genießer und disziplinierter Kontrolltyp.',
        korrekt: false,
        erklaerung: 'Dies sind Typen der Limbic Map nach Häusel, nicht die Farbenergien nach Insights MDI.',
      }
    ],
    pruefen: false,
  },
  {
    id: 84,
    bereich: 7,
    frage: 'Was sind die Merkmale des roten Käufertypen?',
    optionen: [
      {
        text: 'Prüft jedes technische Detail und verlangt schriftliche Prüfberichte, Berechnungen und Spezifikationen.',
        korrekt: false,
        erklaerung: 'Dies charakterisiert den blauen (analytischen/gewissenhaften) Käufertypen.',
      },
      {
        text: 'Braucht ausführliche persönliche Beziehungspflege, liebt emotionalen Smalltalk und trifft Kaufentscheidungen rein aus Sympathie.',
        korrekt: false,
        erklaerung: 'Dies beschreibt den gelben (initiativen/beziehungsorientierten) Käufertypen.',
      },
      {
        text: 'Zögert Entscheidungen lange hinaus, verlangt maximale Sicherheit, Garantien und Rückversicherung im Team.',
        korrekt: false,
        erklaerung: 'Dies kennzeichnet den grünen (stetigen/sicherheitsorientierten) Käufertypen.',
      },
      {
        text: 'Entscheidet zügig und ergebnisorientiert, fordert klare Fakten und den Nutzen auf den Punkt, schätzt Souveränität und mag kein langes Drumherumreden.',
        korrekt: true,
        erklaerung: 'Rote Kunden wollen Zeit sparen, sofort Ergebnisse sehen und erwarten vom Verkäufer präzise Augenhöhe und Klarheit.',
      }
    ],
    pruefen: false,
  },
  {
    id: 85,
    bereich: 8,
    frage: 'Was bedeutet im Verkauf Körpersprache und Voice Sells?',
    optionen: [
      {
        text: 'Nonverbale (Haltung, Blickkontakt, Gestik) und paraverbale Signale (Stimme, Tonlage, Tempo) prägen über 80 % des ersten Vertrauenseindrucks beim Kunden.',
        korrekt: true,
        erklaerung: 'Kunden spüren Inkongruenzen sofort; Stimme und Körpersprache transportieren Sicherheit, Sympathie und Souveränität.',
      },
      {
        text: 'Das rein wörtliche Formulieren rhetorischer Verkaufsargumente ohne jede Beachtung von Tonfall, Haltung oder Blickkontakt.',
        korrekt: false,
        erklaerung: 'Rhetorik allein überzeugt selten; erst kongruente Körpersprache und Stimme erzeugen Glaubwürdigkeit.',
      },
      {
        text: 'Das Einstudieren starrer mechanischer Gesten zur bewussten Verunsicherung des Verhandlungspartners im Verkaufsgespräch.',
        korrekt: false,
        erklaerung: 'Künstliche Einschüchterungsgesten zerstören das Vertrauen und verhindern partnerschaftliche Abschlüsse.',
      },
      {
        text: 'Die Annahme, dass Tonfall und Körperhaltung im professionellen B2B-Vertrieb keinerlei emotionale Wirkung entfalten.',
        korrekt: false,
        erklaerung: 'Auch im B2B-Geschäft entscheiden Menschen emotional und unbewusst über Vertrauen und Sympathie.',
      }
    ],
    pruefen: false,
  },
  {
    id: 86,
    bereich: 8,
    frage: 'Was sind Spiegelneuronen?',
    optionen: [
      {
        text: 'Rezeptoren in der Großhirnrinde, die ausschließlich für die logische Prüfung von Preisnachlässen und Rabatten zuständig sind.',
        korrekt: false,
        erklaerung: 'Spiegelneuronen sind für empathische Resonanz zuständig, nicht für rechnerische Preisprüfungen.',
      },
      {
        text: 'Nervenzellen im Gehirn, die beim Beobachten einer Handlung oder Emotion dasselbe neuronale Muster feuern und so Empathie, Rapport und Resonanz ermöglichen.',
        korrekt: true,
        erklaerung: 'Spiegelneuronen bilden das neurobiologische Fundament zwischenmenschlicher Empathie und unbewusster Einstimmung (Pacing/Leading).',
      },
      {
        text: 'Neurotransmitter im Belohnungssystem, die bei positivem Kundenfeedback unmittelbar Euphorie im Verkäufer auslösen.',
        korrekt: false,
        erklaerung: 'Neurotransmitter sind biochemische Botenstoffe (wie Dopamin), keine Nervenzell-Schaltkreise.',
      },
      {
        text: 'Hormonelle Botenstoffe, die bei empfundenem Verkaufsdruck eine reflexartige Fluchtreaktion des Kunden steuern.',
        korrekt: false,
        erklaerung: 'Stresshormone (Cortisol/Adrenalin) steuern Fluchtreaktionen, nicht Spiegelneuronen.',
      }
    ],
    pruefen: false,
  },
  {
    id: 87,
    bereich: 8,
    frage: 'Was sind beim Aufbau von Kundenbeziehungen die «3 Säulen des Vertrauens»?',
    optionen: [
      {
        text: 'Kontaktphase, Verhandlungsphase und Abschlussphase aus dem Verkaufsprozess.',
        korrekt: false,
        erklaerung: 'Dies verwechselt die Säulen des Vertrauens mit den chronologischen Gesprächsphasen eines Verkaufsgesprächs.',
      },
      {
        text: 'Sicherheitsbedürfnis, Preissensibilität und Prestigestreben aus der Kaufmotivforschung.',
        korrekt: false,
        erklaerung: 'Dies verwechselt Vertrauenssäulen mit Kaufmotiven des Kunden.',
      },
      {
        text: 'Fachliche Kompetenz (Können/Know-how), persönliche Integrität (Ehrlichkeit/Worttreue) sowie emotionale Wohlwollens- und Beziehungsebene (Empathie/Interesse).',
        korrekt: true,
        erklaerung: 'Vertrauen basiert auf dem Dreiklang: Fachwissen (Kompetenz), Verlässlichkeit (Integrität) und ehrliches Wohlwollen (Benevolence).',
      },
      {
        text: 'Sachebene, Beziehungsebene und Appellebene aus dem kommunikationspsychologischen Modell.',
        korrekt: false,
        erklaerung: 'Dies verwechselt Vertrauenssäulen mit den Kommunikationsebenen nach Schulz von Thun.',
      }
    ],
    pruefen: false,
  },
  {
    id: 88,
    bereich: 8,
    frage: 'Welche Kaufmotive gibt es?',
    optionen: [
      {
        text: 'Ausschließlich das Motiv des billigsten Preises, da Kunden marktübergreifend rein nach Anschaffungskosten entscheiden.',
        korrekt: false,
        erklaerung: 'Preis ist nur ein Motiv unter vielen; Kunden kaufen oft aus Sicherheits-, Bequemlichkeits- oder Prestigegründen.',
      },
      {
        text: 'Reaktiv getriebene Schmerzvermeidungsmotive bei Pflichtkäufen ohne jede emotionale Begleitwahrnehmung.',
        korrekt: false,
        erklaerung: 'Auch bei Schmerzvermeidung spielen starke Emotionen (Angst, Entlastung) eine zentrale Rolle.',
      },
      {
        text: 'Rationale Kaufmotive (z. B. Wirtschaftlichkeit, Zeitersparnis, Funktionalität) und emotionale Kaufmotive (z. B. Sicherheit, Prestige, Bequemlichkeit, Neugier).',
        korrekt: true,
        erklaerung: 'Kaufentscheidungen werden fast immer emotional angestoßen und anschließend rational begründet.',
      },
      {
        text: 'Statische Kaufmotive, die sich im gesamten Kundenlebenszyklus weder durch Alter noch durch Situation verändern.',
        korrekt: false,
        erklaerung: 'Kaufmotive sind hochdynamisch und hängen stark von Lebensphase, Kontext und Dringlichkeit ab.',
      }
    ],
    pruefen: false,
  },
  {
    id: 89,
    bereich: 8,
    frage: 'Was versteht man unter dem Motiv- und Werteraum des Kunden?',
    optionen: [
      {
        text: 'Das limbische Profil, das ausschließlich auf die Dominanzachse und das Streben nach Macht reduziert wird.',
        korrekt: false,
        erklaerung: 'Der Werteraum umfasst stets auch Balance- (Sicherheit) und Stimulanz-Werte (Neugier).',
      },
      {
        text: 'Die Summe aller vertraglichen Rabattkonditionen, die ein Einkäufer im Vorfeld maximal aushandeln darf.',
        korrekt: false,
        erklaerung: 'Dies beschreibt einen Verhandlungsspielraum, keinen psychologischen Werteraum.',
      },
      {
        text: 'Die tabellarische Kosten-Nutzen-Rechnung, mit der ein Kunde rein die Amortisationsdauer einer Investition ermittelt.',
        korrekt: false,
        erklaerung: 'Dies ist eine rein wirtschaftliche Kennzahlenrechnung, nicht der psychologische Werte- und Motivraum.',
      },
      {
        text: 'Die Gesamtheit der individuellen Werte, Glaubenssätze und unbewussten Antreiber des Kunden, die seine Wahrnehmung und Kaufbereitschaft steuern.',
        korrekt: true,
        erklaerung: 'Wer den Motiv- und Werteraum des Kunden versteht, kann Nutzenargumente exakt auf dessen Wertvorstellungen zuschneiden.',
      }
    ],
    pruefen: false,
  },
  {
    id: 90,
    bereich: 8,
    frage: 'Was bedeutet emotionales Verkaufen und Storytelling?',
    optionen: [
      {
        text: 'Produkte durch bildhafte Geschichten, Metaphern und emotionale Szenarien erlebbar zu machen, um Kopfkino auszulösen und das Belohnungszentrum zu aktivieren.',
        korrekt: true,
        erklaerung: 'Geschichten aktivieren emotionale Hirnareale, machen Nutzen greifbar und bleiben deutlich besser im Gedächtnis als reine Zahlen.',
      },
      {
        text: 'Die lückenlose Aufzählung möglichst vieler technischer Produktdatenblätter und DIN-Normen in sachlicher Form.',
        korrekt: false,
        erklaerung: 'Reine Datenuflistung ist sachlich-rational und erzeugt kein Kopfkino oder emotionale Begeisterung.',
      },
      {
        text: 'Das bewusste Erfinden falscher Firmenerfolge zur Täuschung des Kunden über tatsächliche Leistungsdaten.',
        korrekt: false,
        erklaerung: 'Glaubwürdigkeit ist oberstes Gebot; falsche Behauptungen zerstören das Vertrauen sofort.',
      },
      {
        text: 'Die Beschränkung des Verkaufsgesprächs auf das stumme Vorführen von Imagefilmen ohne persönliches Beratungsgespräch.',
        korrekt: false,
        erklaerung: 'Storytelling im Verkauf lebt von der persönlichen Interaktion und dem maßgeschneiderten Erzählen durch den Verkäufer.',
      }
    ],
    pruefen: false,
  },
  {
    id: 91,
    bereich: 8,
    frage: 'Welche 8 Tipps zur Emotionalisierung von Kunden kennen Sie?',
    optionen: [
      {
        text: 'Preise sofort nennen, Einwände sofort abbügeln, Fachjargon verwenden, Monologe halten, Zeitdruck ausüben, Standardangebote versenden, Bedenken ignorieren und rasch abschließen.',
        korrekt: false,
        erklaerung: 'Dies sind klassische Verkaufsfehler, die Kunden abschrecken und emotionalen Beziehungsaufbau verhindern.',
      },
      {
        text: 'Storytelling nutzen, Multisensorik aktivieren, Begeisterung vorleben, Bildsprache einsetzen, Nutzen statt Merkmale betonen, Empathie spiegeln, Überraschung bieten und Zukunftsbilder malen.',
        korrekt: true,
        erklaerung: 'Diese 8 praxiserprobten Techniken sprechen die Sinne und Gefühle des Kunden an und schaffen ein positives Einkaufserlebnis.',
      },
      {
        text: 'Ausschließlich technische Daten vorlesen, Rabatte kategorisch verweigern, Körpersprache einfrieren, Blickkontakt meiden, Broschüren aushändigen und schweigen.',
        korrekt: false,
        erklaerung: 'Dieses passive und distanzierte Verhalten erstickt jede Kundenbegeisterung im Keim.',
      },
      {
        text: 'Gespräche streng auf 3 Minuten limitieren, persönliche Fragen verbieten, neutrale Tabellen zeigen, Formulare ausfüllen lassen und das Treffen beenden.',
        korrekt: false,
        erklaerung: 'Emotionale Kundenbindung verlangt Beziehungsaufbau und Zeit für Dialog.',
      }
    ],
    pruefen: false,
  },
  {
    id: 92,
    bereich: 8,
    frage: 'In welche Bereiche unterteilen Sie die Verkaufsgesprächsführung?',
    optionen: [
      {
        text: 'Phasen des internen Beschwerdeprozesses: Entgegennahme, Protokollierung, Prüfung, Freigabe von Kulanz und Archivierung.',
        korrekt: false,
        erklaerung: 'Dies beschreibt Abläufe des Reklamationswesens, nicht die Bereiche des Verkaufsgesprächs.',
      },
      {
        text: 'Begrüßung des Kunden, Nennung des Maximalpreises, sofortiges Drängen auf Unterschrift und Verabschiedung ohne Beratung.',
        korrekt: false,
        erklaerung: 'Dies ist aggressives Druckverkaufen («Hard Selling»), das Bedarfe und Nutzen vollkommen ignoriert.',
      },
      {
        text: 'Kontakt- und Vertrauensphase, Bedarfs- und Motivanalyse, Nutzen- und Lösungspräsentation, Einwandbehandlung, Kaufabschluss sowie Nachbetreuung.',
        korrekt: true,
        erklaerung: 'Dieser bewährte 6-stufige Gesprächsleitfaden führt den Kunden strukturiert von der Begrüßung bis zur loyalen Bindung.',
      },
      {
        text: 'Marktbeobachtung, Produktentwicklung, Werksproduktion, Qualitätsprüfung und logistische Auslieferung.',
        korrekt: false,
        erklaerung: 'Dies sind Phasen des industriellen Produktentstehungsprozesses, keine Verkaufsgesprächsführung.',
      }
    ],
    pruefen: false,
  },
  {
    id: 93,
    bereich: 9,
    frage: 'Was sind die «Top Ten»-Fehler bei Preisverhandlungen?',
    optionen: [
      {
        text: 'Das schriftliche Protokollieren vereinbarter Lieferbedingungen, Zahlungsziele und Servicezusagen im Verhandlungsprotokoll.',
        korrekt: false,
        erklaerung: 'Schriftliche Dokumentation schafft Verbindlichkeit und ist eine bewährte Verhandlungspraxis.',
      },
      {
        text: 'Fehler bei der Marktanalyse: Zu genaue Wettbewerbsrecherche, detaillierte Kundenprofilierung und frühzeitige Definition des Minimalziels.',
        korrekt: false,
        erklaerung: 'Recherche, Kundenprofilierung und Zieldefinition sind unverzichtbare Erfolgsfaktoren, keine Fehler.',
      },
      {
        text: 'Fehler in der Reklamationsbearbeitung: Schnelles Antworten auf Kundenbeschwerden, Entschuldigung für Lieferverzögerungen und Kulanzbereitschaft.',
        korrekt: false,
        erklaerung: 'Dies betrifft den professionellen Kundenservice, nicht Fehler bei Preisverhandlungen.',
      },
      {
        text: 'Typische Fehler: Zu frühe Preisnennung vor Nutzenaufbau, unsichere Körpersprache, ungefragte Rabatte, Nachgeben ohne Gegenleistung und das Brechen der Sprechpause nach Nennung.',
        korrekt: true,
        erklaerung: 'Wer den Preis vor dem Nutzen nennt oder aus Angst vor Stille selbst nachverhandelt, schwächt die eigene Marge massiv.',
      }
    ],
    pruefen: false,
  },
  {
    id: 94,
    bereich: 9,
    frage: 'Was sind wichtige Punkte, die bei Preisverhandlungen zu beachten sind?',
    optionen: [
      {
        text: 'Nutzen immer vor dem Preis etablieren, den Preis selbstbewusst nennen und schweigen, niemals Rabatt ohne Gegenleistung gewähren («Konditionieren») und Wertargumente nutzen.',
        korrekt: true,
        erklaerung: 'Preispsychologie: Erst wenn der Kunde den Nutzen versteht, erscheint der Preis gerechtfertigt; Gegenforderungen schützen vor Rabattspiralen.',
      },
      {
        text: 'Beim ersten zögerlichen Blick des Einkäufers sofort 20 % Rabatt anbieten, um den Verhandlungsabschluss zu beschleunigen.',
        korrekt: false,
        erklaerung: 'Ungefragtes Nachgeben zerstört die Preiswürdigkeit und signalisiert dem Einkäufer überhöhte Ausgangspreise.',
      },
      {
        text: 'Den Angebotspreis im Gespräch geheim halten und den Kunden erst nach Leistungserbringung mit der Rechnung konfrontieren.',
        korrekt: false,
        erklaerung: 'Fehlende Preistransparenz zerstört das Vertrauen und führt zu massiven Kundenbeschwerden.',
      },
      {
        text: 'Geforderte Preisnachlässe stets bedingungslos gewähren, um die persönliche Sympathie des Verhandlungspartners zu sichern.',
        korrekt: false,
        erklaerung: 'Wer ohne Gegenleistung nachgibt, verliert Marge und Respekt beim Verhandlungspartner.',
      }
    ],
    pruefen: false,
  },
  {
    id: 95,
    bereich: 9,
    frage: 'Was sind Preisanker?',
    optionen: [
      {
        text: 'Die kalkulatorischen Selbstkosten eines Produkts, unterhalb derer kein gewerblicher Verkauf mehr wirtschaftlich tragfähig ist.',
        korrekt: false,
        erklaerung: 'Dies beschreibt die betriebswirtschaftliche Preisuntergrenze, keinen psychologischen Preisanker.',
      },
      {
        text: 'Ein psychologischer Referenzwert (Ankereffekt): Ein zuerst genannter hoher Ausgangspreis dient als unbewusster Maßstab, wodurch nachfolgende Preise günstiger wahrgenommen werden.',
        korrekt: true,
        erklaerung: 'Das Gehirn orientiert sich am ersten genannten Zahlenwert; nachfolgende Angebote werden relativ zu diesem «Anker» bewertet.',
      },
      {
        text: 'Feste unveränderliche Rabattsätze, die in Rahmenverträgen für Großkunden dauerhaft festgeschrieben sind.',
        korrekt: false,
        erklaerung: 'Vertragliche Rabattkonditionen sind Konditionsvereinbarungen, keine kognitiven Preisanker.',
      },
      {
        text: 'Die gesetzlich vorgeschriebene Preisauszeichnungspflicht für Waren im stationären Schaufenster.',
        korrekt: false,
        erklaerung: 'Preisauszeichnung ist eine gesetzliche Vorgabe im Handel, kein verkaufspsychologischer Ankereffekt.',
      }
    ],
    pruefen: false,
  },
  {
    id: 96,
    bereich: 9,
    frage: 'Was verstehen Sie unter «Bundling»?',
    optionen: [
      {
        text: 'Das separate Ausweisen und minutengenaue Einzelberechnen jeder kleinsten Leistungskomponente auf getrennten Rechnungen.',
        korrekt: false,
        erklaerung: 'Dies ist «Unbundling» (Entbündelung), das genaue Gegenteil von Paketpreisen.',
      },
      {
        text: 'Die vertragliche Vereinbarung zinsloser Ratenzahlungen über mehrere Jahre zur Absatzfinanzierung.',
        korrekt: false,
        erklaerung: 'Dies betrifft Absatzfinanzierung und Zahlungskonditionen, nicht Produktbündelung.',
      },
      {
        text: 'Das Bündeln mehrerer Einzelprodukte oder Dienstleistungen zu einem Gesamtpaket zu einem Pauschalpreis, was den direkten Preisvergleich erschwert und den Mehrwert steigert.',
        korrekt: true,
        erklaerung: 'Bundling (Paketpreisstrategie) reduziert die Preistransparenz für Einzelelemente und stimuliert höhere Gesamtausgaben beim Kunden.',
      },
      {
        text: 'Die Verpflichtung des Kunden, Ersatzteile und Wartung ausschließlich beim ursprünglichen Hersteller zu beziehen.',
        korrekt: false,
        erklaerung: 'Dies bezeichnet vertragliche Ausschließlichkeitsbindung (Lock-in), kein Bündelangebot.',
      }
    ],
    pruefen: false,
  },
  {
    id: 97,
    bereich: 9,
    frage: 'Was sind die 6 Phasen bei Verhandlungen?',
    optionen: [
      {
        text: 'Phasen des Innovationsmanagements: Ideenfindung, Konzeptprüfung, Prototypenbau, Testmarkt, Markteinführung und Produktpflege.',
        korrekt: false,
        erklaerung: 'Dies sind Schritte der Produktentwicklung, nicht der Verhandlungsführung.',
      },
      {
        text: 'Phasen der Personalrekrutierung: Stellenausschreibung, Bewerbersichtung, Interview, Assessment-Center, Vertragsangebot und Probezeit.',
        korrekt: false,
        erklaerung: 'Dies sind Schritte des Recruiting-Prozesses, keine Verhandlungsphasen.',
      },
      {
        text: 'Phasen des gerichtlichen Mahnverfahrens: Zahlungserinnerung, Mahnbescheid, Vollstreckungsbescheid, Einspruch, Verhandlung und Pfändung.',
        korrekt: false,
        erklaerung: 'Dies beschreibt ein juristisches Mahn- und Vollstreckungsverfahren, keine kooperative Verhandlungsführung.',
      },
      {
        text: 'Vorbereitung, Eröffnung/Beziehungsaufbau, Sondierung/Interessenerforschung, Verhandeln/Konzessionen, Einigung/Abschluss sowie Nachbereitung und Umsetzung.',
        korrekt: true,
        erklaerung: 'Dieser strukturierte Ablauf sichert eine fundierte Vorbereitung, Interessensklärung und tragfähige Vereinbarungen.',
      }
    ],
    pruefen: false,
  },
  {
    id: 98,
    bereich: 9,
    frage: 'Was sind die 4 Prinzipien des «Harvard Konzepts»?',
    optionen: [
      {
        text: 'Menschen und Probleme getrennt behandeln, auf Interessen statt Positionen konzentrieren, Optionen zum beiderseitigen Vorteil entwickeln und objektive Kriterien anwenden.',
        korrekt: true,
        erklaerung: 'Fisher und Ury entwickelten diese 4 Prinzipien für sachbezogenes, faires und nachhaltig erfolgreiches Verhandeln (Win-Win).',
      },
      {
        text: 'Die eigene Maximalforderung unnachgiebig vertreten, Schwächen des Partners nutzen, Zeitdruck aufbauen und Schmerzgrenzen testen.',
        korrekt: false,
        erklaerung: 'Dies ist destruktives positionelles Verhandeln, das das Harvard-Konzept ausdrücklich überwinden will.',
      },
      {
        text: 'Sofortige bedingungslose Nachgiebigkeit zeigen, Konflikte um jeden Preis meiden und persönliche Harmonie über Sachziele stellen.',
        korrekt: false,
        erklaerung: 'Harvard bedeutet «hart in der Sache, aber sanft zu den Menschen» – kein faules Nachgeben.',
      },
      {
        text: 'Die vier Kommunikationsmaximen nach Grice: Quantität, Qualität, Relevanz und sprachliche Modalität im Dialog.',
        korrekt: false,
        erklaerung: 'Dies sind linguistische Konversationsmaximen von H. Paul Grice, nicht die Verhandlungsprinzipien von Harvard.',
      }
    ],
    pruefen: false,
  },
  {
    id: 99,
    bereich: 9,
    frage: 'Was versteht man in der Verhandlungstechnik unter der «LIMO-Methode»?',
    optionen: [
      {
        text: 'Eine Deeskalationstechnik im Konfliktgespräch: Loben, Informieren, Moderieren und Orientieren.',
        korrekt: false,
        erklaerung: 'LIMO ist im Verhandlungstraining ein Zielkorridormodell, keine Deeskalationstechnik.',
      },
      {
        text: 'Ein Zielsystem zur Vorbereitung: Lust-Ziel (Maximalziel), Ideal-Ziel (realistisches Best-Case), Minimal-Ziel (Schmerzgrenze) und Ohne-mich-Ziel (Walk-Away-Point).',
        korrekt: true,
        erklaerung: 'LIMO gibt dem Verhandler einen klaren Korridor von der Wunscherfüllung bis zur Grenze, an der die Verhandlung abgebrochen wird.',
      },
      {
        text: 'Ein Konditionensystem im Großhandel: Lieferrabatt, Inzahlungnahme, Mengenstaffel und Skonto.',
        korrekt: false,
        erklaerung: 'Dies sind kaufmännische Rabattarten, nicht das Akronym LIMO.',
      },
      {
        text: 'Ein Fragesystem zur Bedarfsanalyse: Leitfragen, Informationsfragen, Motivationsfragen und Offene Fragen.',
        korrekt: false,
        erklaerung: 'Dies ist eine kaufmännische Fragentechnik, nicht die verhandlungstechnische LIMO-Methode.',
      }
    ],
    pruefen: false,
  },
  {
    id: 100,
    bereich: 9,
    frage: 'Wie kann man die Weiterempfehlungsrate steigern?',
    optionen: [
      {
        text: 'Durch Einmalrabatte beim Erstkauf in der stillen Hoffnung, dass Kunden ohne jede Nachbetreuung von sich aus werben.',
        korrekt: false,
        erklaerung: 'Passives Warten ohne Begeisterung und gezielte Ansprache bringt kaum Weiterempfehlungen.',
      },
      {
        text: 'Ausschließlich durch das Ausloben hoher Geldprämien bei gleichzeitiger Vernachlässigung des Kundenservices nach dem Kauf.',
        korrekt: false,
        erklaerung: 'Geldprämien ohne exzellenten Service führen nicht zu echten, glaubwürdigen Weiterempfehlungen.',
      },
      {
        text: 'Indem man Garantieleistungen vertraglich davon abhängig macht, dass der Kunde vorab neue Interessenten vermittelt.',
        korrekt: false,
        erklaerung: 'Kopplung von Pflichtleistungen an Weiterempfehlungen verärgert Kunden und zerstört jede Kundenbeziehung.',
      },
      {
        text: 'Durch konsequente Übertreffung der Erwartungen («Customer Delight»), aktives und systematisches Fragen nach Empfehlungen zum passenden Zeitpunkt und persönliche Wertschätzung.',
        korrekt: true,
        erklaerung: 'Zufriedene Kunden empfehlen weiter, wenn sie begeistert sind und der Verkäufer gezielt und wertschätzend nach Kontakten fragt.',
      }
    ],
    pruefen: false,
  }
];
