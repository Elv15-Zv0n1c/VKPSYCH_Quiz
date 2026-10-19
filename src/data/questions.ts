import { Question } from '../types/quiz';

export const INITIAL_QUESTIONS: Question[] = [
  {
    "id": 1,
    "bereich": 1,
    "frage": "Was bedeutet Führung?",
    "optionen": [
      {
        "text": "Zielgerichtete soziale Beeinflussung von Menschen zur Erreichung gemeinsamer Unternehmens- und Teamziele.",
        "korrekt": true,
        "erklaerung": "Führung wird in der Managementlehre als zielgerichtete soziale Einflussnahme definiert, um Aufgaben zu koordinieren und Mitarbeiter zur Zielerreichung zu bewegen."
      },
      {
        "text": "Ausschließliche formale Ausübung von Weisungsbefugnis und hierarchischer Macht über nachgeordnete Stellen im Organigramm.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt rein administrative Weisungsgewalt, vernachlässigt jedoch den sozialen Beziehungs-, Motivations- und Zielbezug moderner Führung."
      },
      {
        "text": "Reine operative Koordination von Arbeitsabläufen und Sachressourcen ohne zwischenmenschliche Interaktions- und Beziehungsaspekte.",
        "korrekt": false,
        "erklaerung": "Hierbei handelt es sich um bloßes Prozess- oder Arbeitsplatzmanagement. Führung erfordert zwingend zwischenmenschliche Interaktion und Beziehungsgestaltung."
      },
      {
        "text": "Kontinuierliche Überwachung aller Einzelschritte zur vollständigen Fehlervermeidung im operativen Tagesgeschäft des Betriebs.",
        "korrekt": false,
        "erklaerung": "Dies kennzeichnet negatives Mikromanagement oder bloße Kontrolle, ist jedoch keine zukunftsorientierte Definition von Führung."
      }
    ],
    "pruefen": false
  },
  {
    "id": 2,
    "bereich": 1,
    "frage": "Was sind die Aufgaben einer Führungskraft?",
    "optionen": [
      {
        "text": "Ziele vereinbaren, organisieren, entscheiden, kontrollieren sowie Mitarbeiter gezielt fördern und entwickeln.",
        "korrekt": true,
        "erklaerung": "Diese Kernaufgaben entsprechen dem klassischen und praxisbewährten Management-Kanon (u. a. nach Fredmund Malik und Peter Drucker)."
      },
      {
        "text": "Operative Fachaufgaben stets persönlich erledigen, Arbeitszeiten erfassen und Budgetabweichungen im Detail nachrechnen.",
        "korrekt": false,
        "erklaerung": "Dies sind überwiegend ausführende Fach- oder Controllingtätigkeiten, die keine originären Führungsaufgaben darstellen."
      },
      {
        "text": "Konflikte im Team durch starre Anweisungen im Vorfeld unterbinden und Vorgaben der Geschäftsleitung unreflektiert durchdrücken.",
        "korrekt": false,
        "erklaerung": "Konfliktvermeidung und blindes Delegieren widersprechen wirksamer Führungsarbeit; Führungskräfte müssen moderieren, filtern und gestalten."
      },
      {
        "text": "Ausschließlich strategische Unternehmensvisionen entwerfen und die operative Steuerung komplett der Belegschaft überlassen.",
        "korrekt": false,
        "erklaerung": "Strategische Weitsicht ist wichtig, entbindet Führungskräfte jedoch keinesfalls von der operativen Umsetzungs- und Kontrollverantwortung."
      }
    ],
    "pruefen": false
  },
  {
    "id": 3,
    "bereich": 1,
    "frage": "Was ist der Unterschied zwischen Führungsstil und Führungsverhalten?",
    "optionen": [
      {
        "text": "Der Führungsstil ist das zeitlich überdauernde Grundmuster, während Führungsverhalten das konkrete situative Handeln darstellt.",
        "korrekt": true,
        "erklaerung": "Führungsstil beschreibt die habituelle Grundeinstellung und das Verhaltensmuster; Führungsverhalten ist die jeweilige Ausprägung in einer spezifischen Situation."
      },
      {
        "text": "Führungsstil beschreibt das spontane Reagieren im Einzelfall, während Führungsverhalten die unveränderliche Grundhaltung im Berufsalltag meint.",
        "korrekt": false,
        "erklaerung": "Hier wurden die Definitionen genau vertauscht: Der Stil ist das stabile Muster, das Verhalten die konkrete Einzelsituation."
      },
      {
        "text": "Führungsstil bezieht sich nur auf Top-Manager, während Führungsverhalten ausschließlich für operative Teamleiter in Projekten gilt.",
        "korrekt": false,
        "erklaerung": "Beide Konzepte gelten für alle Hierarchieebenen; es gibt keine Beschränkung von Führungsstil auf oberste Führungsebenen."
      },
      {
        "text": "Führungsstil ist rein arbeitsvertraglich geregelt, während Führungsverhalten ausschließlich informell in Pausen und Nebengesprächen gezeigt wird.",
        "korrekt": false,
        "erklaerung": "Führungsstil ist kein Vertragspunkt, sondern ein handlungsleitendes Muster; Führungsverhalten betrifft das gesamte berufliche Wirken."
      }
    ],
    "pruefen": false
  },
  {
    "id": 4,
    "bereich": 1,
    "frage": "Wie heißen die 7 Grundsätze der Führung nach Malik?",
    "optionen": [
      {
        "text": "Resultatorientierung, Beitrag zum Ganzen, Konzentration auf Weniges, Stärken nutzen, Vertrauen schaffen, Positiv denken und Sinn vermitteln.",
        "korrekt": true,
        "erklaerung": "Fredmund Malik formuliert 6 Grundsätze wirksamer Führung; in vielen Curricula und Managementprogrammen wird «Sinn vermitteln» als 7. Grundsatz ergänzt."
      },
      {
        "text": "Zielvereinbarung, Delegation, permanente Leistungskontrolle, Mitarbeitergespräche, Budgetdisziplin, Prozessoptimierung und Risikovermeidung.",
        "korrekt": false,
        "erklaerung": "Dies sind klassische Management-Aufgaben und Kontrollwerkzeuge, jedoch nicht Maliks verhaltensleitende Grundsätze wirksamer Führung."
      },
      {
        "text": "Planen, Organisieren, Entscheiden, Kontrollieren, Entwickeln, Kommunizieren und Koordinieren aller operativen Arbeitsprozesse im Betrieb.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt Fayols klassische Managementfunktionen (Aufgaben des Managers), keine Grundsätze im Sinne der St. Galler Managementlehre."
      },
      {
        "text": "Agilität maximieren, Hierarchien abbauen, Konsens erzwingen, Homeoffice vorschreiben, Daily Stand-ups halten, Slack nutzen und Boni verteilen.",
        "korrekt": false,
        "erklaerung": "Dies sind methodische Werkzeuge moderner Arbeitsformen, keine zeitlosen Führungsprinzipien nach der St. Galler Managementlehre."
      }
    ],
    "pruefen": true
  },
  {
    "id": 5,
    "bereich": 1,
    "frage": "Welche Arten der Verantwortung kennen Sie?",
    "optionen": [
      {
        "text": "Handlungs- bzw. Ausführungsverantwortung, Ergebnis- bzw. Sachverantwortung sowie Führungs- bzw. Leitungsverantwortung.",
        "korrekt": true,
        "erklaerung": "Diese klassische Dreiteilung trennt sauber zwischen der Durchführung der Aufgabe, dem Erreichen des Sachziels und der übergeordneten Führungsverantwortung."
      },
      {
        "text": "Disziplinarische Vorgesetztenverantwortung, gesellschaftliche Unternehmensverantwortung und moralische Eigenverantwortung.",
        "korrekt": false,
        "erklaerung": "Dies vermischt arbeitsrechtliche Begriffe mit Corporate Social Responsibility (CSR) und individueller Ethik, statt der betrieblichen Verantwortungsarten."
      },
      {
        "text": "Strategische Marktverantwortung, operative Budgetverantwortung und juristische Produkthaftungsverantwortung im Betrieb.",
        "korrekt": false,
        "erklaerung": "Dies sind betriebswirtschaftliche und rechtliche Zuständigkeitsbereiche, nicht die klassischen Arten organisatorischer Verantwortung."
      },
      {
        "text": "Prozessverantwortung, agile Projektverantwortung und reine Informationsweitergabeverantwortung an Dritte.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt funktionale Rollenbeschreibungen im Projekt- und Prozessmanagement, nicht die grundlegenden Verantwortungsarten der Führungslehre."
      }
    ],
    "pruefen": false
  },
  {
    "id": 6,
    "bereich": 1,
    "frage": "Was macht eine effektive Führungskraft aus?",
    "optionen": [
      {
        "text": "Sie fokussiert auf Resultate, nutzt vorhandene Stärken, konzentriert sich auf Wesentliches und schafft ein Umfeld des Vertrauens.",
        "korrekt": true,
        "erklaerung": "Effektivität bedeutet «die richtigen Dinge tun». Dies umfasst nach Drucker und Malik Stärkenorientierung, Wesentlichkeitsfokus und Vertrauensaufbau."
      },
      {
        "text": "Sie erledigt operative Fachaufgaben stets persönlich und kontrolliert jeden einzelnen Handlungsschritt der Mitarbeiter bis ins kleinste Detail.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt ineffektives Mikromanagement und Facharbeit, wodurch strategische Führungsaufgaben und Delegation vernachlässigt werden."
      },
      {
        "text": "Sie versucht primär von allen gemocht zu werden, meidet unpopuläre Leistungsentscheidungen und delegiert schwierige Führungsgespräche.",
        "korrekt": false,
        "erklaerung": "Harmoniesucht («People Pleaser») führt zu Führungsschwäche und Orientierungslosigkeit im Team, statt wirksame Ergebnisse zu sichern."
      },
      {
        "text": "Sie verlässt sich ausschließlich auf charismatische Reden und verzichtet auf systematische Zielvereinbarungen und transparente Kontrollen.",
        "korrekt": false,
        "erklaerung": "Charisma ohne handwerkliche Führungskompetenz, Zielklarheit und Verlässlichkeit führt selten zu nachhaltiger Führungswirksamkeit."
      }
    ],
    "pruefen": false
  },
  {
    "id": 7,
    "bereich": 2,
    "frage": "Was versteht man unter Menschenbilder und welche Arten kennen Sie?",
    "optionen": [
      {
        "text": "Grundlegende Annahmen über Wesen, Motive und Verhalten von Menschen, wie Theorie X/Y oder die Typologien von Edgar Schein.",
        "korrekt": true,
        "erklaerung": "Menschenbilder sind handlungsleitende Grundannahmen über die Natur des Menschen im Arbeitsleben, die das Führungsverhalten unbewusst oder bewusst steuern."
      },
      {
        "text": "Empirisch gemessene Persönlichkeitsprofile auf Basis psychometrischer Tests wie dem DISG- oder dem Myers-Briggs-Modell im Recruiting.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt Persönlichkeitsdiagnostik zur Erfassung individueller Verhaltensstile, nicht die übergeordneten philosophischen Menschenbilder."
      },
      {
        "text": "Rechtliche Definitionen der Dienstpflichten und Haftungsnormen von Arbeitnehmern im österreichischen Arbeits- und Angestelltengesetz.",
        "korrekt": false,
        "erklaerung": "Hierbei handelt es sich um arbeitsrechtliche Rechtsbegriffe und Pflichtenkataloge, nicht um sozialpsychologische Menschenbilder."
      },
      {
        "text": "Soziologische Schichtenmodelle zur Einteilung von Mitarbeitern nach formalen Bildungsabschlüssen und tariflichen Einkommensgruppen.",
        "korrekt": false,
        "erklaerung": "Soziologische Schichtungs- und Milieumodelle beschreiben gesellschaftliche Strukturen, aber keine führungsrelevanten Menschenbilder."
      }
    ],
    "pruefen": false
  },
  {
    "id": 8,
    "bereich": 2,
    "frage": "Von wem ist die Theorie X und Theorie Y?",
    "optionen": [
      {
        "text": "Douglas McGregor, der diese beiden gegensätzlichen Menschenbilder 1960 in «The Human Side of Enterprise» formulierte.",
        "korrekt": true,
        "erklaerung": "Douglas McGregor begründete die Theorie X (pessimistisches Menschenbild) und Theorie Y (optimistisches Menschenbild) als Grundlage moderner Führung."
      },
      {
        "text": "Kurt Lewin, der Führungsstile anhand von Gruppenexperimenten mit Jugendlichen an amerikanischen Universitäten empirisch erforschte.",
        "korrekt": false,
        "erklaerung": "Kurt Lewin ist berühmt für die Erforschung der Führungsstile (autoritär, demokratisch, Laissez-faire), nicht für Theorie X und Y."
      },
      {
        "text": "Max Weber, der diese Klassifikation zur Analyse charismatischer, traditioneller und bürokratischer Herrschaftsformen entwarf.",
        "korrekt": false,
        "erklaerung": "Max Weber analysierte Herrschaftsformen (patriarchalisch, bürokratisch, charismatisch), entwickelte jedoch nicht Theorie X und Y."
      },
      {
        "text": "Frederick Winslow Taylor, der diese Einteilung zur Steigerung manueller Effizienzschritte im Scientific Management entwickelte.",
        "korrekt": false,
        "erklaerung": "Taylor begründete das Scientific Management (Taylorismus), welches zwar der Theorie X ähnelt, die begriffliche Theorie stammt jedoch von McGregor."
      }
    ],
    "pruefen": false
  },
  {
    "id": 9,
    "bereich": 2,
    "frage": "Wie können Sie die Theorie X erklären?",
    "optionen": [
      {
        "text": "Der Mensch ist von Natur aus träge, meidet Verantwortung und muss durch Zwang, Kontrolle und extrinsische Anreize gelenkt werden.",
        "korrekt": true,
        "erklaerung": "Theorie X geht von einem negativen Menschenbild aus: Arbeit wird als Last empfunden, weshalb Druck, Belohnung und strenge Aufsicht nötig seien."
      },
      {
        "text": "Der Mensch sucht von Natur aus Sinn, entfaltet kreative Potenziale selbstständig und benötigt primär weitreichende Freiräume zur Entfaltung.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt das optimistische Menschenbild der Theorie Y, das dem negativen Bild der Theorie X exakt gegenübersteht."
      },
      {
        "text": "Der Mitarbeiter ist vor allem durch soziale Anerkennung und Gruppenzugehörigkeit motiviert, während materielle Anreize vollkommen nachrangig sind.",
        "korrekt": false,
        "erklaerung": "Dies entspricht dem «Social Man» der Human-Relations-Bewegung (Elton Mayo), nicht der Theorie X nach McGregor."
      },
      {
        "text": "Der Mitarbeiter besitzt vielschichtige, wandelbare Motive, die sich situationsabhängig und im Lebensverlauf kontinuierlich neu ausrichten.",
        "korrekt": false,
        "erklaerung": "Dies kennzeichnet den «Complex Man» nach Edgar Schein, nicht das statisch-pessimistische Modell der Theorie X."
      }
    ],
    "pruefen": false
  },
  {
    "id": 10,
    "bereich": 2,
    "frage": "Wie können Sie die Theorie Y erklären?",
    "optionen": [
      {
        "text": "Der Mensch sieht Arbeit als Quelle der Zufriedenheit, ist lern- und leistungsbereit und übernimmt bei passenden Bedingungen gerne Verantwortung.",
        "korrekt": true,
        "erklaerung": "Theorie Y nimmt an, dass Menschen intrinsisch motiviert sind, eigene Potenziale entfalten wollen und durch Vertrauen zu Höchstleistung finden."
      },
      {
        "text": "Der Mitarbeiter arbeitet ausschließlich dann zuverlässig, wenn ihm bei Nichterfüllung mit spürbaren arbeitsrechtlichen Sanktionen gedroht wird in der täglichen betrieblichen Praxis und Unternehmensführung.",
        "korrekt": false,
        "erklaerung": "Diese Annahme von Zwang und Strafandrohung ist das typische Kennzeichen der Theorie X, nicht der Theorie Y."
      },
      {
        "text": "Der Mitarbeiter verlangt stets nach detaillierten Dienstplänen und lehnt jede Form von Mitbestimmung oder Eigeninitiative entschieden ab.",
        "korrekt": false,
        "erklaerung": "Die Ablehnung von Eigenverantwortung und das Verlangen nach strikter Steuerung gehört zum Menschenbild der Theorie X."
      },
      {
        "text": "Menschliches Leistungsvermögen hängt ausschließlich von monetären Boni ab, persönliche Anerkennung spielt dabei wissenschaftlich keine Rolle.",
        "korrekt": false,
        "erklaerung": "Reine Geldorientierung entspricht dem Taylorismus und dem «Rational Economic Man», während Theorie Y intrinsische Motive betont."
      }
    ],
    "pruefen": false
  },
  {
    "id": 11,
    "bereich": 2,
    "frage": "Wie erklären Sie den Führungskreis der Theorie X und Y?",
    "optionen": [
      {
        "text": "Als selbsterfüllende Prophezeiung: Das Menschenbild prägt das Führungsverhalten, worauf Mitarbeiter spiegelbildlich reagieren und die Annahme bestätigen.",
        "korrekt": true,
        "erklaerung": "Führt Misstrauen (Theorie X) zu Kontrolle, reagieren Mitarbeiter mit Dienst nach Vorschrift, was das Misstrauen bestätigt. Vertrauen (Theorie Y) erzeugt Eigeninitiative."
      },
      {
        "text": "Als stufenweises Phasenmodell, bei dem neue Mitarbeiter mit Theorie X beginnen und nach Beförderung nach Theorie Y geführt werden müssen.",
        "korrekt": false,
        "erklaerung": "Der Führungskreis ist ein dynamischer psychologischer Wirkungskreislauf (Pygmalion-Effekt), kein administratives Laufbahn- oder Phasenmodell."
      },
      {
        "text": "Als dualen Regelkreis, in dem die Führungskraft je nach Tagesform zwischen autoritärer Kontrolle und partnerschaftlicher Beteiligung pendelt.",
        "korrekt": false,
        "erklaerung": "Der Führungskreis beschreibt die wechselseitige Verstärkung von Annahme und Verhalten, nicht ein unberechenbares Pendeln der Führungskraft."
      },
      {
        "text": "Als kybernetisches Steuerungsmodell, das die monetäre Entlohnung an den Grad der gezeigten Eigeninitiative der Mitarbeiter direkt koppelt.",
        "korrekt": false,
        "erklaerung": "Es handelt sich um ein qualitatives Beziehungs- und Rückkopplungsmodell der Führung, nicht um eine Entgeltsystematik."
      }
    ],
    "pruefen": false
  },
  {
    "id": 12,
    "bereich": 2,
    "frage": "Was ist das Menschenbild der Z-Theorie?",
    "optionen": [
      {
        "text": "Geprägt von Loyalität, kollektiver Verantwortung, hoher Identifikation und langfristiger Bindung zwischen Mitarbeiter und Organisation (nach Ouchi).",
        "korrekt": true,
        "erklaerung": "William Ouchis Theorie Z (inspiriert vom japanischen Management) sieht den Menschen als soziales, loyales Wesen, das in stabilen Gemeinschaften aufblüht."
      },
      {
        "text": "Ausgerichtet auf kurzfristige Projektarbeit, maximale individuelle Unabhängigkeit und rein ergebnisorientierte variable Vergütungsverträge.",
        "korrekt": false,
        "erklaerung": "Theorie Z steht für das Gegenteil: langfristige Beschäftigung, implizite Kontrolle und ganzheitliches Interesse am Menschen statt Kurzfristigkeit."
      },
      {
        "text": "Basiert auf der Annahme, dass Mitarbeiter ausschließlich durch standardisierte IT-Workflows und algorithmische Kennzahlen gesteuert werden können.",
        "korrekt": false,
        "erklaerung": "Theorie Z betont ausdrücklich zwischenmenschliche Wärme, Vertrauen und kollegiale Werte, keine technokratische Prozesssteuerung."
      },
      {
        "text": "Sieht den Mitarbeiter als rationalen Nutzenmaximierer, der nur bei lückenloser Prozesskontrolle seine vertraglichen Pflichten zuverlässig erfüllt zur Sicherung langfristiger Wettbewerbsvorteile am Markt.",
        "korrekt": false,
        "erklaerung": "Theorie Z basiert auf Harmonie, Gruppenorientierung und gegenseitigem Respekt, nicht auf dem utilitaristischen Kontrollbild der Theorie X."
      }
    ],
    "pruefen": false
  },
  {
    "id": 13,
    "bereich": 2,
    "frage": "Wie erklären Sie die Menschenbilder nach der Theorie von Edgar Schein?",
    "optionen": [
      {
        "text": "Als historische Entwicklung von vier Menschenbildern: Rational-ökonomischer Mensch, Sozialer Mensch, Selbstverwirklichender Mensch und Komplexer Mensch.",
        "korrekt": true,
        "erklaerung": "Edgar H. Schein systematisierte die Führungsgeschichte in diese vier aufeinander aufbauenden Menschenbilder mit jeweils passenden Führungsansätzen."
      },
      {
        "text": "Als Einteilung in vier fundamentale Persönlichkeitstypen nach Verhaltenspräferenzen: Dominant, Initiativ, Stetig und Gewissenhaft im Arbeitsleben unter Berücksichtigung personeller und organisatorischer Rahmenbedingungen.",
        "korrekt": false,
        "erklaerung": "Dies ist das DISG-Persönlichkeitsmodell, nicht die organizationspsychologische Menschenbild-Theorie von Edgar Schein."
      },
      {
        "text": "Als Differenzierung von Führungskräften anhand der Achsen Aufgabenorientierung, Beziehungsorientierung und situative Effektivität im Management.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt das 3-D-Modell von William J. Reddin, keine Menschenbildtheorie nach Edgar Schein."
      },
      {
        "text": "Als Klassifikation von Mitarbeitermotiven nach den drei angeborenen Grundbedürfnissen Leistung, Macht und soziale Zugehörigkeit im Unternehmen.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt die Motivationstheorie von David McClelland, nicht Scheins Systematik der Menschenbilder."
      }
    ],
    "pruefen": false
  },
  {
    "id": 14,
    "bereich": 2,
    "frage": "Welche Eigenheiten hat der rational-ökonomische Mensch nach Edgar Schein?",
    "optionen": [
      {
        "text": "Er handelt zweckrational zur Maximierung des eigenen Nutzens, wird durch finanzielle Anreize motiviert und agiert im Betrieb eher passiv.",
        "korrekt": true,
        "erklaerung": "Der «Rational Economic Man» entspricht dem klassischen Homo Oeconomicus (Taylorismus): Primäre Steuerung über materielle Anreize und straffe Aufsicht."
      },
      {
        "text": "Er stellt soziale Beziehungen und Teamzugehörigkeit stets über die eigene Bezahlung und strebt vorrangig nach Harmonie in der Arbeitsgruppe.",
        "korrekt": false,
        "erklaerung": "Dies kennzeichnet den «Social Man», während der rational-ökonomische Mensch strikt nutzen- und ertragsorientiert agiert."
      },
      {
        "text": "Er strebt vor allem nach Autonomie, Selbstverwirklichung und fachlicher Weiterentwicklung bei vollständiger Ablehnung monetärer Steuerung.",
        "korrekt": false,
        "erklaerung": "Autonomie und Sinnsuche charakterisieren den «Self-Actualizing Man», nicht den rational-ökonomischen Menschen."
      },
      {
        "text": "Seine Motive sind hochgradig vielschichtig, wandelbar und hängen stark von der jeweiligen Lebensphase und der konkreten Arbeitsaufgabe ab.",
        "korrekt": false,
        "erklaerung": "Wandlungsfähige und vielschichtige Motive beschreiben den «Complex Man», der von Schein als letzte Entwicklungsstufe formuliert wurde."
      }
    ],
    "pruefen": false
  },
  {
    "id": 15,
    "bereich": 2,
    "frage": "Welche Unterscheidung der Menschenbilder kennen Sie im Zeitablauf?",
    "optionen": [
      {
        "text": "Historischer Wandel vom rational-ökonomischen Menschen über den sozialen und selbstverwirklichenden Menschen bis hin zum komplexen Menschen.",
        "korrekt": true,
        "erklaerung": "Im Zeitablauf löste die Human-Relations-Bewegung (sozialer Mensch) den Taylorismus ab, gefolgt von der Human-Resources-Bewegung und heutigen systemischen Modellen (komplexer Mensch)."
      },
      {
        "text": "Übergang von der agilen Führungskraft der Industrialisierung zum patriarchalischen Fabrikbesitzer im modernen Dienstleistungssektor der Gegenwart.",
        "korrekt": false,
        "erklaerung": "Hier liegt eine historische Umkehrung vor: Der Patriarchalismus prägte die frühe Industrie, Agilität prägt moderne Organisationen."
      },
      {
        "text": "Chronologische Ablösung der intrinsischen Selbstmotivation durch rein monetäre Akkordlohnsysteme in der modernen Wissensgesellschaft.",
        "korrekt": false,
        "erklaerung": "Akkordlöhne waren typisch für die frühe Industrialisierung; moderne Führung setzt verstärkt auf Eigenverantwortung und intrinsische Motivation."
      },
      {
        "text": "Entwicklung vom rein teamorientierten Mitarbeiter der Frühmoderne zum isolierten, unsozialen Einzelkämpfer in modernen agilen Unternehmen.",
        "korrekt": false,
        "erklaerung": "Agile Methoden (Scrum, Kanban) stärken Teamarbeit und kollektive Verantwortung, statt Vereinzelung zu fördern."
      }
    ],
    "pruefen": true
  },
  {
    "id": 16,
    "bereich": 2,
    "frage": "Welche Eigenschaften kennen Sie von der Generation Y?",
    "optionen": [
      {
        "text": "Hinterfragen des Sinns («Why?»), Streben nach Work-Life-Integration, Digitalaffinität sowie Wunsch nach Transparenz und Feedback.",
        "korrekt": true,
        "erklaerung": "Die Generation Y (ca. 1981–1996) zeichnet sich durch Sinnorientierung («Purpose»), Technologiekompetenz und den Wunsch nach partnerschaftlicher Führung aus."
      },
      {
        "text": "Bedingungslose Unterordnung unter formale Hierarchien, bewusster Verzicht auf Freizeit und strikte Ablehnung moderner Kommunikationsmittel.",
        "korrekt": false,
        "erklaerung": "Dies widerspricht den Merkmalen der Generation Y diametral; sie hinterfragt Hierarchien und lebt digitale Vernetzung."
      },
      {
        "text": "Ausschließliches Interesse an einer lebenslangen Festanstellung im selben Konzern unter Beibehaltung starrer Präsenzpflichten im Büro.",
        "korrekt": false,
        "erklaerung": "Die Generation Y schätzt Flexibilität (Remote Work, Projektarbeit) und wechselt Arbeitgeber pragmatischer als Vorläufergenerationen."
      },
      {
        "text": "Strikte Ablehnung von Teamarbeit, konsequente Bevorzugung reiner Einzelarbeit und grundsätzliche Skepsis gegenüber flachen Hierarchien.",
        "korrekt": false,
        "erklaerung": "Die Generation Y ist stark kollaborativ orientiert («We-Culture») und nutzt selbstverständlich moderne Kollaborationssoftware."
      }
    ],
    "pruefen": false
  },
  {
    "id": 17,
    "bereich": 2,
    "frage": "Was ist der Unterschied der «Generation Y» zu den «Baby Boomern»?",
    "optionen": [
      {
        "text": "Baby Boomer priorisieren Pflichtbewusstsein, Loyalität und Status («Leben, um zu arbeiten»), Generation Y sucht Sinn, Flexibilität und Partizipation.",
        "korrekt": true,
        "erklaerung": "Baby Boomer (ca. 1946–1964) wuchsen in einer von Wiederaufbau und Pflichtbewusstsein geprägten Zeit auf; Generation Y fordert Work-Life-Balance und Mitsprache."
      },
      {
        "text": "Baby Boomer arbeiten primär in agilen Netzwerken ohne feste Hierarchie, während die Generation Y auf starren Befehlswegen im Büro beharrt.",
        "korrekt": false,
        "erklaerung": "Hier wurden die Präferenzen vertauscht: Starre Hierarchien prägten frühere Epochen, flexible Arbeitsformen prägen die Generation Y."
      },
      {
        "text": "Baby Boomer lehnen materielle Vergütung vollkommen ab, während die Generation Y ausschließlich durch kurzfristige Bonuszahlungen motiviert wird im operativen und strategischen Geschäftsalltag der Organisation.",
        "korrekt": false,
        "erklaerung": "Beide Generationen schätzen faire Entlohnung, jedoch gewichtet die Generation Y Freizeit und Sinnstiftung deutlich höher als Statussymbole."
      },
      {
        "text": "Es bestehen keinerlei arbeitspsychologische Unterschiede, da beide Kohorten unter identischen soziokulturellen Einflüssen sozialisiert wurden.",
        "korrekt": false,
        "erklaerung": "Unterschiedliche historische Prägungen (Wirtschaftswunder vs. Digitalisierung und Globalisierung) führen zu nachweisbar unterschiedlichen Werthaltungen."
      }
    ],
    "pruefen": false
  },
  {
    "id": 18,
    "bereich": 3,
    "frage": "Was verstehen Sie unter Führungsstil und Führungsverhalten?",
    "optionen": [
      {
        "text": "Führungsstil ist das grundlegende, relativ stabile Handlungsmuster, während Führungsverhalten das dynamische, situationsbezogene Agieren meint.",
        "korrekt": true,
        "erklaerung": "Der Führungsstil bildet die habituelle Disposition und Wertehaltung ab; das Führungsverhalten ist die konkrete Interaktion in der jeweiligen Führungssituation."
      },
      {
        "text": "Führungsstil beschreibt die spontane Reaktion auf Krisen, während Führungsverhalten die unveränderliche genetische Veranlagung darstellt.",
        "korrekt": false,
        "erklaerung": "Führungsverhalten ist erlern- und anpassbar; der Führungsstil ist durch Sozialisation und Erfahrung geprägt, aber keine biologische Konstante."
      },
      {
        "text": "Führungsstil ist rein gesetzlich im Kollektivvertrag geregelt, während Führungsverhalten ausschließlich die private Freizeitgestaltung betrifft.",
        "korrekt": false,
        "erklaerung": "Weder Stil noch Führungsverhalten sind gesetzliche Kollektivvertragsnormen; es handelt sich um sozialwissenschaftliche Konzepte im Berufsleben."
      },
      {
        "text": "Beide Begriffe sind in der Führungsforschung deckungsgleich und bezeichnen ohne jeden Bedeutungsunterschied dasselbe Managementphänomen.",
        "korrekt": false,
        "erklaerung": "In der Führungstheorie wird präzise differenziert: Stil ist die überdauernde Grundhaltung, Verhalten die konkrete situative Umsetzung."
      }
    ],
    "pruefen": false
  },
  {
    "id": 19,
    "bereich": 3,
    "frage": "Welche Dimensionen der Führungsstile kennen Sie?",
    "optionen": [
      {
        "text": "Eindimensionale Ansätze (Entscheidungsgrad), zweidimensionale Modelle (Aufgaben- und Mitarbeiterorientierung) sowie mehrdimensionale Modelle (Effektivität/Situation).",
        "korrekt": true,
        "erklaerung": "Diese Systematik gliedert Führungsmodelle: eindimensional (z. B. Lewin), zweidimensional (z. B. Blake/Mouton) und dreidimensional (z. B. Reddins 3-D-Modell mit Effektivität)."
      },
      {
        "text": "Hierarchische Dimensionen (Vorstand, Abteilungsleiter, Teamleiter) sowie räumliche Dimensionen (Präsenz-, Remote- und Hybridführung im Unternehmen).",
        "korrekt": false,
        "erklaerung": "Hierbei handelt es sich um organisatorische Ebenen und Arbeitsortmodelle, nicht um theoretische Dimensionen von Führungsstilen."
      },
      {
        "text": "Zeitliche Dimensionen (Frühschicht, Spätschicht, Bereitschaftsdienst) sowie arbeitsrechtliche Dimensionen (Kollektivvertrag und freier Dienstvertrag).",
        "korrekt": false,
        "erklaerung": "Schichtpläne und Vertragsarten sind betriebliche Rahmenbedingungen, keine wissenschaftlichen Dimensionen des Führungsverhaltens."
      },
      {
        "text": "Finanzielle Dimensionen (Fixgehalt, variable Provision) und qualitative Dimensionen (Kundenzufriedenheit und Reklamationsquote im Vertrieb).",
        "korrekt": false,
        "erklaerung": "Vergütungsstrukturen und Kennzahlen spiegeln Steuerungsgrößen wider, aber keine Dimensionen zur Klassifikation von Führungsstilen."
      }
    ],
    "pruefen": false
  },
  {
    "id": 20,
    "bereich": 3,
    "frage": "Welche eindimensionalen Führungsstile von Kurt Lewin kennen Sie?",
    "optionen": [
      {
        "text": "Autoritärer (autokratischer), demokratischer (kooperativer) und Laissez-faire-Führungsstil.",
        "korrekt": true,
        "erklaerung": "Kurt Lewin untersuchte 1939 diese drei klassischen Grundstile anhand des Ausmaßes an Autorität und Mitbestimmung in empirischen Experimenten."
      },
      {
        "text": "Transaktionaler, transformationaler, charismatischer und visionärer Führungsstil im Management.",
        "korrekt": false,
        "erklaerung": "Transaktionale und transformationale Führung wurden später von Bernard Bass und James MacGregor Burns begründet, nicht von Kurt Lewin."
      },
      {
        "text": "Patriarchalischer, bürokratischer, autokratischer und traditioneller Führungsstil in Unternehmen.",
        "korrekt": false,
        "erklaerung": "Diese Differenzierung traditioneller Herrschafts- und Führungsformen geht auf die Soziologie von Max Weber zurück."
      },
      {
        "text": "Aufgabenorientierter, beziehungsorientierter, integrativer und delegierender Führungsstil im Team.",
        "korrekt": false,
        "erklaerung": "Dies sind zweidimensionale Führungsstile aus den Ohio-State-Studien bzw. dem Verhaltensgitter von Blake und Mouton."
      }
    ],
    "pruefen": false
  },
  {
    "id": 21,
    "bereich": 3,
    "frage": "Was verstehen Sie unter einem autoritären Führungsstil?",
    "optionen": [
      {
        "text": "Die Führungskraft entscheidet allein ohne Einbindung der Mitarbeiter, gibt detaillierte Anweisungen vor und kontrolliert deren Durchführung engmaschig.",
        "korrekt": true,
        "erklaerung": "Kennzeichen des autoritären Stils: Strikte Trennung von Planung/Entscheidung (Führung) und Ausführung (Mitarbeiter), geringes Vertrauen und hohe Distanz."
      },
      {
        "text": "Die Führungskraft delegiert sämtliche Entscheidungen an das Team und greift auch bei gravierenden Zielabweichungen und Konflikten bewusst nicht ein.",
        "korrekt": false,
        "erklaerung": "Das vollständige Überlassen von Entscheidungen ohne Steuerung und Eingriff entspricht dem Laissez-faire-Stil."
      },
      {
        "text": "Entscheidungen werden im Team partnerschaftlich diskutiert, und die Führungskraft moderiert lediglich den gemeinsamen Gruppenprozess zur Zielfindung.",
        "korrekt": false,
        "erklaerung": "Dies kennzeichnet den kooperativen bzw. demokratischen Führungsstil, bei dem Partizipation im Mittelpunkt steht."
      },
      {
        "text": "Die Führungskraft motiviert durch inspirierende Zukunftsvisionen und fördert die persönliche Selbstverwirklichung und Weiterentwicklung der Mitarbeiter.",
        "korrekt": false,
        "erklaerung": "Inspiration und Sinnvermittlung sind Kernelemente transformationaler Führung, nicht des autoritären Führungsstils."
      }
    ],
    "pruefen": false
  },
  {
    "id": 22,
    "bereich": 3,
    "frage": "Was verstehen Sie unter einem demokratischen Führungsstil – welche Vor- und Nachteile kennen Sie?",
    "optionen": [
      {
        "text": "Mitarbeiter werden in Entscheidungen einbezogen; Vorteile sind hohe Motivation und Akzeptanz, Nachteile sind höherer Zeitaufwand und mögliche Kompromisse.",
        "korrekt": true,
        "erklaerung": "Der demokratische Stil stärkt Eigenverantwortung und Identifikation mit Beschlüssen, erfordert jedoch Zeit für Abstimmungen und erfordert Diskussionsbereitschaft."
      },
      {
        "text": "Entscheidungen fallen extrem schnell durch zentrale Anweisung; Vorteil ist sofortige Handlungssicherheit, Nachteil ist fehlende Mitarbeiterbindung im Team.",
        "korrekt": false,
        "erklaerung": "Schnelle zentrale Beschlüsse ohne Einbindung der Basis sind typische Merkmale und Folgen des autoritären Führungsstils."
      },
      {
        "text": "Führungskräfte verzichten komplett auf Zielvorgaben; Vorteil ist absolute persönliche Freiheit, Nachteil ist mangelnde Koordination und Orientierung im Projekt.",
        "korrekt": false,
        "erklaerung": "Vollständiger Führungsverzicht ohne Orientierung und Feedback beschreibt den Laissez-faire-Stil."
      },
      {
        "text": "Mitarbeiter folgen der Führungskraft aufgrund persönlicher Faszination; Vorteil ist bedingungslose Loyalität, Nachteil die totale Abhängigkeit von einer Person.",
        "korrekt": false,
        "erklaerung": "Bedingungslose Gefolgschaft aus Faszination ist das Kernmerkmal charismatischer Führung, nicht demokratischer Partizipation."
      }
    ],
    "pruefen": false
  },
  {
    "id": 23,
    "bereich": 3,
    "frage": "Welche Führungsstile unterscheidet Max Weber und erklären Sie diese?",
    "optionen": [
      {
        "text": "Patriarchalisch (väterliche Fürsorge/Autorität), autokratisch (persönliche Herrschaft), bürokratisch (formale Dienstwege/Regeln) und charismatisch (Glaube an die Führerpersönlichkeit).",
        "korrekt": true,
        "erklaerung": "Max Webers Typologie leitet sich aus seinen drei legitimen Herrschaftsformen (traditional, legal-rational, charismatisch) ab und bildet traditionelle Führungsstile ab."
      },
      {
        "text": "Autoritär, demokratisch und Laissez-faire anhand des empirisch gemessenen Ausmaßes an Mitarbeiterpartizipation und Mitsprache im Gruppenalltag zur Steigerung von Transparenz, Verbindlichkeit und Ergebnisqualität.",
        "korrekt": false,
        "erklaerung": "Diese klassische Dreiteilung stammt von Kurt Lewin (1939), nicht aus der Herrschaftssoziologie von Max Weber."
      },
      {
        "text": "Aufgabenorientiert (9.1), mitarbeiterorientiert (1.9) und teamorientiert (9.9) anhand eines zweidimensionalen Verhaltensgitters für Manager.",
        "korrekt": false,
        "erklaerung": "Das zweidimensionale Verhaltensgitter (Managerial Grid) wurde von Robert Blake und Jane Mouton entwickelt."
      },
      {
        "text": "Reifegradbezogene Führungsstile: Dirigieren, Überzeugen, Partizipieren und Delegieren nach dem situativen Reifegradmodell der Führung.",
        "korrekt": false,
        "erklaerung": "Die vier situativen Führungsstile basieren auf dem Reifegradmodell von Paul Hersey und Ken Blanchard."
      }
    ],
    "pruefen": false
  },
  {
    "id": 24,
    "bereich": 3,
    "frage": "Was sind die Merkmale des Führungsmodells nach Tannenbaum/Schmidt?",
    "optionen": [
      {
        "text": "Ein Kontinuum-Modell mit 7 Abstufungen zwischen autoritärer Führungskraft (hohe Willensdurchsetzung) und demokratischem Team (hoher Entscheidungsspielraum).",
        "korrekt": true,
        "erklaerung": "Robert Tannenbaum und Warren H. Schmidt beschrieben 1958 das Führungskontinuum von autoritär bis demokratisch in 7 Stufen des Entscheidungsspielraums."
      },
      {
        "text": "Ein 2-Achsen-Raster zur Einteilung von Führungskräften anhand der Dimensionen Aufgabenorientierung und Beziehungsorientierung im Betrieb.",
        "korrekt": false,
        "erklaerung": "Das 2-Achsen-Raster beschreibt das Managerial Grid von Blake und Mouton, nicht das Kontinuum-Modell von Tannenbaum und Schmidt."
      },
      {
        "text": "Eine Reifegradtheorie, bei der die fachliche und psychologische Reife der Mitarbeiter den optimalen Führungsstil verbindlich vorgibt.",
        "korrekt": false,
        "erklaerung": "Dies ist die situative Führungstheorie nach Hersey und Blanchard, die auf Mitarbeiterreife abstellt."
      },
      {
        "text": "Ein 3-D-Modell, das grundlegende Führungsstile um die situative Effektivitätsdimension von konkreten Managementhandlungen systematisch erweitert.",
        "korrekt": false,
        "erklaerung": "Das 3-D-Modell mit der Effektivitätsdimension stammt von William J. Reddin, nicht von Tannenbaum und Schmidt."
      }
    ],
    "pruefen": false
  },
  {
    "id": 25,
    "bereich": 3,
    "frage": "Was sind nach Tannenbaum/Schmidt die wichtigsten Faktoren, die bei der Wahl des Führungsverhaltens ausschlaggebend sind?",
    "optionen": [
      {
        "text": "Kräfte in der Person der Führungskraft, Kräfte in den geführten Mitarbeitern sowie Kräfte in der jeweiligen situativen Umwelt.",
        "korrekt": true,
        "erklaerung": "Tannenbaum und Schmidt betonen diese drei Einflussfaktoren: Wertesystem und Vertrauen der Führungskraft, Erwartungen und Kompetenz der Mitarbeiter sowie Organisationskultur und Problemkomplexität."
      },
      {
        "text": "Ausschließlich das Lebensalter der Führungskraft, die Unternehmensgröße und der gesetzliche Kollektivvertrag der jeweiligen Branche.",
        "korrekt": false,
        "erklaerung": "Dies reduziert die situative Wahl auf starre Formalien und ignoriert psychologische Kräfte in Führungskraft, Team und Situation."
      },
      {
        "text": "Die durchschnittliche Betriebszugehörigkeit der Belegschaft und die gewählte Firmenrechtsform im Firmenbuch des zuständigen Landesgerichts.",
        "korrekt": false,
        "erklaerung": "Organisationsrechtliche Registerdaten haben keinen direkten Einfluss auf die situative Wahl des Führungsverhaltens."
      },
      {
        "text": "Das monatliche Budgetvolumen der Abteilung und der flächendeckende Einsatz agiler Projektmanagement-Software im operativen Team.",
        "korrekt": false,
        "erklaerung": "Instrumentelle Softwaretools und Budgets sind Hilfsmittel, aber nicht die zentralen verhaltenssteuernden Kräfte nach Tannenbaum und Schmidt."
      }
    ],
    "pruefen": false
  },
  {
    "id": 26,
    "bereich": 3,
    "frage": "Erklären Sie die Führungsstile nach Homburg und welche Dimension findet bei ihm zusätzliche Berücksichtigung?",
    "optionen": [
      {
        "text": "Verknüpfung von Führungsverhalten im Vertrieb mit Marktorientierung; besondere Berücksichtigung findet die Dimension der Kundenorientierung.",
        "korrekt": true,
        "erklaerung": "Christian Homburg überträgt klassische Führungsstile auf den Vertriebskontext und ergänzt die Mitarbeiter- und Aufgabenorientierung um die vertriebsentscheidende Kunden- und Marktorientierung."
      },
      {
        "text": "Reine Differenzierung nach Aufgaben- und Beziehungsorientierung mit der zusätzlichen Dimension der internen Prozessdigitalisierung im Büroalltag.",
        "korrekt": false,
        "erklaerung": "Dies verwechselt Homburgs marketing- und vertriebswissenschaftlichen Ansatz mit allgemeinen Digitalisierungsmodellen der Büroorganisation."
      },
      {
        "text": "Hierarchische Abstufung vom Junior-Verkäufer zum Vertriebsleiter mit der zusätzlichen Dimension der variablen Provisionshöhe im Dienstvertrag.",
        "korrekt": false,
        "erklaerung": "Vergütungssysteme und Karrierestufen sind personalwirtschaftliche Instrumente, aber keine Führungsstildimensionen nach Homburg."
      },
      {
        "text": "Klassifikation von Verkäufern nach Persönlichkeitstypen mit der zusätzlichen Dimension der nonverbalen Überzeugungskraft im Verkaufsgespräch.",
        "korrekt": false,
        "erklaerung": "Rhetorik und Persönlichkeitsprofile (z. B. DISG) betreffen die Verkaufspsychologie, nicht Homburgs Führungsstilkonzeption für Vertriebsleiter."
      }
    ],
    "pruefen": false
  },
  {
    "id": 27,
    "bereich": 3,
    "frage": "Was versteht Homburg unter dem kooperativen Führungsstil?",
    "optionen": [
      {
        "text": "Partnerschaftliche Führung im Vertrieb mit Delegation von Spielräumen, Unterstützung bei Kundenproblemen und gemeinsamer Zielabstimmung.",
        "korrekt": true,
        "erklaerung": "Im kooperativen Führungsstil nach Homburg werden Vertriebsmitarbeiter als Mitunternehmer verstanden, die eigenverantwortlich Kundenbeziehungen pflegen und fachlich unterstützt werden."
      },
      {
        "text": "Strikte Vorgabe täglicher Besuchsquoten und standardisierter Gesprächsleitfäden bei engmaschiger und permanenter Kontrollpflicht der Verkäufer.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt einen autoritären, kontrollierenden Vertriebsführungsstil, der Eigenverantwortung und Partnerschaftlichkeit unterdrückt."
      },
      {
        "text": "Vollständiger Rückzug der Führungskraft aus dem Vertriebsalltag bei völlig ungesteuerter Selbstorganisation und Freigabe des Außendienstes.",
        "korrekt": false,
        "erklaerung": "Dies entspricht einem Laissez-faire-Verhalten im Vertrieb, bei dem Unterstützung, Coaching und Zielorientierung fehlen."
      },
      {
        "text": "Einseitige Fokussierung auf Teamevents und Wohlfühlatmosphäre unter bewusster Vernachlässigung von Umsatzzielen und Kundenfeedback.",
        "korrekt": false,
        "erklaerung": "Kooperative Führung nach Homburg verbindet menschliche Wertschätzung immer mit klarer Leistungs- und Marktorientierung."
      }
    ],
    "pruefen": false
  },
  {
    "id": 28,
    "bereich": 3,
    "frage": "Wie kann man nach Homburg Defizite im Führungsstil abbauen?",
    "optionen": [
      {
        "text": "Durch systematische Führungskräfteentwicklung, strukturiertes Feedback von Mitarbeitern und Kunden sowie zielgerichtetes Coaching.",
        "korrekt": true,
        "erklaerung": "Homburg empfiehlt kontinuierliche Reflexion, 360-Grad-Feedback (inklusive Markt-/Kundenfeedback), Schulungsprogramme und vertriebsspezifisches Coaching."
      },
      {
        "text": "Durch ausschließliche Konzentration auf standardisierte Fachzertifizierungen und juristische Compliance-Schulungen ohne Einbindung des Teams.",
        "korrekt": false,
        "erklaerung": "Reine Fachzertifizierungen ohne Feedbackschleifen und Verhaltensreflexion verändern die Führungsqualität nach Homburg nicht nachhaltig."
      },
      {
        "text": "Durch Einführung eines unmoderierten Peer-Feedbacks auf Teamebene bei gleichzeitigem Verzicht auf strukturierte Managemententwicklungsprogramme.",
        "korrekt": false,
        "erklaerung": "Kollegiales Feedback allein reicht nach Homburg nicht aus; es bedarf strukturierter Entwicklungsprogramme und übergeordneter Führungskriterien."
      },
      {
        "text": "Durch jährliche anonyme Mitarbeiterbefragungen mit aggregierten Kennzahlen ohne nachgelagerte vertriebsspezifische Trainings- und Coachingpläne.",
        "korrekt": false,
        "erklaerung": "Bloße Kennzahlenerhebungen ohne nachgelagerte vertriebsspezifische Trainings und individuelle Förderpläne bauen Defizite nicht wirksam ab."
      }
    ],
    "pruefen": false
  },
  {
    "id": 29,
    "bereich": 3,
    "frage": "Von wem ist das Verhaltensgitter (Managerial Grid) und was verstehen Sie darunter?",
    "optionen": [
      {
        "text": "Von Blake und Mouton; ein zweidimensionales Modell zur Klassifizierung von Führungsstilen nach Aufgaben- und Menschenorientierung.",
        "korrekt": true,
        "erklaerung": "Robert R. Blake und Jane S. Mouton entwickelten 1964 das Managerial Grid auf einer Skala von 1 bis 9 für Aufgabenorientierung (X-Achse) und Menschenorientierung (Y-Achse)."
      },
      {
        "text": "Von Paul Hersey und Ken Blanchard; ein Verhaltensmodell zur gezielten Anpassung des Führungsstils an den Entwicklungsgrad der Mitarbeiter.",
        "korrekt": false,
        "erklaerung": "Hersey und Blanchard entwickelten das Modell der situativen Führung (Situational Leadership Theory), nicht das zweidimensionale Managerial Grid."
      },
      {
        "text": "Von Fredmund Malik; ein St. Galler Management-Raster zur systematischen Zuordnung von Führungsaufgaben zu konkreten Steuerungsinstrumenten.",
        "korrekt": false,
        "erklaerung": "Fredmund Malik steht für das St. Galler Management-System mit Grundsätzen, Aufgaben und Werkzeugen, nicht für das Verhaltensgitter."
      },
      {
        "text": "Von William J. Reddin; ein dreidimensionales Führungsmodell zur methodischen Bewertung der situativen Wirksamkeit von Führungsstilen.",
        "korrekt": false,
        "erklaerung": "W. J. Reddin erweiterte das zweidimensionale Konzept später um die Dimension der Effektivität zum 3-D-Modell, das Grid stammt jedoch von Blake und Mouton."
      }
    ],
    "pruefen": false
  },
  {
    "id": 30,
    "bereich": 3,
    "frage": "Was verstehen Sie unter «People Pleaser»?",
    "optionen": [
      {
        "text": "Eine Führungskraft, die Konflikte um jeden Preis meidet, es allen recht machen will und Sachziele vernachlässigt, um Beliebtheit zu sichern.",
        "korrekt": true,
        "erklaerung": "People Pleasing führt im Management zu Entscheidungsunfähigkeit, Verwässerung von Qualitätsstandards und Orientierungslosigkeit bei den Mitarbeitern."
      },
      {
        "text": "Einen autoritären Führungsverantwortlichen, der Vorgaben mit harter Hand durchsetzt und persönliche Befindlichkeiten im Team bewusst ignoriert.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt das genaue Gegenteil: eine extrem aufgabenorientierte, autokratische Führungspersönlichkeit (Position 9,1 im Grid)."
      },
      {
        "text": "Eine transformative Führungspersönlichkeit, die Teams durch hohe Zielstandards und gemeinsame anspruchsvolle Zukunftsvisionen inspiriert.",
        "korrekt": false,
        "erklaerung": "Transformationale Führungskräfte scheuen keine klaren Zielansprüche und fordern Leistung ein, statt rein um persönliche Beliebtheit zu buhlen."
      },
      {
        "text": "Einen transaktionalen Manager, der Leistung rein über vertraglich fixierte Bonuszahlungen, Zielvereinbarungen und Prämien steuert.",
        "korrekt": false,
        "erklaerung": "Transaktionale Führung beruht auf sachlichem Leistungsaustausch («Geben und Nehmen»), nicht auf konfliktscheuer Harmoniesucht."
      }
    ],
    "pruefen": false
  },
  {
    "id": 31,
    "bereich": 3,
    "frage": "Was bedeutet im Verhaltensgitter die Position 9+9?",
    "optionen": [
      {
        "text": "Paternalistischer Führungsstil («väterlich/mütterlich»): Hohe Leistungsforderung (9,1) wird mit persönlicher Fürsorge (1,9) verknüpft, solange Loyalität herrscht.",
        "korrekt": true,
        "erklaerung": "Im Paternalismus (9+9 nach Blake/McCanse) fordert die Führungskraft unbedingten Gehorsam und Leistung ein und belohnt Folgsamkeit mit persönlichem Schutz und Wohlwollen."
      },
      {
        "text": "Integrierte Teamführung (9,9): Höchste Aufgaben- und Mitarbeiterorientierung durch gemeinsame Zielerarbeitung und partizipative Entscheidungen im Team.",
        "korrekt": false,
        "erklaerung": "Dies ist die Position 9,9 (Team-Management), bei der Kooperation und Vertrauen statt hierarchischer Fürsorge und Gehorsam im Fokus stehen."
      },
      {
        "text": "Opportunistischer Führungsstil: Die Führungskraft wechselt ihr Verhalten unberechenbar und taktisch je nach eigenem unmittelbarem Karriervorteil.",
        "korrekt": false,
        "erklaerung": "Opportunismus ist ein eigenständiger Zusatzstil im erweiterten Grid, unterscheidet sich jedoch klar vom paternalistischen 9+9-Stil."
      },
      {
        "text": "Organisationsmanagement (5,5): Pragmatischer Kompromiss zwischen Leistungsanforderungen und ausreichender Mitarbeiterzufriedenheit im Betrieb in der täglichen betrieblichen Praxis und Unternehmensführung.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt die Mittelposition 5,5 («Balanciertes Management»), bei der weder Leistung noch Mitarbeiterorientierung maximiert werden."
      }
    ],
    "pruefen": false
  },
  {
    "id": 32,
    "bereich": 3,
    "frage": "Was bedeutet im Verhaltensgitter die Position 1,1?",
    "optionen": [
      {
        "text": "Überlebensmanagement («verarmte Führung»): Minimaler Einsatz für Aufgaben und minimale Sorge um Menschen zur reinen Sicherung der eigenen Position.",
        "korrekt": true,
        "erklaerung": "Position 1,1 beschreibt die Flucht aus der Führungsverantwortung: Die Führungskraft tut nur das Nötigste, um im Betrieb nicht negativ aufzufallen."
      },
      {
        "text": "Glacehandschuh-Methode (1,9): Maximale Aufmerksamkeit für zwischenmenschliche Beziehungen bei weitgehender Vernachlässigung von Leistungszielen im Rahmen moderner Führungs- und Organisationsstrukturen.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt die Position 1,9 (Beziehungsmanagement/Vereinsführung), nicht das verarmte Management der Position 1,1."
      },
      {
        "text": "Befehl-Gehorsam-Management (9,1): Maximale Aufgabenorientierung bei minimaler Rücksichtnahme auf zwischenmenschliche Bedürfnisse im Betrieb.",
        "korrekt": false,
        "erklaerung": "Dies kennzeichnet die autoritäre Position 9,1 (Autoritätsmanagement), bei der Leistung um jeden Preis erzwungen wird."
      },
      {
        "text": "Team-Management (9,9): Hohe Leistungsbegeisterung verbunden mit maximalem gegenseitigem Vertrauen, offener Kommunikation und Respekt im Team.",
        "korrekt": false,
        "erklaerung": "Position 9,9 stellt das Ideal des Verhaltensgitters dar und bildet den exakten Gegenpol zur verarmten Führung (1,1)."
      }
    ],
    "pruefen": false
  },
  {
    "id": 33,
    "bereich": 3,
    "frage": "Beschreiben Sie einen dreidimensionalen Führungsstil?",
    "optionen": [
      {
        "text": "Ein Führungsmodell, das Aufgaben- und Beziehungsorientierung um eine dritte Dimension – die situative Effektivität (Wirksamkeit) – erweitert.",
        "korrekt": true,
        "erklaerung": "Das 3-D-Konzept (u. a. von W. J. Reddin) erkennt, dass kein Stil an sich gut oder schlecht ist, sondern seine Wirksamkeit von der Passung zur Situation abhängt."
      },
      {
        "text": "Ein Führungsansatz, der neben Führungskraft und Team die Kundenorientierung als dritte Dimension im strategischen Vertrieb berücksichtigt.",
        "korrekt": false,
        "erklaerung": "Die Berücksichtigung der Kundenorientierung im Vertrieb geht auf Christian Homburg zurück, nicht auf die klassische 3-D-Führungstheorie."
      },
      {
        "text": "Ein Planungskonzept, das Führungsentscheidungen nach den drei Zeithorizonten Vergangenheit, Gegenwart und Zukunft systematisch strukturiert.",
        "korrekt": false,
        "erklaerung": "Zeithorizonte sind Gegenstand der strategischen Planung und des Zeitmanagements, bilden jedoch keine Führungsstildimensionen."
      },
      {
        "text": "Ein Persönlichkeitsansatz, der Führungsverhalten ausschließlich nach den drei Dimensionen Extraversion, Offenheit und Gewissenhaftigkeit erfasst.",
        "korrekt": false,
        "erklaerung": "Dies entstammt der differentiellen Psychologie (Big Five), nicht der mehrdimensionalen Führungsstiltheorie."
      }
    ],
    "pruefen": false
  },
  {
    "id": 34,
    "bereich": 3,
    "frage": "Was sind die Merkmale des «3-D-Modells» nach Reddin?",
    "optionen": [
      {
        "text": "Die Dimensionen Aufgabenorientierung, Beziehungsorientierung und Effektivität; je nach Situationspassung entstehen 4 effektive und 4 ineffektive Stile.",
        "korrekt": true,
        "erklaerung": "William J. Reddin leitet aus 4 Grundstilen je nach situativer Effektivität 8 spezifische Verhaltensstile ab (z. B. Bürokrat vs. Verwalter, Macher vs. Autokrat)."
      },
      {
        "text": "Ein lineares Stufenmodell mit 7 Führungsstilen vom autoritären Vorgesetztenentscheid bis zum autonomen Mitarbeiterentscheid im Teamalltag.",
        "korrekt": false,
        "erklaerung": "Das 7-Stufen-Modell ist das Kontinuum von Tannenbaum und Schmidt, nicht das 3-D-Modell von Reddin."
      },
      {
        "text": "Eine Vier-Felder-Matrix zur Diagnose des Reifegrads von Mitarbeitern nach fachlicher Aufgabenkompetenz und psychologischer Leistungsmotivation zur Sicherung langfristiger Wettbewerbsvorteile am Markt.",
        "korrekt": false,
        "erklaerung": "Die Reifegradmatrix gehört zur situativen Führungstheorie von Hersey und Blanchard."
      },
      {
        "text": "Ein 9x9-Koordinatengitter zur Zuordnung von Führungskräften anhand der Sorge um Produktion und der Sorge um Menschen im Unternehmen.",
        "korrekt": false,
        "erklaerung": "Das 9x9-Gitter ist das zweidimensionale Managerial Grid von Blake und Mouton ohne gesonderte Effektivitätsachse."
      }
    ],
    "pruefen": false
  },
  {
    "id": 35,
    "bereich": 3,
    "frage": "Was verstehen Sie unter «transaktionaler Führung»?",
    "optionen": [
      {
        "text": "Führung auf Basis einer rationalen Austauschbeziehung: Klare Zielvorgaben, bedingte Belohnung bei Zielerreichung und Korrektur bei Abweichungen.",
        "korrekt": true,
        "erklaerung": "Transaktionale Führung (nach Bass/Burns) basiert auf dem Prinzip «Leistung gegen Gegenleistung» (Contingent Reward) und Management by Exception."
      },
      {
        "text": "Führung durch emotionale Inspiration, tiefgreifende Sinnstiftung, persönliche Vorbildfunktion und intellektuelle Förderung der Mitarbeiter.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt die transformationale Führung, die über rein rationale Austauschprozesse weit hinausgeht."
      },
      {
        "text": "Vollständiger Führungsverzicht bei uneingeschränkter Handlungs- und Entscheidungsfreiheit ohne Zielkontrollen oder Rückmeldungen.",
        "korrekt": false,
        "erklaerung": "Vollständiger Führungsverzicht ohne Zielvereinbarungen oder Feedback kennzeichnet den Laissez-faire-Stil."
      },
      {
        "text": "Führung über rein informelle Gruppenprozesse ohne messbare qualitative Leistungsziele oder vertraglich fixierte Anreizsysteme.",
        "korrekt": false,
        "erklaerung": "Transaktionale Führung erfordert zwingend explizite Zielvereinbarungen, Verträge und messbare Gegenleistungen."
      }
    ],
    "pruefen": false
  },
  {
    "id": 36,
    "bereich": 3,
    "frage": "Was verstehen Sie unter «transformationaler Führung»?",
    "optionen": [
      {
        "text": "Führung durch Vorbildfunktion (Charisma), inspirierende Zukunftsvisionen, intellektuelle Anregung und individuelle Wertschätzung (die 4 «I»s).",
        "korrekt": true,
        "erklaerung": "Transformationale Führung transformiert Werte und Ziele der Geführten: Idealisierter Einfluss, inspirierende Motivation, intellektuelle Stimulierung und individuelle Beachtung."
      },
      {
        "text": "Führung über Zielvereinbarungen und leistungsorientierte Bonuszahlungen im Rahmen eines sachlichen Geben-und-Nehmen-Prinzips im Alltag.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt die transaktionale Führung, die auf rationalem Austausch statt auf Werterweiterung beruht."
      },
      {
        "text": "Führung durch engmaschige operative Verhaltenskontrolle und detaillierte Ausführungsanweisungen ohne eigene Mitspracherechte des Teams.",
        "korrekt": false,
        "erklaerung": "Dies ist autoritäres Mikromanagement, das die Eigenverantwortung und Entwicklung der Mitarbeiter blockiert."
      },
      {
        "text": "Führung durch passive Nicht-Einmischung, bei der die Führungskraft erst bei gravierenden Krisen und massiven Eskalationen reaktiv interveniert.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt das passive Management by Exception bzw. Laissez-faire, nicht die aktive Visionierung der transformationalen Führung."
      }
    ],
    "pruefen": false
  },
  {
    "id": 37,
    "bereich": 3,
    "frage": "Wie definieren Sie den «situativen Führungsstil» und erklären Sie dessen Merkmale?",
    "optionen": [
      {
        "text": "Führungsverhalten wird flexibel an den Entwicklungsstand bzw. Reifegrad (Können und Wollen) der Mitarbeiter angepasst (Dirigieren, Überzeugen, Partizipieren, Delegieren).",
        "korrekt": true,
        "erklaerung": "Nach Hersey und Blanchard gibt es keinen universell besten Stil. Die Führungskraft diagnostiziert die Kompetenz und das Engagement des Mitarbeiters für eine Aufgabe."
      },
      {
        "text": "Die Führungskraft wählt ihren Führungsstil rein nach den aktuellen wirtschaftlichen Quartalskennzahlen und Marktanteilen des Unternehmens aus im operativen und strategischen Geschäftsalltag der Organisation.",
        "korrekt": false,
        "erklaerung": "Situative Führung bezieht sich auf die individuelle Person-Aufgaben-Passung und den Reifegrad des Mitarbeiters, nicht rein auf Quartalszahlen."
      },
      {
        "text": "Die Führungskraft behält über alle Situationen und Mitarbeiter hinweg denselben festen Führungsstil starr bei, um Berechenbarkeit zu demonstrieren.",
        "korrekt": false,
        "erklaerung": "Stilkonstanz widerspricht dem situativen Führungsansatz, der ausdrücklich Verhaltensflexibilität und Anpassung an die Situation verlangt."
      },
      {
        "text": "Das Führungsverhalten richtet sich ausschließlich nach dem formalen hierarchischen Status des Mitarbeiters im bestehenden Organigramm des Betriebs.",
        "korrekt": false,
        "erklaerung": "Der Reifegrad ist aufgabenspezifisch: Auch langjährige Mitarbeiter können bei neuen Aufgaben einen dirigierenden Stil benötigen."
      }
    ],
    "pruefen": false
  },
  {
    "id": 38,
    "bereich": 4,
    "frage": "Welche «Management by…»-Techniken kennen Sie?",
    "optionen": [
      {
        "text": "Management by Objectives (Zielvereinbarung), Management by Delegation (Aufgabenübertragung) und Management by Exception (Eingriff bei Abweichungen).",
        "korrekt": true,
        "erklaerung": "Diese drei etablierten Führungstechniken delegieren Verantwortung und steuern über Zielvorgaben bzw. Eingriffsschwellen bei Soll-Ist-Abweichungen."
      },
      {
        "text": "Management by Decision (Entscheidung), Management by Motivation (Antrieb), Management by Communication (Dialog) und Management by Innovation.",
        "korrekt": false,
        "erklaerung": "Dies sind allgemeine Tätigkeitsbegriffe der Betriebswirtschaftslehre, jedoch keine anerkannten systematischen Führungstechniken."
      },
      {
        "text": "Management by Controlling (Finanzen), Management by Marketing (Absatz), Management by Sourcing (Einkauf) und Management by Production (Fertigung).",
        "korrekt": false,
        "erklaerung": "Hierbei handelt es sich um funktionale Unternehmensbereiche, nicht um personelle Führungstechniken."
      },
      {
        "text": "Management by Hierarchy (Rangordnung), Management by Supervision (Aufsicht), Management by Punishment (Strafe) und Management by Reward.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt behavioristische Disziplinierungsmechanismen, aber keine fundierten Management-by-Konzepte."
      }
    ],
    "pruefen": false
  },
  {
    "id": 39,
    "bereich": 4,
    "frage": "Was kennzeichnet einen «modernen Führungsstil»?",
    "optionen": [
      {
        "text": "Partizipation, Vertrauenskultur, Coaching-Haltung, flexible Arbeitsformen, Sinnvermittlung («Purpose») und Stärkung von Eigenverantwortung.",
        "korrekt": true,
        "erklaerung": "Moderne Führung versteht sich als Befähigung («Enabling»): Hierarchien treten in den Hintergrund, Selbstorganisation, Agilität und Sinnstiftung dominieren."
      },
      {
        "text": "Zentralistische Entscheidungsfindung, starre Hierarchiestufen, lückenlose Präsenzkontrolle und strikter Dienst nach Vorschrift im Betrieb.",
        "korrekt": false,
        "erklaerung": "Dies kennzeichnet den traditionellen, bürokratisch-autoritären Führungsstil der Frühindustrialisierung (Taylorismus)."
      },
      {
        "text": "Vollkommene Abschaffung von Verantwortlichkeiten und verbindlichen Unternehmenszielen zugunsten ungesteuerter individueller Selbstfindung.",
        "korrekt": false,
        "erklaerung": "Moderne Führung erfordert weiterhin klare Rahmenbedingungen, Zielklarheit und Verantwortlichkeit, statt ziellose Beliebigkeit."
      },
      {
        "text": "Ausschließliche Steuerung über monetäre Vertriebsprovisionen bei vollständigem Verzicht auf persönliche Mitarbeiter- und Entwicklungsgespräche.",
        "korrekt": false,
        "erklaerung": "Reine Provisionssysteme ohne Beziehungs- und Feedbackkultur widersprechen modernen, ganzheitlichen Führungskonzepten."
      }
    ],
    "pruefen": false
  },
  {
    "id": 40,
    "bereich": 4,
    "frage": "Was ist eine Führungskraft für den Mitarbeiter und Kunden 3.0?",
    "optionen": [
      {
        "text": "Ein agiler Netzwerkkoordinator, Mentor und Enabler, der Transparenz fördert, Kollaboration ermöglicht und Kundenbedürfnisse zügig integriert.",
        "korrekt": true,
        "erklaerung": "Im Kontext von «Arbeit & Kunde 3.0» (Digitalisierung, Co-Creation) agiert die Führungskraft als Brückenbauer und Coach auf Augenhöhe."
      },
      {
        "text": "Ein autoritärer Informationsfilter, der den direkten Kundenkontakt für Teammitglieder untersagt und alle Sachentscheidungen zentralisiert.",
        "korrekt": false,
        "erklaerung": "Gatekeeper-Rollen verlangsamen Prozesse und verhindern den direkten, kundennahen Austausch in modernen Organisationen."
      },
      {
        "text": "Ein rein administrativer Sachbearbeiter, der Vorgaben der Geschäftsleitung ungefiltert weiterleitet und Teams sich selbst überlässt.",
        "korrekt": false,
        "erklaerung": "Reine Weiterleitung ohne Sinnvermittlung, Coaching und operative Unterstützung wird den Anforderungen moderner Arbeitswelten nicht gerecht."
      },
      {
        "text": "Ein Fachexperte, der alle operativen Kundenberatungen persönlich übernimmt und Mitarbeiter nur für untergeordnete Zuarbeiten einsetzt zur Steigerung von Transparenz, Verbindlichkeit und Ergebnisqualität.",
        "korrekt": false,
        "erklaerung": "Führungskräfte müssen befähigen und multiplizieren («Enabler»), statt operative Facharbeiten an sich zu reißen und Teams zu entmündigen."
      }
    ],
    "pruefen": false
  },
  {
    "id": 41,
    "bereich": 4,
    "frage": "Wie beschreiben Sie den modernen Führungsstil «Clean Leadership»?",
    "optionen": [
      {
        "text": "Wertschätzende Führung frei von verdeckter Manipulation, geprägt von ehrlicher Selbstreflexion, klarer Sprache und Respekt für persönliche Denkmuster.",
        "korrekt": true,
        "erklaerung": "Clean Leadership (abgeleitet von David Groves Clean Language) vermeidet Projektionen und suggestive Vorannahmen der Führungskraft und fördert Klarheit."
      },
      {
        "text": "Führung durch vollständigen Verzicht auf mündliche Mitarbeitergespräche zugunsten automatisierter digitaler Chatbots und Ticket-Systeme im Kontext moderner Führungspsychologie und Kundenorientierung.",
        "korrekt": false,
        "erklaerung": "Clean Leadership betont die zwischenmenschliche Gesprächsführung und Achtsamkeit, keine Entfremdung durch Automatisierung."
      },
      {
        "text": "Ein Führungsstil, bei dem die Führungskraft vor jedem vertraulichen Gespräch rechtlich verbindliche Verschwiegenheitsvereinbarungen verlangt.",
        "korrekt": false,
        "erklaerung": "Dies verwechselt psychologische Klarheit und Vertraulichkeit mit übertriebener juristischer Vertragsbürokratie."
      },
      {
        "text": "Ein Konzept, das Führung rein auf hygienische Arbeitsplatzgestaltung, Lärmschutz und ergonomische Büroausstattung im Betrieb reduziert.",
        "korrekt": false,
        "erklaerung": "Hier liegt eine Verwechslung mit arbeitshygienischen Maßnahmen vor; Clean Leadership bezieht sich auf vorurteilsfreie Kommunikation."
      }
    ],
    "pruefen": false
  },
  {
    "id": 42,
    "bereich": 4,
    "frage": "Was verstehen Sie unter dem «3 Säulen Modell»?",
    "optionen": [
      {
        "text": "Ganzheitlicher Ansatz basierend auf den drei Säulen Mensch/Kultur, Struktur/Organisation und Technologie/Prozesse für nachhaltige Leistungsfähigkeit.",
        "korrekt": true,
        "erklaerung": "Nachhaltige Unternehmensführung gelingt nur im harmonischen Zusammenspiel von individuellen Kompetenzen (Mensch), klaren Rahmenbedingungen (Organisation) und passenden Tools (Technik)."
      },
      {
        "text": "Die klassische Unterteilung von Industrieunternehmen in Beschaffung/Einkauf, Produktion und Absatz/Vertrieb zur operativen Aufgabenabwicklung.",
        "korrekt": false,
        "erklaerung": "Dies sind traditionelle betriebswirtschaftliche Funktionsbereiche, nicht das ganzheitliche 3-Säulen-Führungsmodell."
      },
      {
        "text": "Die Dreiteilung der Unternehmensführung in Vorstand, Aufsichtsrat und Betriebsrat nach den Vorschriften des österreichischen Aktiengesetzes in der täglichen betrieblichen Praxis und Unternehmensführung.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt gesetzliche Corporate-Governance-Organe nach dem Aktiengesetz, keine führungsphilosophischen Säulen."
      },
      {
        "text": "Das Vergütungsmodell bestehend aus festem Grundgehalt, variabler Vertriebsprovision und betrieblicher Altersvorsorge für Führungskräfte.",
        "korrekt": false,
        "erklaerung": "Hierbei handelt es sich um die 3 Säulen der Entgelt- und Altersvorsorgestruktur, nicht um Führung und Unternehmensorganisation."
      }
    ],
    "pruefen": false
  },
  {
    "id": 43,
    "bereich": 4,
    "frage": "Was sind die Herausforderungen von «Clean Leadership» für die Führungskraft?",
    "optionen": [
      {
        "text": "Eigene Vorannahmen und Interpretationen bewusst zurückzustellen, emotionale Reife zu zeigen und Mitarbeitern echten Raum zur Lösungsfindung zu geben.",
        "korrekt": true,
        "erklaerung": "Die größte Hürde liegt im Loslassen eigener Urteile: Führungskräfte neigen oft dazu, vorschnell Ratschläge zu erteilen, statt aufmerksam und unvoreingenommen zuzuhören."
      },
      {
        "text": "Täglich komplexe mathematische Algorithmen zur Arbeitszeiterfassung und Überstundenkontrolle der Mitarbeiter manuell nachzurechnen.",
        "korrekt": false,
        "erklaerung": "Clean Leadership befasst sich mit vorurteilsfreier Kommunikation und Denkstrukturen, nicht mit buchhalterischer Zeiterfassung."
      },
      {
        "text": "Sämtliche Richtungsentscheidungen stets ohne jede Rücksprache innerhalb von wenigen Sekunden autoritär im Betrieb durchzusetzen.",
        "korrekt": false,
        "erklaerung": "Autoritäres Durchpeitschen von Entscheidungen steht im direkten Widerspruch zur reflektierten, achtsamen Haltung von Clean Leadership."
      },
      {
        "text": "Den Mitarbeitern jederzeit alle privaten Sorgen abzunehmen und als unbezahlter Psychotherapeut rund um die Uhr verfügbar zu sein.",
        "korrekt": false,
        "erklaerung": "Clean Leadership wahrt professionelle Grenzen und stärkt die Eigenständigkeit des Mitarbeiters, statt therapeutische Ersatzrollen einzunehmen."
      }
    ],
    "pruefen": false
  },
  {
    "id": 44,
    "bereich": 4,
    "frage": "Was sind Kompetenzen eines «Digital Leaders»?",
    "optionen": [
      {
        "text": "Digitale Medienkompetenz, agile Moderationsfähigkeit, vernetztes Denken, Ambiguitätstoleranz, Vertrauensführung auf Distanz und Förderung von Lernkultur.",
        "korrekt": true,
        "erklaerung": "Digital Leadership erfordert neben Tool-Wissen vor allem Führungsqualitäten in virtuellen Räumen: Vertrauen («Remote Leadership»), Offenheit für Wandel und Netzwerkkompetenz."
      },
      {
        "text": "Ausgeprägte Programmierkenntnisse in maschinennahen Sprachen sowie persönliche technische Wartung aller Serveranlagen im Unternehmen zur Sicherung langfristiger Wettbewerbsvorteile am Markt.",
        "korrekt": false,
        "erklaerung": "Digital Leader müssen keine IT-Systemadministratoren sein; ihre Kernaufgabe ist organisationale Transformation, Menschenführung und Befähigung."
      },
      {
        "text": "Fähigkeit zur lückenlosen elektronischen Tastaturüberwachung und automatisierten Software-Screening der Mitarbeiter im mobilen Homeoffice.",
        "korrekt": false,
        "erklaerung": "Digitale Überwachung zerstört Vertrauen und widerspricht den Werten moderner digitaler Führung diametral."
      },
      {
        "text": "Strikte Beibehaltung papierhafter Aktenvorgänge und grundsätzliche Ablehnung cloudbasierter Dokumenten- und Kollaborationsplattformen.",
        "korrekt": false,
        "erklaerung": "Technologische Verweigerungshaltung verhindert zeitgemäße Zusammenarbeit und führt in der digitalen Transformation ins Abseits."
      }
    ],
    "pruefen": false
  },
  {
    "id": 45,
    "bereich": 4,
    "frage": "Was sind die 6 Führungsinstrumente beim Digital Leadership?",
    "optionen": [
      {
        "text": "Virtuelle Kommunikationstools, transparente Zielsysteme (z. B. OKRs), regelmäßige Feedbackschleifen, digitale Wissensplattformen, agile Rituale und digitale Kollaborationsräume.",
        "korrekt": true,
        "erklaerung": "Diese Instrumente sichern Ausrichtung, Dialog und Wissenstransfer in dezentralen, hybriden und vernetzten Teams."
      },
      {
        "text": "Elektronische Stechuhr, geschlossenes Einzelbüro, handschriftliches Postbuch, schriftlicher Aktenvermerk, Rundschreiben und monatliche Aushangtafel.",
        "korrekt": false,
        "erklaerung": "Dies sind analoge, papierbasierte Instrumente aus der Ära der klassischen Amts- und Fabrikverwaltung."
      },
      {
        "text": "Schriftliche Abmahnung, ordentliche Kündigung, befristete Gehaltskürzung, disziplinarische Versetzung, Einzelgespräch und Personalaktvermerk.",
        "korrekt": false,
        "erklaerung": "Hierbei handelt es sich um arbeitsrechtliche Sanktionsmaßnahmen bei Vertragsverletzungen, nicht um Führungsinstrumente beim Digital Leadership."
      },
      {
        "text": "Strategische Bilanzanalyse, Deckungsbeitragsrechnung, rollierender Liquiditätsplan, Kostenstellenrechnung, Budgetierung und Investitionsrechnung.",
        "korrekt": false,
        "erklaerung": "Dies sind Instrumente des operativen und strategischen Controllings, keine Führungsinstrumente zur Leitung digitaler Teams."
      }
    ],
    "pruefen": false
  },
  {
    "id": 46,
    "bereich": 4,
    "frage": "Wie beschreiben Sie «agile Führung»?",
    "optionen": [
      {
        "text": "Führung als dienende Funktion («Servant Leadership»): Rahmenbedingungen schaffen, Hindernisse beseitigen, Selbstorganisation fördern und iterativ aus Feedback lernen.",
        "korrekt": true,
        "erklaerung": "Agile Führungskräfte geben die Richtung vor, überlassen dem Team jedoch den Lösungsweg und unterstützen als Mentor und Enabler."
      },
      {
        "text": "Tägliche kurzfristige Änderung aller strategischen Unternehmensziele bei gleichzeitigem Verbot langfristiger Planungen und stabiler Visionen.",
        "korrekt": false,
        "erklaerung": "Agilität bedeutet Anpassungsfähigkeit bei klarer Vision, nicht willkürliches Chaos oder ziellose Richtungslosigkeit."
      },
      {
        "text": "Autoritärer Führungsstil, bei dem die Führungskraft Arbeitsaufgaben stündlich neu zuteilt und den Fortschritt persönlich und engmaschig überwacht.",
        "korrekt": false,
        "erklaerung": "Stündliche Einzelanweisungen sind extremes Mikromanagement und ersticken jede agile Eigenverantwortung im Keim."
      },
      {
        "text": "Vollständiger Rückzug der Führungskraft ohne Bereitstellung von Ressourcen, klaren Rahmenzielen oder institutionalisierten Rückkopplungsschleifen im operativen und strategischen Geschäftsalltag der Organisation.",
        "korrekt": false,
        "erklaerung": "Agile Führung ist hochaktiv im Coaching und der Hindernisbeseitigung, keinesfalls passives Laissez-faire."
      }
    ],
    "pruefen": false
  },
  {
    "id": 47,
    "bereich": 4,
    "frage": "Was bedeutet «laterale Führung» für Sie?",
    "optionen": [
      {
        "text": "Führung ohne formale hierarchische Weisungsbefugnis durch Vertrauen, Verhandlung, Überzeugungskraft, Perspektivenwechsel und gemeinsame Interessen.",
        "korrekt": true,
        "erklaerung": "Laterale Führung ist typisch in Matrixorganisationen, agilen Teams oder Projekten: Weil Machtmittel fehlen, muss über Kooperation und Konsens geführt werden."
      },
      {
        "text": "Führung durch strikte disziplinarische Vorgesetztenfunktion über direkt unterstellte Linienmitarbeiter im hierarchischen Organigramm bei der praktischen Gestaltung zeitgemäßer Führungsbeziehungen.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt die traditionelle vertikale Linienführung auf Basis formaler Weisungsbefugnis."
      },
      {
        "text": "Ausschließlich die Weitergabe von formalen Dienstanweisungen an externe Subunternehmer im Rahmen eines klassischen Werkvertrags.",
        "korrekt": false,
        "erklaerung": "Dies ist eine vertragliche Leistungsabwicklung im Beschaffungswesen, keine laterale Führung im Teamkontext."
      },
      {
        "text": "Führung von operativen Teams, die ausschließlich im Schichtdienst an Wochenenden und gesetzlichen Feiertagen im Betrieb tätig sind.",
        "korrekt": false,
        "erklaerung": "Schichtarbeit ist ein Arbeitszeitmodell und hat nichts mit der führungssoziologischen Dimension der lateralen Führung zu tun."
      }
    ],
    "pruefen": false
  },
  {
    "id": 48,
    "bereich": 4,
    "frage": "Was sind die Merkmale von «Scrum»?",
    "optionen": [
      {
        "text": "Agiles Rahmenwerk mit festen Rollen (Product Owner, Scrum Master, Developers), zeitlich fixierten Sprints und definierten Ereignissen (Planning, Daily, Review, Retro).",
        "korrekt": true,
        "erklaerung": "Scrum basiert auf empirischer Prozesskontrolle (Transparenz, Überprüfung, Anpassung) und liefert in kurzen Zyklen («Sprints») potenziell nutzbare Inkremente."
      },
      {
        "text": "Lineares Phasenmodell mit sequenziellen Stufen von Lastenheft, Pflichtenheft, Programmierung, Integrationstest und formaler Abnahme (Wasserfallmodell).",
        "korrekt": false,
        "erklaerung": "Dies beschreibt das klassische Wasserfallmodell, das im Gegensatz zu Scrum starr und wenig anpassungsfähig auf Änderungen reagiert."
      },
      {
        "text": "Ein hierarchisches Qualitätssicherungsverfahren zur lückenlosen Prozessdokumentation nach DIN ISO 9001 im industriellen Produktionsbetrieb zur Steigerung von Transparenz, Verbindlichkeit und Ergebnisqualität.",
        "korrekt": false,
        "erklaerung": "Qualitätsmanagementnormen regeln Dokumentationspflichten, sind jedoch kein agiles Rahmenwerk für Produktentwicklung und Teamorganisation."
      },
      {
        "text": "Ein vertriebliches Bonus- und Provisionsmodell zur monatlichen Abrechnung individueller Umsatzziele im Außendienst und Direktvertrieb.",
        "korrekt": false,
        "erklaerung": "Scrum ist ein agiles Zusammenarbeitsmodell und hat keinen Bezug zu Provisionsabrechnungen im Vertrieb."
      }
    ],
    "pruefen": false
  },
  {
    "id": 49,
    "bereich": 4,
    "frage": "Was bedeutet Holocracy und Bottom Up im Rahmen von «Digital Leadership»?",
    "optionen": [
      {
        "text": "Holacracy verteilt Autorität auf rollenbasierte Kreise statt Hierarchien; Bottom Up meint Entscheidungs- und Impulsfindung ausgehend von operativen Teams nach oben.",
        "korrekt": true,
        "erklaerung": "Holacracy ersetzt starre Chefpositionen durch transparente Rollen mit klaren Zuständigkeiten. Bottom-Up nutzt die kollektive Intelligenz der Basis."
      },
      {
        "text": "Holacracy ist ein zentralistisches Führungsmodell mit einem Alleinherrscher; Bottom Up bezeichnet die strikte Weisung von oben nach unten.",
        "korrekt": false,
        "erklaerung": "Hier liegt eine vollständige begriffliche Umkehrung vor: Holacracy dezentralisiert Autorität, und Top-Down meint von oben nach unten."
      },
      {
        "text": "Holacracy ist ein juristisches Verfahren zur geordneten Sanierung; Bottom Up meint die monatliche Kassenprüfung in regionalen Filialen.",
        "korrekt": false,
        "erklaerung": "Dies sind handelsrechtliche und buchhalterische Fachbegriffe, die inhaltlich nichts mit Organisationsentwicklung zu tun haben."
      },
      {
        "text": "Holacracy bedeutet die vollständige Ersetzung menschlicher Mitarbeiter durch künstliche Intelligenz und Algorithmen in allen Fachbereichen.",
        "korrekt": false,
        "erklaerung": "Holacracy ist eine menschliche Organisationsverfassung für Zusammenarbeit und Mitbestimmung, keine Technologie zur Automatisierung."
      }
    ],
    "pruefen": false
  },
  {
    "id": 50,
    "bereich": 4,
    "frage": "Welche 5 Kernelemente bestimmen den Ansatz «Working Out Loud»?",
    "optionen": [
      {
        "text": "Beziehungen aufbauen (Relationships), Großzügigkeit (Generosity), Arbeit sichtbar machen (Visible Work), zielgerichtetes Entdecken (Purposeful Discovery) und lernende Haltung.",
        "korrekt": true,
        "erklaerung": "John Stepper definierte diese fünf Prinzipien für WOL: Wissen großzügig teilen, das eigene Netzwerk pflegen und die eigene Arbeit transparent machen."
      },
      {
        "text": "Akustische Lautstärke im Großraumbüro, Verzicht auf E-Mails, tägliche Überstunden, Pflicht zur Eigenwerbung und Ablehnung von Fachliteratur in der täglichen betrieblichen Praxis und Unternehmensführung.",
        "korrekt": false,
        "erklaerung": "Dies nimmt den Begriff «Out Loud» fälschlich im akustischen Wortsinn; WOL meint transparente Vernetzung und kooperatives Lernen."
      },
      {
        "text": "Formale Zielvereinbarung, Aufgabenübertragung, permanente Leistungskontrolle, disziplinarisches Mitarbeitergespräch und Gehaltseinstufung.",
        "korrekt": false,
        "erklaerung": "Dies sind klassische Führungsinstrumente, nicht die kollaborativen Kernelemente der Working-Out-Loud-Methode."
      },
      {
        "text": "Die fünf agilen Scrum-Bestandteile: Scrum Master, Product Owner, Sprint Planning, Daily Stand-up und strukturierte Sprint Retrospektive.",
        "korrekt": false,
        "erklaerung": "Dies sind Rollen und Zeremonien des Scrum-Frameworks, keine Prinzipien des individuellen Netzwerk-Ansatzes WOL."
      }
    ],
    "pruefen": false
  },
  {
    "id": 51,
    "bereich": 4,
    "frage": "Was sind «Bar Camps»?",
    "optionen": [
      {
        "text": "Offene «Unkonferenzen», deren Ablauf und Inhalte zu Beginn von den Teilnehmern selbst festgelegt und in partizipativen Sessions gestaltet werden.",
        "korrekt": true,
        "erklaerung": "Barcamps brechen mit starren Vortragsprogrammen: Alle Teilnehmer begegnen sich auf Augenhöhe und tragen als «Teilgeber» aktiv Wissen bei."
      },
      {
        "text": "Exklusive Managementschulungen in Tagungshotels mit strikt vorgegebenen Frontalvorträgen renommierter externer Unternehmensberater.",
        "korrekt": false,
        "erklaerung": "Klassische Frontalkonferenzen mit passivem Zuhören sind das genaue Gegenteil des partizipativen, offenen Barcamp-Formats."
      },
      {
        "text": "Betriebsinterne Schlichtungsverfahren bei akuten arbeitsrechtlichen Konflikten zwischen Betriebsrat und Geschäftsleitung des Betriebs.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt gesetzliche Einigungsstellen oder Mediationen, hat jedoch keinen Bezug zum Wissensaustausch-Format Barcamp."
      },
      {
        "text": "Technische Standard-Schulungen zur förmlichen Zertifizierung von Mitarbeitern im Umgang mit ERP-Systemen und SQL-Datenbanken.",
        "korrekt": false,
        "erklaerung": "Barcamps sind offene Diskussions- und Innovationsräume zu vielfältigen Themen, keine standardisierten Software-Schulungen."
      }
    ],
    "pruefen": false
  },
  {
    "id": 52,
    "bereich": 4,
    "frage": "Was sind «Digital Natives» und welchen Führungsstil haben bzw. bevorzugen diese?",
    "optionen": [
      {
        "text": "Personen, die im digitalen Zeitalter aufgewachsen sind; sie bevorzugen transparente, partizipative, sinnorientierte Führung auf Augenhöhe mit schnellem Feedback.",
        "korrekt": true,
        "erklaerung": "Digital Natives (u. a. Generation Y und Z) sind mit Vernetzung vertraut und erwarten Selbstbestimmung, schnelle Kommunikation und werteorientierte Führung."
      },
      {
        "text": "Erfahrene Fachkräfte im Vorruhestandsalter, die hierarchische Einzelanweisungen und traditionelle papierbasierte Aktenabläufe im Büroalltag bevorzugen.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt eher traditionelle Generationen, während Digital Natives mit dem Internet und digitalen Medien groß geworden sind."
      },
      {
        "text": "Mitarbeiter, die ausschließlich autoritäre Führung schätzen, klare Befehlsketten einfordern und jede Form digitaler Kommunikation im Betrieb ablehnen.",
        "korrekt": false,
        "erklaerung": "Digital Natives meiden autoritäres Gehabe und nutzen digitale Kollaborationsplattformen selbstverständlich im Alltag."
      },
      {
        "text": "Reine Hardwarespezialisten in Rechenzentren, die grundsätzlich keine Führungsaufgaben übernehmen und nur technische Serverkomponenten reparieren zur Sicherung langfristiger Wettbewerbsvorteile am Markt.",
        "korrekt": false,
        "erklaerung": "Der Begriff Digital Native ist eine generationenbezogene soziologische Bezeichnung und keine eng definierte IT-Berufsgruppe."
      }
    ],
    "pruefen": false
  },
  {
    "id": 53,
    "bereich": 4,
    "frage": "Was bedeutet «Social Intranet»?",
    "optionen": [
      {
        "text": "Eine interaktive Plattform für interne Unternehmenskommunikation, die Wissensaustausch, Vernetzung, Kollaboration und Dialogfunktionen wie soziale Netzwerke vereint.",
        "korrekt": true,
        "erklaerung": "Ein Social Intranet wandelt die passive Einweg-Information (klassisches Intranet) in einen lebendigen Zwei-Wege-Dialog mit Likes, Kommentaren und Communities."
      },
      {
        "text": "Eine öffentlich im Internet zugängliche Werbe-Webseite zur gezielten Schaltung bezahlter Stellenanzeigen in externen Jobportalen und Medien unter Berücksichtigung personeller und organisatorischer Rahmenbedingungen.",
        "korrekt": false,
        "erklaerung": "Ein Social Intranet ist ein geschützter interner Raum für Mitarbeiter und kein externes Recruiting-Portal."
      },
      {
        "text": "Ein rein administratives Softwaresystem zur elektronischen Abwicklung der monatlichen Gehaltsabrechnung und gesetzlichen Sozialversicherungsbeiträge.",
        "korrekt": false,
        "erklaerung": "Hierbei handelt es sich um Lohnverrechnungs- und Personaladministrationssoftware, nicht um ein kollaboratives Social Intranet."
      },
      {
        "text": "Eine Software zur automatischen Überwachung und Protokollierung privater Social-Media-Aktivitäten von Mitarbeitern während der Freizeit.",
        "korrekt": false,
        "erklaerung": "Dies wäre datenschutzrechtlich unzulässige Mitarbeiterüberwachung; ein Social Intranet dient der internen Vernetzung und Zusammenarbeit."
      }
    ],
    "pruefen": false
  },
  {
    "id": 54,
    "bereich": 5,
    "frage": "Welche Grundsätze wirksamer Führung kennen Sie?",
    "optionen": [
      {
        "text": "Resultatorientierung, Beitrag zum Ganzen, Konzentration auf Weniges, Stärken nutzen, Vertrauen schaffen und Positiv denken (nach Malik).",
        "korrekt": true,
        "erklaerung": "Diese 6 Grundsätze nach Fredmund Malik definieren die handwerkliche Qualität und innere Haltung für wirksame Führung unabhängig von Branche oder Hierarchie."
      },
      {
        "text": "Machtstreben, Perfektionismus, Informationszurückhaltung, strenge Fehlerbestrafung und personelle Einzelkämpfer-Förderung im Team.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt toxische Verhaltensweisen, die Vertrauen zerstören, Mitarbeiter demotivieren und die Wirksamkeit von Organisationen schwächen."
      },
      {
        "text": "Planen, Organisieren, Entscheiden, Kontrollieren, Entwickeln und Fördern aller operativen Arbeitsprozesse im Unternehmensbereich im operativen und strategischen Geschäftsalltag der Organisation.",
        "korrekt": false,
        "erklaerung": "Dies sind Management-Aufgaben (was eine Führungskraft tut), nicht die qualitativen Grundsätze wirksamer Führung (wie sie es tut)."
      },
      {
        "text": "Agilität leben, Scrum etablieren, Hierarchien auflösen, Konsens erzwingen und Homeoffice für alle Mitarbeiter verbindlich anordnen.",
        "korrekt": false,
        "erklaerung": "Dies sind Methoden und Organisationsformen modernen Arbeitens, aber keine universell gültigen Grundsätze wirksamer Führung nach Malik."
      }
    ],
    "pruefen": false
  },
  {
    "id": 55,
    "bereich": 5,
    "frage": "Was bedeutet der Grundsatz Verantwortung übernehmen?",
    "optionen": [
      {
        "text": "Für die Konsequenzen der eigenen Entscheidungen und Handlungen uneingeschränkt einzustehen und Ursachen von Fehlern bei sich selbst zu suchen.",
        "korrekt": true,
        "erklaerung": "Verantwortung heißt Vorbild sein: Nicht die Umstände oder andere beschuldigen, sondern proaktiv handeln und für Resultate geradestehen."
      },
      {
        "text": "Unangenehme Aufgaben und unerwartete Fehlschläge im Projektverlauf primär auf externe Berater oder unterstellte Mitarbeiter im Team abzuschieben.",
        "korrekt": false,
        "erklaerung": "Das Abwälzen von Schuld («Blame Game») untergräbt die Glaubwürdigkeit und zerstört das Vertrauen im gesamten Team."
      },
      {
        "text": "Sich vor jeder Führungs- und Managementhandlung durch schriftliche Freizeichnungserklärungen der Geschäftsleitung gegen persönliche Risiken abzusichern.",
        "korrekt": false,
        "erklaerung": "Übervorsichtige Absicherungsmentalität lähmt unternehmerisches Handeln und widerspricht gelebter Führungsverantwortung."
      },
      {
        "text": "Ausschließlich die disziplinarische Haftung für gravierendes Fehlverhalten von Mitarbeitern vor Gericht oder Arbeitsbehörden rechtlich abzuwehren.",
        "korrekt": false,
        "erklaerung": "Verantwortung im Führungsalltag ist eine moralische und operative Gestaltungsaufgabe, keine rein juristische Prozessverteidigung."
      }
    ],
    "pruefen": false
  },
  {
    "id": 56,
    "bereich": 5,
    "frage": "Was heißt für Sie Ergebnisverantwortung übernehmen?",
    "optionen": [
      {
        "text": "Sich nicht am Aufwand oder Fleiß, sondern an der tatsächlichen Erreichung der vereinbarten qualitativen und quantitativen Zielresultate messen zu lassen.",
        "korrekt": true,
        "erklaerung": "Ergebnisverantwortung bedeutet: Entscheidend ist, was am Ende herauskommt (Output) und welchen Nutzen es stiftet, nicht wie viel Zeit investiert wurde."
      },
      {
        "text": "Den formalen Nachweis von möglichst vielen geleisteten Überstunden und randvollen Terminkalendern als primären Leistungsbeleg im Betrieb vorzulegen.",
        "korrekt": false,
        "erklaerung": "Reiner Fleiß und Anwesenheit («Präsentismus») sind Inputgrößen; sie garantieren für sich genommen noch kein wertschöpfendes Ergebnis."
      },
      {
        "text": "Bei Nichterreichen vereinbarter Kennzahlen die Schuld stets auf konjunkturelle Schwankungen, veränderte Marktbedingungen oder Lieferverzögerungen abzuwälzen.",
        "korrekt": false,
        "erklaerung": "Eine Rechtfertigungshaltung verhindert Lernerfahrungen und widerspricht der Übernahme echter Ergebnisverantwortung."
      },
      {
        "text": "Sämtliche Zielvereinbarungen am Jahresanfang bewusst so niedrig anzusetzen, dass eine hundertprozentige Übererfüllung ohne jede Anstrengung garantiert ist.",
        "korrekt": false,
        "erklaerung": "Zielmanipulation zur Risikominimierung behindert echte Höchstleistungen und verfehlt den unternehmerischen Sinn von Zielen."
      }
    ],
    "pruefen": false
  },
  {
    "id": 57,
    "bereich": 5,
    "frage": "Was bedeutet der Grundsatz «Beitrag leisten»?",
    "optionen": [
      {
        "text": "Das eigene Handeln stets am Nutzen für das Gesamtsystem und den Kunden auszurichten: «Was kann ich beitragen, damit das Ganze erfolgreich ist?».",
        "korrekt": true,
        "erklaerung": "Peter Drucker und Fredmund Malik betonen: Wirksame Menschen fragen nicht nach Titeln oder Rechten, sondern nach ihrem konkreten Beitrag zum Gesamterfolg."
      },
      {
        "text": "Die eigenen Karrierechancen im Unternehmen gezielt zu maximieren, unabhängig davon, ob die eigene Abteilung einen messbaren Mehrwert erwirtschaftet.",
        "korrekt": false,
        "erklaerung": "Reines Karrieredenken stellt das persönliche Fortkommen über den Unternehmenszweck und widerspricht dem Gedanken des Beitrags."
      },
      {
        "text": "Möglichst viele anspruchsvolle Aufgaben an benachbarte Fachabteilungen zu delegieren, um das eigene Team budgetär und zeitlich spürbar zu schonen.",
        "korrekt": false,
        "erklaerung": "Silo- und Abteilungsdenken schadet dem Gesamtunternehmen und führt zu internen Reibungsverlusten statt gemeinsamer Wertschöpfung."
      },
      {
        "text": "Ausschließlich vertraglich festgelegte Minimalpflichten ohne jede Eigeninitiative nach dem bekannten Prinzip «Dienst nach Vorschrift» zu erfüllen.",
        "korrekt": false,
        "erklaerung": "Dienst nach Vorschrift beschränkt sich auf formale Anwesenheit, leistet jedoch keinen proaktiven Beitrag zur Weiterentwicklung der Organisation."
      }
    ],
    "pruefen": false
  },
  {
    "id": 58,
    "bereich": 5,
    "frage": "Was hat George A. Miller festgestellt?",
    "optionen": [
      {
        "text": "Die Begrenztheit des menschlichen Kurzzeitgedächtnisses auf ca. 7 (± 2) Informationseinheiten («Chunks»), was die Konzentration auf Weniges erfordert.",
        "korrekt": true,
        "erklaerung": "Millers berühmte Zahl 7 (± 2) belegt kognitive Engpässe: Führungskräfte dürfen sich und Teams nicht mit zu vielen Prioritäten gleichzeitig überfordern."
      },
      {
        "text": "Dass Wissensarbeiter am produktivsten arbeiten, wenn sie parallel mehr als zehn komplexe Aufgaben und Projekte gleichzeitig im Blick behalten.",
        "korrekt": false,
        "erklaerung": "Multitasking senkt die Produktivität nachweislich und erhöht die Fehlerquote, was Millers Erkenntnissen diametral widerspricht."
      },
      {
        "text": "Dass die Arbeitsmotivation von Mitarbeitern im Büro primär von der Raumgröße, Beleuchtungsstärke und der ergonomischen Ausstattung abhängt.",
        "korrekt": false,
        "erklaerung": "Raumfaktoren wurden in den Hawthorne-Studien untersucht; George A. Miller forschte zur Kognitionspsychologie und Speicherkapazität."
      },
      {
        "text": "Dass Menschen in Arbeitsgruppen grundsätzlich genau die Hälfte ihrer individuellen Leistungsfähigkeit einbüßen (Ringelmann-Effekt).",
        "korrekt": false,
        "erklaerung": "Der Leistungsabfall in Gruppen (soziales Faulenzen) geht auf Max Ringelmann zurück, nicht auf George A. Miller."
      }
    ],
    "pruefen": false
  },
  {
    "id": 59,
    "bereich": 5,
    "frage": "Wie erklären Sie das «Eisenhower Prinzip»?",
    "optionen": [
      {
        "text": "Kategorisierung von Aufgaben nach Wichtigkeit und Dringlichkeit in 4 Felder: A (sofort selbst), B (terminieren), C (delegieren) und D (eliminieren).",
        "korrekt": true,
        "erklaerung": "Das Eisenhower-Prinzip schützt vor der Dringlichkeitsfalle: Wesentlich für den langfristigen Erfolg sind B-Aufgaben (wichtig, aber nicht eilig)."
      },
      {
        "text": "Klassifizierung von Mitarbeitern nach Fachkompetenz und Motivation zur Ermittlung des passenden Führungsstils im Führungsalltag zur Steigerung von Transparenz, Verbindlichkeit und Ergebnisqualität.",
        "korrekt": false,
        "erklaerung": "Die Einteilung nach Kompetenz und Motivation gehört zur Reifegradtheorie von Hersey und Blanchard, nicht zum Eisenhower-Prinzip."
      },
      {
        "text": "Chronologische Abarbeitung aller eingehenden Aufgaben streng nach dem Eingangsstempel («First In, First Out») im täglichen Bürobetrieb.",
        "korrekt": false,
        "erklaerung": "FIFO ignoriert Prioritäten vollkommen; das Eisenhower-Prinzip filtert strikt nach Dringlichkeit und Wichtigkeit."
      },
      {
        "text": "Ein systematisches Verfahren zur Analyse von Stärken, Schwächen, Chancen und Risiken im strategischen Marketing (SWOT-Analyse).",
        "korrekt": false,
        "erklaerung": "Dies beschreibt die SWOT-Analyse, welche für Marktanalysen genutzt wird, aber kein individuelles Selbstmanagement-Tool ist."
      }
    ],
    "pruefen": false
  },
  {
    "id": 60,
    "bereich": 5,
    "frage": "Welche Zeitspartipps kennen Sie?",
    "optionen": [
      {
        "text": "Bündelung gleichartiger Aufgaben (Batching), Timeboxing, Vermeidung von Multitasking, Einplanen von Pufferzeiten und konsequentes Neinsagen.",
        "korrekt": true,
        "erklaerung": "Diese praxiserprobten Selbstmanagement-Techniken minimieren Rüstzeiten, verhindern Verzettelung und schaffen fokussierte Arbeitsblöcke."
      },
      {
        "text": "Paralleles Beantworten von Kunden-E-Mails während wichtiger Verhandlungen zur Maximierung des täglichen Arbeitsvolumens im Außendienst.",
        "korrekt": false,
        "erklaerung": "Multitasking stört die Aufmerksamkeit im Gespräch, vermittelt Geringschätzung und führt zu kostspieligen Missverständnissen."
      },
      {
        "text": "Vollständiger Verzicht auf schriftliche Tagespläne und rein spontanes Abarbeiten der jeweils lautesten Beschwerden im operativen Team.",
        "korrekt": false,
        "erklaerung": "Reines Reagieren auf Zuruf macht fremdbestimmt und verhindert konzentriertes Arbeiten an wichtigen strategischen Prioritäten."
      },
      {
        "text": "Tägliches Verschieben aller anspruchsvollen strategischen Aufgaben auf das Quartalsende, um das Tagesgeschäft lückenlos abzuwickeln.",
        "korrekt": false,
        "erklaerung": "Aufschieberitis (Prokrastination) erzeugt enormen Termindruck und mindert die Qualität strategischer Entscheidungen."
      }
    ],
    "pruefen": false
  },
  {
    "id": 61,
    "bereich": 5,
    "frage": "Wie schaffen Sie als Führungskraft «Vertrauen»?",
    "optionen": [
      {
        "text": "Durch Verlässlichkeit und Worttreue («Walk the talk»), ehrliche Wertschätzung, transparente Kommunikation und das Einräumen von Handlungsspielräumen.",
        "korrekt": true,
        "erklaerung": "Vertrauen wächst durch berechenbares, integres Verhalten: Zusagen einhalten, Erfolge teilen, bei Fehlern fair bleiben und Freiräume gewähren."
      },
      {
        "text": "Durch lückenlose Überprüfung aller Zwischenergebnisse und tägliche schriftliche Rechenschaftsberichte jedes einzelnen Mitarbeiters im Team.",
        "korrekt": false,
        "erklaerung": "Engmaschige Kontrollrituale signalisieren grundlegendes Misstrauen und ersticken Motivation und Initiative im Team."
      },
      {
        "text": "Indem man Mitarbeitern unrealistische Karriereschritte verspricht, um die kurzfristige Motivation vor wichtigen Projektabschlüssen hochzuhalten.",
        "korrekt": false,
        "erklaerung": "Uneinlösbare Versprechen werden rasch durchschaut und vernichten jedes Vertrauen in die Integrität der Führungskraft."
      },
      {
        "text": "Durch systematische Vermeidung jeglicher kritischer Leistungsrückmeldungen, um persönliche Spannungen im Team grundsätzlich auszuschließen in der täglichen betrieblichen Praxis und Unternehmensführung.",
        "korrekt": false,
        "erklaerung": "Falsche Harmonie verhindert Entwicklung; ehrliches, konstruktives Feedback ist ein Zeichen von Wertschätzung und schafft Klarheit."
      }
    ],
    "pruefen": false
  },
  {
    "id": 62,
    "bereich": 5,
    "frage": "Was ist der Unterschied zwischen extrinsischer und intrinsischer Motivation?",
    "optionen": [
      {
        "text": "Intrinsische Motivation speist sich aus der Freude und Sinnhaftigkeit des Tuns selbst; extrinsische Motivation wird durch äußere Anreize wie Geld, Boni oder Strafvermeidung gesteuert.",
        "korrekt": true,
        "erklaerung": "Intrinsisch motivierte Mitarbeiter handeln aus innerem Antrieb (Autonomie, Kompetenz, Sinn); extrinsische Anreize wirken oft nur kurzfristig."
      },
      {
        "text": "Intrinsische Motivation wird ausschließlich durch Gehaltserhöhungen und Sonderzahlungen geweckt, während extrinsische Motivation aus der persönlichen inneren Haltung kommt im Rahmen moderner Führungs- und Organisationsstrukturen.",
        "korrekt": false,
        "erklaerung": "Hier wurden die Begriffe exakt vertauscht: Finanzieller Lohn ist von außen zugeführt (extrinsisch), innere Freude ist intrinsisch."
      },
      {
        "text": "Intrinsische Motivation ist wissenschaftlich nur bei leitenden Führungskräften vorhanden, während gewerbliche Mitarbeiter ausschließlich extrinsisch motivierbar sind.",
        "korrekt": false,
        "erklaerung": "Intrinsische Motivation ist ein allgemeines menschliches Bedürfnis und keineswegs auf Führungskräfte oder bestimmte Berufssparten beschränkt."
      },
      {
        "text": "Beide Motivationsarten sind in der modernen Neurobiologie vollkommen identisch und beschreiben denselben biologischen Prozess der simplen Reiz-Reaktions-Kopplung.",
        "korrekt": false,
        "erklaerung": "In der Motivationspsychologie (z. B. Selbstbestimmungstheorie von Deci & Ryan) wird strikt zwischen autonomen und kontrollierten Motiven unterschieden."
      }
    ],
    "pruefen": false
  },
  {
    "id": 63,
    "bereich": 5,
    "frage": "Was heißt bei wirksamer Führung «Resultatorientierung»?",
    "optionen": [
      {
        "text": "Leistung konsequent am tatsächlichen, wertschöpfenden Ergebnis (Output) zu messen und nicht an bloßem Fleiß, Anwesenheit oder betriebiger Beschäftigung (Input).",
        "korrekt": true,
        "erklaerung": "Fredmund Malik stellt klar: Betriebswirtschaftlich zählt das erzielte Resultat für den Kunden, nicht der persönliche Schweiß oder die investierten Stunden."
      },
      {
        "text": "Ausschließlich die Anzahl der im Büro physisch verbrachten Arbeitsstunden und den gefühlten persönlichen Fleiß als primären Leistungsmaßstab heranzuziehen.",
        "korrekt": false,
        "erklaerung": "Dies verwechselt Input (Aufwand) mit Output (Ergebnis) und begünstigt unproduktive Scheingeschäftigkeit im Betrieb."
      },
      {
        "text": "Das kompromisslose Erzielen kurzfristiger Quartalsgewinne unter bewusster Inkaufnahme des langfristigen Verlusts von Kundenvertrauen und Mitarbeitergesundheit zur Sicherung langfristiger Wettbewerbsvorteile am Markt.",
        "korrekt": false,
        "erklaerung": "Kurzfristige Ausbeutung widerspricht nachhaltiger Resultatorientierung, die auf dauerhafte Wertschöpfung und Stabilität abzielt."
      },
      {
        "text": "Das dogmatische Festhalten an starren Projektplänen, selbst wenn das ursprüngliche Projektergebnis am Markt keinen Kundennutzen mehr stiftet.",
        "korrekt": false,
        "erklaerung": "Planungshörigkeit ohne Blick auf den tatsächlichen Nutzen verfehlt den Kern wahrer Resultatorientierung."
      }
    ],
    "pruefen": false
  },
  {
    "id": 64,
    "bereich": 5,
    "frage": "Worauf muss die Führungskraft als «Coach» aufpassen?",
    "optionen": [
      {
        "text": "Keine fertigen Ratschläge zu diktieren, die Lösungsverantwortung beim Mitarbeiter zu belassen und die Grenze zu Disziplinarmaßnahmen und Therapie zu wahren.",
        "korrekt": true,
        "erklaerung": "Coaching ist «Hilfe zur Selbsthilfe». Die Führungskraft unterstützt durch gezielte Fragen, überlässt aber dem Coachee das Finden und Umsetzen der Lösung."
      },
      {
        "text": "Dem Mitarbeiter sofort alle schwierigen Aufgaben und Problemlösungen abzunehmen, sobald im Gespräch erste fachliche Zweifel oder Hürden aufkommen.",
        "korrekt": false,
        "erklaerung": "Das Übernehmen der Arbeit entmündigt Mitarbeiter und verhindert deren persönliche und fachliche Weiterentwicklung."
      },
      {
        "text": "Das vertrauliche Coaching-Gespräch als verdecktes Disziplinierungs- und Beurteilungsgespräch für anstehende Gehaltseinstufungen oder Kündigungen zu nutzen.",
        "korrekt": false,
        "erklaerung": "Der Missbrauch eines Entwicklungsgesprächs für Sanktionen zerstört die für Coaching unabdingbare Vertrauensbasis."
      },
      {
        "text": "Ausschließlich theoretische Lehrbuchvorträge zu halten, ohne auf die konkreten Praxisherausforderungen und Fragen des Mitarbeiters einzugehen.",
        "korrekt": false,
        "erklaerung": "Frontalunterricht ist kein Coaching; Coaching setzt an den konkreten individuellen Herausforderungen des Coachees an."
      }
    ],
    "pruefen": false
  },
  {
    "id": 65,
    "bereich": 5,
    "frage": "Was ist der innere Rollenkonflikt beim Coaching und wie bekommen Sie diesen in den Griff?",
    "optionen": [
      {
        "text": "Der Spagat zwischen wohlwollender Entwicklungsbegleitung und disziplinarischer Beurteilungsmacht; Lösung durch Transparenz und strikte Trennung der Gesprächsanlässe.",
        "korrekt": true,
        "erklaerung": "Führungskräfte sind gleichzeitig Förderer und Beurteiler. Klare Rollenklärung zu Beginn und die Trennung von Feedback- und Beurteilungsgesprächen schaffen Sicherheit."
      },
      {
        "text": "Der Widerspruch zwischen strategischer Unternehmensplanung und operativer Zeiterfassung; Lösung durch Einführung moderner Projektmanagement-Tools im operativen und strategischen Geschäftsalltag der Organisation.",
        "korrekt": false,
        "erklaerung": "Dies ist ein sachlicher Aufgabenkonflikt der Organisation, nicht der personelle Rollenkonflikt einer coachenden Führungskraft."
      },
      {
        "text": "Der anhaltende Streit zwischen Vertrieb und Einkauf über Konditionen und Rabatte; Lösung durch hierarchische Schlichtung auf Geschäftsführungsebene.",
        "korrekt": false,
        "erklaerung": "Hierbei handelt es sich um einen interdisziplinären Schnittstellenkonflikt zwischen zwei Abteilungen, keinen individuellen Rollenkonflikt."
      },
      {
        "text": "Die Rivalität zwischen zwei Mitarbeitern um dieselbe Beförderungsstelle; Lösung durch Vergabe von fiktiven Teamtiteln an beide Streitparteien.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt einen zwischenmenschlichen Konkurrenzkampf im Team, nicht den inneren Rollenspagat der Führungskraft."
      }
    ],
    "pruefen": false
  },
  {
    "id": 66,
    "bereich": 5,
    "frage": "Welche 8 Kontrollfragen während des Coaching-Gesprächs würden Sie sich stellen?",
    "optionen": [
      {
        "text": "Höre ich aktiv zu? Halte ich Pausen aus? Gebe ich Lösungen vor? Bleibe ich empathisch neutral? Verstehe ich das Kernanliegen? Sind Ziele klar? Wer redet mehr? Was ist der nächste Schritt?",
        "korrekt": true,
        "erklaerung": "Diese Reflexionsfragen stellen sicher, dass der Coach nicht in die Beraterfalle tappt, den Redeanteil beim Coachee belässt und das Gespräch zielorientiert führt."
      },
      {
        "text": "Reicht die Redezeit für meinen Vortrag? Habe ich alle Einwände widerlegt? Zeigt der Mitarbeiter Reue? Wird die Weisung befolgt? Wann gibt es Boni? Wer protokolliert? Ist die Strafe verhängt? Wann endet das Meeting?",
        "korrekt": false,
        "erklaerung": "Diese Fragen spiegeln ein autoritäres Befragungs- oder Disziplinierungsgespräch wider, keine Haltung eines lösungsorientierten Coaches."
      },
      {
        "text": "Wurden alle Präsentationsfolien gezeigt? Funktioniert die Konferenztechnik? Passt das Unternehmensdesign? Wurden Getränke bereitgestellt? Ist der Raum gelüftet? Wer führt Protokoll? Wann beginnt die Pause? Wurde die Anwesenheit erfasst?",
        "korrekt": false,
        "erklaerung": "Dies sind organisatorische und administrative Checkfragen zur Raum- und Besprechungsverwaltung, keine psychologischen Coaching-Kontrollfragen."
      },
      {
        "text": "Welche Kennzahlen wurden im Quartal verfehlt? Wer trägt die Hauptschuld? Wie hoch ist der finanzielle Schaden? Wann greift die Versicherung? Wer informiert die Rechtsabteilung? Welche Abmahnungen sind nötig? Gibt es Pressemeldungen? Wann tagt der Vorstand?",
        "korrekt": false,
        "erklaerung": "Dies kennzeichnet ein juristisches Krisen- und Schadensmanagement nach schweren Fehlern, kein personelles Coaching-Setting."
      }
    ],
    "pruefen": false
  },
  {
    "id": 67,
    "bereich": 5,
    "frage": "Was bedeutet der Begriff Führungsspanne?",
    "optionen": [
      {
        "text": "Die Anzahl der Mitarbeiter, die einer Führungskraft unmittelbar und direkt disziplinarisch unterstellt sind.",
        "korrekt": true,
        "erklaerung": "Die Leitungs- oder Führungsspanne («Span of Control») bezeichnet die Zahl der direkt an eine Führungskraft berichtenden Mitarbeiter."
      },
      {
        "text": "Die zeitliche Dauer, die eine Führungskraft durchschnittlich in derselben Managementposition im Unternehmen verbleibt.",
        "korrekt": false,
        "erklaerung": "Dies bezeichnet die Verweildauer oder Amtszeit («Tenure») einer Führungskraft, nicht die organisatorische Führungsspanne."
      },
      {
        "text": "Die räumliche Distanz in Metern zwischen dem Schreibtisch der Führungskraft und dem Arbeitsplatz der Teammitglieder.",
        "korrekt": false,
        "erklaerung": "Räumliche Entfernungen betreffen das Arbeitsplatzlayout oder Remote-Modelle, haben jedoch nichts mit dem Begriff der Führungsspanne zu tun."
      },
      {
        "text": "Die prozentuale Gehaltsspanne zwischen dem niedrigsten und dem höchsten Einkommen innerhalb einer Fachabteilung.",
        "korrekt": false,
        "erklaerung": "Dies ist die Entgeltspreizung oder Einkommensbandbreite, keine führungsstrukturelle Kennzahl."
      }
    ],
    "pruefen": false
  },
  {
    "id": 68,
    "bereich": 5,
    "frage": "Was ist die optimale Führungsspanne?",
    "optionen": [
      {
        "text": "Es gibt keine pauschale Zahl; sie hängt von Aufgabenkomplexität, Standardisierungsgrad, Qualifikation der Mitarbeiter und Führungsstil ab (oft 4–10 Personen).",
        "korrekt": true,
        "erklaerung": "Bei komplexen, kreativen Tätigkeiten ist eine kleinere Spanne nötig (z. B. 4–7); bei stark standardisierten Routinearbeiten kann sie deutlich größer sein."
      },
      {
        "text": "Gesetzlich vorgeschrieben sind im österreichischen Arbeits- und Gewerberecht exakt 15 direkt unterstellte Mitarbeiter pro Führungskraft für alle Branchen.",
        "korrekt": false,
        "erklaerung": "Es gibt keinerlei gesetzliche Vorschrift für Führungsspannen; es handelt sich um eine betriebswirtschaftliche Organisationsentscheidung."
      },
      {
        "text": "Grundsätzlich gilt in der Managementlehre: Je mehr Mitarbeiter direkt unterstellt sind (ideal über 50), desto effektiver und persönlicher ist die Führung.",
        "korrekt": false,
        "erklaerung": "Zu große Spannen führen zu Überlastung der Führungskraft, Vernachlässigung von Mitarbeitergesprächen und mangelnder Steuerungsfähigkeit."
      },
      {
        "text": "Im modernen agilen Management beträgt die wissenschaftlich empfohlene optimale Führungsspanne stets exakt ein Mitarbeiter pro Vorgesetztem.",
        "korrekt": false,
        "erklaerung": "Eine 1:1-Zuordnung wäre ineffizient und würde unnötig tiefe Hierarchiestufen erzeugen, was agilen Prinzipien widerspricht."
      }
    ],
    "pruefen": false
  },
  {
    "id": 69,
    "bereich": 6,
    "frage": "Was bedeutet das Kauf-Verhalten von Kunden?",
    "optionen": [
      {
        "text": "Die Gesamtheit aller beobachtbaren Handlungen und psychologischen Prozesse von Personen im Zusammenhang mit der Auswahl, dem Kauf und der Nutzung von Gütern.",
        "korrekt": true,
        "erklaerung": "Kaufverhalten umfasst den gesamten Prozess: Bedarfsentstehung, Informationssuche, Alternativenbewertung, Kaufakt sowie Nachkaufverhalten und Zufriedenheit."
      },
      {
        "text": "Das ausschließliche Begleichen einer offenen Rechnung an der Kasse mittels digitaler Zahlungsverfahren oder durch Barzahlung vor Ort.",
        "korrekt": false,
        "erklaerung": "Der Bezahlvorgang ist lediglich der technische Abschlussakt, beschreibt jedoch nicht das vielschichtige Kaufverhalten davor und danach."
      },
      {
        "text": "Die logistische Kommissionierung, Verpackung und termingerechte Auslieferung von Waren aus dem Zentrallager an den Facheinzelhandel.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt warenwirtschaftliche Logistikprozesse der Distribution, nicht das Konsumenten- bzw. Kaufverhalten der Kunden."
      },
      {
        "text": "Die juristische Überprüfung der Allgemeinen Geschäftsbedingungen durch die Rechtsabteilung vor dem förmlichen Vertragsabschluss im Betrieb zur Steigerung von Transparenz, Verbindlichkeit und Ergebnisqualität.",
        "korrekt": false,
        "erklaerung": "Dies ist eine rechtliche Vertragskontrolle, die das psychologische und praktische Konsumverhalten der Kunden nicht abbildet."
      }
    ],
    "pruefen": false
  },
  {
    "id": 70,
    "bereich": 6,
    "frage": "Wie heißen die 4 Arten des Kaufverhaltens?",
    "optionen": [
      {
        "text": "Echtes (extensives), gewohnheitsmäßiges (habituelles), limitiertes (vereinfachtes) sowie impulsives (emotionales) Kaufverhalten.",
        "korrekt": true,
        "erklaerung": "Diese klassische Typologie (nach Kroeber-Riel/Weinberg) differenziert nach dem Grad der kognitiven Steuerung und dem emotionalen Involvement."
      },
      {
        "text": "Rationales, spekulatives, hochriskantes und vermögensverwaltendes Kaufverhalten an internationalen Wertpapier- und Devisenbörsen.",
        "korrekt": false,
        "erklaerung": "Dies sind Kategorien aus der Finanzmarkt- und Börsentheorie, nicht die konsumentenpsychologischen Grundarten des Kaufverhaltens."
      },
      {
        "text": "Stationäres, rein digitales, mobiles und telefonisches Kaufverhalten nach der Art des genutzten Vertriebs- und Kommunikationskanals.",
        "korrekt": false,
        "erklaerung": "Dies unterscheidet Einkaufsstätten und Absatzkanäle, nicht die psychologischen Entscheidungsprozesse beim Kauf."
      },
      {
        "text": "Primäres, sekundäres, tertiäres und quartäres Konsumverhalten nach der volkswirtschaftlichen Gliederung in Wirtschaftssektoren.",
        "korrekt": false,
        "erklaerung": "Dies sind volkswirtschaftliche Sektoren (Rohstoffe, Industrie, Dienstleistungen, Information), keine Arten des Kaufverhaltens."
      }
    ],
    "pruefen": false
  },
  {
    "id": 71,
    "bereich": 6,
    "frage": "Was sind Emotionen und wo entstehen diese?",
    "optionen": [
      {
        "text": "Psychophysiologische Reaktionsmuster auf relevante Reize zur Handlungssteuerung; neurobiologisch entstehen sie maßgeblich im limbischen System (u. a. Amygdala).",
        "korrekt": true,
        "erklaerung": "Emotionen bewerten Situationen blitzschnell und bereiten Reaktionen vor. Das limbische System ist das zentrale neuronale Netzwerk für emotionale Prozesse."
      },
      {
        "text": "Rein kognitive mathematische Rechenoperationen zur Kosten-Nutzen-Optimierung, die ausschließlich in der Großhirnrinde (Kortex) ablaufen im Kontext moderner Führungspsychologie und Kundenorientierung.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt rein logisch-analytische Denkprozesse; Emotionen haben eine tiefere evolutionäre und neurochemische Basis im limbischen System."
      },
      {
        "text": "Angeborene motorische Schutzreflexe des Bewegungsapparats, die autonom im Rückenmark ohne jede Beteiligung des Gehirns ausgelöst werden.",
        "korrekt": false,
        "erklaerung": "Rückenmarksreflexe sind rein motorische Schutzmechanismen und haben keinen Zusammenhang mit komplexen Emotionen und Werturteilen."
      },
      {
        "text": "Willentlich und rational gesteuerte moralische Grundsätze, die im sensorischen Sprachzentrum des menschlichen Schläfenlappens gebildet werden.",
        "korrekt": false,
        "erklaerung": "Emotionen laufen weitgehend unbewusst und automatisch ab; das Sprachzentrum verarbeitet Worte, erzeugt jedoch keine Emotionen."
      }
    ],
    "pruefen": false
  },
  {
    "id": 72,
    "bereich": 6,
    "frage": "Was sind Emotionssysteme und welche kennen Sie?",
    "optionen": [
      {
        "text": "Neurobiologische Grundsysteme zur Verhaltenssteuerung im Gehirn nach Häusel: Balance-System (Sicherheit), Stimulanz-System (Neugier) und Dominanz-System (Macht).",
        "korrekt": true,
        "erklaerung": "Die «Limbic®»-Emotionssysteme nach Dr. Hans-Georg Häusel bestimmen maßgeblich alle menschlichen Wünsche, Motive und Kaufentscheidungen."
      },
      {
        "text": "Psychologische Abwehrmechanismen nach der Psychoanalyse von Sigmund Freud: Verdrängung, Projektion, Sublimierung und unbewusste Reaktionsbildung.",
        "korrekt": false,
        "erklaerung": "Dies sind klassische psychoanalytische Abwehrmechanismen zur Angstbewältigung, keine neurobiologischen Emotionssysteme im Marketing."
      },
      {
        "text": "Die vier überlieferten Temperamentstypen nach der antiken Vier-Säfte-Lehre: Choleriker, Sanguiniker, Phlegmatiker und melancholische Typen.",
        "korrekt": false,
        "erklaerung": "Die historische Vier-Säfte-Lehre ist medizinhistorisch überholt und bildet keine moderne Grundlage der Konsumenten-Neurobiologie."
      },
      {
        "text": "Die fünf empirischen Persönlichkeitsfaktoren des psychologischen Big-Five-Modells: Neurotizismus, Extraversion, Offenheit, Verträglichkeit und Gewissenhaftigkeit.",
        "korrekt": false,
        "erklaerung": "Das Big-Five-Modell beschreibt Persönlichkeitseigenschaften (Traits), aber nicht die handlungstreibenden Emotionssysteme im Gehirn."
      }
    ],
    "pruefen": false
  },
  {
    "id": 73,
    "bereich": 6,
    "frage": "Wer hat das Limbic®-System entwickelt und wie erklären Sie die Emotionssysteme?",
    "optionen": [
      {
        "text": "Hans-Georg Häusel; das Modell erklärt Konsumentenverhalten über die drei Emotionssysteme Balance (Stabilität), Stimulanz (Erlebnis) und Dominanz (Status).",
        "korrekt": true,
        "erklaerung": "Dr. Hans-Georg Häusel übertrug Erkenntnisse der Hirnforschung ins Marketing (Limbic® Map). Zwischen den Systemen liegen Mischwerte wie Abenteuer oder Disziplin."
      },
      {
        "text": "Paul Ekman; das psychologische Modell beschreibt universelle mimische Gesichtsausdrücke bei den Basisemotionen Wut, Freude, Trauer, Ekel und Angst.",
        "korrekt": false,
        "erklaerung": "Paul Ekman ist führend in der Erforschung von Mikromimik und Basisemotionen, entwickelte jedoch nicht das Limbic®-System für Marketing."
      },
      {
        "text": "Daniel Kahneman; das ökonomische Modell unterteilt menschliches Denken in das schnelle intuitive System 1 und das langsame analytische System 2 in der täglichen betrieblichen Praxis und Unternehmensführung.",
        "korrekt": false,
        "erklaerung": "Kahneman begründete die Verhaltensökonomie mit System 1 und 2, während Häusel die spezifischen neurobiologischen Emotionssysteme erforschte."
      },
      {
        "text": "Philip Kotler; das klassische Konzept gliedert absatzpolitische Marketingstrategien in Product, Price, Place und Promotion (Marketing-Mix).",
        "korrekt": false,
        "erklaerung": "Philip Kotler systematisierte das klassische Marketingmanagement, nicht die Neuromarketing-Struktur des Limbic®-Systems."
      }
    ],
    "pruefen": false
  },
  {
    "id": 74,
    "bereich": 6,
    "frage": "Was ist das Stimulanzsystem?",
    "optionen": [
      {
        "text": "Das neurobiologische System für Neugier, Entdeckerdrang, Abwechslung, Belohnung und das Vermeiden von Langeweile (Neurotransmitter Dopamin).",
        "korrekt": true,
        "erklaerung": "Das Stimulanzsystem treibt Innovationen, Erlebniskäufe und Begeisterung für Neues an; sein wichtigster Neurotransmitter ist Dopamin."
      },
      {
        "text": "Das neurobiologische System für Sicherheit, Risikovermeidung, Stabilität, Geborgenheit, Vertrautheit und Ordnung (Neurotransmitter Serotonin).",
        "korrekt": false,
        "erklaerung": "Dies beschreibt das Balance-System, das auf Risikovermeidung und Beständigkeit ausgerichtet ist."
      },
      {
        "text": "Das neurobiologische System für Status, Durchsetzungskraft, Macht, Überlegenheit, Wettbewerb und Ressourcenkontrolle (Hormon Testosteron).",
        "korrekt": false,
        "erklaerung": "Dies beschreibt das Dominanz-System, bei dem es um Rangordnung, Leistung und Durchsetzung geht."
      },
      {
        "text": "Das vegetative System zur autonomen Steuerung von Atmung, Blutdruck, Verdauung und Muskeltonus in akuten körperlichen Gefahrensituationen.",
        "korrekt": false,
        "erklaerung": "Dies sind lebenserhaltende vegetative Funktionen des Hirnstamms, keine motivationalen Emotionssysteme."
      }
    ],
    "pruefen": false
  },
  {
    "id": 75,
    "bereich": 6,
    "frage": "Was schaffen Emotionen im Kundengehirn und was bedeutet «emotionaler Wert»?",
    "optionen": [
      {
        "text": "Emotionen aktivieren Belohnungszentren und verankern Marken im Gedächtnis; emotionaler Wert ist der subjektive Mehrwert jenseits rein funktionaler Produkteigenschaften.",
        "korrekt": true,
        "erklaerung": "Kunden kaufen Gefühle und Status (z. B. Sicherheit, Stolz, Zugehörigkeit). Der emotionale Wert macht Produkte unverwechselbar und rechtfertigt höhere Preise."
      },
      {
        "text": "Emotionen blockieren rationale Kaufentscheidungen vollständig und führen nachweislich ausschließlich zu kaufmännischen Fehlinvestitionen im Konsum.",
        "korrekt": false,
        "erklaerung": "Neurowissenschaftlich belegt ist: Ohne Emotionen sind rationale Entscheidungen gar nicht möglich (Damasios somatische Marker)."
      },
      {
        "text": "Emotionaler Wert bezeichnet den exakten buchhalterischen Restbuchwert eines gebrauchten Investitionsguts im aktiven Firmenanlagevermögen.",
        "korrekt": false,
        "erklaerung": "Dies ist eine Verwechslung mit buchhalterischen Abschreibungswerten im Rechnungswesen."
      },
      {
        "text": "Emotionen haben im modernen B2B-Vertrieb keinerlei Bedeutung, da professionelle Geschäftskunden zu 100 % emotionslos und rein numerisch entscheiden.",
        "korrekt": false,
        "erklaerung": "Auch B2B-Entscheider sind Menschen: Emotionale Faktoren wie persönliche Risikovermeidung und Vertrauen wiegen bei Verhandlungen oft schwerer als reine Zahlen."
      }
    ],
    "pruefen": false
  },
  {
    "id": 76,
    "bereich": 7,
    "frage": "Welche Persönlichkeitsprofile von Verkäufern kennen Sie und erklären Sie diese?",
    "optionen": [
      {
        "text": "Profile wie Hard-Seller (abschlussorientiert), Beziehungsmanager/Kundenversteher (bedürfnisorientiert), beratender Experte (lösungsorientiert) sowie Hunter und Farmer.",
        "korrekt": true,
        "erklaerung": "In der Verkaufspsychologie werden diese Profile differenziert, da sie unterschiedliche Stärken in Neukundenakquise, Beratung und langfristiger Betreuung besitzen."
      },
      {
        "text": "Profile nach der Gehaltsstruktur: Reine Provisionsjäger, Festgehaltsempfänger, Teilhaber auf Erfolgsbasis und ehrenamtliche Markenbotschafter im Vertrieb zur Sicherung langfristiger Wettbewerbsvorteile am Markt.",
        "korrekt": false,
        "erklaerung": "Dies kategorisiert Vergütungs- und Vertragsformen, beschreibt jedoch keine verkaufspsychologischen Persönlichkeitsprofile."
      },
      {
        "text": "Profile nach dem Reisemittel: Außendienstfahrer, Bahnreisende, internationale Flugpendler und rein stationäre Telefonverkäufer im Callcenter.",
        "korrekt": false,
        "erklaerung": "Reisemittel und Mobilität sind organisatorische Rahmenbedingungen des Außendienstes, keine psychologischen Verkäuferprofile."
      },
      {
        "text": "Profile nach Handelsrecht: Angestellte Handlungsgehilfen, selbstständige Handelsvertreter, Vertragshändler und Kommissionsagenten der Branche.",
        "korrekt": false,
        "erklaerung": "Dies sind handelsrechtliche Rechtsformen von Absatzmittlern, nicht verhaltensbasierte Verkäuferpersönlichkeiten."
      }
    ],
    "pruefen": false
  },
  {
    "id": 77,
    "bereich": 7,
    "frage": "Was ist ein Hard-Seller?",
    "optionen": [
      {
        "text": "Ein abschlussfokussierter Verkäufertyp, der auf schnellen Verkaufsdruck setzt, Einwände forciert überwindet und primär die eigene Verkaufsquote im Blick hat.",
        "korrekt": true,
        "erklaerung": "Hard-Selling zielt auf den schnellen Einmalabschluss ab; es birgt das Risiko hoher Stornoquoten und schwacher langfristiger Kundenbindung."
      },
      {
        "text": "Ein empathischer Beziehungsmanager, der langfristige Kundenbindung, kontinuierliche Vertrauensarbeit und Kundenzufriedenheit über den sofortigen Geschäftsabschluss stellt.",
        "korrekt": false,
        "erklaerung": "Dies ist der Kundenversteher (Soft-Seller/Farmer), der partnerschaftlich berät und keinen aggressiven Druck ausübt."
      },
      {
        "text": "Ein hochspezialisierter Fachexperte, der Kunden vor allem bei komplexen technischen Industrie- und IT-Architekturen ohne jede Verkaufsabsicht berät.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt den beratenden Experten (Consultative Seller / Presales), der lösungsorientiert und sachlich agiert."
      },
      {
        "text": "Ein kaufmännischer Sachbearbeiter im Vertriebsinnendienst, der ausschließlich bestehende Reklamationen, Retouren und Gutschriften administrativ verbucht.",
        "korrekt": false,
        "erklaerung": "Hierbei handelt es sich um eine administrative Kundendiensttätigkeit ohne aktive vertriebliche Akquisitionsaufgabe."
      }
    ],
    "pruefen": false
  },
  {
    "id": 78,
    "bereich": 7,
    "frage": "Was sind die Merkmale des Kunden-Versteher?",
    "optionen": [
      {
        "text": "Empathisches Zuhören, tiefes Erforschen der Kundenmotive, partnerschaftlicher Vertrauensaufbau und Ausrichtung auf maßgeschneiderte, langfristige Kundenlösungen.",
        "korrekt": true,
        "erklaerung": "Der Kundenversteher berät auf Augenhöhe («Consultative Selling»): Er stellt gezielte Fragen, versteht die Kundenwelt und schafft nachhaltige Zufriedenheit."
      },
      {
        "text": "Schnelles Überfahren von Kundenbedenken durch aggressive Rhetoriktricks und permanentes Drängen auf sofortige Vertragsunterzeichnung beim ersten Kontaktgespräch.",
        "korrekt": false,
        "erklaerung": "Aggressives Drängen und rhetorischer Druck kennzeichnen den Hard-Seller, nicht den einfühlsamen Kundenversteher."
      },
      {
        "text": "Einseitiges Abspulen standardisierter Produktkataloge und technischer Datenblätter ohne jedes Interesse an den tatsächlichen Zielen und Problemen des Kunden.",
        "korrekt": false,
        "erklaerung": "Produktzentriertes Monologisieren ignoriert Kundenbedürfnisse und steht im Widerspruch zum bedürfnisorientierten Kundenversteher."
      },
      {
        "text": "Vollständige Vermeidung persönlicher Beratungsgespräche und ausschließlicher Verweis des Kunden auf automatisierte FAQ-Seiten und Online-Bestellformulare.",
        "korrekt": false,
        "erklaerung": "Der Kundenversteher sucht den persönlichen Dialog und berät individuell, statt Kunden in die Anonymität abzuschieben."
      }
    ],
    "pruefen": false
  },
  {
    "id": 79,
    "bereich": 7,
    "frage": "Welche 4 limbischen Kundenprofile kennen Sie?",
    "optionen": [
      {
        "text": "Harmonisierer (Balance), Performer (Dominanz), Abenteurer/Hedonist (Stimulanz) sowie Disziplinierter/Bewahrer (Balance & Dominanz).",
        "korrekt": true,
        "erklaerung": "Die Limbic® Types nach Häusel leiten sich aus der Verortung in den Emotionssystemen ab und ermöglichen zielgenaue Kundenansprache."
      },
      {
        "text": "Schnäppchenjäger, Großkunde mit Rahmenvertrag, Kleinkunde und Gelegenheitskäufer nach dem durchschnittlichen jährlichen Warenkorbwert im Unternehmen.",
        "korrekt": false,
        "erklaerung": "Dies ist eine kaufmännische Kundensegmentierung nach Umsatzvolumen (ABC-Analyse), keine neuropsychologische Typologie."
      },
      {
        "text": "Erstkäufer, Wiederholungskäufer, loyaler Stammkunde und abwanderungsgefährdeter Kunde nach den formalen Phasen des typischen Kundenbeziehungszyklus.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt Phasen im Kundenbeziehungsmanagement (Customer Lifetime Cycle), nicht limbische Persönlichkeitsprofile."
      },
      {
        "text": "Frühphasen-Innovator, Frühe Mehrheit, Späte Mehrheit und traditionelle Nachzügler nach dem soziologischen Diffusionsmodell von Everett Rogers.",
        "korrekt": false,
        "erklaerung": "Das Diffusionsmodell von Everett Rogers beschreibt die gesellschaftliche Innovationsadoption, nicht die limbischen Typen."
      }
    ],
    "pruefen": false
  },
  {
    "id": 80,
    "bereich": 7,
    "frage": "Wie beschreiben Sie den Kundentyp «Performer»?",
    "optionen": [
      {
        "text": "Status-, ziel- und leistungsorientiert; schätzt Exklusivität, Effizienz, Professionalität und den Beweis von Qualitäts- und Wettbewerbsvorteilen.",
        "korrekt": true,
        "erklaerung": "Der Performer (Dominanz-System) will Erfolg, Überlegenheit und Anerkennung. Verkäufer überzeugen ihn durch Kompetenz, Prestige und messbare Vorteile."
      },
      {
        "text": "Stark sicherheitsbedürftig und risikoavers; verlangt ausführliche Garantiezertifikate, Prüfsiegel und langjährige Referenzen vor jeder Zusage.",
        "korrekt": false,
        "erklaerung": "Dies kennzeichnet den Bewahrer oder Harmonisierer (Balance-System), der Risiken minimieren und Bewährtes sichern will."
      },
      {
        "text": "Sucht ständig nach außergewöhnlichen Erlebnissen, bunten Innovationen, Abwechslung und spontanem Spaß ohne Rücksicht auf Status oder Prestige.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt den Hedonisten oder Abenteurer (Stimulanz-System), der primär von Neugier und Spaß getrieben wird."
      },
      {
        "text": "Äußerst preissensibel und kostenfokussiert; kauft ausschließlich das billigste Sonderangebot und meidet jede Form von Premium-Produkten konsequent.",
        "korrekt": false,
        "erklaerung": "Performer sind bereit, für Qualität und Status hohe Preise zu zahlen; Schnäppchenjäger ticken rein preisfokussiert."
      }
    ],
    "pruefen": false
  },
  {
    "id": 81,
    "bereich": 7,
    "frage": "Was verstehen Sie unter dem DISG®-4-Quadranten-Modell für Verkäufer?",
    "optionen": [
      {
        "text": "Ein Verhaltensmodell zur Unterscheidung von vier Verhaltensstilen: Dominant (rot), Initiativ (gelb), Stetig (grün) und Gewissenhaft (blau).",
        "korrekt": true,
        "erklaerung": "Das DISG-Modell basiert auf den Achsen handlungsorientiert/beobachtend und menschenorientiert/sachorientiert und hilft Verkäufern, Kunden typgerecht anzusprechen."
      },
      {
        "text": "Ein vierstufiges Verhandlungskonzept zur schrittweisen Verhandlung von Rabatten im B2B-Einkauf nach Abnahmemenge, Zahlungsziel und Liefertermin.",
        "korrekt": false,
        "erklaerung": "Dies betrifft Konditionenverhandlungen im Einkauf, hat jedoch nichts mit dem psychologischen DISG-Verhaltensmodell zu tun."
      },
      {
        "text": "Eine strategische Portfoliomatrix der Boston Consulting Group zur Einteilung von Produkten in Question Marks, Stars, Cash Cows und Poor Dogs.",
        "korrekt": false,
        "erklaerung": "Die BCG-Matrix ist ein strategisches Instrument zur Portfolioanalyse von Geschäftseinheiten, kein Persönlichkeitsmodell."
      },
      {
        "text": "Ein Vertriebsstrukturmodell zur gezielten Zuordnung von Vertriebsmitarbeitern auf die vier Absatzkanäle Telefon, Messe, Filiale und E-Commerce.",
        "korrekt": false,
        "erklaerung": "Dies unterteilt Absatz- und Kommunikationskanäle der Distribution, nicht individuelle menschliche Verhaltensmuster."
      }
    ],
    "pruefen": false
  },
  {
    "id": 82,
    "bereich": 7,
    "frage": "Was bedeutet in diesem Modell der «gewissenhafte Verkäufertyp»?",
    "optionen": [
      {
        "text": "Detail- und faktenorientiert, analytisch, qualitätsbewusst und exakt vorbereitet; überzeugt durch logische Argumente und verlässliche Daten.",
        "korrekt": true,
        "erklaerung": "Der gewissenhafte Typ («Blau») punktet durch Gründlichkeit, Fachwissen und Zuverlässigkeit; er meidet emotionale Übertreibungen und schätzt Zahlen, Daten und Fakten."
      },
      {
        "text": "Extrem tempoorientiert, willensstark, abschlussfokussiert und risikobereit im direkten Wettbewerb um prestigeträchtige Großaufträge.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt den dominanten Verkäufertyp («Rot»), der tempoorientiert agiert und rasche Entscheidungen einfordert."
      },
      {
        "text": "Begeisternd, kontaktfreudig, expressiv und beziehungsorientiert mit ausgeprägtem Fokus auf Smalltalk und Networking-Events.",
        "korrekt": false,
        "erklaerung": "Dies kennzeichnet den initiativen Typ («Gelb»), der über Charme, Emotionen und lebendige Beziehungen verkauft."
      },
      {
        "text": "Geduldig, teamorientiert, sicherheitsliebend und harmoniebedürftig bei der Betreuung langjähriger, stabiler Kundenbeziehungen im Bestand im operativen und strategischen Geschäftsalltag der Organisation.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt den stetigen Typ («Grün»), der auf Beständigkeit, Vertrauen und Verlässlichkeit setzt."
      }
    ],
    "pruefen": false
  },
  {
    "id": 83,
    "bereich": 7,
    "frage": "Welche Käufertypen nach dem Insights®-MDI-Modell kennen Sie?",
    "optionen": [
      {
        "text": "Farbenergie-Typen: Roter Typ (direkt/handlungsorientiert), Gelber Typ (inspirierend/beziehungsorientiert), Grüner Typ (unterstützend/bedacht) und Blauer Typ (analytisch/systematisch).",
        "korrekt": true,
        "erklaerung": "Das Insights®-Modell (basierend auf C. G. Jung) nutzt 4 Farbenergien zur Typologisierung von Kundenpräferenzen im Verkaufs- und Beratungsgespräch."
      },
      {
        "text": "Konsumpsychologische Grundtypen: Spontankäufer bei Sonderangeboten, rationaler Plankäufer, gewohnheitsmäßiger Markenkäufer und preisfokussierter Schnäppchenjäger bei der praktischen Gestaltung zeitgemäßer Führungsbeziehungen.",
        "korrekt": false,
        "erklaerung": "Dies ist eine allgemeine konsumpsychologische Einteilung, nicht das spezifische Farbmodell von Insights® MDI."
      },
      {
        "text": "Typische B2B-Buying-Center-Rollen: Kaufmännischer Chefeinkäufer, technischer Anwender, kaufmännischer Geschäftsführer und externer Finanzprüfer im Auswahlprozess.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt funktionale Rollen in einem Buying Center (Einkaufsgremium), keine psychologischen Persönlichkeitstypen."
      },
      {
        "text": "Generationenspezifische Käufersegmente: Traditionelle Baby Boomer, karriereorientierte Generation X, sinnsuchende Generation Y und digital geprägte Generation Z.",
        "korrekt": false,
        "erklaerung": "Hierbei handelt es sich um soziologische Alterskohorten, nicht um die individuellen Farbtypen nach Insights® MDI."
      }
    ],
    "pruefen": false
  },
  {
    "id": 84,
    "bereich": 7,
    "frage": "Was sind die Merkmale des roten Käufertypen?",
    "optionen": [
      {
        "text": "Entscheidet zügig und ergebnisorientiert, fordert klare Fakten und den Nutzen auf den Punkt, schätzt Souveränität und mag kein langes Drumherumreden.",
        "korrekt": true,
        "erklaerung": "Rote Käufer schätzen Effizienz, Macht und Zielerreichung: Verkäufer müssen souverän auftreten, direkt auf den Punkt kommen und Zeitverschwendung vermeiden."
      },
      {
        "text": "Braucht ausführliche persönliche Beziehungspflege, liebt emotionalen Smalltalk und trifft Kaufentscheidungen rein aus Sympathie für den Verkäufer.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt den gelben Käufertyp (Initiativ), der Beziehungsaufbau und gesellige Interaktion in den Mittelpunkt stellt."
      },
      {
        "text": "Zögert Entscheidungen lange hinaus, verlangt maximale Sicherheit, langfristige Garantien und die ständige Rückversicherung im vertrauten Team zur Steigerung von Transparenz, Verbindlichkeit und Ergebnisqualität.",
        "korrekt": false,
        "erklaerung": "Dies kennzeichnet den grünen Käufertyp (Stetig), der Sicherheit und Konsens vor raschem Tempo priorisiert."
      },
      {
        "text": "Prüft jedes kleinste technische Detail und verlangt seitenlange Excel-Tabellen, Prüfprotokolle und vollständige schriftliche Spezifikationen.",
        "korrekt": false,
        "erklaerung": "Dies ist typisch für den blauen Käufertyp (Gewissenhaft), der analytische Exaktheit vor schneller Entscheidung verlangt."
      }
    ],
    "pruefen": false
  },
  {
    "id": 85,
    "bereich": 8,
    "frage": "Was bedeutet im Verkauf Körpersprache und Voice Sells?",
    "optionen": [
      {
        "text": "Nonverbale (Haltung, Blickkontakt, Gestik) und paraverbale Signale (Stimme, Tonlage, Tempo) prägen über 80 % des ersten Vertrauenseindrucks beim Kunden.",
        "korrekt": true,
        "erklaerung": "Kunden spüren Stimmigkeit («Kongruenz»): Eine feste, ruhige Stimme, aufrechte Haltung und ehrlicher Blickkontakt wirken kompetent und schaffen sofort Vertrauen."
      },
      {
        "text": "Körpersprache und Stimme sind im professionellen Verkauf völlig wirkungslos, da Geschäftskunden rein auf Basis gedruckter Preislisten und Verträge entscheiden.",
        "korrekt": false,
        "erklaerung": "Die Psychologie belegt, dass nonverbale Signale rationale Argumente dominieren, wenn Widersprüche zwischen Wort und Haltung auftreten."
      },
      {
        "text": "Voice Sells bezeichnet den ausschließlichen Einsatz von automatisierten Sprachcomputern und künstlichen KI-Stimmen im telefonischen Direktverkauf.",
        "korrekt": false,
        "erklaerung": "Voice Sells beschreibt die geschulte menschliche Stimmwirkung des Verkäufers (Melodie, Pausen, Resonanz), keine Softwareansagen."
      },
      {
        "text": "Körpersprache beschreibt im Arbeitnehmerschutz ausschließlich die gesetzlich vorgeschriebene Sicherheitskleidung und Schutzausrüstung des Außendienstes.",
        "korrekt": false,
        "erklaerung": "Arbeitsschutzkleidung ist eine technische Schutzmaßnahme und hat nichts mit der nonverbalen Kommunikationspsychologie zu tun."
      }
    ],
    "pruefen": false
  },
  {
    "id": 86,
    "bereich": 8,
    "frage": "Was sind Spiegelneuronen?",
    "optionen": [
      {
        "text": "Nervenzellen im Gehirn, die beim Beobachten einer Handlung oder Emotion dasselbe neuronale Muster feuern und so Empathie, Rapport und Resonanz ermöglichen.",
        "korrekt": true,
        "erklaerung": "Spiegelneuronen (entdeckt von Rizzolatti) sind die neurobiologische Basis für Mitgefühl: Lächelt der Verkäufer ehrlich, aktiviert das Gehirn des Kunden ein Wohlgefühl."
      },
      {
        "text": "Optische Bewegungssensoren im stationären Einzelhandel zur automatischen Zählung und Analyse von Kundenfrequenzen vor Schaufenstern und Eingangsbereichen.",
        "korrekt": false,
        "erklaerung": "Dies sind physikalische Bewegungsmelder des Einzelhandels, keine biologischen Nervenzellen im menschlichen Gehirn."
      },
      {
        "text": "Spezifische Sehnerven der menschlichen Netzhaut, die ausschließlich für das optische Scharfstellen des Gesichtsfelds bei grellem Tageslicht zuständig sind.",
        "korrekt": false,
        "erklaerung": "Hierbei handelt es sich um physiologische Komponenten der Netzhaut, nicht um die empathiefördernden Spiegelneuronen."
      },
      {
        "text": "Künstliche neuronale Netze in modernen CRM- und Shopsystemen zur automatisierten Vorhersage von Warenkorbabbrüchen im E-Commerce-Portal.",
        "korrekt": false,
        "erklaerung": "Dies sind Machine-Learning-Algorithmen im E-Commerce, keine körpereigenen neurobiologischen Gehirnzellen."
      }
    ],
    "pruefen": false
  },
  {
    "id": 87,
    "bereich": 8,
    "frage": "Was sind beim Aufbau von Kundenbeziehungen die «3 Säulen des Vertrauens»?",
    "optionen": [
      {
        "text": "Fachliche Kompetenz (Können/Know-how), persönliche Integrität (Ehrlichkeit/Worttreue) sowie emotionale Wohlwollens- und Beziehungsebene (Empathie/Interesse).",
        "korrekt": true,
        "erklaerung": "Vertrauen basiert auf dem Dreiklang: Der Kunde muss an Ihr Fachwissen glauben (Kompetenz), sich auf Zusagen verlassen können (Integrität) und Ihr ehrliches Interesse spüren (Benevolence)."
      },
      {
        "text": "Aggressive Tiefstpreise, bedingungslose und unbegrenzte Rabattgewährung bei Verhandlungen sowie kostenlose Produktzugaben bei jeder einzelnen Bestellung in der täglichen betrieblichen Praxis und Unternehmensführung.",
        "korrekt": false,
        "erklaerung": "Reine Preisnachlässe kaufen bestenfalls kurzfristige Umsätze, erzeugen aber kein echtes Vertrauen oder loyale Kundenbeziehungen."
      },
      {
        "text": "Umfangreiche juristische Vertragswerke, notarielle Beglaubigungen und Bankgarantien zur rechtlichen Absicherung gegen Gewährleistungsansprüche.",
        "korrekt": false,
        "erklaerung": "Rechtliche Absicherungen sind nötig bei Misstrauen, ersetzen jedoch nicht das zwischenmenschliche Beziehungsvertrauen."
      },
      {
        "text": "Großflächige bundesweite Plakatwerbekampagnen, teure TV-Spots zur Hauptsendezeit und bezahlte Influencer-Beiträge in führenden sozialen Medienkanälen.",
        "korrekt": false,
        "erklaerung": "Dies sind Maßnahmen zur Markenbekanntheit, schaffen aber noch kein individuelles Beziehungsvertrauen im Verkauf."
      }
    ],
    "pruefen": false
  },
  {
    "id": 88,
    "bereich": 8,
    "frage": "Welche Kaufmotive gibt es?",
    "optionen": [
      {
        "text": "Rationale Kaufmotive (z. B. Wirtschaftlichkeit, Zeitersparnis, Funktionalität) und emotionale Kaufmotive (z. B. Sicherheit, Prestige, Bequemlichkeit, Neugier).",
        "korrekt": true,
        "erklaerung": "Kaufentscheidungen werden emotional vorbereitet und rational gerechtfertigt. Verkäufer müssen beide Ebenen im Gespräch bedienen."
      },
      {
        "text": "Ausschließlich das Motiv des billigsten Anschaffungspreises, da Kunden marktübergreifend rein nach den unmittelbaren Kosten einer Investition entscheiden.",
        "korrekt": false,
        "erklaerung": "Die Praxis widerlegt diese Annahme täglich: Kunden kaufen teure Marken, weil ihnen Qualität, Status oder Sicherheit wichtiger sind als der Billigpreis."
      },
      {
        "text": "Gesetzlich verbindlich vorgegebene Pflichtmotive, die vom Wirtschaftsministerium für standardisierte Konsumgüterkategorien festgeschrieben wurden.",
        "korrekt": false,
        "erklaerung": "Kaufmotive sind psychologische innere Antreiber von Menschen und können niemals behördlich verordnet werden."
      },
      {
        "text": "Rein zufällige neuronale Kaufimpulse im Gehirn, die völlig unbeeinflussbar durch äußere Reize und Argumente im Unterbewusstsein des Käufers ablaufen.",
        "korrekt": false,
        "erklaerung": "Kaufentscheidungen folgen klaren psychologischen Motiven und Bedürfnissen, auch wenn sie dem Kunden nicht immer voll bewusst sind."
      }
    ],
    "pruefen": false
  },
  {
    "id": 89,
    "bereich": 8,
    "frage": "Was versteht man unter dem Motiv- und Werteraum des Kunden?",
    "optionen": [
      {
        "text": "Die Gesamtheit der individuellen Werte, Glaubenssätze und unbewussten Antreiber des Kunden, die seine Wahrnehmung und Kaufbereitschaft steuern.",
        "korrekt": true,
        "erklaerung": "Wer den Motiv- und Werteraum versteht (z. B. Nachhaltigkeit, Unabhängigkeit, Sicherheit), kann Argumente genau auf die innere Welt des Kunden abstimmen."
      },
      {
        "text": "Die physische Verkaufs- und Präsentationsfläche eines Einzelhandelsgeschäfts einschließlich moderner Schaufensterdekorationen und Kassenbereiche.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt den architektonischen Ladenbau im stationären Einzelhandel, keinen psychologischen Motiv- und Werteraum."
      },
      {
        "text": "Den vertraglich eingeräumten Kontokorrent- und Investitionskreditrahmen, den eine Geschäftsbank einem gewerblichen Kunden für Einkäufe bereitstellt.",
        "korrekt": false,
        "erklaerung": "Dies bezeichnet den finanziellen Verfügungsrahmen (Kreditlinie), nicht die psychologische Werteorientierung des Menschen."
      },
      {
        "text": "Das exklusive Produktsortiment eines Markenherstellers, welches ausschließlich für wohlhabende Kunden im Hochpreissegment vertrieben wird.",
        "korrekt": false,
        "erklaerung": "Dies ist eine Produktlinie im Marketing-Mix, nicht die geistige Motiv- und Wertewelt des Kunden."
      }
    ],
    "pruefen": false
  },
  {
    "id": 90,
    "bereich": 8,
    "frage": "Was bedeutet emotionales Verkaufen und Storytelling?",
    "optionen": [
      {
        "text": "Produkte durch bildhafte Geschichten, Metaphern und emotionale Szenarien erlebbar zu machen, um Kopfkino auszulösen und das Belohnungszentrum zu aktivieren.",
        "korrekt": true,
        "erklaerung": "Geschichten umgehen die rationale Kritikbarriere des Gehirns: Der Kunde erlebt den Nutzen mental («Kopfkino») und baut eine emotionale Bindung auf."
      },
      {
        "text": "Das lückenlose Herunterleiern möglichst vieler technischer Produktdatenblätter, DIN-Normen und Konformitätszertifikate in sachlicher Monologform.",
        "korrekt": false,
        "erklaerung": "Reines Fakten- und Datenüberfluten («Feature Dumping») erzeugt Langeweile und verhindert emotionales Engagement des Kunden."
      },
      {
        "text": "Das gezielte Täuschen von Verhandlungspartnern durch das bewusste Erfinden falscher Firmenerfolge und erfundener Qualitätszertifikate im Kundengespräch.",
        "korrekt": false,
        "erklaerung": "Unwahre Behauptungen sind unlauterer Wettbewerb und Betrug; Storytelling vermittelt reale Werte und Emotionen auf authentische Weise."
      },
      {
        "text": "Der ausschließliche Einsatz von bunten Comiczeichnungen und Grafiken in Printprospekten für komplexe B2B-Investitionsgüter im Maschinenbau zur Sicherung langfristiger Wettbewerbsvorteile am Markt.",
        "korrekt": false,
        "erklaerung": "Storytelling ist eine narrative Kommunikationstechnik und keineswegs auf bunte Grafiken oder Comics beschränkt."
      }
    ],
    "pruefen": false
  },
  {
    "id": 91,
    "bereich": 8,
    "frage": "Welche 8 Tipps zur Emotionalisierung von Kunden kennen Sie?",
    "optionen": [
      {
        "text": "Storytelling nutzen, Multisensorik aktivieren, Begeisterung vorleben, Bildsprache einsetzen, Nutzen statt Merkmale betonen, Empathie spiegeln, Überraschung bieten und Zukunftsbilder malen.",
        "korrekt": true,
        "erklaerung": "Diese 8 Werkzeuge sprechen alle Sinne und Emotionsebenen an und verwandeln trockene Produktmerkmale in begeisternde Kundenerlebnisse."
      },
      {
        "text": "Rechtliche Paragrafen rezitieren, Rabatte ungefragt anbieten, Kunden ins Wort fallen, Fachjargon verwenden, lange Monologe halten, Zeitdruck ausüben, Zweifel abtun und starre Fristen setzen.",
        "korrekt": false,
        "erklaerung": "Dies ist ein Negativkatalog typischer Vertriebsfehler, der Kunden verärgert und Vertrauen sofort zerstört."
      },
      {
        "text": "Ausschließlich technische Daten vorlesen, Preisnachlässe kategorisch verweigern, Körpersprache einfrieren, Blickkontakt meiden, Werbebroschüren aushändigen und sofort unterschreiben lassen.",
        "korrekt": false,
        "erklaerung": "Verkrampftes, bürokratisches Vorlesen erstickt jede Emotionalität und führt selten zu erfolgreichen Geschäftsabschlüssen."
      },
      {
        "text": "Verkaufsgespräche auf exakt zwei Minuten begrenzen, persönliche Fragen verbieten, neutrale Standard-E-Mails aushändigen und das Treffen ohne Rückfragen unverzüglich beenden.",
        "korrekt": false,
        "erklaerung": "Distanzierte Minimalabfertigung verhindert jeden Beziehungsaufbau und jede Emotionalisierung des Kunden."
      }
    ],
    "pruefen": false
  },
  {
    "id": 92,
    "bereich": 8,
    "frage": "In welche Bereiche unterteilen Sie die Verkaufsgesprächsführung?",
    "optionen": [
      {
        "text": "Kontakt- und Vertrauensphase, Bedarfs- und Motivanalyse, Nutzen- und Lösungspräsentation, Einwandbehandlung, Kaufabschluss sowie Nachbetreuung.",
        "korrekt": true,
        "erklaerung": "Dieser strukturierte 6-Stufen-Leitfaden sichert den Gesprächserfolg: Erst Vertrauen aufbauen, Motive klären und erst dann überzeugend präsentieren und abschließen."
      },
      {
        "text": "Begrüßung des Kunden, unverzügliche Nennung des Höchstpreises, sofortiges Drängen auf verbindliche Vertragsunterschrift und Verabschiedung ohne Beratungsgespräch.",
        "korrekt": false,
        "erklaerung": "Aggressives Überrumpeln («Hard-Selling») ohne Bedarfsanalyse scheitert in modernen Beratungs- und Verkaufsgesprächen."
      },
      {
        "text": "Förmliche Rechnungslegung, kaufmännisches Mahnwesen, Buchprüfung im Betrieb, Reklamationsabwicklung und gerichtliche Klageführung vor dem Handelsgericht.",
        "korrekt": false,
        "erklaerung": "Dies sind nachgelagerte Schritte der Buchhaltung und des Mahnwesens, keine Phasen des aktiven Verkaufsgesprächs."
      },
      {
        "text": "Empirische Marktforschung, Prototypenentwicklung, Produktionsplanung im Werk, stichprobenartige Qualitätskontrolle und logistische Lagerhaltung.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt die betriebliche Wertschöpfungskette der Produktion, nicht die Gesprächsführung im Kundenkontakt."
      }
    ],
    "pruefen": false
  },
  {
    "id": 93,
    "bereich": 9,
    "frage": "Was sind die «Top Ten»-Fehler bei Preisverhandlungen?",
    "optionen": [
      {
        "text": "Typische Fehler: Zu frühe Preisnennung vor Nutzenaufbau, unsichere Körpersprache, ungefragte Rabatte, Nachgeben ohne Gegenleistung und das Brechen der Sprechpause nach Nennung.",
        "korrekt": true,
        "erklaerung": "Wer den Preis nennt, muss schweigen («Wer zuerst spricht, verliert»); Rabatte ohne Gegenleistung entwerten das eigene Angebot."
      },
      {
        "text": "Das selbstbewusste Vertreten des kalkulierten Angebotspreises, das konsequente Einhalten der Sprechpause, das Fordern von Gegenleistungen und das Betonen des Kundenwerts unter Berücksichtigung personeller und organisatorischer Rahmenbedingungen.",
        "korrekt": false,
        "erklaerung": "Dies sind entscheidende Erfolgsfaktoren professioneller Verhandlungsführung, keinesfalls Fehler."
      },
      {
        "text": "Das strukturierte Führen der Verhandlung auf Basis einer fundierten Kundennutzenanalyse und das frühzeitige Abstecken eines klaren Verhandlungsrahmens vor dem Gespräch.",
        "korrekt": false,
        "erklaerung": "Eine fundierte Nutzenanalyse und ein definierter Verhandlungsrahmen sind professionelle Best Practices der Vorbereitung und keineswegs Fehler."
      },
      {
        "text": "Das sorgfältige schriftliche Dokumentieren aller verhandelten Lieferbedingungen, Zahlungsziele und Servicezusagen in einem gemeinsamen Verhandlungsprotokoll.",
        "korrekt": false,
        "erklaerung": "Schriftliche Protokolle sichern Verbindlichkeit und Klarheit und schützen beide Seiten vor späteren Missverständnissen."
      }
    ],
    "pruefen": false
  },
  {
    "id": 94,
    "bereich": 9,
    "frage": "Was sind wichtige Punkte, die bei Preisverhandlungen zu beachten sind?",
    "optionen": [
      {
        "text": "Nutzen immer vor dem Preis etablieren, den Preis selbstbewusst nennen und schweigen, niemals Rabatt ohne Gegenleistung gewähren («Konditionieren») und Wertargumente nutzen.",
        "korrekt": true,
        "erklaerung": "Preis ist relativ zum Nutzen: Erst wenn der Kunde den Wert versteht, wirkt der Preis angemessen. Zugeständnisse müssen immer an Bedingungen geknüpft werden."
      },
      {
        "text": "Beim ersten zögerlichen Blick des Einkäufers unverzüglich und ungefragt 20 % Preisnachlass anbieten, um die Verhandlung schnellstmöglich zum Abschluss zu bringen.",
        "korrekt": false,
        "erklaerung": "Ungefragtes Nachgeben signalisiert dem Kunden, dass die ursprüngliche Preiskalkulation willkürlich oder überteuert war."
      },
      {
        "text": "Den Angebotspreis im Verkaufsgespräch grundsätzlich geheim halten und den Kunden erst nach vollständiger Erbringung aller Leistungen per Rechnung überraschen im operativen und strategischen Geschäftsalltag der Organisation.",
        "korrekt": false,
        "erklaerung": "Preistransparenz vor Vertragsschluss ist rechtliche Pflicht und kaufmännische Notwendigkeit; Intransparenz zerstört Kundenbeziehungen."
      },
      {
        "text": "Geforderte Rabatte stets bedingungslos gewähren und auf jede Gegenleistung verzichten, um die persönliche Sympathie des Verhandlungspartners nicht zu gefährden.",
        "korrekt": false,
        "erklaerung": "Wer ohne Gegenleistung nachgibt, schwächt die eigene Verhandlungsposition für die Zukunft dauerhaft."
      }
    ],
    "pruefen": false
  },
  {
    "id": 95,
    "bereich": 9,
    "frage": "Was sind Preisanker?",
    "optionen": [
      {
        "text": "Ein psychologischer Referenzwert (Ankereffekt): Ein zuerst genannter hoher Ausgangspreis dient als unbewusster Maßstab, wodurch nachfolgende Preise günstiger wahrgenommen werden.",
        "korrekt": true,
        "erklaerung": "Der Ankereffekt (Kahneman & Tversky) zeigt: Das menschliche Gehirn orientiert sich am ersten genannten Zahlenwert bei der Beurteilung von Angemessenheit."
      },
      {
        "text": "Gesetzlich vorgeschriebene Höchst- und Mindestpreise, die von staatlichen Kartellbehörden für lebensnotwendige Grundgüter zwingend reguliert werden.",
        "korrekt": false,
        "erklaerung": "Dies ist staatliche Preisbindung oder Subventionspolitik, kein psychologisches Verhandlungsphänomen."
      },
      {
        "text": "Feste, unveränderliche Rabattsätze, die in standardisierten Rahmenlieferverträgen dauerhaft für alle Kunden eines Verbandes vereinbart sind.",
        "korrekt": false,
        "erklaerung": "Vertraglich fixierte Dauerkonditionen sind kaufmännische Vereinbarungen, aber keine psychologischen Preisanker."
      },
      {
        "text": "Die kalkulatorischen Selbstkosten eines Produkts, unterhalb derer ein gewerblicher Verkauf laut Wettbewerbsrecht als unlauterer Verkauf unter Einstandspreis gilt.",
        "korrekt": false,
        "erklaerung": "Die Kostenuntergrenze ist eine betriebswirtschaftliche Kalkulationsgröße, nicht der verhaltenspsychologische Ankereffekt."
      }
    ],
    "pruefen": false
  },
  {
    "id": 96,
    "bereich": 9,
    "frage": "Was verstehen Sie unter «Bundling»?",
    "optionen": [
      {
        "text": "Das Bündeln mehrerer Einzelprodukte oder Dienstleistungen zu einem Gesamtpaket zu einem Pauschalpreis, was den direkten Preisvergleich erschwert und den Mehrwert steigert.",
        "korrekt": true,
        "erklaerung": "Bundling schützt vor Preiszerlegung durch Einkäufer: Statt über Einzelschrauben zu streiten, kauft der Kunde eine schlüsselfertige Gesamtlösung."
      },
      {
        "text": "Das separate Ausweisen und minutengenaue Einzelberechnen jeder kleinsten Hardwarekomponente und Arbeitsstunde in detaillierten Einzelrechnungen zur Steigerung von Transparenz, Verbindlichkeit und Ergebnisqualität.",
        "korrekt": false,
        "erklaerung": "Dies ist das Gegenteil von Bundling («Unbundling» bzw. Preiszerlegung), wodurch Preise für Kunden leichter vergleichbar und verhandelbar werden."
      },
      {
        "text": "Die vertragliche Vereinbarung zinsloser Ratenzahlungen über mehrere Geschäftsjahre zur Absatzfinanzierung von Investitionsgütern im Handel.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt ein Finanzierungsmodell (Ratenkauf / Stundung), nicht die Produkt- und Leistungsbündelung."
      },
      {
        "text": "Die handelsrechtliche Verpflichtung von gewerblichen Kunden, Ersatzteile und Serviceleistungen ausschließlich beim ursprünglichen Hersteller zu beziehen.",
        "korrekt": false,
        "erklaerung": "Dies ist ein wettbewerbsrechtlich sensibles Kopplungsgeschäft («Lock-in»), keine absatzfördernde Paketbündelung."
      }
    ],
    "pruefen": false
  },
  {
    "id": 97,
    "bereich": 9,
    "frage": "Was sind die 6 Phasen bei Verhandlungen?",
    "optionen": [
      {
        "text": "Vorbereitung, Eröffnung/Beziehungsaufbau, Sondierung/Interessenerforschung, Verhandeln/Konzessionen, Einigung/Abschluss sowie Nachbereitung und Umsetzung.",
        "korrekt": true,
        "erklaerung": "Dieser systematische Phasenablauf führt strukturiert durch Verhandlungen: 80 % des Erfolgs liegen in der Vorbereitung und der klaren Interessensondierung."
      },
      {
        "text": "Strategische Marktanalyse, Budgetfreigabe, Stellenausschreibung, Bewerberauswahlgespräche, Arbeitsvertragsgestaltung und Probezeit im Personalmanagement.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt Phasen der betrieblichen Personalbeschaffung (Recruiting), keine Phasen der Verhandlungsführung."
      },
      {
        "text": "Angebotserstellung, kaufmännische Mahnung, Klageerhebung beim Bezirksgericht, streitige Verhandlung, Urteilsvollstreckung und Pfändung.",
        "korrekt": false,
        "erklaerung": "Dies sind die Stufen eines gerichtlichen Mahn- und Klageverfahrens, keine kooperativen Verhandlungsphasen."
      },
      {
        "text": "Produktidee, Prototypenbau im Labor, Fertigungstest, industrielle Serienproduktion, multimediale Werbekampagne und geplante Produktabkündigung.",
        "korrekt": false,
        "erklaerung": "Hierbei handelt es sich um den Produktentwicklungsprozess im Innovationsmanagement, nicht um Verhandlungsphasen."
      }
    ],
    "pruefen": false
  },
  {
    "id": 98,
    "bereich": 9,
    "frage": "Was sind die 4 Prinzipien des «Harvard Konzepts»?",
    "optionen": [
      {
        "text": "Menschen und Probleme getrennt behandeln, auf Interessen statt Positionen konzentrieren, Optionen zum beiderseitigen Vorteil entwickeln und objektive Kriterien anwenden.",
        "korrekt": true,
        "erklaerung": "Fisher und Ury entwickelten das Harvard-Prinzip für sachbezogenes Verhandeln: Hart in der Sache, aber wertschätzend und fair gegenüber den Menschen («Win-Win»)."
      },
      {
        "text": "Die eigene Maximalforderung unnachgiebig durchsetzen, Schwächen des Verhandlungspartners ausnutzen, Zeitdruck aufbauen und Drohszenarien formulieren.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt destruktives, positionsbezogenes Machtfeilschen («Hard Bargaining»), das das Harvard-Konzept explizit überwinden will."
      },
      {
        "text": "Sofortige bedingungslose Nachgiebigkeit zeigen, Konflikte um jeden Preis vermeiden, persönliche Zugeständnisse machen und Harmonie über Sachziele stellen.",
        "korrekt": false,
        "erklaerung": "Übermäßige Nachgiebigkeit («Soft Bargaining») führt zu schlechten Ergebnissen und wird von Fisher und Ury abgelehnt."
      },
      {
        "text": "Verhandlungen grundsätzlich nur schriftlich über Anwälte führen, persönliche Treffen untersagen, mündliche Aussagen leugnen und Rechtsmittel einlegen in der täglichen betrieblichen Praxis und Unternehmensführung.",
        "korrekt": false,
        "erklaerung": "Rechtliche Konfrontation und Kontaktabbruch verhindern konstruktive, interessenbasierte Win-Win-Lösungen."
      }
    ],
    "pruefen": false
  },
  {
    "id": 99,
    "bereich": 9,
    "frage": "Was versteht man in der Verhandlungstechnik unter der «LIMO-Methode»?",
    "optionen": [
      {
        "text": "Ein Zielsystem zur Vorbereitung: Lust-Ziel (Maximalziel), Ideal-Ziel (realistisches Best-Case), Minimal-Ziel (Schmerzgrenze) und Ohne-mich-Ziel (Walk-Away-Point).",
        "korrekt": true,
        "erklaerung": "LIMO schützt vor planlosem Nachgeben: Die Verhandlungsführung legt vorab fest, was maximal angestrebt wird (L), was realistisch ideal ist (I), wo das Minimum liegt (M) und ab wann abgebrochen wird (O)."
      },
      {
        "text": "Eine strukturierte Gesprächstechnik zur Deeskalation: Loben, Informieren, Moderieren und Orientieren in emotional aufgeladenen Verhandlungssituationen im Rahmen moderner Führungs- und Organisationsstrukturen.",
        "korrekt": false,
        "erklaerung": "Dies ist eine plausible Kommunikationsregel zur Deeskalation, jedoch nicht das klassische LIMO-Zielsystem der Verhandlungsvorbereitung."
      },
      {
        "text": "Ein kaufmännisches Konditionensystem im Großhandel: Lieferrabatt, Mengenrabatt, Sonderrabatt und Barzahlungsnachlass bei umfangreichen Großaufträgen.",
        "korrekt": false,
        "erklaerung": "Dies beschreibt kaufmännische Rabattarten im Rechnungswesen, aber keine Vorbereitungsmethode der Verhandlungstechnik."
      },
      {
        "text": "Ein psychologisches Befragungsmuster im Vertrieb: Leitfragen, Informationsfragen, Motivationsfragen und Offene Fragen zur Kundenanalyse.",
        "korrekt": false,
        "erklaerung": "Hierbei handelt es sich um Fragetypen in der Gesprächsführung, nicht um das Akronym LIMO für Zielkorridore."
      }
    ],
    "pruefen": false
  },
  {
    "id": 100,
    "bereich": 9,
    "frage": "Wie kann man die Weiterempfehlungsrate steigern?",
    "optionen": [
      {
        "text": "Durch konsequente Übertreffung der Erwartungen («Customer Delight»), aktives und systematisches Fragen nach Empfehlungen zum passenden Zeitpunkt und Wertschätzung.",
        "korrekt": true,
        "erklaerung": "Empfehlungen entstehen, wenn Kunden begeistert sind und der Verkäufer gezielt nachfragt («Wer in Ihrem Netzwerk könnte von diesem Nutzen ebenfalls profitieren?»)."
      },
      {
        "text": "Durch automatisiertes und ungefragtes Versenden von Werbe-E-Mails an alle privaten Kontakte des Kunden ohne dessen ausdrückliche datenschutzrechtliche Zustimmung.",
        "korrekt": false,
        "erklaerung": "Unaufgeforderte Werbemails sind rechtswidrige Belästigung (Spam), verärgern Kunden und zerstören die Weiterempfehlungsbereitschaft."
      },
      {
        "text": "Indem man die Gewährung vertraglicher Garantieleistungen und Kundendienstansprüche davon abhängig macht, dass der Kunde vorab drei Neukunden vermittelt zur Sicherung langfristiger Wettbewerbsvorteile am Markt.",
        "korrekt": false,
        "erklaerung": "Garantieerpressung ist rechtlich unzulässig und vernichtet jedes partnerschaftliche Kundenvertrauen nachhaltig."
      },
      {
        "text": "Durch einmalige Gewährung von Sonderrabatten bei gleichzeitigem vollständigem Verzicht auf jede Kundenbetreuung und Servicequalität nach dem Kauf.",
        "korrekt": false,
        "erklaerung": "Kunden empfehlen exzellenten Service und Nutzen weiter, nicht schlechte Betreuung nach einem billigen Einmalkauf."
      }
    ],
    "pruefen": false
  }
];
