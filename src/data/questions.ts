import { Question } from '../types/quiz';

export const INITIAL_QUESTIONS: Question[] = [
  {
    id: 1,
    bereich: 1,
    frage: 'Was bedeutet Führung?',
    optionen: [
      {
        text: 'Zielgerichtete soziale Beeinflussung von Menschen zur Erreichung gemeinsamer Unternehmens- und Teamziele.',
        korrekt: true,
        erklaerung: 'Führung wird in der Managementlehre als zielgerichtete soziale Einflussnahme definiert, um Aufgaben zu koordinieren und Mitarbeiter zur Zielerreichung zu bewegen.',
      },
      {
        text: 'Ausschließliche formale Ausübung von Weisungsbefugnis und hierarchischer Macht über nachgeordnete Stellen.',
        korrekt: false,
        erklaerung: 'Dies beschreibt lediglich administrative Weisungsgewalt, vernachlässigt jedoch den sozialen Einfluss-, Motivations- und Zielbezug moderner Führung.',
      },
      {
        text: 'Reine operative Organisation von Arbeitsabläufen ohne persönliche Interaktion mit den Teammitgliedern.',
        korrekt: false,
        erklaerung: 'Hierbei handelt es sich um bloßes Prozess- oder Arbeitsplatzmanagement. Führung erfordert zwingend zwischenmenschliche Interaktion und Beziehungsgestaltung.',
      },
      {
        text: 'Kontinuierliche Überwachung aller Einzelschritte zur vollständigen Vermeidung von Fehlern im Arbeitsalltag.',
        korrekt: false,
        erklaerung: 'Dies kennzeichnet negatives Mikromanagement oder bloße Kontrolle, ist jedoch keine zukunftsorientierte Definition von Führung.',
      },
    ],
    pruefen: false,
  },
  {
    id: 2,
    bereich: 1,
    frage: 'Was sind die Aufgaben einer Führungskraft?',
    optionen: [
      {
        text: 'Ziele vereinbaren, organisieren, entscheiden, kontrollieren und Menschen gezielt fördern und entwickeln.',
        korrekt: true,
        erklaerung: 'Diese fünf Kernaufgaben entsprechen dem klassischen und praxisbewährten Management-Kanon (u. a. nach Fredmund Malik und Peter Drucker).',
      },
      {
        text: 'Operative Fachaufgaben selbst erledigen, Arbeitszeiten erfassen und Budgetabweichungen persönlich nachrechnen.',
        korrekt: false,
        erklaerung: 'Dies sind überwiegend ausführende Sachaufgaben bzw. Controllingtätigkeiten, die keine originären Führungsaufgaben darstellen.',
      },
      {
        text: 'Konflikte im Team stets vermeiden, alle Vorgaben der Geschäftsleitung unreflektiert weitergeben und Überstunden anordnen.',
        korrekt: false,
        erklaerung: 'Konfliktvermeidung und blindes Delegieren widersprechen wirksamer Führungsarbeit; Führungskräfte müssen moderieren, filtern und gestalten.',
      },
      {
        text: 'Ausschließlich strategische Unternehmensvisionen entwerfen, während die Steuerung komplett dem Zufall überlassen wird.',
        korrekt: false,
        erklaerung: 'Visionen allein genügen nicht. Ohne Organisation, Entscheidungen, Zielabstimmung und Leistungsförderung bleibt Führung unwirksam.',
      },
    ],
    pruefen: false,
  },
  {
    id: 3,
    bereich: 1,
    frage: 'Was ist der Unterschied zwischen Führungsstil und Führungsverhalten?',
    optionen: [
      {
        text: 'Der Führungsstil ist das zeitlich überdauernde Grundmuster, während Führungsverhalten das konkrete situative Handeln darstellt.',
        korrekt: true,
        erklaerung: 'Der Stil beschreibt die generelle Grundhaltung und das konsistente Muster; das Verhalten ist die situative Ausprägung in einer konkreten Begegnung.',
      },
      {
        text: 'Führungsstil bezieht sich nur auf Top-Manager, während Führungsverhalten ausschließlich für Teamleiter im operativen Bereich gilt.',
        korrekt: false,
        erklaerung: 'Beide Begriffe gelten für jede Führungsebene und unterscheiden sich durch Abstraktionsgrad und Situationsbezug, nicht nach Hierarchiestufen.',
      },
      {
        text: 'Führungsverhalten ist eine angeborene Charaktereigenschaft, wohingegen der Führungsstil frei im Arbeitsvertrag vereinbart wird.',
        korrekt: false,
        erklaerung: 'Führungsverhalten ist erlernbar und situationsabhängig steuerbar; der Stil wird nicht juristisch vereinbart, sondern durch Haltung geprägt.',
      },
      {
        text: 'Beide Begriffe sind im modernen Management vollkommen synonym und bezeichnen exakt dieselbe Verhaltensweise in Projekten.',
        korrekt: false,
        erklaerung: 'In der Organisationspsychologie wird strikt zwischen dem habituellen Grundmuster (Stil) und der aktuellen Handlung (Verhalten) differenziert.',
      },
    ],
    pruefen: false,
  },
  {
    id: 4,
    bereich: 1,
    frage: 'Wie heißen die 7 Grundsätze der Führung nach Malik?',
    optionen: [
      {
        text: 'Resultatorientierung, Beitrag zum Ganzen, Konzentration auf Weniges, Stärken nutzen, Vertrauen schaffen, Positiv denken und Sinn vermitteln.',
        korrekt: true,
        erklaerung: 'In erweiterten Malik-Lehrplänen werden zu den klassischen 6 Grundsätzen (Resultate, Beitrag, Konzentration, Stärken, Vertrauen, Positives Denken) Sinngebung bzw. Verantwortung als 7. Grundsatz gelehrt.',
      },
      {
        text: 'Macht durchsetzen, Mitarbeiter kontrollieren, Perfektion verlangen, Hierarchien sichern, Konkurrenz schüren, Budgets schonen und Risiken meiden.',
        korrekt: false,
        erklaerung: 'Diese Punkte widersprechen Maliks Lehre von wirksamer Führung fundamental; Malik betont Stärken, Vertrauen und Resultate statt Misstrauen.',
      },
      {
        text: 'Vision formulieren, Charisma ausstrahlen, Fehler bestrafen, Arbeitsverträge prüfen, Überstunden honorieren, Konzerne leiten und Bilanzen lesen.',
        korrekt: false,
        erklaerung: 'Malik lehnt das Dogma des «charismatischen Führers» ausdrücklich ab und fordert handwerkliche Professionalität sowie Wirksamkeit.',
      },
      {
        text: 'Agilität maximieren, Scrum etablieren, Hierarchielosigkeit anordnen, Konsens erzwingen, Homeoffice vorschreiben, Daily Stand-ups halten und Slack nutzen.',
        korrekt: false,
        erklaerung: 'Hierbei handelt es sich um moderne agile Methoden und Werkzeuge, nicht um Maliks zeitlose Grundsätze wirksamer Führung.',
      },
    ],
    pruefen: true,
  },
  {
    id: 5,
    bereich: 1,
    frage: 'Welche Arten der Verantwortung kennen Sie?',
    optionen: [
      {
        text: 'Handlungs- bzw. Ausführungsverantwortung, Ergebnis- bzw. Sachverantwortung sowie Führungs- bzw. Leitungsverantwortung.',
        korrekt: true,
        erklaerung: 'Diese klassische Dreiteilung trennt sauber zwischen der fachlichen Ausführung, der Verantwortung für das Arbeitsergebnis und der Führungsverantwortung für Auswahl und Steuerung.',
      },
      {
        text: 'Ausschließlich strafrechtliche Haftungsverantwortung gegenüber staatlichen Kontrollorganen und Gewerbebehörden.',
        korrekt: false,
        erklaerung: 'Dies ist eine rein juristische Sichtweise, erfasst aber nicht die innerbetrieblichen Führungs- und Organisationsdimensionen von Verantwortung.',
      },
      {
        text: 'Moralische Schuldverantwortung, finanzielle Schadensersatzpflicht und private Verpflichtung gegenüber Familienmitgliedern.',
        korrekt: false,
        erklaerung: 'Dies vermischt ethische und zivilrechtliche Aspekte, stellt aber keine managementtheoretische Systematik betrieblicher Verantwortung dar.',
      },
      {
        text: 'Kollektivverantwortung aller Mitarbeiter bei völligem Verzicht auf persönliche Verantwortung einzelner Funktionsträger.',
        korrekt: false,
        erklaerung: 'Reine Kollektivverantwortung führt in Organisationen meist zur Verantwortungsdiffusion und steht im Widerspruch zu klarer Aufgabenteilung.',
      },
    ],
    pruefen: true,
  },
  {
    id: 6,
    bereich: 1,
    frage: 'Was macht eine effektive Führungskraft aus?',
    optionen: [
      {
        text: 'Sie fokussiert auf Resultate, nutzt vorhandene Stärken, konzentriert sich auf Wesentliches und schafft ein Umfeld des Vertrauens.',
        korrekt: true,
        erklaerung: 'Effektivität bedeutet, «die richtigen Dinge zu tun» (Peter Drucker, Fredmund Malik): Stärkenorientierung, Prioritätensetzung und echte Wirksamkeit.',
      },
      {
        text: 'Sie verbringt die meiste Arbeitszeit mit detaillierter Arbeitszeiterfassung und kontrolliert jeden Handlungsschritt minutiös.',
        korrekt: false,
        erklaerung: 'Dies kennzeichnet zeitraubendes Mikromanagement und Misstrauen, mindert jedoch die Effektivität und Motivation von Teams drastisch.',
      },
      {
        text: 'Sie versucht stets von allen gemocht zu werden, vermeidet unpopuläre Entscheidungen und übernimmt alle Fachaufgaben selbst.',
        korrekt: false,
        erklaerung: 'Harmoniesucht und Überlastung durch Facharbeit verhindern strategische Führung und klare Verantwortungszuweisungen.',
      },
      {
        text: 'Sie setzt ausschließlich auf ihr Charisma und verzichtet auf systematische Planung, Organisation oder Leistungsbeurteilung.',
        korrekt: false,
        erklaerung: 'Führung ist ein lernbares Handwerk. Charisma ohne solides Führungshandwerk führt regelmäßig zu Unberechenbarkeit und Ineffizienz.',
      },
    ],
    pruefen: false,
  },
  {
    id: 7,
    bereich: 2,
    frage: 'Was versteht man unter Menschenbilder und welche Arten kennen Sie?',
    optionen: [
      {
        text: 'Grundlegende Annahmen über Wesen, Motive und Verhalten von Menschen, wie Theorie X/Y oder die Typologien von Edgar Schein.',
        korrekt: true,
        erklaerung: 'Menschenbilder sind handlungsleitende Grundannahmen über den Menschen in der Arbeitswelt (z. B. McGregor Theorie X/Y, Schein: rational-economic, social, complex man).',
      },
      {
        text: 'Objektive anatomische Skizzen des menschlichen Gehirns zur Messung neurologischer Leitungsgeschwindigkeiten im Büro.',
        korrekt: false,
        erklaerung: 'Menschenbilder sind organisationspsychologische Modellvorstellungen über Motive und Verhalten, keine biologisch-anatomischen Zeichnungen.',
      },
      {
        text: 'Ausschließlich fotografische Mitarbeiterporträts im Intranet zur optischen Erfassung der Belegschaft nach Abteilungen.',
        korrekt: false,
        erklaerung: 'Dies nimmt den Begriff fälschlicherweise wörtlich; ein Menschenbild ist ein theoretisches Konstrukt über Wertvorstellungen und Verhaltensannahmen.',
      },
      {
        text: 'Juristische Personenbeschreibungen in Arbeitsverträgen zur Festlegung der gesetzlichen Schadensersatzpflichten bei Fahrlässigkeit.',
        korrekt: false,
        erklaerung: 'Vertragliche Klauseln regeln rechtliche Rahmenbedingungen, spiegeln jedoch nicht die psychologischen Führungs-Menschenbilder wider.',
      },
    ],
    pruefen: false,
  },
  {
    id: 8,
    bereich: 2,
    frage: 'Von wem ist die Theorie X und Theorie Y?',
    optionen: [
      {
        text: 'Douglas McGregor, der diese beiden gegensätzlichen Menschenbilder 1960 in «The Human Side of Enterprise» formulierte.',
        korrekt: true,
        erklaerung: 'Douglas McGregor entwickelte 1960 die berühmte Gegenüberstellung von Theorie X (pessimistisch) und Theorie Y (optimistisch).',
      },
      {
        text: 'Kurt Lewin, der die Modelle im Rahmen seiner Studien zu Gruppenkonflikten und Führungsstilen an Universitäten begründete.',
        korrekt: false,
        erklaerung: 'Kurt Lewin ist für die klassischen Führungsstile (autoritär, demokratisch, Laissez-faire) und das 3-Phasen-Modell der Veränderung bekannt.',
      },
      {
        text: 'Max Weber, der diese Klassifikation zur Analyse charismatischer und bürokratischer Herrschaftsformen entwarf.',
        korrekt: false,
        erklaerung: 'Max Weber analysierte Herrschaftsformen (traditional, charismatisch, legal-rational), nicht die Theorien X und Y.',
      },
      {
        text: 'Fredmund Malik, der diese Buchstaben für die sechs Grundsätze wirksamer Unternehmensführung in St. Gallen einführte.',
        korrekt: false,
        erklaerung: 'Malik ist Vertreter des ganzheitlichen Managementsystems der St. Galler Schule, die Theorie X/Y stammt jedoch von McGregor.',
      },
    ],
    pruefen: false,
  },
  {
    id: 9,
    bereich: 2,
    frage: 'Wie können Sie die Theorie X erklären?',
    optionen: [
      {
        text: 'Der Mensch ist von Natur aus arbeitsscheu, meidet Verantwortung und muss durch Zwang, Kontrolle und extrinsische Anreize gelenkt werden.',
        korrekt: true,
        erklaerung: 'Theorie X postuliert ein pessimistisches Menschenbild: Arbeit wird als Last gesehen; ohne äußere Kontrolle und Vorgaben bleibt der Mitarbeiter passiv.',
      },
      {
        text: 'Der Mensch sucht von Natur aus Sinn, entfaltet kreative Potenziale selbstständig und benötigt keinerlei Führung oder Feedback.',
        korrekt: false,
        erklaerung: 'Dies beschreibt eine extrem übersteigerte Form der Theorie Y (bzw. Human-Potential-Bewegung), nicht das Menschenbild der Theorie X.',
      },
      {
        text: 'Der Mitarbeiter ist ausschließlich an sozialer Geborgenheit in der Gruppe interessiert und verzichtet vollkommen auf finanzielle Entlohnung.',
        korrekt: false,
        erklaerung: 'Dies ähnelt dem «Social Man» nach den Hawthorne-Experimenten, entspricht jedoch nicht McGregors Theorie X.',
      },
      {
        text: 'Der Beschäftigte wechselt je nach Tagesform unberechenbar zwischen Höchstleistung und totaler Arbeitsverweigerung hin und her.',
        korrekt: false,
        erklaerung: 'Theorie X geht von einer stabilen Grundhaltung der Arbeitsunlust und Sicherheitsorientierung aus, nicht von erratischen Tagesschwankungen.',
      },
    ],
    pruefen: false,
  },
  {
    id: 10,
    bereich: 2,
    frage: 'Wie können Sie die Theorie Y erklären?',
    optionen: [
      {
        text: 'Der Mensch betrachtet Arbeit als Quelle der Zufriedenheit, ist lern- und leistungsbereit und übernimmt bei passenden Bedingungen gerne Verantwortung.',
        korrekt: true,
        erklaerung: 'Theorie Y geht von einem optimistischen Menschenbild aus: Mitarbeiter motivieren sich intrinsisch, wenn ihnen Vertrauen und Gestaltungsspielraum gegeben werden.',
      },
      {
        text: 'Der Mitarbeiter arbeitet ausschließlich dann zuverlässig, wenn ihm bei Nichterfüllung mit spürbaren arbeitsrechtlichen Sanktionen gedroht wird.',
        korrekt: false,
        erklaerung: 'Diese Annahme von Zwang und Strafandrohung ist das typische Merkmal der Theorie X, nicht der Theorie Y.',
      },
      {
        text: 'Der Angestellte verlangt stets nach exakten Dienstplänen und lehnt jede Form von Mitbestimmung oder Eigeninitiative kategorisch ab.',
        korrekt: false,
        erklaerung: 'Die Ablehnung von Mitbestimmung und Wunsch nach reiner Anweisung entspricht der Theorie X.',
      },
      {
        text: 'Menschliches Leistungsvermögen hängt ausschließlich von monetären Boni ab, persönliche Anerkennung spielt dabei keine Rolle.',
        korrekt: false,
        erklaerung: 'Reine Geldorientierung entspricht dem Taylorismus und dem «Rational Economic Man», während Theorie Y intrinsische Motive betont.',
      },
    ],
    pruefen: false,
  },
  {
    id: 11,
    bereich: 2,
    frage: 'Wie erklären Sie den Führungskreis der Theorie X und Y?',
    optionen: [
      {
        text: 'Als selbsterfüllende Prophezeiung: Das Menschenbild der Führungskraft prägt ihr Verhalten, worauf Mitarbeiter spiegelbildlich reagieren und die Annahme bestätigen.',
        korrekt: true,
        erklaerung: 'Führt Misstrauen (Theorie X) zu Kontrolle, reagieren Mitarbeiter mit Dienst nach Vorschrift, was das Misstrauen scheinbar bestätigt. Vertrauen (Theorie Y) erzeugt Eigeninitiative.',
      },
      {
        text: 'Als starr festgelegten Betriebsablauf, bei dem Mitarbeiter alle vier Jahre obligatorisch von Theorie X in Theorie Y versetzt werden müssen.',
        korrekt: false,
        erklaerung: 'Der Führungskreis ist ein psychologischer Wirkungskreislauf (Pygmalion-Effekt), kein administratives Rotationsverfahren im Betrieb.',
      },
      {
        text: 'Als mathematische Formel zur Errechnung der optimalen Gehaltshöhe in Abhängigkeit vom monatlichen Krankenstand der Abteilung.',
        korrekt: false,
        erklaerung: 'Es handelt sich um ein qualitatives Beziehungs- und Rückkopplungsmodell der Führung, nicht um eine Entgeltberechnungsformel.',
      },
      {
        text: 'Als hierarchischen Kreislauf, wonach Führungskräfte stets Theorie Y leben müssen, Mitarbeiter jedoch immer Theorie X bevorzugen.',
        korrekt: false,
        erklaerung: 'Der Kreislauf zeigt, wie Vorannahmen beiderseits das Verhalten formen; er behauptet keineswegs, dass Mitarbeiter nach Theorie X geführt werden wollen.',
      },
    ],
    pruefen: false,
  },
  {
    id: 12,
    bereich: 2,
    frage: 'Was ist das Menschenbild der Z-Theorie?',
    optionen: [
      {
        text: 'Geprägt von Loyalität, kollektiver Verantwortung, hoher Identifikation und langfristiger Bindung zwischen Mitarbeiter und Organisation (nach Ouchi).',
        korrekt: true,
        erklaerung: 'William Ouchis Theorie Z (inspiriert vom japanischen Management) sieht den Menschen als soziales, loyales Wesen, das in stabilen, vertrauensvollen Gemeinschaften aufblüht.',
      },
      {
        text: 'Fokussiert auf kurzfristige Zeitarbeitsverträge, sofortige Kündigung bei Fehlern und rein unpersönliche digitale Kommunikation.',
        korrekt: false,
        erklaerung: 'Theorie Z steht für das exakte Gegenteil: langfristige Beschäftigung, implizite Kontrolle und ganzheitliches Interesse am Menschen.',
      },
      {
        text: 'Geht davon aus, dass Menschen Roboter sind, die keinerlei Emotionen besitzen und ausschließlich durch Algorithmen gesteuert werden sollten.',
        korrekt: false,
        erklaerung: 'Dies ist eine technokratische Fiktion; Ouchis Theorie Z betont ausdrücklich zwischenmenschliche Wärme und gegenseitiges Vertrauen.',
      },
      {
        text: 'Betrachtet Mitarbeiter als Einzelkämpfer, die internen Konkurrenzkampf als einzige Triebfeder für Bestleistungen ansehen.',
        korrekt: false,
        erklaerung: 'Theorie Z basiert auf Harmonie, Gruppenorientierung und kollektiver Entscheidungsfindung, nicht auf rücksichtslosem Egoismus.',
      },
    ],
    pruefen: true,
  },
  {
    id: 13,
    bereich: 2,
    frage: 'Wie erklären Sie die Menschenbilder nach der Theorie von Edgar Schein?',
    optionen: [
      {
        text: 'Entwicklung von vier Menschenbildern: Rational-ökonomischer Mensch, Sozialer Mensch, Sich selbst verwirklichender Mensch und Komplexer Mensch.',
        korrekt: true,
        erklaerung: 'Edgar H. Schein systematisierte die Führungsgeschichte in diese vier aufeinander aufbauenden Menschenbilder, die jeweils unterschiedliche Führungsstile verlangen.',
      },
      {
        text: 'Einteilung aller Menschen nach den vier Sternzeichen-Elementen Feuer, Wasser, Erde und Luft zur optimalen Arbeitsplatzgestaltung.',
        korrekt: false,
        erklaerung: 'Scheins Theorie ist eine fundierte organisationspsychologische Typologie und hat nichts mit esoterischen Elementlehren gemein.',
      },
      {
        text: 'Differenzierung ausschließlich zwischen aktiven Managern und passiven Arbeitern ohne Berücksichtigung sozialer oder individueller Motive.',
        korrekt: false,
        erklaerung: 'Dies spiegelt ein frühes tayloristisches Klassenmodell wider, ignoriert aber Scheins differenzierte Mehrstufen-Typologie.',
      },
      {
        text: 'Kategorisierung von Angestellten nach ihren Rechnerkenntnissen in Programmierer, Anwender, Systemverwalter und Technikhasser.',
        korrekt: false,
        erklaerung: 'Schein forschte zur Organisationspsychologie und Motivation im 20. Jahrhundert, nicht zu modernen IT-Berufsgruppen.',
      },
    ],
    pruefen: false,
  },
  {
    id: 14,
    bereich: 2,
    frage: 'Welche Eigenheiten hat der rational-ökonomische Mensch nach Edgar Schein?',
    optionen: [
      {
        text: 'Er handelt zweckrational zur Maximierung des eigenen materiellen Nutzens, wird durch Geld motiviert und verhält sich im Betrieb eher passiv.',
        korrekt: true,
        erklaerung: 'Der «Rational Economic Man» entspricht dem klassischen Homo Oeconomicus (Taylorismus): Primäre Steuerung über finanzielle Anreize und straffe Aufsicht.',
      },
      {
        text: 'Er stellt soziale Beziehungen und Kollegialität stets über die eigene Bezahlung und verzichtet freiwillig auf Leistungsprämien.',
        korrekt: false,
        erklaerung: 'Dies kennzeichnet den «Social Man», während der rational-ökonomische Mensch strikt nutzen- und geldorientiert agiert.',
      },
      {
        text: 'Er strebt vor allem nach Autonomie und persönlichem Sinn und lehnt jede monetäre Entlohnung als unethisch ab.',
        korrekt: false,
        erklaerung: 'Autonomie und Sinnsuche charakterisieren den «Self-Actualizing Man», nicht den rational-ökonomischen Menschen.',
      },
      {
        text: 'Er besitzt unberechenbare Motive, die sich je nach Alter und Projektkontext täglich komplett wandeln.',
        korrekt: false,
        erklaerung: 'Wandlungsfähige und vielschichtige Motive beschreiben den «Complex Man», der von Schein als letzte Entwicklungsstufe formuliert wurde.',
      },
    ],
    pruefen: false,
  },
  {
    id: 15,
    bereich: 2,
    frage: 'Welche Unterscheidung der Menschenbilder kennen Sie im Zeitablauf?',
    optionen: [
      {
        text: 'Historische Wandlung vom rational-ökonomischen Menschen über den sozialen und selbstverwirklichenden Menschen bis hin zum komplexen Menschen.',
        korrekt: true,
        erklaerung: 'Im Zeitablauf löste die Human-Relations-Bewegung (sozialer Mensch) den Taylorismus ab, gefolgt von der Human-Resources-Bewegung und heutigen systemischen Modellen (komplexer Mensch).',
      },
      {
        text: 'Vom hochkreativen Urmenschen der Antike über den faulen Arbeiter der Renaissance hin zum rein digitalen Roboter des 21. Jahrhunderts.',
        korrekt: false,
        erklaerung: 'Dies ist eine karikierende Fiktion ohne wissenschaftliche Basis in der Betriebswirtschafts- oder Organisationslehre.',
      },
      {
        text: 'Ausschließlich die chronologische Einteilung nach Geburtsjahrzehnten in Zwanziger-, Fünfziger- und Achtziger-Jahre-Menschen.',
        korrekt: false,
        erklaerung: 'Menschenbilder im Zeitablauf beziehen sich auf den Wandel der Führungstheorien und Paradigmen, nicht auf simple Geburtsdekaden.',
      },
      {
        text: 'Vom absolut gehorsamen Sklaven im Mittelalter zum vertraglich gebundenen Angestellten der Neuzeit ohne jede psychologische Komponente.',
        korrekt: false,
        erklaerung: 'Dies beschreibt rechtshistorische Dienstverhältnisse, ignoriert jedoch den Wandel der psychologischen Motivationstheorien der letzten 120 Jahre.',
      },
    ],
    pruefen: true,
  },
  {
    id: 16,
    bereich: 2,
    frage: 'Welche Eigenschaften kennen Sie von der Generation Y?',
    optionen: [
      {
        text: 'Hinterfragen des Sinns («Why?»), Streben nach Work-Life-Integration, Digitalaffinität sowie Wunsch nach Flexibilität und offener Feedbackkultur.',
        korrekt: true,
        erklaerung: 'Die Generation Y (ca. 1981–1996) zeichnet sich durch Sinnorientierung («Purpose»), Technologiekompetenz und den Wunsch nach partnerschaftlicher Führung aus.',
      },
      {
        text: 'Bedingungsloser Gehorsam gegenüber Vorgesetzten, Verzicht auf Freizeit und Ablehnung jeglicher digitaler Kommunikationsmittel.',
        korrekt: false,
        erklaerung: 'Dies widerspricht den typischen Merkmalen der Generation Y diametral; sie hinterfragt Hierarchien und lebt digitale Vernetzung.',
      },
      {
        text: 'Ausschließliches Interesse an einer lebenslangen Festanstellung im selben Konzern unter Beibehaltung starrer Präsenzpflichten.',
        korrekt: false,
        erklaerung: 'Die Generation Y schätzt Agilität und Flexibilität (z. B. Remote Work, Projektarbeit) und wechselt Arbeitgeber pragmatischer als Vorläufergenerationen.',
      },
      {
        text: 'Vollkommene Isolation von Kollegen, strikte Ablehnung von Teamarbeit und Bevorzugung handschriftlicher Aktenführung.',
        korrekt: false,
        erklaerung: 'Die Generation Y ist stark kollaborativ orientiert («We-Culture») und nutzt selbstverständlich moderne Kollaborationssoftware.',
      },
    ],
    pruefen: false,
  },
  {
    id: 17,
    bereich: 2,
    frage: 'Was ist der Unterschied der «Generation Y» zu den «Baby Boomern»?',
    optionen: [
      {
        text: 'Baby Boomer priorisieren Loyalität, Status und «Leben, um zu arbeiten», während die Generation Y Sinnhaftigkeit, Flexibilität und persönliche Entfaltung in den Vordergrund stellt.',
        korrekt: true,
        erklaerung: 'Baby Boomer (ca. 1946–1964) wuchsen in einer von Wiederaufbau und Pflichtbewusstsein geprägten Zeit auf; Generation Y fordert Work-Life-Balance und Mitsprache.',
      },
      {
        text: 'Baby Boomer arbeiten ausschließlich remote ohne festen Schreibtisch, während die Generation Y auf starren Stechuhren im Büro besteht.',
        korrekt: false,
        erklaerung: 'Hier wurden die Präferenzen exakt vertauscht: Starre Präsenzkultur war typisch für frühere Epochen, flexible Arbeitsformen prägen die Generation Y.',
      },
      {
        text: 'Es gibt keinerlei soziologische Unterschiede, da beide Generationen unter identischen wirtschaftlichen Rahmenbedingungen aufgewachsen sind.',
        korrekt: false,
        erklaerung: 'Unterschiedliche historische Prägungen (Wirtschaftswunder vs. Digitalisierung und Globalisierung) führen zu signifikant abweichenden Wertehaltungen.',
      },
      {
        text: 'Baby Boomer verweigern Führungspositionen grundsätzlich, während jeder Angehörige der Generation Y zwingend Abteilungsleiter werden will.',
        korrekt: false,
        erklaerung: 'Tatsächlich bekleiden viele Baby Boomer Führungspositionen, während in der Generation Y oft fachliche Erfüllung höher geschätzt wird als formale Macht.',
      },
    ],
    pruefen: false,
  },
  {
    id: 18,
    bereich: 3,
    frage: 'Was verstehen Sie unter Führungsstil und Führungsverhalten?',
    optionen: [
      {
        text: 'Führungsstil ist das grundlegende, relativ stabile Verhaltensmuster einer Führungskraft, während Führungsverhalten das dynamische, situationsbezogene Handeln meint.',
        korrekt: true,
        erklaerung: 'Der Führungsstil bildet die habituelle Disposition und Wertehaltung ab; das Führungsverhalten ist die konkrete Interaktion in der jeweiligen Führungssituation.',
      },
      {
        text: 'Führungsstil ist eine gesetzliche Vorgabe der Arbeiterkammer, während Führungsverhalten die freiwillige Überstundenleistung des Teams darstellt.',
        korrekt: false,
        erklaerung: 'Weder Stil noch Führungsverhalten sind gesetzliche Kollektivvertragsnormen; es handelt sich um sozialwissenschaftliche Konzepte.',
      },
      {
        text: 'Führungsstil beschreibt die Kleiderordnung im Management, während Führungsverhalten die Pünktlichkeit bei Meetings bezeichnet.',
        korrekt: false,
        erklaerung: 'Dies reduziert komplexe Führungstheorien auf Äußerlichkeiten wie Etikette oder Dresscode.',
      },
      {
        text: 'Führungsverhalten ist stets unbewusst und unveränderbar, während der Führungsstil täglich durch eine Schulung neu erfunden werden kann.',
        korrekt: false,
        erklaerung: 'Führungsverhalten kann sehr wohl bewusst gesteuert werden; der Stil hingegen ist tiefer in der Persönlichkeit und Haltung verankert.',
      },
    ],
    pruefen: false,
  },
  {
    id: 19,
    bereich: 3,
    frage: 'Welche Dimensionen der Führungsstile kennen Sie?',
    optionen: [
      {
        text: 'Eindimensionale Ansätze (Entscheidungsgrad), zweidimensionale Modelle (Aufgaben- und Mitarbeiterorientierung) sowie mehrdimensionale Modelle (Einbezug von Situation und Effektivität).',
        korrekt: true,
        erklaerung: 'Diese Systematik gliedert Führungsmodelle: eindimensional (z. B. Lewin), zweidimensional (z. B. Blake/Mouton) und dreidimensional (z. B. Reddins 3-D-Modell mit Effektivität).',
      },
      {
        text: 'Ausschließlich räumliche Dimensionen wie Bürogröße, Stockwerkshöhe und Entfernung des Parkplatzes vom Vorstandszimmer.',
        korrekt: false,
        erklaerung: 'Hierbei handelt es sich um architektonische Gegebenheiten, nicht um Dimensionen führungspsychologischer Modelle.',
      },
      {
        text: 'Ausschließlich zeitliche Dimensionen wie Vormittagsführung, Nachmittagsführung und Wochenendbereitschaft.',
        korrekt: false,
        erklaerung: 'Arbeitszeiten sind organisatorische Dienstplanmodelle, keine theoretischen Dimensionen des Führungsverhaltens.',
      },
      {
        text: 'Finanzielle Dimensionen, die sich allein nach der Höhe des Bruttojahresgehalts der unterstellten Mitarbeiter bemessen.',
        korrekt: false,
        erklaerung: 'Vergütungsstrukturen spiegeln keine Dimensionen von Führungsstilen wider.',
      },
    ],
    pruefen: false,
  },
  {
    id: 20,
    bereich: 3,
    frage: 'Welche eindimensionalen Führungsstile von Kurt Lewin kennen Sie?',
    optionen: [
      {
        text: 'Autoritärer (autokratischer), demokratischer (kooperativer) und Laissez-faire-Führungsstil.',
        korrekt: true,
        erklaerung: 'Kurt Lewin untersuchte 1939 diese drei klassischen Grundstile anhand des Ausmaßes an Autorität und Mitbestimmung in Experimenten.',
      },
      {
        text: 'Bürokratischer, digitaler, agiler und virtueller Führungsstil.',
        korrekt: false,
        erklaerung: 'Dies sind neuere bzw. organisatorische Formen, nicht die klassischen drei Stile der Pionierstudien von Kurt Lewin.',
      },
      {
        text: 'Transaktionaler, transformationaler, charismatischer und narzisstischer Führungsstil.',
        korrekt: false,
        erklaerung: 'Transaktionale und transformationale Führung wurden später von Bass und Burns begründet, nicht von Kurt Lewin.',
      },
      {
        text: 'Monetärer, administrativer, technischer und juristischer Führungsstil.',
        korrekt: false,
        erklaerung: 'Hierbei handelt es sich um betriebliche Fachfunktionen, nicht um die psychologischen Führungsstile nach Kurt Lewin.',
      },
    ],
    pruefen: false,
  },
  {
    id: 21,
    bereich: 3,
    frage: 'Was verstehen Sie unter einem autoritären Führungsstil?',
    optionen: [
      {
        text: 'Die Führungskraft entscheidet alle Sach- und Personalfragen allein, ordnet Maßnahmen strikt an und kontrolliert die Ausführung engmaschig ohne Mitarbeiterbeteiligung.',
        korrekt: true,
        erklaerung: 'Der autoritäre Stil (nach Lewin) ist durch eine maximale Machtkonzentration beim Vorgesetzten, Einwegkommunikation von oben nach unten und strenge Kontrolle geprägt.',
      },
      {
        text: 'Die Führungskraft überlässt die Zielerreichung vollkommen der Gruppe, greift niemals ein und verzichtet vollständig auf Vorgaben oder Rückmeldungen.',
        korrekt: false,
        erklaerung: 'Dies beschreibt den Laissez-faire-Führungsstil, bei dem jegliche Lenkung und Strukturierung durch die Führungskraft unterbleibt.',
      },
      {
        text: 'Die Führungskraft delegiert sämtliche strategischen Entscheidungen an externe Berater und führt selbst nur noch informelle Pausengespräche.',
        korrekt: false,
        erklaerung: 'Hierbei handelt es sich um eine Flucht aus der Führungsverantwortung, nicht um autoritäres Direktionsverhalten.',
      },
      {
        text: 'Die Führungskraft sucht vor jeder kleinen Entscheidung stets den vollständigen Konsens im gesamten Kollegium über geheime Abstimmungen.',
        korrekt: false,
        erklaerung: 'Dies entspricht einem basisdemokratischen Konsensmodell, welches dem autoritären Entscheidungsmonopol diametral entgegensteht.',
      },
    ],
    pruefen: false,
  },
  {
    id: 22,
    bereich: 3,
    frage: 'Was verstehen Sie unter einem demokratischen Führungsstil – welche Vor- und Nachteile kennen Sie?',
    optionen: [
      {
        text: 'Mitarbeiter werden aktiv in Entscheidungen eingebunden; Vorteile sind hohe Motivation und Akzeptanz, Nachteile sind höherer Zeitbedarf und mögliche Kompromisse.',
        korrekt: true,
        erklaerung: 'Der demokratische (kooperative) Stil fördert Eigeninitiative und Teamgeist, erfordert jedoch mehr Abstimmungszeit und kann in Notlagen verlangsamen.',
      },
      {
        text: 'Vorgesetzte entscheiden alles im Alleingang; Vorteile sind absolute Fehlerfreiheit, Nachteile sind übermäßig hohe Gehälter der Mitarbeiter.',
        korrekt: false,
        erklaerung: 'Alleinentscheidungen kennzeichnen den autoritären Stil, führen keineswegs zu garantierter Fehlerfreiheit und haben keinen Bezug zu Gehältern.',
      },
      {
        text: 'Es existieren keinerlei Vorgaben oder Ziele; Vorteile sind sofortige Schnelligkeit, Nachteile sind zu viele schriftliche Arbeitsanweisungen.',
        korrekt: false,
        erklaerung: 'Das Fehlen von Vorgaben ist typisch für Laissez-faire, welches zudem weder zu rascher Schnelligkeit noch zu übermäßigen Anweisungen führt.',
      },
      {
        text: 'Entscheidungen werden ausschließlich vom dienstältesten Mitarbeiter getroffen; Vorteile sind steuerliche Ersparnisse, Nachteile sind kürzere Pausen.',
        korrekt: false,
        erklaerung: 'Das Senioritätsprinzip ist kein demokratischer Führungsstil und begründet weder steuerliche noch arbeitszeitliche Konsequenzen.',
      },
    ],
    pruefen: false,
  },
  {
    id: 23,
    bereich: 3,
    frage: 'Welche Führungsstile unterscheidet Max Weber und erklären Sie diese?',
    optionen: [
      {
        text: 'Traditionaler (patriarchalischer), charismatischer und bürokratischer (legal-rationaler) Führungs- bzw. Herrschaftsstil.',
        korrekt: true,
        erklaerung: 'Max Weber unterscheidet diese drei klassischen Formen legitimer Herrschaft: Glaube an Hergebrachtes (traditional), an die Ausstrahlung (charismatisch) und an rationale Gesetze (bürokratisch).',
      },
      {
        text: 'Monetärer, administrativer, operativer und visionärer Führungsstil auf Basis internationaler Bilanzierungsstandards.',
        korrekt: false,
        erklaerung: 'Weber begründete soziologische Herrschaftsformen, keine betriebswirtschaftlichen Controlling- oder Rechnungslegungsstile.',
      },
      {
        text: 'Digitaler, agiler, virtueller und lateraler Führungsstil für moderne Softwareentwicklungsteams im Homeoffice.',
        korrekt: false,
        erklaerung: 'Diese Begriffe entstammen der Managementlehre des 21. Jahrhunderts und waren zu Webers Lebzeiten (frühes 20. Jahrhundert) unbekannt.',
      },
      {
        text: 'Demokratischer, autoritärer und passiver Führungsstil nach den feldtheoretischen Experimenten der Jugendgruppen.',
        korrekt: false,
        erklaerung: 'Diese klassische Dreiteilung stammt aus den psychologischen Studien von Kurt Lewin (1939), nicht von Max Weber.',
      },
    ],
    pruefen: true,
  },
  {
    id: 24,
    bereich: 3,
    frage: 'Was sind die Merkmale des Führungsmodells nach Tannenbaum/Schmidt?',
    optionen: [
      {
        text: 'Ein stufenförmiges Führungskontinuum zwischen autoritär und demokratisch, definiert durch den Entscheidungsspielraum von Vorgesetztem und Gruppe.',
        korrekt: true,
        erklaerung: 'Robert Tannenbaum und Warren H. Schmidt beschrieben 1958 ein Kontinuum mit 7 Stufen, das den Übergang vom Alleinentscheiden der Führungskraft zum Gruppenentscheid abbildet.',
      },
      {
        text: 'Ein starres Zweipunkteraster, das Führungskräfte unwiderruflich entweder als geborene Herrscher oder als bloße Verwalter kategorisiert.',
        korrekt: false,
        erklaerung: 'Das Modell betont ausdrücklich ein dynamisches Kontinuum flexibler Stufen statt einer unumkehrbaren Zwei-Klassen-Kategorisierung.',
      },
      {
        text: 'Ein dreidimensionaler Würfel zur mathematischen Berechnung der optimalen Wochenarbeitszeit im industriellen Schichtbetrieb.',
        korrekt: false,
        erklaerung: 'Das Kontinuum ist ein eindimensionales Verhaltensspektrum zur Entscheidungsfindung und kein dreidimensionaler Arbeitszeitwürfel.',
      },
      {
        text: 'Ein reines Gehaltseinstufungsmodell, welches das Führungsverhalten direkt an die monatliche Provisionshöhe der Verkäufer koppelt.',
        korrekt: false,
        erklaerung: 'Tannenbaum/Schmidt entwickelten ein Führungsverhaltensmodell und kein betriebliches Entlohnungs- oder Provisionssystem.',
      },
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
        erklaerung: 'Tannenbaum/Schmidt benennen drei Einflusskräfte: Manager (Werte, Vertrauen), Mitarbeiter (Kompetenz, Unabhängigkeitsdrang) und Situation (Organisation, Zeitdruck).',
      },
      {
        text: 'Ausschließlich das Lebensalter der Führungskraft und die gesetzliche Firmenrechtsform im Firmenbuch des Landesgerichts.',
        korrekt: false,
        erklaerung: 'Alter und Rechtsform sind keine führungstheoretischen Einflussvariablen im Kontinuum-Modell von Tannenbaum/Schmidt.',
      },
      {
        text: 'Die Höhe der monatlichen Rohstoffpreise an der Warenbörse sowie die klimatischen Wetterbedingungen am Werksstandort.',
        korrekt: false,
        erklaerung: 'Rohstoffmärkte und Witterung sind volkswirtschaftliche bzw. ökologische Rahmenfaktoren, spiegeln jedoch nicht die Führungsfaktoren wider.',
      },
      {
        text: 'Ausschließlich die Raumtemperatur im Besprechungszimmer und die Dauer der gesetzlich vorgeschriebenen Mittagspausen.',
        korrekt: false,
        erklaerung: 'Dies sind ergonomische Nebenaspekte und haben keinen Erklärungswert für die Wahl des Führungsstils nach Tannenbaum/Schmidt.',
      },
    ],
    pruefen: false,
  },
  {
    id: 26,
    bereich: 3,
    frage: 'Erklären Sie die Führungsstile nach Homburg und welche Dimension findet bei ihm zusätzliche Berücksichtigung?',
    optionen: [
      {
        text: 'Verknüpfung von Führungsverhalten im Vertrieb mit Marktorientierung; besondere Berücksichtigung findet die Dimension der Kundenorientierung.',
        korrekt: true,
        erklaerung: 'Christian Homburg fokussiert marktorientierte Unternehmens- und Vertriebsführung: Neben mitarbeiterbezogenen Stilen wird gezielt die Dimension Kunden-/Marktorientierung integriert.',
      },
      {
        text: 'Klassifikation nach der rein militärischen Kommandogewalt mit der zusätzlichen Dimension der physischen Durchsetzungskraft im Lager.',
        korrekt: false,
        erklaerung: 'Homburg ist ein führender Marketing- und Vertriebswissenschaftler; sein Modell basiert auf moderner Marktorientierung, nicht auf militärischer Gewalt.',
      },
      {
        text: 'Unterteilung nach den Farben der Firmenfahrzeuge mit der zusätzlichen Dimension des durchschnittlichen Treibstoffverbrauchs.',
        korrekt: false,
        erklaerung: 'Dies ist eine themenfremde Fuhrparkbetrachtung ohne Bezug zu wissenschaftlichen Führungskonzepten nach Christian Homburg.',
      },
      {
        text: 'Ausschließliche Bewertung der Softwarekenntnisse von Führungskräften unter Berücksichtigung der Programmiersprache Python.',
        korrekt: false,
        erklaerung: 'Homburg analysiert betriebswirtschaftliche Kunden- und Mitarbeiterführung im Vertrieb, keine Software-Entwicklungskompetenzen.',
      },
    ],
    pruefen: true,
  },
  {
    id: 27,
    bereich: 3,
    frage: 'Was versteht Homburg unter dem kooperativen Führungsstil?',
    optionen: [
      {
        text: 'Partnerschaftliche Führung im Vertrieb mit Delegation von Spielräumen, Unterstützung bei Kundenproblemen und gemeinsamer Zielabstimmung.',
        korrekt: true,
        erklaerung: 'Im Vertriebskontext nach Homburg bedeutet Kooperation, Verkäufern Handlungsfreiräume im Kundenkontakt zu gewähren, sie als Coach zu unterstützen und Ziele gemeinsam zu erarbeiten.',
      },
      {
        text: 'Vollständige Überwachung aller Kunden-Telefonate durch permanente Tonaufnahmen ohne Wissen der Mitarbeiter.',
        korrekt: false,
        erklaerung: 'Heimliche Tonüberwachung ist autoritäres Kontrollverhalten (und rechtlich unzulässig), widerspricht aber kooperativer Führung radikal.',
      },
      {
        text: 'Tägliche Vergabe von Preisrabatten rein nach Gutdünken der Führungskraft bei gleichzeitigem Redeverbot für den Verkäufer.',
        korrekt: false,
        erklaerung: 'Dies entmündigt den Verkäufer vor Ort und widerspricht dem partnerschaftlichen Ansatz kooperativer Vertriebsführung.',
      },
      {
        text: 'Völliger Verzicht auf Kundenbesuche, Reklamationsbearbeitung und jede Form vertrieblicher Leistungsbeurteilung.',
        korrekt: false,
        erklaerung: 'Kooperative Führung strebt vertrieblichen Markterfolg an und bedeutet keineswegs Arbeitsverweigerung oder Gleichgültigkeit.',
      },
    ],
    pruefen: false,
  },
  {
    id: 28,
    bereich: 3,
    frage: 'Wie kann man nach Homburg Defizite im Führungsstil abbauen?',
    optionen: [
      {
        text: 'Durch systematische Führungskräfteentwicklung, strukturiertes Feedback von Mitarbeitern und Kunden sowie zielgerichtetes Coaching.',
        korrekt: true,
        erklaerung: 'Homburg empfiehlt kontinuierliche Reflexion, 360-Grad-Feedback (inklusive Markt-/Kundenfeedback), Schulungsprogramme und vertriebsspezifisches Coaching.',
      },
      {
        text: 'Durch sofortige Entlassung aller Teammitglieder, die berechtigte Kritik am Vorgesetzten äußern, um Unruhe zu vermeiden.',
        korrekt: false,
        erklaerung: 'Kritikerunterdrückung verstärkt Führungsdefizite und zerstört Motivation, statt Führungskompetenzen professionell weiterzuentwickeln.',
      },
      {
        text: 'Indem sämtliche Führungsaufgaben komplett abgeschafft und Unternehmen rein nach dem Zufallsprinzip gesteuert werden.',
        korrekt: false,
        erklaerung: 'Der Verzicht auf Führung führt zu Orientierungslosigkeit und entspricht keinem seriösen Ansatz der Betriebswirtschaftslehre.',
      },
      {
        text: 'Ausschließlich durch Verdoppelung der Überstundenpauschale im Dienstvertrag ohne jede Schulungs- oder Reflexionsmaßnahme.',
        korrekt: false,
        erklaerung: 'Monetäre Zulagen verändern kein Führungsverhalten und beheben keine Mängel in Mitarbeiterführung oder Kundenorientierung.',
      },
    ],
    pruefen: true,
  },
  {
    id: 29,
    bereich: 3,
    frage: 'Von wem ist das Verhaltensgitter (Managerial Grid) und was verstehen Sie darunter?',
    optionen: [
      {
        text: 'Von Blake und Mouton; ein zweidimensionales Modell zur Klassifizierung von Führungsstilen nach Aufgaben- und Menschenorientierung.',
        korrekt: true,
        erklaerung: 'Robert R. Blake und Jane S. Mouton entwickelten 1964 das Managerial Grid mit einer 9x9-Matrix auf den Achsen Sach-/Aufgabenorientierung und Personenorientierung.',
      },
      {
        text: 'Von Max Weber; ein bürokratischer Stufenplan zur archivarischen Ablage von behördlichen Aktenvorgängen in Ministerien.',
        korrekt: false,
        erklaerung: 'Max Weber untersuchte Herrschaftssoziologie; das Managerial Grid stammt von Robert R. Blake und Jane S. Mouton.',
      },
      {
        text: 'Von Fredmund Malik; eine Siebener-Liste zur softwaregestützten Aufgabenkontrolle im industriellen Qualitätsmanagement.',
        korrekt: false,
        erklaerung: 'Malik steht für die St. Galler Managementlehre und Grundsätze wirksamer Führung, nicht für das Verhaltensgitter.',
      },
      {
        text: 'Von Sigmund Freud; ein psychoanalytisches Verfahren zur Deutung unbewusster Träume am Arbeitsplatz von Managern.',
        korrekt: false,
        erklaerung: 'Freud begründete die Psychoanalyse; das Managerial Grid ist ein organisationspsychologisches Führungsinstrument von Blake/Mouton.',
      },
    ],
    pruefen: false,
  },
  {
    id: 30,
    bereich: 3,
    frage: 'Was verstehen Sie unter «People Pleaser»?',
    optionen: [
      {
        text: 'Eine Führungskraft, die um jeden Preis Konflikte meidet, es allen recht machen will und Sachziele vernachlässigt, um Beliebtheit zu sichern.',
        korrekt: true,
        erklaerung: 'Im Führungsalltag (oft analog zum 1,9-Führungsstil «Glacehandschuh-Methode») opfert der «People Pleaser» notwendige Entscheidungen und Leistungsziele zugunsten persönlicher Harmonie.',
      },
      {
        text: 'Einen extrem autoritären Manager, der Mitarbeiter bei kleinsten Verfehlungen sofort öffentlich tadelt und bestraft.',
        korrekt: false,
        erklaerung: 'Dies beschreibt einen diktatorischen bzw. 9,1-Führungsstil, der keine Rücksicht auf persönliche Beliebtheit oder Gefühle nimmt.',
      },
      {
        text: 'Einen professionellen externen Softwareentwickler, der Benutzeroberflächen für Online-Shops barrierefrei programmiert.',
        korrekt: false,
        erklaerung: 'Hierbei handelt es sich um Usability- bzw. UI/UX-Design, nicht um den führungspsychologischen Begriff des «People Pleasers».',
      },
      {
        text: 'Einen unbestechlichen Wirtschaftsprüfer, der Bilanzen nach internationalen IFRS-Richtlinien akribisch kontrolliert.',
        korrekt: false,
        erklaerung: 'Wirtschaftsprüfer müssen sachlich-distanziert agieren und zeichnen sich gerade nicht durch harmoniebedürftiges Pleasing-Verhalten aus.',
      },
    ],
    pruefen: false,
  },
  {
    id: 31,
    bereich: 3,
    frage: 'Was bedeutet im Verhaltensgitter die Position 9+9?',
    optionen: [
      {
        text: 'Paternalistischer Führungsstil («väterlich/mütterlich»): Hohe Leistungsforderung (9,1) wird mit persönlicher Fürsorge und Belohnung (1,9) verknüpft, solange Loyalität herrscht.',
        korrekt: true,
        erklaerung: 'Im erweiterten Grid von Blake/Mouton steht 9+9 für Paternalismus: Die Führungskraft verlangt unbedingten Gehorsam und Fleiß, bietet dafür jedoch Schutz, Lob und Zuwendung.',
      },
      {
        text: 'Vollkommenes Versagen auf allen Ebenen bei gleichzeitiger Verweigerung jeglicher betrieblicher Leistungsbereitschaft.',
        korrekt: false,
        erklaerung: 'Dies entspricht der Position 1,1 («Überlebensmanagement»), während 9+9 durch maximalen Leistungswillen und Fürsorgeanspruch gekennzeichnet ist.',
      },
      {
        text: 'Mathematischer Berechnungsfehler im Grid, da Koordinatenwerte laut Originalmodell niemals addiert werden dürfen.',
        korrekt: false,
        erklaerung: 'Die Notation 9+9 wurde von Blake/McCanse/Mouton explizit als Kombination aus 9,1 und 1,9 zur Beschreibung des Paternalismus eingeführt.',
      },
      {
        text: 'Ausschließlich eine zeitliche Regelung, wonach Mitarbeiter 9 Stunden arbeiten und danach 9 Tage bezahlten Urlaub erhalten.',
        korrekt: false,
        erklaerung: 'Das Managerial Grid bewertet Verhaltensdimensionen der Führung und keine Schicht- oder Urlaubszeitmodelle.',
      },
    ],
    pruefen: true,
  },
  {
    id: 32,
    bereich: 3,
    frage: 'Was bedeutet im Verhaltensgitter die Position 1,1?',
    optionen: [
      {
        text: 'Überlebensmanagement («verarmte Führung»): Minimaler Einsatz für Aufgaben und minimale Sorge um Menschen; die Führungskraft will lediglich die eigene Stelle sichern.',
        korrekt: true,
        erklaerung: '1,1 (Impoverished Management) bedeutet minimale Anstrengung sowohl für Arbeitsergebnisse als auch für die Beziehungsgestaltung (Dienst nach Vorschrift der Führungskraft).',
      },
      {
        text: 'Ideale Teamführung: Höchste Leistungsbegeisterung verbunden mit maximalem gegenseitigem Vertrauen und Respekt.',
        korrekt: false,
        erklaerung: 'Dies beschreibt die Position 9,9 (Team-Management), welche das Idealbild im klassischen Verhaltensgitter darstellt.',
      },
      {
        text: 'Glacehandschuh-Methode: Vollkommener Fokus auf das Wohlergehen der Mitarbeiter bei völliger Vernachlässigung der Arbeitsergebnisse.',
        korrekt: false,
        erklaerung: 'Diese Ausprägung entspricht der Position 1,9 (Country Club Management), nicht 1,1.',
      },
      {
        text: 'Kompromiss-Management: Ausgewogene, durchschnittliche Berücksichtigung von Aufgaben und Mitarbeitern in der goldenen Mitte.',
        korrekt: false,
        erklaerung: 'Die goldene Mitte der Ausgewogenheit entspricht im Grid der Position 5,5 (Organisationsmanagement).',
      },
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
        erklaerung: 'Dreidimensionale Ansätze (wie Reddins 3-D-Modell) erkennen, dass kein Stil universell ideal ist, sondern Effektivität erst durch die Passung zur Situation entsteht.',
      },
      {
        text: 'Ein Führungsstil, bei dem Entscheidungen stets von drei Managern gleichzeitig in getrennten Räumen per Funk abgestimmt werden müssen.',
        korrekt: false,
        erklaerung: 'Hierbei handelt es sich um eine kuriose Dreier-Gremienstruktur, nicht um ein wissenschaftliches dreidimensionales Führungsstilmodell.',
      },
      {
        text: 'Ein geometrisches Führungskonzept zur architektonischen Dreidimensionalität moderner Großraumbüros mit Stehpulten.',
        korrekt: false,
        erklaerung: 'Dies verwechselt verhaltenswissenschaftliche Dimensionen mit physischen Raumdimensionen der Innenarchitektur.',
      },
      {
        text: 'Eine Gehaltsstaffelung, die Grundgehalt, Provision und Dienstwagen als drei gleichberechtigte Dimensionen vertraglich festschreibt.',
        korrekt: false,
        erklaerung: 'Vergütungspakete stellen keine führungspsychologischen Dimensionen des Führungsverhaltens dar.',
      },
    ],
    pruefen: false,
  },
  {
    id: 34,
    bereich: 3,
    frage: 'Was sind die Merkmale des «3-D-Modells» nach Reddin?',
    optionen: [
      {
        text: 'Die Dimensionen Aufgabenorientierung, Beziehungsorientierung und Effektivität; je nach Passung zur Situation entstehen 4 effektive und 4 ineffektive Stile.',
        korrekt: true,
        erklaerung: 'William J. Reddin (1970) unterscheidet 4 Grundstile, die bei situativer Angemessenheit effektiv (z. B. Integrierer, Macher) bzw. unangemessen ineffektiv (z. B. Kompromissler, Autokrat) sind.',
      },
      {
        text: 'Die Einteilung aller Angestellten in Lehrlinge, Gesellen und Meister mit lebenslanger Festlegung der Beförderungsstufen.',
        korrekt: false,
        erklaerung: 'Dies ist die traditionelle Handwerkshierarchie, hat jedoch keinerlei Bezug zu Reddins 3-D-Führungsmodell.',
      },
      {
        text: 'Drei feste Führungsstile, die sich strikt nach dem Monatseinkommen des Kunden im B2B-Investitionsgütervertrieb richten.',
        korrekt: false,
        erklaerung: 'Reddins Modell befasst sich mit Management- und Führungsverhalten in Organisationen, nicht mit Kunden-Gehaltseinstufungen.',
      },
      {
        text: 'Ein dreistufiger Prozess zur sofortigen Kündigung von Mitarbeitern bei Nichterreichen der vorgegebenen Tagesstückzahlen.',
        korrekt: false,
        erklaerung: 'Reddin entwickelte ein Diagnose- und Entwicklungsinstrument zur Führungswirksamkeit, kein Kündigungsverfahren.',
      },
    ],
    pruefen: false,
  },
  {
    id: 35,
    bereich: 3,
    frage: 'Was verstehen Sie unter «transaktionaler Führung»?',
    optionen: [
      {
        text: 'Führung auf Basis einer rationalen Austauschbeziehung: Klare Zielvorgaben, bedingte Belohnung bei Zielerreichung und Eingriff bei Abweichungen.',
        korrekt: true,
        erklaerung: 'Transaktionale Führung beruht auf dem Prinzip «Leistung gegen Gegenleistung» (Austauschvertrag) und Management by Exception ohne Transformation tieferer Werte.',
      },
      {
        text: 'Ausschließliche Bezahlung von Mitarbeitern in bar am Ende jedes einzelnen Arbeitstages ohne schriftlichen Arbeitsvertrag.',
        korrekt: false,
        erklaerung: 'Dies nimmt den Begriff «Transaktion» fälschlicherweise wörtlich im kaufmännischen Barzahlungs-Sinn, beschreibt jedoch kein Führungskonzept.',
      },
      {
        text: 'Inspirierende Begeisterung durch eine emotionale Unternehmensvision, bei der persönliche Boni keine Rolle spielen.',
        korrekt: false,
        erklaerung: 'Dies kennzeichnet die transformationale Führung, welche über den reinen transaktionalen Austausch weit hinausgeht.',
      },
      {
        text: 'Automatische Weiterleitung aller E-Mails des Teams an einen zentralen Buchhaltungsserver zur Spesenkontrolle.',
        korrekt: false,
        erklaerung: 'Hierbei handelt es sich um eine administrative IT-Routing-Regel, nicht um transaktionale Mitarbeiterführung.',
      },
    ],
    pruefen: false,
  },
  {
    id: 36,
    bereich: 3,
    frage: 'Was verstehen Sie unter «transformationaler Führung»?',
    optionen: [
      {
        text: 'Führung durch Vorbild, Inspiration, geistige Anregung und individuelle Förderung, um Werte zu verändern und intrinsische Höchstleistungen freizusetzen.',
        korrekt: true,
        erklaerung: 'Transformationale Führung (nach Bass/Burns) transformiert Einstellungen über die «4 I»: Idealisierter Einfluss, Inspirierende Motivation, Intellektuelle Stimulierung und Individuelle Berücksichtigung.',
      },
      {
        text: 'Strikte Verpflichtung zur täglichen Umgestaltung der Büromöbel zur Steigerung der körperlichen Fitness der Mitarbeiter.',
        korrekt: false,
        erklaerung: 'Transformation meint hier den Wertewandel und Bewusstseinswandel im Denken, nicht das physische Verrücken von Bürotischen.',
      },
      {
        text: 'Reine Überwachung von Stechuhren und minutengenaue Gehaltskürzung bei Verspätungen am Werkstor.',
        korrekt: false,
        erklaerung: 'Minutiöse Verhaltenskontrolle und Strafandrohung sind Relikte autoritären Managements und stehen im Widerspruch zu transformationaler Führung.',
      },
      {
        text: 'Vollständige Automatisierung aller Führungsentscheidungen durch selbstlernende Industrieroboter am Fließband.',
        korrekt: false,
        erklaerung: 'Transformationale Führung ist zutiefst menschlich und beziehungsorientiert und kann nicht durch Maschinen ersetzt werden.',
      },
    ],
    pruefen: false,
  },
  {
    id: 37,
    bereich: 3,
    frage: 'Wie definieren Sie den «situativen Führungsstil» und erklären Sie dessen Merkmale?',
    optionen: [
      {
        text: 'Führungsverhalten passt sich dem Reifegrad des Mitarbeiters an; Merkmale sind die 4 Stufen Dirigieren, Überzeugen, Partizipieren und Delegieren.',
        korrekt: true,
        erklaerung: 'Nach Hersey und Blanchard hängt der optimale Führungsstil vom Reifegrad (Fachkompetenz und Motivation/Engagement) des Mitarbeiters in Bezug auf eine konkrete Aufgabe ab.',
      },
      {
        text: 'Die Führungskraft entscheidet jeden Morgen nach dem Zufallsprinzip per Würfelwurf, welcher Führungsstil heute gilt.',
        korrekt: false,
        erklaerung: 'Situative Führung ist ein zielgerichtetes, systematisches Diagnosekonzept und kein unberechenbares Glücksspiel.',
      },
      {
        text: 'Mitarbeiter werden grundsätzlich immer gleich behandelt, völlig unabhängig von ihrer Erfahrung, Ausbildung oder Aufgabe.',
        korrekt: false,
        erklaerung: 'Die Universallösung («One best way») ist das genaue Gegenteil des situativen Ansatzes, der individuelle Differenzierung verlangt.',
      },
      {
        text: 'Der Führungsstil richtet sich ausschließlich nach der aktuellen Parkplatzsituation vor dem Firmengebäude.',
        korrekt: false,
        erklaerung: 'Infrastrukturprobleme sind keine relevanten Kriterien zur Diagnose des Reifegrads von Mitarbeitern.',
      },
    ],
    pruefen: false,
  },
  {
    id: 38,
    bereich: 4,
    frage: 'Welche «Management by…»-Techniken kennen Sie?',
    optionen: [
      {
        text: 'Management by Objectives (Zielvereinbarung), Management by Delegation (Aufgabenübertragung) und Management by Exception (Ausnahmeprinzip).',
        korrekt: true,
        erklaerung: 'Diese drei klassischen Führungstechniken (ergänzt durch Management by Systems) bilden den Kern der strukturierten Führungslehre.',
      },
      {
        text: 'Management by Emotion, Management by Chance, Management by Intuition und Management by Rumor.',
        korrekt: false,
        erklaerung: 'Dies sind umgangssprachliche Schlagwörter bzw. ironische Fehlformen, jedoch keine anerkannten betriebswirtschaftlichen Führungstechniken.',
      },
      {
        text: 'Management by Telephone, Management by Fax, Management by Letter und Management by Postcard.',
        korrekt: false,
        erklaerung: 'Hierbei handelt es sich um Übertragungsmedien der Bürokommunikation, nicht um Führungsprinzipien.',
      },
      {
        text: 'Management by Penalty, Management by Fear, Management by Silence und Management by Force.',
        korrekt: false,
        erklaerung: 'Angst- und Zwangsmethoden widersprechen zeitgemäßen Führungstechniken und bilden keine seriösen Managementkonzepte.',
      },
    ],
    pruefen: false,
  },
  {
    id: 39,
    bereich: 4,
    frage: 'Was kennzeichnet einen «modernen Führungsstil»?',
    optionen: [
      {
        text: 'Agile Haltung («Servant Leadership»), psychologische Sicherheit, Förderung von Selbstorganisation, Transparenz und partizipative Befähigung.',
        korrekt: true,
        erklaerung: 'Moderne Führung versteht sich als «Enabler» und Dienstleister für das Team (Dienende Führung), um in komplexen, dynamischen Märkten schnell und flexibel zu agieren.',
      },
      {
        text: 'Strikte Wiedereinführung hierarchischer Befehlsketten, Verbot von Homeoffice und Verzicht auf jegliche digitale Hilfsmittel.',
        korrekt: false,
        erklaerung: 'Dies ist ein Rückschritt in veraltete Kommandostrukturen des Taylorismus und das Gegenteil moderner Führungskultur.',
      },
      {
        text: 'Vollkommenes Verschweigen von Unternehmenszahlen gegenüber den Mitarbeitern bei gleichzeitiger Sanktionierung von Teamgesprächen.',
        korrekt: false,
        erklaerung: 'Informationsmonopole und Intransparenz ersticken Eigeninitiative und widersprechen modernen Führungsansätzen fundamental.',
      },
      {
        text: 'Die Führungskraft nimmt überhaupt keine Termine mehr wahr und verbringt die gesamte Arbeitszeit mit Computerspielen.',
        korrekt: false,
        erklaerung: 'Moderne Führung erfordert aktive Beziehungsgestaltung, Sparring und Rahmengebung, keine Arbeitsverweigerung.',
      },
    ],
    pruefen: false,
  },
  {
    id: 40,
    bereich: 4,
    frage: 'Was ist eine Führungskraft für den Mitarbeiter und Kunden 3.0?',
    optionen: [
      {
        text: 'Ein vernetzter Impulsgeber, Coach und Sinnstifter («Purpose Leader»), der Barrieren abbaut, Co-Creation fördert und auf Augenhöhe agiert.',
        korrekt: true,
        erklaerung: 'In der Ära 3.0 (Kollaboration, Werte, Digitalisierung) stehen Sinnhaftigkeit, Vernetzung und partnerschaftliche Wertschöpfung («Co-Creation») im Fokus.',
      },
      {
        text: 'Ein unnahbarer Patriarch, der hinter verschlossenen Türen geheime Einzelanweisungen für den Außendienst verfasst.',
        korrekt: false,
        erklaerung: 'Dies beschreibt ein überholtes, patriarchalisch-autoritäres Leitbild des Industriezeitalters 1.0/2.0.',
      },
      {
        text: 'Ein reiner Sachbearbeiter, der Kundenreklamationen manuell abstempelt und Mitarbeitern das Internet sperrt.',
        korrekt: false,
        erklaerung: 'Administrative Abschottung verhindert kundenorientierte Wertschöpfung und kollaborative Zusammenarbeit 3.0.',
      },
      {
        text: 'Ein computergenerierter Avatar, der menschliche Gefühle vollkommen ignoriert und Mitarbeiter ausschließlich nach Klickraten bewertet.',
        korrekt: false,
        erklaerung: 'Führung 3.0 betont gerade die Humanisierung und zwischenmenschliche Resonanz in einer vernetzten Welt, keine seelenlose Technokratie.',
      },
    ],
    pruefen: true,
  },
  {
    id: 41,
    bereich: 4,
    frage: 'Wie beschreiben Sie den modernen Führungsstil «Clean Leadership»?',
    optionen: [
      {
        text: 'Führung ohne eigene Vorurteile und suggestive Vorgaben: Die Führungskraft stellt wertfreie, neutrale Fragen, um die Denkräume der Mitarbeiter unbeeinflusst zu öffnen.',
        korrekt: true,
        erklaerung: 'Clean Leadership (basiert auf Clean Language) vermeidet Projektionen und Ratschläge; die Führungskraft agiert als neutraler Resonanzraum zur Entfaltung von Eigenlösungen.',
      },
      {
        text: 'Tägliche Kontrolle der Schreibtischordnung und Desinfektion aller Computer-Tastaturen vor Arbeitsbeginn.',
        korrekt: false,
        erklaerung: 'Dies verwechselt Clean Leadership im übertragenen psychologischen Sinn mit physischer Bürohygiene und Putzvorschriften.',
      },
      {
        text: 'Ausschließlicher Einsatz von Mitarbeitern, die zuvor eine notariell beglaubigte Unbedenklichkeitserklärung unterzeichnet haben.',
        korrekt: false,
        erklaerung: 'Clean Leadership ist ein Haltungs- und Kommunikationskonzept und kein bürokratisches Sicherheitsüberprüfungsverfahren.',
      },
      {
        text: 'Vollständiges Verbot persönlicher Pausengespräche und Beschränkung aller Kontakte auf standardisierte Buchstabencodes.',
        korrekt: false,
        erklaerung: 'Clean Leadership fördert tiefe, authentische Verständigung und verbietet keineswegs den zwischenmenschlichen Austausch.',
      },
    ],
    pruefen: true,
  },
  {
    id: 42,
    bereich: 4,
    frage: 'Was verstehen Sie unter dem «3 Säulen Modell»?',
    optionen: [
      {
        text: 'Die ganzheitliche Verknüpfung von digitaler Kultur (Mindset), agiler Organisation (Prozesse/Strukturen) und moderner Technologie (Werkzeuge).',
        korrekt: true,
        erklaerung: 'Im Rahmen moderner und digitaler Führung stützt sich erfolgreiche Transformation auf diese drei interdependenten Säulen: Mensch/Kultur, Struktur/Organisation und Technologie.',
      },
      {
        text: 'Die architektonische Vorschrift, dass Vorstandsbüros durch genau drei tragende Säulen aus Stahlbeton gestützt werden müssen.',
        korrekt: false,
        erklaerung: 'Dies ist eine statisch-bauliche Interpretation ohne Relevanz für betriebswirtschaftliche Führungs- und Organisationsmodelle.',
      },
      {
        text: 'Die strikte Unterteilung des gesamten Arbeitstages in exakt drei gleich lange Phasen: Schlafen, Essen und Nachdenken.',
        korrekt: false,
        erklaerung: 'Hierbei handelt es sich um eine private Tageseinteilung, nicht um ein anerkanntes Führungssäulenmodell im Management.',
      },
      {
        text: 'Drei feste Steuersätze für Unternehmensgewinne, die jährlich vom Finanzamt per Zufallsauswahl festgelegt werden.',
        korrekt: false,
        erklaerung: 'Steuerrechtliche Tarife haben keinen Bezug zum führungsbezogenen Drei-Säulen-Modell moderner Organisationen.',
      },
    ],
    pruefen: true,
  },
  {
    id: 43,
    bereich: 4,
    frage: 'Was sind die Herausforderungen von «Clean Leadership» für die Führungskraft?',
    optionen: [
      {
        text: 'Das Zurückhalten eigener Ratschläge und Lösungsansätze, Aushalten von Stille und die Disziplin, wertfrei und unvoreingenommen zuzuhören.',
        korrekt: true,
        erklaerung: 'Für Führungskräfte ist es hochgradig herausfordernd, nicht sofort die eigene Expertenmeinung überzustülpen, sondern Mitarbeitern den Denkraum wirklich zu überlassen.',
      },
      {
        text: 'Das fehlerfreie Auswendiglernen von fünfhundert chemischen Inhaltsstoffen industrieller Reinigungsmittel für Werkhallen.',
        korrekt: false,
        erklaerung: 'Dies nimmt den Begriff «Clean» fälschlicherweise materiell-chemisch statt führungs- und kommunikationspsychologisch.',
      },
      {
        text: 'Die gesetzliche Verpflichtung, monatlich zwanzig neue Mitarbeiter ohne Vorstellungsgespräch blind einzustellen.',
        korrekt: false,
        erklaerung: 'Clean Leadership betrifft die Gesprächsführung und Beziehungsqualität, nicht wahllose Masseneinstellungen.',
      },
      {
        text: 'Die physische Isolation der Führungskraft in einem schallgedämpften Glaskubus ohne Internetanschluss.',
        korrekt: false,
        erklaerung: 'Führungskräfte müssen im Clean Leadership hochgradig präsent, empathisch und aufmerksam im Dialog sein.',
      },
    ],
    pruefen: true,
  },
  {
    id: 44,
    bereich: 4,
    frage: 'Was sind Kompetenzen eines «Digital Leaders»?',
    optionen: [
      {
        text: 'Agiles Mindset, digitale Vernetzungskompetenz, Ambiguitätstoleranz, Empathie auf Distanz sowie die Fähigkeit, Selbstorganisation zu moderieren.',
        korrekt: true,
        erklaerung: 'Ein Digital Leader steuert über Sinn, Vertrauen und digitale Tools; gefordert sind Offenheit für Wandel, Methodenkompetenz und relationale Empathie im virtuellen Raum.',
      },
      {
        text: 'Ausschließliche Beherrschung von Schreibmaschinen und die konsequente Weigerung, Bildschirme am Arbeitsplatz zuzulassen.',
        korrekt: false,
        erklaerung: 'Technologiefeindlichkeit widerspricht dem Grundverständnis digitaler Führung fundamental.',
      },
      {
        text: 'Die Fähigkeit, innerhalb von drei Minuten alle privaten Passwörter der Teammitglieder ohne Erlaubnis zu knacken.',
        korrekt: false,
        erklaerung: 'Dies beschreibt kriminelle Hacking-Aktivitäten, die eklatant gegen Ethik, Datenschutz und Vertrauensaufbau verstoßen.',
      },
      {
        text: 'Strikte Weigerung, jemals online zu kommunizieren, und das Beharren auf berittenen Boten für Projektberichte.',
        korrekt: false,
        erklaerung: 'Historische Botendienste sind das Gegenteil zeitgemäßer digitaler Kollaborationswerkzeuge.',
      },
    ],
    pruefen: false,
  },
  {
    id: 45,
    bereich: 4,
    frage: 'Was sind die 6 Führungsinstrumente beim Digital Leadership?',
    optionen: [
      {
        text: 'Virtuelle Kommunikation, kollaboratives Wissensmanagement, Zielvereinbarungen (z. B. OKR), kontinuierliches Feedback, Vertrauenskultur und digitales Empowerment.',
        korrekt: true,
        erklaerung: 'Diese 6 Instrumente ermöglichen die zielgerichtete Führung auf Distanz: Kommunikationstools, Wissensplattformen, iterative Ziele, Feedback, Vertrauen und Befähigung.',
      },
      {
        text: 'Stechuhr, Abmahnung, Gehaltssperre, Überwachungskamera, Arbeitsplatzvisite und Tonbandaufzeichnung.',
        korrekt: false,
        erklaerung: 'Dies sind destruktive Kontroll- und Sanktionswerkzeuge eines repressiven Überwachungsregimes, nicht digitaler Führung.',
      },
      {
        text: 'Lochkarte, Fernschreiber, Stempelkissen, Kohlepapier, Faxgerät und Rohrpostanlage.',
        korrekt: false,
        erklaerung: 'Hierbei handelt es sich um historische Bürohilfsmittel des 20. Jahrhunderts, keine modernen Führungsinstrumente.',
      },
      {
        text: 'Flüstern, Schweigen, Wegsehen, Ignorieren, Kündigen und Verstecken.',
        korrekt: false,
        erklaerung: 'Diese Verhaltensweisen stellen Verweigerung von Führungsverantwortung dar und sind keine Managementinstrumente.',
      },
    ],
    pruefen: true,
  },
  {
    id: 46,
    bereich: 4,
    frage: 'Wie beschreiben Sie «agile Führung»?',
    optionen: [
      {
        text: 'Führung als dienende Haltung («Servant Leadership»): Schaffung von Rahmenbedingungen für selbstorganisierte Teams, iterative Lernschleifen und schnelle Anpassungsfähigkeit.',
        korrekt: true,
        erklaerung: 'Agile Führung gibt Richtung und Leitplanken («Guardrails») vor, überlässt dem Team den Lösungsweg und fördert kontinuierliche Verbesserung (Inspect & Adapt).',
      },
      {
        text: 'Permanentes Hin- und Herwechseln zwischen unvereinbaren Vorgaben innerhalb einer Arbeitsstunde nach reiner Laune.',
        korrekt: false,
        erklaerung: 'Dies ist unberechenbare Planlosigkeit («Chaos Management»), während Agilität auf disziplinierten Prinzipien und festen Rhythmen beruht.',
      },
      {
        text: 'Militärische Befehlsausgabe mit dem Verbot für Teammitglieder, untereinander während der Arbeitszeit zu sprechen.',
        korrekt: false,
        erklaerung: 'Agilität basiert auf intensiver Kollaboration und Interaktion; Kommunikationsverbote sind diametral entgegengesetzt.',
      },
      {
        text: 'Reines Aktenstudium ohne persönlichen Kontakt zur Außenwelt oder zu den Kunden des Unternehmens.',
        korrekt: false,
        erklaerung: 'Agile Führung stellt den Kundennutzen und regelmäßigen Austausch in den Mittelpunkt jedes Entwicklungszyklus.',
      },
    ],
    pruefen: false,
  },
  {
    id: 47,
    bereich: 4,
    frage: 'Was bedeutet «laterale Führung» für Sie?',
    optionen: [
      {
        text: 'Führen ohne formale disziplinarische Machtbefugnis über Hierarchiegrenzen hinweg, basierend auf Vertrauen, Verständigung, Verhandlung und Überzeugungskraft.',
        korrekt: true,
        erklaerung: 'Laterale Führung (z. B. im Projektmanagement oder in Matrixorganisationen) gelingt durch gemeinsame Interessenfindung und Beziehungsaufbau statt durch Weisungsrecht.',
      },
      {
        text: 'Führung, die ausschließlich im Gehen auf den Gängen des Unternehmens stattfindet und niemals im Sitzen praktiziert werden darf.',
        korrekt: false,
        erklaerung: 'Dies verwechselt den Begriff «lateral» (seitlich/quer) mit der physischen Fortbewegungsart im Büroflur.',
      },
      {
        text: 'Die strikte Unterwerfung aller Mitarbeiter unter die Anweisungen des jüngsten Familienmitglieds des Eigentümers.',
        korrekt: false,
        erklaerung: 'Dies beschreibt feudalen Nepotismus, welcher dem partnerschaftlichen Prinzip lateraler Führung widerspricht.',
      },
      {
        text: 'Ausschließliche Kommunikation über handgeschriebene Briefe, die über den Postweg an Nachbarabteilungen versendet werden.',
        korrekt: false,
        erklaerung: 'Dies ist ein langsamer bürokratischer Übertragungsweg ohne Bezug zum führungstheoretischen Konzept der lateralen Führung.',
      },
    ],
    pruefen: false,
  },
  {
    id: 48,
    bereich: 4,
    frage: 'Was sind die Merkmale von «Scrum»?',
    optionen: [
      {
        text: 'Klares agiles Rahmenwerk mit Rollen (Product Owner, Scrum Master, Developers), festen Ereignissen (Sprints, Retrospektiven) und Artefakten (Backlogs).',
        korrekt: true,
        erklaerung: 'Scrum basiert auf Transparenz, Überprüfung und Anpassung (Empirie) und strukturiert komplexe Entwicklungsprozesse in zeitlich fixierten Sprints.',
      },
      {
        text: 'Ein zehnjähriger Projektplan, bei dem kein einziger Zwischenschritt jemals verändert oder überprüft werden darf.',
        korrekt: false,
        erklaerung: 'Dies ist das klassische Wasserfallmodell in extremer Starrheit; Scrum arbeitet im Gegensatz dazu mit kurzen iterativen Zyklen.',
      },
      {
        text: 'Ein hierarchisches Bestrafungssystem, bei dem derjenige Mitarbeiter entlassen wird, der im Meeting als Erster spricht.',
        korrekt: false,
        erklaerung: 'Scrum fördert psychologische Sicherheit, Offenheit und aktive Beteiligung aller Teammitglieder.',
      },
      {
        text: 'Ein Buchhaltungsprogramm zur Berechnung von Reisekostenabrechnungen im internationalen Speditionsgewerbe.',
        korrekt: false,
        erklaerung: 'Scrum ist ein Rahmenwerk für agile Teamarbeit und Wertschöpfung, keine kaufmännische Reisekostensoftware.',
      },
    ],
    pruefen: false,
  },
  {
    id: 49,
    bereich: 4,
    frage: 'Was bedeutet Holocracy und Bottom Up im Rahmen von «Digital Leadership»?',
    optionen: [
      {
        text: 'Holokratie ersetzt starre Hierarchien durch dynamische Kreise und Rollen; Bottom-Up bedeutet, dass Impulse und Entscheidungen aus dem Team nach oben fließen.',
        korrekt: true,
        erklaerung: 'Holakratie verteilt Autorität auf Rollen in autonomen Kreisen; Bottom-Up aktiviert die Intelligenz der Basis anstelle zentralistischer Top-Down-Vorgaben.',
      },
      {
        text: 'Holokratie bezeichnet die Alleinherrschaft eines Vorstands; Bottom-Up bedeutet die sofortige Reduzierung der Mitarbeiterlöhne um die Hälfte.',
        korrekt: false,
        erklaerung: 'Hier wurden die Begriffe sinnentstellend ins Gegenteil verkehrt: Holakratie schafft Alleinherrscher ab und Bottom-Up stärkt die Mitarbeiter.',
      },
      {
        text: 'Beide Begriffe bezeichnen spezielle Tastaturlayouts für Softwareentwickler zur Vermeidung von Sehnenenscheidenentzündungen.',
        korrekt: false,
        erklaerung: 'Dies verwechselt soziologische Organisationsstrukturen mit ergonomischer Computer-Hardware.',
      },
      {
        text: 'Ein Verfahren der Bauwirtschaft zur Errichtung von Kellergeschossen aus vorgefertigten Zementblöcken.',
        korrekt: false,
        erklaerung: '«Bottom-Up» wird hier fälschlicherweise bautechnisch von unten nach oben gedeutet, ignoriert aber den Führungskontext völlig.',
      },
    ],
    pruefen: false,
  },
  {
    id: 50,
    bereich: 4,
    frage: 'Welche 5 Kernelemente bestimmen den Ansatz «Working Out Loud»?',
    optionen: [
      {
        text: 'Beziehungen vertiefen, Großzügigkeit, Arbeit sichtbar machen, zielgerichtetes Entdecken und eine wachstumsorientierte Denkweise (Growth Mindset).',
        korrekt: true,
        erklaerung: 'Nach John Stepper basiert WOL auf: Building Relationships, Generosity, Making Work Visible, Purposeful Discovery und Growth Mindset.',
      },
      {
        text: 'Geheimhaltung, Konkurrenzdenken, Spionage, Patentierung und Abschottung vor externen Einflüssen.',
        korrekt: false,
        erklaerung: 'Dies ist das exakte Gegenteil der kollaborativen und offenen Philosophie von Working Out Loud.',
      },
      {
        text: 'Lautes Schreien im Großraumbüro, Trommeln auf Schreibtischen, Megafone, Trillerpfeifen und Sirenen.',
        korrekt: false,
        erklaerung: 'Dies nimmt den Begriff «Out Loud» buchstäblich als akustische Lautstärke, beschreibt aber kein Wissensmanagement-Konzept.',
      },
      {
        text: 'Überstunden anordnen, Kaffeepausen kürzen, Urlaube streichen, Gehälter deckeln und Boni verweigern.',
        korrekt: false,
        erklaerung: 'WOL ist eine partizipative Methode zur persönlichen Vernetzung und Wissenteilung, kein betriebliches Sparprogramm.',
      },
    ],
    pruefen: false,
  },
  {
    id: 51,
    bereich: 4,
    frage: 'Was sind «Bar Camps»?',
    optionen: [
      {
        text: 'Offene «Unkonferenzen», deren Ablauf und Agenda zu Beginn von den Teilnehmern selbst ad hoc vorgeschlagen, abgestimmt und gestaltet werden.',
        korrekt: true,
        erklaerung: 'Ein BarCamp ist ein partizipatives Veranstaltungsformat ohne festgelegte Referenten; jeder Teilnehmende kann eine Session anbieten und mitdiskutieren.',
      },
      {
        text: 'Mehrtägige Zeltlager für Führungskräfte in den Bergen ohne Mobilfunkempfang mit Überlebenstraining im Wald.',
        korrekt: false,
        erklaerung: 'Dies beschreibt ein Outdoor-Survival-Training, hat jedoch nichts mit dem Wissensaustausch-Format des BarCamps zu tun.',
      },
      {
        text: 'Verpflichtende Schulungen für Gastronomiepersonal über das fachgerechte Mixen von alkoholischen Cocktails.',
        korrekt: false,
        erklaerung: 'Das Wort «Bar» entstammt dem Hacker-Jargon (Foobar) und bezieht sich nicht auf gastronomische Schankstuben.',
      },
      {
        text: 'Geschlossene Vorstandstagungen in Luxushotels, bei denen die Presse ausnahmslos ausgesperrt wird.',
        korrekt: false,
        erklaerung: 'BarCamps sind maximal öffentlich, hierarchiefrei und transparent konzipiert («No Spectators, only Participants»).',
      },
    ],
    pruefen: false,
  },
  {
    id: 52,
    bereich: 4,
    frage: 'Was sind «Digital Natives» und welchen Führungsstil haben diese?',
    optionen: [
      {
        text: 'Personen, die in der digitalen Welt aufgewachsen sind; als Führungskräfte agieren sie partnerschaftlich, agil, transparent, sinn- und feedbackorientiert.',
        korrekt: true,
        erklaerung: 'Digital Natives (Gen Y/Z) führen bevorzugt auf Augenhöhe, nutzen intuitive Collaboration-Tools und setzen auf Sinn («Purpose») und Eigenverantwortung.',
      },
      {
        text: 'Mitarbeiter ohne jeden Computerzugang, die ausschließlich patriarchalisch über mündliche Zuruf-Kommandos führen.',
        korrekt: false,
        erklaerung: 'Natives sind mit digitaler Technologie großgeworden; die Beschreibung trifft eher auf technikferne Traditionsstile zu.',
      },
      {
        text: 'Ausschließlich im Ausland geborene Staatsbürger, die stets nach militärischen Dienstvorschriften des 19. Jahrhunderts leiten.',
        korrekt: false,
        erklaerung: 'Der Begriff bezieht sich auf die digitale Generation und hat keinen Bezug zu Herkunft oder militärischen Traditionen.',
      },
      {
        text: 'Künstliche Intelligenzen in Rechenzentren, die Führungsentscheidungen rein auf Basis von Zufallsalgorithmen treffen.',
        korrekt: false,
        erklaerung: 'Digital Natives sind reale Menschen der jüngeren Generationen, keine Softwareprogramme oder KI-Systeme.',
      },
    ],
    pruefen: true,
  },
  {
    id: 53,
    bereich: 4,
    frage: 'Was bedeutet «Social Intranet»?',
    optionen: [
      {
        text: 'Eine kollaborative Unternehmensplattform mit interaktiven Funktionen (Likes, Kommentare, Chats, Wikis), die horizontalen Dialog und Wissensaustausch fördert.',
        korrekt: true,
        erklaerung: 'Im Unterschied zum klassischen «Einweg-Intranet» (Top-Down-Mitteilungen) ermöglicht das Social Intranet Mitgestaltung, bereichsübergreifende Vernetzung und transparente Teamarbeit.',
      },
      {
        text: 'Ein öffentliches soziales Netzwerk im Internet, auf dem Kunden vertrauliche Produktdatenblätter weltweit frei einsehen können.',
        korrekt: false,
        erklaerung: 'Ein Intranet ist organisationsintern und geschützt, kein öffentliches soziales Medium wie Facebook oder Instagram.',
      },
      {
        text: 'Ein schwarzes Brett aus Kork im Pausenraum, an dem handschriftliche private Kleinanzeigen angeheftet werden.',
        korrekt: false,
        erklaerung: 'Dies ist ein analoges Hilfsmittel und besitzt keinerlei digitale, interaktive oder unternehmensweite Vernetzungskomponenten.',
      },
      {
        text: 'Ein behördliches Verzeichnis der Krankenkassen zur Überprüfung von Sozialversicherungsnummern im Baugewerbe.',
        korrekt: false,
        erklaerung: 'Hierbei handelt es sich um eine staatliche Meldedatenbank, nicht um ein betriebliches Kollaborations-Intranet.',
      },
    ],
    pruefen: false,
  },
  {
    id: 54,
    bereich: 5,
    frage: 'Welche Grundsätze wirksamer Führung kennen Sie?',
    optionen: [
      {
        text: 'Resultatorientierung, Beitrag zum Ganzen, Konzentration auf Weniges, Stärken nutzen, Vertrauen schaffen und Positiv denken (nach Malik).',
        korrekt: true,
        erklaerung: 'Fredmund Maliks Standardlehre umfasst diese fundamentalen Grundsätze, die wirksame Führungskräfte in jeder Organisation leiten müssen.',
      },
      {
        text: 'Machtstreben, Perfektionismus, Informationszurückhaltung, Fehlerbestrafung und personelle Einzelkämpfer-Förderung.',
        korrekt: false,
        erklaerung: 'Diese Punkte kennzeichnen dysfunktionale Führung und zerstören Wirksamkeit, Vertrauen und Leistungsbereitschaft.',
      },
      {
        text: 'Bedingungslose Arbeitszeitmaximierung, ständige Überstunden und vollständige Abschaffung privater Wochenenden.',
        korrekt: false,
        erklaerung: 'Wirksamkeit misst sich an Resultaten, nicht an unproduktiver physischer Anwesenheit oder Raubbau an der Gesundheit.',
      },
      {
        text: 'Ausschließlich das Streben nach persönlicher Beliebtheit bei völliger Gleichgültigkeit gegenüber betrieblichen Ergebnissen.',
        korrekt: false,
        erklaerung: 'Wirksame Führung erfordert Resultatorientierung; reine Beliebtheitssucht führt zu Führungsschwäche und Orientierungslosigkeit.',
      },
    ],
    pruefen: false,
  },
  {
    id: 55,
    bereich: 5,
    frage: 'Was bedeutet der Grundsatz Verantwortung übernehmen?',
    optionen: [
      {
        text: 'Für die Konsequenzen der eigenen Entscheidungen und Handlungen uneingeschränkt einzustehen und Ursachen von Fehlern bei sich selbst zu suchen.',
        korrekt: true,
        erklaerung: 'Verantwortung bedeutet Rechenschaftsfähigkeit und Vorbildfunktion: Keine Ausflüchte, keine Schuldzuweisungen an Mitarbeiter oder widrige Umstände.',
      },
      {
        text: 'Alle unangenehmen Aufgaben sofort auf untergeordnete Mitarbeiter abzuwälzen und sich selbst im Fehlerfall als unbeteiligt darzustellen.',
        korrekt: false,
        erklaerung: 'Dies ist feiges Abschieben von Verantwortung («Delegation nach unten») und das Gegenteil wahrer Führungsethik.',
      },
      {
        text: 'Vor jeder Handlung einen schriftlichen Haftungsausschluss von der Geschäftsleitung einzufordern.',
        korrekt: false,
        erklaerung: 'Führung verlangt Mut zum Risiko und Handlungsbereitschaft, nicht bürokratische Absicherung gegen jede Eventualität.',
      },
      {
        text: 'Ausschließlich juristische Paragrafen zu prüfen, ohne jemals eine unternehmerische Entscheidung zu fällen.',
        korrekt: false,
        erklaerung: 'Reine Paragrafenreiterei verhindert unternehmerisches Gestalten und ersetzt keine persönliche Führungsverantwortung.',
      },
    ],
    pruefen: false,
  },
  {
    id: 56,
    bereich: 5,
    frage: 'Was heißt für Sie Ergebnisverantwortung übernehmen?',
    optionen: [
      {
        text: 'Sich nicht am Aufwand oder Fleiß, sondern an der tatsächlichen Erreichung der vereinbarten qualitativen und quantitativen Zielresultate messen zu lassen.',
        korrekt: true,
        erklaerung: 'Ergebnisverantwortung fragt: «Was ist am Ende herausgekommen?» – nicht: «Wie viel Mühe oder Überstunden hat es gekostet?» (Output statt Input).',
      },
      {
        text: 'Die Dokumentation von möglichst vielen Arbeitsstunden in Excel ohne Rücksicht auf den tatsächlichen Kundennutzen.',
        korrekt: false,
        erklaerung: 'Das bloße Zählen von Arbeitsstunden ist Aufwandsorientierung («Beschäftigtsein») und steht der Ergebnisorientierung entgegen.',
      },
      {
        text: 'Die sofortige Weiterleitung aller Zielvorgaben an externe Lieferanten mit dem Vermerk «Zur Erledigung ohne Rücksprache».',
        korrekt: false,
        erklaerung: 'Ergebnisverantwortung bleibt bei der Führungskraft und kann nicht durch simple Weiterleitung delegiert werden.',
      },
      {
        text: 'Das Verschweigen von negativen Zahlen im Quartalsbericht, um Diskussionen im Team zu vermeiden.',
        korrekt: false,
        erklaerung: 'Ergebnisverantwortung verlangt schonungslose Transparenz und Aufrichtigkeit gegenüber Ist-Abweichungen.',
      },
    ],
    pruefen: false,
  },
  {
    id: 57,
    bereich: 5,
    frage: 'Was bedeutet der Grundsatz «Beitrag leisten»?',
    optionen: [
      {
        text: 'Das eigene Handeln stets am Nutzen für das Gesamtsystem und den Kunden auszurichten: «Was kann ich beitragen, damit das Ganze erfolgreich ist?».',
        korrekt: true,
        erklaerung: 'Dieser Grundsatz überwindet Silodenken und Bereichsegoismus: Der Mitarbeiter fragt nach seinem Beitrag zum übergeordneten Unternehmenszweck.',
      },
      {
        text: 'Monatlich einen festen Geldbetrag aus der eigenen Tasche in die Kaffeekasse der Abteilung einzuzahlen.',
        korrekt: false,
        erklaerung: 'Dies nimmt den Begriff «Beitrag» fälschlicherweise als monetäre Spende statt als organisationsbezogenen Leistungsbeitrag.',
      },
      {
        text: 'Ausschließlich darauf zu achten, was das Unternehmen für die eigene Karriere tun kann, ohne selbst Leistung zu erbringen.',
        korrekt: false,
        erklaerung: 'Dies ist eine reine Anspruchshaltung («Entitlement-Denken»), die dem Beitragsleisten diametral widerspricht.',
      },
      {
        text: 'Das Verfassen von möglichst vielen Leserbriefen an regionale Tageszeitungen während der regulären Dienstzeit.',
        korrekt: false,
        erklaerung: 'Leserbriefe leisten keinen Beitrag zu den Zielen der Organisation oder den Bedürfnissen der Kunden.',
      },
    ],
    pruefen: false,
  },
  {
    id: 58,
    bereich: 5,
    frage: 'Was hat George A. Miller festgestellt?',
    optionen: [
      {
        text: 'Die Begrenztheit des menschlichen Kurzzeitgedächtnisses auf ca. 7 (± 2) Informationseinheiten («Chunks»), was die Konzentration auf Weniges erfordert.',
        korrekt: true,
        erklaerung: 'George A. Millers berühmte Arbeit «The Magical Number Seven, Plus or Minus Two» (1956) belegt unsere kognitive Kapazitätsgrenze bei gleichzeitiger Informationsverarbeitung.',
      },
      {
        text: 'Dass Menschen am produktivsten arbeiten, wenn sie mindestens fünfzehn Aufgaben gleichzeitig im Sekundentakt wechseln.',
        korrekt: false,
        erklaerung: 'Miller zeigte das Gegenteil: Multitasking überlastet das Arbeitsgedächtnis drastisch und führt zu Fehlern und Effizienzverlusten.',
      },
      {
        text: 'Dass Führungskräfte grundsätzlich keinen Kaffee trinken sollten, da Koffein die Merkfähigkeit auf null reduziert.',
        korrekt: false,
        erklaerung: 'Millers kognitionspsychologische Forschung untersuchte Informationseinheiten (Chunks) und keine Koffeineffekte.',
      },
      {
        text: 'Dass jedes Unternehmen exakt nach sieben Monaten zwingend seine gesamte Geschäftsführung austauschen muss.',
        korrekt: false,
        erklaerung: 'Miller forschte zur Informationsverarbeitung des Gehirns, nicht zu Personalwechselzyklen in Vorständen.',
      },
    ],
    pruefen: false,
  },
  {
    id: 59,
    bereich: 5,
    frage: 'Wie erklären Sie das «Eisenhower Prinzip»?',
    optionen: [
      {
        text: 'Kategorisierung von Aufgaben nach Wichtigkeit und Dringlichkeit in 4 Felder: A (sofort selbst), B (terminieren), C (delegieren) und D (eliminieren).',
        korrekt: true,
        erklaerung: 'Die Eisenhower-Matrix trennt Dringlichkeit (oft fremdbestimmt) von wahrer Wichtigkeit (zielrelevant), um Zeitfresser zu vermeiden und strategische B-Aufgaben zu sichern.',
      },
      {
        text: 'Ein militärischer Angriffsplan zur Eroberung ausländischer Märkte durch den massiven Einsatz von Werbeplakaten.',
        korrekt: false,
        erklaerung: 'Obwohl nach General Dwight D. Eisenhower benannt, ist es ein Zeit- und Selbstmanagementwerkzeug zur Aufgabenpriorisierung.',
      },
      {
        text: 'Ein Ernährungsplan für Manager zur Senkung des Cholesterinspiegels durch den Verzicht auf zuckerhaltige Snacks.',
        korrekt: false,
        erklaerung: 'Dies verwechselt Prioritätenmanagement mit diätetischen Ernährungsempfehlungen.',
      },
      {
        text: 'Die Anweisung, alle schriftlichen Dokumente nach genau vier Tagen ungelesen im Archiv zu verbrennen.',
        korrekt: false,
        erklaerung: 'Das Eisenhower-Prinzip ist eine strukturierte Entscheidungsmethode zur Aufgabenorganisation und keine Aktenvernichtungsrichtlinie.',
      },
    ],
    pruefen: false,
  },
  {
    id: 60,
    bereich: 5,
    frage: 'Welche Zeitspartipps kennen Sie?',
    optionen: [
      {
        text: 'Bündelung gleichartiger Aufgaben (Batching), Timeboxing, Vermeidung von Multitasking, Einplanen von Pufferzeiten und konsequentes Neinsagen.',
        korrekt: true,
        erklaerung: 'Diese erprobten Methoden des Selbstmanagements reduzieren Rüstzeiten und Unterbrechungen und schaffen Fokus für strategische Prioritäten.',
      },
      {
        text: 'Uhren im gesamten Büro um zwei Stunden vorstellen und Mitarbeitern den Zugriff auf den Kalender sperren.',
        korrekt: false,
        erklaerung: 'Das Verstellen von Uhren erzeugt Verwirrung und behebt keine strukturellen Zeitmanagement-Probleme.',
      },
      {
        text: 'Niemals schlafen, Mahlzeiten komplett streichen und alle E-Mails ungelesen als «Erledigt» markieren.',
        korrekt: false,
        erklaerung: 'Dies führt zu gesundheitlichem Zusammenbruch und chaotischen Arbeitsergebnissen statt zu echter Zeiteffizienz.',
      },
      {
        text: 'Telefonate grundsätzlich nur in doppelter Sprechgeschwindigkeit führen, ohne dem Gesprächspartner zuzuhören.',
        korrekt: false,
        erklaerung: 'Verzerrte Kommunikation provoziert Missverständnisse, die im Nachgang viel mehr Zeit zur Korrektur verschlingen.',
      },
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
        erklaerung: 'Vertrauen entsteht durch Berechenbarkeit, Integrität und den Mut, Mitarbeitern Verantwortung zu übertragen und bei Fehlern konstruktiv zu unterstützen.',
      },
      {
        text: 'Indem man allen Mitarbeitern täglich verspricht, ihr Gehalt zum Monatsende heimlich zu verdoppeln.',
        korrekt: false,
        erklaerung: 'Falsche oder unrealistische Versprechungen zerstören Glaubwürdigkeit und Vertrauen fundamental.',
      },
      {
        text: 'Durch die Installation versteckter Mikrofone an den Schreibtischen, um böswillige Gerüchte sofort zu widerlegen.',
        korrekt: false,
        erklaerung: 'Heimliche Überwachung ist der ultimative Ausdruck von Misstrauen und vernichtet jedes Vertrauensverhältnis im Keim.',
      },
      {
        text: 'Indem man niemals persönliche Gespräche führt und Kritik ausschließlich über unpersönliche Rundmails äußert.',
        korrekt: false,
        erklaerung: 'Vertrauen basiert auf authentischem menschlichem Kontakt und Resonanz, nicht auf anonymer Distanz.',
      },
    ],
    pruefen: false,
  },
  {
    id: 62,
    bereich: 5,
    frage: 'Was ist der Unterschied zwischen extrinsischer und intrinsischer Motivation?',
    optionen: [
      {
        text: 'Intrinsische Motivation speist sich aus der Freude und Sinnhaftigkeit des Tuns selbst; extrinsische Motivation wird durch äußere Anreize wie Geld, Boni oder Strafvermeidung gesteuert.',
        korrekt: true,
        erklaerung: 'Intrinsisch motivierte Mitarbeiter handeln aus innerem Antrieb (Selbstbestimmungstheorie nach Deci/Ryan); extrinsische Reize wirken von außen als Belohnung oder Druck.',
      },
      {
        text: 'Intrinsische Motivation existiert ausschließlich bei Vorstandsmitgliedern, während Mitarbeiter am Fließband biologisch nur extrinsisch fühlen können.',
        korrekt: false,
        erklaerung: 'Intrinsische Motive (Autonomie, Kompetenzerleben, Sinn) sind universelle menschliche Grundbedürfnisse auf allen Hierarchieebenen.',
      },
      {
        text: 'Extrinsische Motivation bedeutet, dass man freiwillig ohne Gehalt arbeitet; intrinsische Motivation verlangt tägliche Sonderzahlungen.',
        korrekt: false,
        erklaerung: 'Hier wurden die Begriffe exakt vertauscht: Extrinsische Motivation verlangt äußere materielle Anreize, nicht intrinsische.',
      },
      {
        text: 'Beide Begriffe bezeichnen exakt denselben chemischen Vorgang im Magen-Darm-Trakt während der Mittagspause.',
        korrekt: false,
        erklaerung: 'Motivation ist ein psychologisches und neurobiologisches Antriebskonzept und kein Verdauungsvorgang.',
      },
    ],
    pruefen: false,
  },
  {
    id: 63,
    bereich: 5,
    frage: 'Was heißt bei wirksamer Führung «Resultatorientierung»?',
    optionen: [
      {
        text: 'Leistung konsequent am tatsächlichen, wertschöpfenden Ergebnis (Output) zu messen und nicht an bloßem Fleiß, Anwesenheit oder betriebiger Beschäftigung (Input).',
        korrekt: true,
        erklaerung: 'Nach Fredmund Malik ist Resultatorientierung der erste Grundsatz: Es zählt, was am Ende bewirkt wurde – nicht, wie viel Aufwand getrieben oder gelitten wurde.',
      },
      {
        text: 'Dass Führungskräfte alle Arbeiten selbst bis spät in die Nacht fertigstellen müssen, um Fehler zu vermeiden.',
        korrekt: false,
        erklaerung: 'Selbstüberlastung und fehlende Delegation sind Zeichen von Führungsschwäche und haben nichts mit systematischer Resultatorientierung zu tun.',
      },
      {
        text: 'Dass man ausschließlich auf das nächste Quartalsergebnis starrt und dafür die Gesundheit aller Mitarbeiter opfert.',
        korrekt: false,
        erklaerung: 'Malik betont nachhaltige Wirksamkeit; rücksichtsloser Raubbau zerstört die langfristige Erbringung von Resultaten.',
      },
      {
        text: 'Dass Arbeitsergebnisse erst nach zehn Jahren bewertet werden dürfen, um emotionale Reaktionen auszuschließen.',
        korrekt: false,
        erklaerung: 'Resultatorientierung verlangt zeitnahe Rückkopplung, Messung und Steuerung anhand klar vereinbarter Ziele.',
      },
    ],
    pruefen: false,
  },
  {
    id: 64,
    bereich: 5,
    frage: 'Worauf muss die Führungskraft als «Coach» aufpassen?',
    optionen: [
      {
        text: 'Keine fertigen Ratschläge zu diktieren, die Lösungsverantwortung beim Mitarbeiter zu belassen und die Grenze zu Disziplinarmaßnahmen und Therapie zu wahren.',
        korrekt: true,
        erklaerung: 'Im Coaching ist die Führungskraft Prozessbegleiter, nicht Besserwisser. Sie hilft dem Mitarbeiter durch zielgerichtete Fragen, eigene Lösungen zu entwickeln.',
      },
      {
        text: 'Dass der Mitarbeiter während des Gesprächs keinen Blickkontakt aufnimmt und militärisch Haltung annimmt.',
        korrekt: false,
        erklaerung: 'Coaching erfordert partnerschaftliche Augenhöhe, Empathie und Vertrauen, keinen Kasernenhofdrill.',
      },
      {
        text: 'Dass das Gespräch ausschließlich in absoluter Dunkelheit stattfindet, um optische Täuschungen zu vermeiden.',
        korrekt: false,
        erklaerung: 'Dies ist eine absurde Vorstellung; Coaching erfordert ein angenehmes, helles und geschütztes Umfeld.',
      },
      {
        text: 'Dem Mitarbeiter sofort alle schwierigen Aufgaben abzunehmen und für ihn die Arbeit zu erledigen.',
        korrekt: false,
        erklaerung: 'Dies entmündigt den Mitarbeiter und erzeugt unselbstständige Abhängigkeit («Rückdelegation»), anstatt Potenziale zu entwickeln.',
      },
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
        erklaerung: 'Die Führungskraft ist nie ein völlig neutraler externer Coach. Sie löst diesen Konflikt, indem sie ihre Rollen («Hüte») explizit benennt und Beurteilung von Coaching trennt.',
      },
      {
        text: 'Der Konflikt zwischen Hunger und Müdigkeit; Lösung durch den sofortigen Verzehr von Traubenzucker vor dem Meeting.',
        korrekt: false,
        erklaerung: 'Hierbei handelt es sich um körperliche Grundbedürfnisse, nicht um einen führungstheoretischen Rollenkonflikt.',
      },
      {
        text: 'Der Streit zwischen Einkauf und Vertrieb über Rabatte; Lösung durch die Erhöhung der Werbeausgaben um zwanzig Prozent.',
        korrekt: false,
        erklaerung: 'Dies ist ein interner Abteilungskonflikt in der Organisation, kein intrapsychischer Rollenkonflikt der Führungskraft im Coaching.',
      },
      {
        text: 'Die Unentschlossenheit bei der Farbwahl der Krawatte; Lösung durch die Einführung einer schwarz-weißen Einheitskleidung.',
        korrekt: false,
        erklaerung: 'Äußerliche Kleidungsfragen stellen keinen professionellen Führungs- oder Coachingkonflikt dar.',
      },
    ],
    pruefen: false,
  },
  {
    id: 66,
    bereich: 5,
    frage: 'Welche 8 Kontrollfragen während des Coaching-Gesprächs würden Sie sich stellen?',
    optionen: [
      {
        text: 'Reflexionsfragen zur Gesprächsführung: Zuhören, Wertfreiheit, Zurückhalten eigener Ratschläge, Zielklarheit, Redezeitanteil, Emotionen, Lösungsautonomie und Verbindlichkeit.',
        korrekt: true,
        erklaerung: 'Diese 8 Kontrollfragen dienen der inneren Selbststeuerung des Coaches: Bin ich präsent? Frage ich statt zu sagen? Liegt die Verantwortung beim Coachee? Ist das Ziel klar?',
      },
      {
        text: 'Acht Fragen zur steuerlichen Absetzbarkeit von Büromöbeln nach den Vorgaben der Einkommensteuerrichtlinien.',
        korrekt: false,
        erklaerung: 'Steuerrechtliche Fragen haben keinerlei Bezug zur methodischen Gesprächssteuerung im Coaching.',
      },
      {
        text: 'Acht mathematische Kontrollrechnungen zur Ermittlung des Benzinverbrauchs des Firmenfuhrparks auf der Autobahn.',
        korrekt: false,
        erklaerung: 'Fuhrparklogistik berührt nicht die führungsmethodische Qualität eines Coaching-Gesprächs.',
      },
      {
        text: 'Acht Fragen zur Überprüfung der Rechtschreibkenntnisse des Mitarbeiters bei handschriftlichen Notizen.',
        korrekt: false,
        erklaerung: 'Rechtschreibtests sind kein Bestandteil eines wertschätzenden lösungsorientierten Mitarbeitercoachings.',
      },
    ],
    pruefen: true,
  },
  {
    id: 67,
    bereich: 5,
    frage: 'Was bedeutet der Begriff Führungsspanne?',
    optionen: [
      {
        text: 'Die Anzahl der Mitarbeiter, die einer Führungskraft organisatorisch direkt disziplinarisch oder fachlich unterstellt sind.',
        korrekt: true,
        erklaerung: 'Die Führungsspanne (auch Kontrollspanne, Leitungsspanne oder «Span of Control») definiert die Breite der Führungsverantwortung auf einer Hierarchieebene.',
      },
      {
        text: 'Der zeitliche Abstand zwischen dem ersten Bewerbungsgespräch und dem Tag der feierlichen Verabschiedung in den Ruhestand.',
        korrekt: false,
        erklaerung: 'Dies beschreibt die Betriebszugehörigkeitsdauer eines Mitarbeiters, nicht die Führungsspanne.',
      },
      {
        text: 'Die maximale körperliche Spannweite der Arme einer Führungskraft bei Präsentationen vor der Belegschaft.',
        korrekt: false,
        erklaerung: 'Dies nimmt den Begriff «Spanne» buchstäblich anatomisch, entbehrt jedoch jeglicher betriebswirtschaftlicher Bedeutung.',
      },
      {
        text: 'Die gesetzlich vorgeschriebene Dauer einer Betriebsratssitzung in börsennotierten Aktiengesellschaften.',
        korrekt: false,
        erklaerung: 'Betriebsratsmodalitäten sind arbeitsverfassungsrechtlich geregelt und definieren keine Führungsspanne.',
      },
    ],
    pruefen: false,
  },
  {
    id: 68,
    bereich: 5,
    frage: 'Was ist die optimale Führungsspanne?',
    optionen: [
      {
        text: 'Es gibt keine starre Zahl; sie hängt von Aufgabenkomplexität und Reifegrad ab – ca. 4–8 bei anspruchsvollen Fachaufgaben, deutlich mehr bei stark standardisierter Routine.',
        korrekt: true,
        erklaerung: 'Je komplexer, kreativer und vernetzter die Arbeit, desto enger muss die Spanne sein (ca. 4–8 nach Malik). Bei homogenen, repetitiven Tätigkeiten sind 15–25 führbar.',
      },
      {
        text: 'Exakt ein Mitarbeiter pro Führungskraft, um die restliche Arbeitszeit vollständig für private Telefonate zu nutzen.',
        korrekt: false,
        erklaerung: 'Eine 1:1-Spanne ist ökonomisch ineffizient und führt zu erdrückender Überwachung («Mikromanagement»).',
      },
      {
        text: 'Grundsätzlich immer mindestens fünfhundert Mitarbeiter, völlig unabhängig von der Branche oder Branchentätigkeit.',
        korrekt: false,
        erklaerung: 'Fünfhundert Direktunterstellte übersteigen jede menschliche Beziehungs- und Steuerungskapazität bei Weitem.',
      },
      {
        text: 'Die optimale Zahl errechnet sich ausschließlich aus dem Geburtsmonat des Vorstandsvorsitzenden dividiert durch zwei.',
        korrekt: false,
        erklaerung: 'Organisationsstrukturen werden nach sachlichen und führungspsychologischen Notwendigkeiten dimensioniert, nicht nach astrologischen Zufällen.',
      },
    ],
    pruefen: true,
  },
  {
    id: 69,
    bereich: 6,
    frage: 'Was bedeutet das Kauf-Verhalten von Kunden?',
    optionen: [
      {
        text: 'Das beobachtbare und psychologische Verhalten von Konsumenten vor, während und nach dem Kauf von Produkten oder Dienstleistungen.',
        korrekt: true,
        erklaerung: 'Die Kaufverhaltensforschung untersucht Bedürfnisse, Informationssuche, Entscheidungsfindung, Kaufakt und Nachkaufzufriedenheit bzw. Kundenloyalität.',
      },
      {
        text: 'Ausschließlich das Tippen der vierstelligen PIN-Nummer am EC-Kartenterminal an der Ladenkasse.',
        korrekt: false,
        erklaerung: 'Dies ist ein bloßer technischer Zahlungsschritt, deckt aber nicht die psychologische und verhaltensbiologische Dimension des Kaufverhaltens ab.',
      },
      {
        text: 'Das juristische Eigentum an der Firmenimmobilie des Einzelhändlers nach grundbücherlicher Eintragung.',
        korrekt: false,
        erklaerung: 'Hierbei handelt es sich um Immobilienrecht, nicht um kaufpsychologisches Konsumentenverhalten.',
      },
      {
        text: 'Die Gehgeschwindigkeit der Kunden auf dem Parkplatz vor dem Betreten des Einkaufszentrums.',
        korrekt: false,
        erklaerung: 'Bewegungstempo auf dem Vorplatz ist keine Definition für das ganzheitliche Kaufverhalten.',
      },
    ],
    pruefen: false,
  },
  {
    id: 70,
    bereich: 6,
    frage: 'Wie heißen die 4 Arten des Kaufverhaltens?',
    optionen: [
      {
        text: 'Komplexes, dissonanzminderndes, habituelles (gewohnheitsmäßiges) und abwechslungssuchendes (Variety-Seeking) Kaufverhalten.',
        korrekt: true,
        erklaerung: 'Nach Kotler/Assael spannen Involvement (hoch/niedrig) und wahrgenommene Markenunterschiede (groß/gering) diese 4 klassischen Kaufverhaltensarten auf.',
      },
      {
        text: 'Geiziges, verschwenderisches, blindes und unverschämtes Kaufverhalten.',
        korrekt: false,
        erklaerung: 'Dies sind umgangssprachliche Werturteile, keine wissenschaftlich fundierten Kaufverhaltenskategorien.',
      },
      {
        text: 'Morgendliches, mittägliches, abendliches und nächtliches Kaufverhalten.',
        korrekt: false,
        erklaerung: 'Tageszeiten beschreiben bloße Einkaufszeitpunkte, nicht die psychologischen Typen des Kaufverhaltens.',
      },
      {
        text: 'Bares, unbares, gestundetes und verpfändetes Kaufverhalten.',
        korrekt: false,
        erklaerung: 'Dies sind rein kaufmännische Zahlungsarten und Buchungsbegriffe, keine Arten des Konsumentenverhaltens.',
      },
    ],
    pruefen: true,
  },
  {
    id: 71,
    bereich: 6,
    frage: 'Was sind Emotionen und wo entstehen diese?',
    optionen: [
      {
        text: 'Psychophysiologische Reaktionsmuster auf bedeutsame Reize; sie entstehen neurobiologisch primär im limbischen System des Gehirns.',
        korrekt: true,
        erklaerung: 'Emotionen (u. a. gesteuert durch Amygdala, Hippocampus, Belohnungszentrum) bereiten den Körper auf Handlungen vor und steuern unbewusst Entscheidungen.',
      },
      {
        text: 'Rein willkürliche Muskelkrämpfe im Oberschenkel, die durch zu langes Stehen in Warteschlangen verursacht werden.',
        korrekt: false,
        erklaerung: 'Emotionen sind komplexe neuronale und seelische Zustände im Gehirn, keine orthopädischen Muskelkrämpfe.',
      },
      {
        text: 'Gedruckte Buchstabencodes in Bedienungsanleitungen technischer Haushaltsgeräte.',
        korrekt: false,
        erklaerung: 'Schriftliche Instruktionen sind sachliche Informationsträger und entstehen in Druckereien, nicht als Gefühle im Gehirn.',
      },
      {
        text: 'Gesetzlich festgelegte Feiertage im Kalenderjahr, die vom Parlament beschlossen werden.',
        korrekt: false,
        erklaerung: 'Gesetzliche Feiertage sind juristische Vorgaben und haben nichts mit neurobiologischen Emotionen zu tun.',
      },
    ],
    pruefen: false,
  },
  {
    id: 72,
    bereich: 6,
    frage: 'Was sind Emotionssysteme und welche kennen Sie?',
    optionen: [
      {
        text: 'Evolutionsbiologisch gewachsene Motivsysteme im Gehirn; nach dem Limbic®-Modell: Balance-System, Stimulanz-System und Dominanz-System.',
        korrekt: true,
        erklaerung: 'Diese drei großen Emotionssysteme steuern das menschliche Handeln und Kaufen: Balance (Sicherheit), Stimulanz (Erlebnis/Neugier) und Dominanz (Macht/Status).',
      },
      {
        text: 'Elektronische Kassenprogramme zur Erfassung von Barcode-Preisen im Supermarkt.',
        korrekt: false,
        erklaerung: 'Kassensysteme sind Informationstechnologie und haben keinen Bezug zu neurobiologischen Emotionssystemen.',
      },
      {
        text: 'Drei meteorologische Wetterlagen: Regenfront, Hochdruckgebiet und Kälteeinbruch.',
        korrekt: false,
        erklaerung: 'Atmosphärische Wetterlagen sind Gegenstand der Meteorologie, nicht der Neuroökonomie.',
      },
      {
        text: 'Musikalische Tonleitern in Dur, Moll und Pentatonik für Chorgesänge.',
        korrekt: false,
        erklaerung: 'Tonleitern gehören zur Harmonielehre der Musik, nicht zu den Emotionssystemen des Gehirns.',
      },
    ],
    pruefen: false,
  },
  {
    id: 73,
    bereich: 6,
    frage: 'Wer hat das Limbic®-System entwickelt und wie erklären Sie die Emotionssysteme?',
    optionen: [
      {
        text: 'Dr. Hans-Georg Häusel; das Modell verknüpft Neurowissenschaft mit Psychologie und ordnet Motive den Polen Balance (Sicherheit), Stimulanz (Abenteuer) und Dominanz (Macht) zu.',
        korrekt: true,
        erklaerung: 'Häusel entwickelte den Limbic®-Ansatz für Marketing und Vertrieb, der zeigt, dass über 80 % aller Entscheidungen emotional und unbewusst im Gehirn gefällt werden.',
      },
      {
        text: 'Albert Einstein im Rahmen seiner allgemeinen Relativitätstheorie über die Krümmung von Raum und Zeit.',
        korrekt: false,
        erklaerung: 'Einstein war theoretischer Physiker; der Limbic®-Marketing-Ansatz stammt vom Neuropsychologen Hans-Georg Häusel.',
      },
      {
        text: 'Henry Ford zur Einführung des Fließbandes bei der Automobilfertigung des Modells T.',
        korrekt: false,
        erklaerung: 'Ford revolutionierte industrielle Fertigungsmethoden, forschte jedoch nicht zu neurobiologischen Emotionssystemen.',
      },
      {
        text: 'Kurt Lewin zur Erforschung von Laissez-faire-Gruppen im Schulunterricht.',
        korrekt: false,
        erklaerung: 'Lewin erforschte Sozialpsychologie und Führungsstile in den 1930er Jahren; Limbic® entstand viel später durch Häusel.',
      },
    ],
    pruefen: false,
  },
  {
    id: 74,
    bereich: 6,
    frage: 'Was ist das Stimulanzsystem?',
    optionen: [
      {
        text: 'Das neurobiologische System für Neugier, Entdeckerdrang, Abwechslung, Spiel und Belohnung; sein Ziel ist das Erleben von Neuem und die Vermeidung von Langeweile.',
        korrekt: true,
        erklaerung: 'Das Stimulanzsystem (angetrieben durch Dopamin) lässt Kunden nach Innovationen, Trends, Überraschungen und Kicks streben.',
      },
      {
        text: 'Das Angst- und Vorsorgesystem, das ausschließlich darauf ausgerichtet ist, Geld auf dem Sparbuch vor Inflation zu schützen.',
        korrekt: false,
        erklaerung: 'Das Streben nach Sicherheit und Risikovermeidung ist die Kernaufgabe des Balance-Systems, nicht des Stimulanzsystems.',
      },
      {
        text: 'Ein medizinisches Gerät zur Reanimation von Patienten mit Herzrhythmusstörungen im Krankenhaus.',
        korrekt: false,
        erklaerung: 'Hierbei handelt es sich um einen Defibrillator, nicht um das neuroökonomische Stimulanzsystem.',
      },
      {
        text: 'Das Kontrollsystem im Gehirn, das jeglichen Kaufimpuls kategorisch unterdrückt und Verkäufern Hausverbot erteilt.',
        korrekt: false,
        erklaerung: 'Das Stimulanzsystem regt vielmehr zu spontanen und begeisterten Käufen an, statt Käufe zu unterbinden.',
      },
    ],
    pruefen: false,
  },
  {
    id: 75,
    bereich: 6,
    frage: 'Was schaffen Emotionen im Kundengehirn und was bedeutet «emotionaler Wert»?',
    optionen: [
      {
        text: 'Emotionen aktivieren Belohnungszentren und steuern Entscheidungen; der emotionale Wert verleiht Produkten eine seelische Bedeutung (Status, Geborgenheit, Freude) über den reinen Sachnutzen hinaus.',
        korrekt: true,
        erklaerung: 'Produkte mit emotionalem Wert (Branding) aktivieren das Gehirn stärker und erzeugen höhere Preisbereitschaft, da Menschen Gefühle und Identität kaufen.',
      },
      {
        text: 'Emotionen zerstören jede kognitive Fähigkeit und führen dazu, dass Kunden ausnahmslos unbrauchbare Waren kaufen.',
        korrekt: false,
        erklaerung: 'Emotionen sind evolutionäre Navigationshilfen (somatische Marker nach Damasio) und für funktionierende Entscheidungen unverzichtbar.',
      },
      {
        text: 'Emotionaler Wert ist der amtlich festgelegte Mehrwertsteuersatz auf Seifenprodukte im Drogeriemarkt.',
        korrekt: false,
        erklaerung: 'Mehrwertsteuersätze sind steuerrechtliche Festlegungen und haben keinen Bezug zum psychologischen emotionalen Produktwert.',
      },
      {
        text: 'Emotionen bewirken, dass Kunden im Ladenlokal sofort in lautes Weinen ausbrechen und den Einkauf abbrechen.',
        korrekt: false,
        erklaerung: 'Emotionen umfassen die gesamte Palette menschlicher Gefühle (Freude, Stolz, Sicherheit, Begeisterung), nicht nur Trauer.',
      },
    ],
    pruefen: false,
  },
  {
    id: 76,
    bereich: 7,
    frage: 'Welche Persönlichkeitsprofile von Verkäufern kennen Sie und erklären Sie diese?',
    optionen: [
      {
        text: 'Hard-Seller (abschlussorientiert/druckvoll), Kunden-Versteher (beziehungs- und bedarfsorientiert), Experten-Verkäufer (fach- und sachorientiert) sowie Beziehungs-Verwalter.',
        korrekt: true,
        erklaerung: 'In der Verkaufspsychologie unterscheidet man Verkäuferprofile nach ihrem Fokus auf Abschlussdruck, Fachwissen, Beziehungspflege oder partnerschaftliche Lösungsfindung.',
      },
      {
        text: 'Einteilung in Langschläfer, Frühaufsteher, Vegetarier und Kaffeetrinker.',
        korrekt: false,
        erklaerung: 'Dies sind private Lebensgewohnheiten ohne führungstheoretische oder verkaufspsychologische Relevanz.',
      },
      {
        text: 'Profile nach der Schuhgröße der Verkäufer von Größe 36 bis Größe 48.',
        korrekt: false,
        erklaerung: 'Körpermaße stehen in keinerlei Zusammenhang mit Persönlichkeitsmustern in Vertrieb und Verkauf.',
      },
      {
        text: 'Ausschließlich die Unterteilung in Beamte, Angestellte und Arbeiter nach dem österreichischen Allgemeinen Bürgerlichen Gesetzbuch.',
        korrekt: false,
        erklaerung: 'Dies sind arbeitsrechtliche Beschäftigungskategorien, keine vertriebspsychologischen Verkäuferprofile.',
      },
    ],
    pruefen: true,
  },
  {
    id: 77,
    bereich: 7,
    frage: 'Was ist ein Hard-Seller?',
    optionen: [
      {
        text: 'Ein abschlussfixierter, dominanter Verkäufer, der mit starkem Verkaufsdruck, Überredungstaktiken und Einwandvorwegnahme auf den schnellen Vertragsabschluss drängt.',
        korrekt: true,
        erklaerung: 'Hard-Selling zielt auf kurzfristige Umsatzmaximierung ab («Push-Prinzip»); Nachteile sind hohe Stornoquoten und mangelnde nachhaltige Kundenloyalität.',
      },
      {
        text: 'Ein Handwerker, der im Baumarkt schwere Werkzeuge aus gehärtetem Spezialstahl verkauft.',
        korrekt: false,
        erklaerung: 'Dies nimmt das englische Wort «Hard» materiell-stofflich, ignoriert jedoch die vertriebspsychologische Verhaltensweise.',
      },
      {
        text: 'Ein extrem scheuer Verkäufer, der sich hinter dem Regal versteckt und hofft, dass Kunden keine Fragen stellen.',
        korrekt: false,
        erklaerung: 'Dies beschreibt passive Verkaufsverweigerung; der Hard-Seller ist im Gegenteil forsch, dominant und hochgradig offensiv.',
      },
      {
        text: 'Ein Programmierer, der Hard- und Softwarekomponenten in Firmennetzwerken installiert.',
        korrekt: false,
        erklaerung: 'Dies ist ein IT-Systemtechniker, kein Vertriebstyp im Kundengespräch.',
      },
    ],
    pruefen: false,
  },
  {
    id: 78,
    bereich: 7,
    frage: 'Was sind die Merkmale des Kunden-Versteher?',
    optionen: [
      {
        text: 'Hohe Empathie, aktives Zuhören, partnerschaftliche Bedarfsanalyse auf Augenhöhe und das Bestreben, langfristiges Kundenvertrauen durch echte Problemlösung aufzubauen.',
        korrekt: true,
        erklaerung: 'Der Kunden-Versteher agiert als beratender Partner («Consultative Selling»); er stellt Fragen, hört genau hin und schafft nachhaltige Kundenbeziehungen.',
      },
      {
        text: 'Unterbrechung des Kunden nach jedem dritten Wort und sofortiges Aufdrängen des teuersten Ladenhüters.',
        korrekt: false,
        erklaerung: 'Dies ist aggressives Hard-Selling und steht dem empathischen Verhalten des Kunden-Verstehers diametral entgegen.',
      },
      {
        text: 'Weigerung, mit Kunden zu sprechen, und Verweisung auf das Online-Bestellformular des Konkurrenzunternehmens.',
        korrekt: false,
        erklaerung: 'Dies ist geschäftsschädigende Kundenabwehr und keine vertriebliche Empathie.',
      },
      {
        text: 'Ausschließliches Interesse an der Unterzeichnung von Blanko-Schecks durch betagte Kunden ohne Kaufvertrag.',
        korrekt: false,
        erklaerung: 'Dies beschreibt kriminelle Betrugspraktiken, die mit seriöser Verkaufspsychologie nichts gemein haben.',
      },
    ],
    pruefen: false,
  },
  {
    id: 79,
    bereich: 7,
    frage: 'Welche 4 limbischen Kundenprofile kennen Sie?',
    optionen: [
      {
        text: 'Harmoniser/Bewahrer (Sicherheit/Balance), Performer/Sieger (Status/Dominanz), Abenteurer/Hedonist (Spaß/Stimulanz) und Disziplinierte/Rationalist (Kontrolle/Fakten).',
        korrekt: true,
        erklaerung: 'Diese 4 Hauptprofile leiten sich aus Häusels Limbic® Map für den Vertrieb ab und spiegeln die dominante emotionale Motivationsstruktur des Käufers wider.',
      },
      {
        text: 'Fröhliche, traurige, wütende und müde Kunden nach der Tagesform beim Betreten des Geschäftes.',
        korrekt: false,
        erklaerung: 'Dies sind flüchtige emotionale Stimmungen, keine fundierten neurobiologischen Kundenpersönlichkeitsprofile.',
      },
      {
        text: 'Käufer mit Hut, Käufer mit Brille, Käufer mit Schirm und Käufer mit Rucksack.',
        korrekt: false,
        erklaerung: 'Kleidungsaccessoires geben keinen verlässlichen Aufschluss über die limbischen Motivsysteme im Gehirn.',
      },
      {
        text: 'Kunden aus dem Norden, Kunden aus dem Süden, Kunden aus dem Osten und Kunden aus dem Westen.',
        korrekt: false,
        erklaerung: 'Geografische Himmelsrichtungen sind keine psychologischen Persönlichkeitsmuster im Limbic®-Vertriebsmodell.',
      },
    ],
    pruefen: true,
  },
  {
    id: 80,
    bereich: 7,
    frage: 'Wie beschreiben Sie den Kundentyp «Performer»?',
    optionen: [
      {
        text: 'Dominanz- und statusorientiert, ehrgeizig, schätzt Premium-Qualität, Exklusivität, messbaren Nutzen, schnelle Entscheidungen und respektiert selbstbewusstes Auftreten.',
        korrekt: true,
        erklaerung: 'Der Performer will gewinnen und sich abheben. Verkäufer überzeugen ihn durch Kompetenz, Nutzenklarheit, Schnelligkeit und Respekt vor seinem Status.',
      },
      {
        text: 'Extrem risikoscheu, sucht monatelang nach Garantiezertifikaten und kauft grundsätzlich nur gebrauchte Auslaufmodelle.',
        korrekt: false,
        erklaerung: 'Dies charakterisiert den sicherheitsorientierten Bewahrer (Balance-Fokus), nicht den erfolgs- und statusgetriebenen Performer.',
      },
      {
        text: 'Ein Kunde, der im Verkaufsraum Gesangsdarbietungen aufführt und Verkäufer mit Konfetti bewirft.',
        korrekt: false,
        erklaerung: 'Dies nimmt den Begriff «Performer» fälschlicherweise als Bühnendarsteller im Theater, ignoriert aber das Persönlichkeitsprofil.',
      },
      {
        text: 'Verzichtet vollkommen auf Produkte und möchte ausschließlich stundenlang über Philosophie diskutieren.',
        korrekt: false,
        erklaerung: 'Performer sind ziel- und ergebnisorientierte Macher, die rasche und pragmatische Lösungen für ihren Erfolg suchen.',
      },
    ],
    pruefen: false,
  },
  {
    id: 81,
    bereich: 7,
    frage: 'Was verstehen Sie unter dem DISG®-4-Quadranten-Modell für Verkäufer?',
    optionen: [
      {
        text: 'Ein Verhaltensmodell mit den 4 Grundtypen Dominant (D), Initiativ (I), Stetig (S) und Gewissenhaft (G) zur typgerechten Kundenansprache und Selbstreflexion.',
        korrekt: true,
        erklaerung: 'DISG® teilt Verhalten entlang der Achsen ziel-/aufgabenorientiert vs. beziehungsorientiert und extrovertiert vs. introvertiert in 4 Verhaltensstile ein.',
      },
      {
        text: 'Ein technisches Messverfahren zur Überprüfung von Reifendruck und Spurtreue bei gewerblichen Lieferwagen.',
        korrekt: false,
        erklaerung: 'Hierbei handelt es sich um Kraftfahrzeugtechnik, nicht um das psychologische Persönlichkeitsmodell DISG®.',
      },
      {
        text: 'Ein vierwöchiger Diätplan für Handelsreisende zur Vermeidung von Müdigkeit bei Kundenpräsentationen.',
        korrekt: false,
        erklaerung: 'Dies verwechselt Verkaufspsychologie mit Ernährungsberatung.',
      },
      {
        text: 'Eine rechtliche Einteilung von Kaufverträgen nach den Vorschriften des Konsumentenschutzgesetzes.',
        korrekt: false,
        erklaerung: 'DISG® ist ein psychologisches Verhaltensmodell und kein zivilrechtlicher Gesetzeskommentar.',
      },
    ],
    pruefen: false,
  },
  {
    id: 82,
    bereich: 7,
    frage: 'Was bedeutet in diesem Modell der «gewissenhafte Verkäufertyp»?',
    optionen: [
      {
        text: 'Er argumentiert strukturiert über Zahlen, Daten, Fakten, bereitet sich akribisch vor, legt Wert auf Fehlerfreiheit und meidet emotionale Übertreibungen.',
        korrekt: true,
        erklaerung: 'Der G-Typ (Blau) überzeugt durch Fachkompetenz, Detailgenauigkeit, logische Nachvollziehbarkeit und hohe Qualitäts- und Sicherheitsstandards.',
      },
      {
        text: 'Er begrüßt Kunden stets mit lautem Gesang, umarmt jeden Besucher und vergisst dabei alle Produktdetails.',
        korrekt: false,
        erklaerung: 'Dieses extrovertierte, emotionale Verhalten entspricht eher dem initiativen Typen (I-Typ) im Übermaß, nicht dem gewissenhaften Typen.',
      },
      {
        text: 'Er weigert sich grundsätzlich, Verträge schriftlich abzufassen, und verlangt Bezahlung in Goldmünzen.',
        korrekt: false,
        erklaerung: 'Der gewissenhafte Typ pocht im Gegenteil auf präzise schriftliche Dokumentation, genaue Klauseln und formale Korrektheit.',
      },
      {
        text: 'Er verlässt das Verkaufsgespräch nach zwei Minuten, weil er keine Lust auf Kundenfragen hat.',
        korrekt: false,
        erklaerung: 'Der G-Typ beantwortet Fragen sehr detailliert und gründlich, statt das Gespräch abzublocken.',
      },
    ],
    pruefen: false,
  },
  {
    id: 83,
    bereich: 7,
    frage: 'Welche Käufertypen nach dem Insights®-MDI-Modell kennen Sie?',
    optionen: [
      {
        text: 'Die vier farbcodierten Typen Rot (dominant/ergebnisorientiert), Gelb (initiativ/kontaktfreudig), Grün (stetig/beziehungsorientiert) und Blau (analytisch/qualitätsbewusst).',
        korrekt: true,
        erklaerung: 'Insights® MDI basiert auf C.G. Jungs Typologie und beschreibt menschliche Präferenzen über die 4 Grundfarben Rot, Gelb, Grün und Blau.',
      },
      {
        text: 'Die Typen Gold, Silber, Bronze und Blech nach dem jeweiligen monatlichen Kontostand des Kunden.',
        korrekt: false,
        erklaerung: 'Dies verwechselt psychologische Verhaltenspräferenzen mit Bonitäts- oder Treuestufen von Kreditkarten.',
      },
      {
        text: 'Die Typen Frühling, Sommer, Herbst und Winter nach der farblichen Zusammenstellung der getragenen Krawatte.',
        korrekt: false,
        erklaerung: 'Hierbei handelt es sich um eine modische Farb- und Stilberatung, nicht um das diagnostische Insights®-MDI-Modell.',
      },
      {
        text: 'Die Typen Pkw, Lkw, Motorrad und Traktor nach dem Fahrzeug, mit dem der Kunde auf dem Parkplatz anreist.',
        korrekt: false,
        erklaerung: 'Fahrzeugklassen haben keinen Bezug zu den psychologischen Persönlichkeitsdimensionen nach Insights® MDI.',
      },
    ],
    pruefen: false,
  },
  {
    id: 84,
    bereich: 7,
    frage: 'Was sind die Merkmale des roten Käufertypen?',
    optionen: [
      {
        text: 'Entscheidungsfreudig, direkt, ungeduldig, fakten- und zeitorientiert; will klare Nutzenargumente ohne langes Vorgeplänkel («Auf den Punkt kommen»).',
        korrekt: true,
        erklaerung: 'Der rote Typ (extravertiert/denkend) will Ergebnisse sehen, Kontrolle behalten und schätzt selbstbewusste, zielgerichtete Gesprächsführung ohne Smalltalk-Umwege.',
      },
      {
        text: 'Verbringt Stunden mit verträumtem Plaudern über Haustiere und weint vor Rührung bei Rabattangeboten.',
        korrekt: false,
        erklaerung: 'Der rote Typ ist sach- und ergebnisorientiert und meidet sentimentale Abschweifungen entschieden.',
      },
      {
        text: 'Traut sich nicht, Entscheidungen zu treffen, und fragt stets alle Verwandten vor dem Kauf einer Briefmarke um Erlaubnis.',
        korrekt: false,
        erklaerung: 'Der rote Typ ist hochgradig entscheidungsfreudig, mutig und autonom in seinen Entschlüssen.',
      },
      {
        text: 'Kauft Produkte ausschließlich dann, wenn die Verpackung mit rotem Geschenkpapier umwickelt ist.',
        korrekt: false,
        erklaerung: '«Rot» ist die symbolische Farbkennzeichnung des Verhaltensstils, keine optische Farbvorliebe für Packpapier.',
      },
    ],
    pruefen: false,
  },
  {
    id: 85,
    bereich: 8,
    frage: 'Was bedeutet im Verkauf Körpersprache und Voice Sells?',
    optionen: [
      {
        text: 'Körpersprache (Blickkontakt, Haltung, Gestik) und Stimmführung (Modulation, Tempo, Pausen) bestimmen maßgeblich die emotionale Wirkung und Glaubwürdigkeit des Verkäufers.',
        korrekt: true,
        erklaerung: 'Der Tonfall («Voice Sells») und nonverbale Signale transportieren emotionale Sicherheit; wie etwas gesagt wird, prägt die Wahrnehmung oft stärker als der bloße Text.',
      },
      {
        text: 'Dass Verkäufer im Gespräch Opernarien singen müssen, um Kunden von teuren Versicherungen zu überzeugen.',
        korrekt: false,
        erklaerung: '«Voice Sells» bedeutet gezielte, angenehme und verbindliche Sprechtechnik im Dialog, keinen musikalischen Bühnengesang.',
      },
      {
        text: 'Dass Kunden ausschließlich über Morsezeichen bestellen dürfen, um Druckfehler im Vertrag zu vermeiden.',
        korrekt: false,
        erklaerung: 'Morsetelegrafie ist ein veraltetes Übertragungsverfahren und hat keinen Platz in der modernen Verkaufspsychologie.',
      },
      {
        text: 'Dass die Körpersprache im Verkauf vollkommen bedeutungslos ist, da Kunden nur auf den gedruckten Prospekt schauen.',
        korrekt: false,
        erklaerung: 'Neurowissenschaftliche Studien beweisen, dass Körpersprache und Stimmklang über Vertrauen und Sympathie entscheiden.',
      },
    ],
    pruefen: false,
  },
  {
    id: 86,
    bereich: 8,
    frage: 'Was sind Spiegelneuronen?',
    optionen: [
      {
        text: 'Nervenzellen im Gehirn, die beim bloßen Beobachten einer Handlung oder Emotion dieselben Muster feuern wie bei eigener Ausführung (Basis für Empathie und Rapport).',
        korrekt: true,
        erklaerung: 'Spiegelneuronen (Giacomo Rizzolatti) ermöglichen intuitives Verstehen, Mitfühlen und unbewusstes Angleichen («Pacing») von Körpersprache im Gespräch.',
      },
      {
        text: 'Kleine Glasspiegel, die Verkäufer in der Jackentasche tragen, um Kunden bei Einwänden zu blenden.',
        korrekt: false,
        erklaerung: 'Spiegelneuronen sind biologische Gehirnzellen und keine physischen Taschenspiegel.',
      },
      {
        text: 'Optische Sensoren in Überwachungskameras von Juweliergeschäften zur Diebstahlerkennung.',
        korrekt: false,
        erklaerung: 'Hierbei handelt es sich um elektronische Bildsensoren, nicht um neurobiologische Neuronen im Nervensystem.',
      },
      {
        text: 'Spezielle Computerchips, die Tastatureingaben spiegelverkehrt auf dem Bildschirm darstellen.',
        korrekt: false,
        erklaerung: 'Dies verwechselt zerebrale Nervenzellen mit Softwarefehlern oder IT-Hardware.',
      },
    ],
    pruefen: false,
  },
  {
    id: 87,
    bereich: 8,
    frage: 'Was sind beim Aufbau von Kundenbeziehungen die «3 Säulen des Vertrauens»?',
    optionen: [
      {
        text: 'Kompetenzvertrauen (fachliche Expertise), Sympathie- bzw. Beziehungsvertrauen (menschliche Chemie) und Integritätsvertrauen (Worttreue und Aufrichtigkeit).',
        korrekt: true,
        erklaerung: 'Kunden kaufen nur, wenn alle 3 Säulen stehen: «Der Verkäufer weiß, wovon er spricht (Kompetenz), ist mir sympathisch (Beziehung) und hält sein Wort (Integrität)».',
      },
      {
        text: 'Rabattgarantie, Schmeichelei und die Androhung rechtlicher Schritte bei Vertragsablehnung.',
        korrekt: false,
        erklaerung: 'Drohungen und unaufrichtige Schmeicheleien zerstören Vertrauen radikal statt es aufzubauen.',
      },
      {
        text: 'Die drei Bankverbindungen, über die der Kunde seine Überweisungen gebührenfrei tätigen kann.',
        korrekt: false,
        erklaerung: 'Bankkonten sind technische Abwicklungswege des Zahlungsverkehrs, keine psychologischen Vertrauenssäulen.',
      },
      {
        text: 'Das dreifache Wiederholen des eigenen Vornamens vor Beginn jedes einzelnen Verkaufsgesprächs.',
        korrekt: false,
        erklaerung: 'Mantra-artiges Wiederholen des eigenen Namens baut kein Kundenvertrauen auf, sondern irritiert.',
      },
    ],
    pruefen: true,
  },
  {
    id: 88,
    bereich: 8,
    frage: 'Welche Kaufmotive gibt es?',
    optionen: [
      {
        text: 'Rationale Kaufmotive (z. B. Wirtschaftlichkeit, Zeitersparnis, Funktionalität) und emotionale Kaufmotive (z. B. Sicherheit, Prestige, Bequemlichkeit, Neugier).',
        korrekt: true,
        erklaerung: 'Kaufentscheidungen werden primär von emotionalen Motiven angetrieben und im Nachhinein durch rationale Argumente vor sich und anderen gerechtfertigt.',
      },
      {
        text: 'Ausschließlich das Motiv des Hungers, da alle anderen Produkte der Welt vollkommen überflüssig sind.',
        korrekt: false,
        erklaerung: 'Hunger ist ein biologischer Urtrieb, deckt aber die breite Vielfalt moderner Konsum- und B2B-Kaufmotive nicht ab.',
      },
      {
        text: 'Kaufmotive existieren nicht, da Kunden stets blind und ohne jeden inneren Beweggrund einkaufen.',
        korrekt: false,
        erklaerung: 'Jedes menschliche Handeln und Kaufen ist motivgesteuert (Bedürfnisbefriedigung und Nutzenstreben).',
      },
      {
        text: 'Reine Schadensersatzmotive, die darauf abzielen, Händler nach dem Kauf sofort vor Gericht zu verklagen.',
        korrekt: false,
        erklaerung: 'Dies beschreibt bösartige Klageabsichten im Einzelfall, ist aber kein reguläres Kaufmotiv der Kunden.',
      },
    ],
    pruefen: false,
  },
  {
    id: 89,
    bereich: 8,
    frage: 'Was versteht man unter dem Motiv- und Werteraum des Kunden?',
    optionen: [
      {
        text: 'Die Gesamtheit der individuellen Werte, Glaubenssätze und unbewussten Antreiber des Kunden, die seine Wahrnehmung und Kaufbereitschaft steuern.',
        korrekt: true,
        erklaerung: 'Im Motiv- und Werteraum (oft als Koordinatenfeld dargestellt) zeigt sich, ob ein Kunde Sicherheit, Innovation, Status oder soziale Harmonie am höchsten bewertet.',
      },
      {
        text: 'Den begehbaren Tresorraum in der Bank, in dem der Kunde seine Goldbarren und Schmuckstücke lagert.',
        korrekt: false,
        erklaerung: 'Dies verwechselt den psychologischen Werteraum mit einem physischen Banktresor.',
      },
      {
        text: 'Das Wartezimmer vor dem Büro des Steuerberaters mit zwei Sesseln und einem Zeitschriftenständer.',
        korrekt: false,
        erklaerung: 'Ein Wartezimmer ist eine räumliche Immobilie, kein psychologisches Motiv- und Wertesystem.',
      },
      {
        text: 'Die Summe aller Zinsen, die ein Kunde jemals an seine Bausparkasse bezahlt hat.',
        korrekt: false,
        erklaerung: 'Finanzzinsen sind rechnerische Kosten, spiegeln jedoch nicht den psychologischen Werteraum wider.',
      },
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
        erklaerung: '«Facts tell, stories sell»: Geschichten umgehen rationale Abwehrmechanismen, bleiben deutlich besser im Gedächtnis und transportieren Werte und Identifikation.',
      },
      {
        text: 'Dem Kunden Märchenbücher der Gebrüder Grimm vorzulesen, bis dieser aus Erschöpfung den Vertrag unterschreibt.',
        korrekt: false,
        erklaerung: 'Storytelling im Vertrieb nutzt kundenspezifische Praxisbeispiele und Metaphern, keine wahllose Kinderliteratur zur Zermürbung.',
      },
      {
        text: 'Das Erfinden falscher Firmengeschichten und unwahrer Qualitätszertifikate zur Täuschung der Käufer.',
        korrekt: false,
        erklaerung: 'Storytelling muss authentisch und wahrhaftig sein; Täuschung ist Betrug und zerstört jedes Kundenvertrauen.',
      },
      {
        text: 'Ausschließlich stumme Pantomime ohne jedes gesprochene Wort im gesamten Kundengespräch.',
        korrekt: false,
        erklaerung: 'Storytelling lebt von sprachlicher Lebendigkeit, Erzählkunst und treffsicherer Bildsprache.',
      },
    ],
    pruefen: false,
  },
  {
    id: 91,
    bereich: 8,
    frage: 'Welche 8 Tipps zur Emotionalisierung von Kunden kennen Sie?',
    optionen: [
      {
        text: 'Storytelling nutzen, Multisensorik aktivieren, Begeisterung vorleben, Bildsprache einsetzen, Nutzen statt Merkmale betonen, Empathie spiegeln, Überraschung bieten und Zukunftsbilder malen.',
        korrekt: true,
        erklaerung: 'Diese 8 Praxistipps aktivieren das limbische System des Kunden: Sinne ansprechen, Geschichten erzählen, Leidenschaft zeigen, Nutzen visualisieren und positive Gefühle wecken.',
      },
      {
        text: 'Acht verschiedene Paragrafen des Handelsgesetzbuches in monotoner Tonlage laut vortragen.',
        korrekt: false,
        erklaerung: 'Monotones Zitieren von Gesetzen wirkt emotionslos, trocken und ermüdend auf Kunden.',
      },
      {
        text: 'Achtmal hintereinander mit der flachen Hand laut auf den Verkaufstisch schlagen, um Aufmerksamkeit zu erzwingen.',
        korrekt: false,
        erklaerung: 'Aggressives Verhalten erzeugt Fluchtreflexe und Angst, führt aber zu keiner positiven emotionalen Kaufbindung.',
      },
      {
        text: 'Dem Kunden acht Gläser lauwarmes Leitungswasser servieren und ihm das Verlassen des Stuhls untersagen.',
        korrekt: false,
        erklaerung: 'Freiheitsberaubende Schikanen haben keinerlei Bezug zu professioneller Emotionalisierung im Verkauf.',
      },
    ],
    pruefen: true,
  },
  {
    id: 92,
    bereich: 8,
    frage: 'In welche Bereiche unterteilen Sie die Verkaufsgesprächsführung?',
    optionen: [
      {
        text: 'Kontakt- und Vertrauensphase, Bedarfs- und Motivanalyse, Nutzen- und Lösungspräsentation, Einwandbehandlung, Kaufabschluss sowie Nachbetreuung.',
        korrekt: true,
        erklaerung: 'Diese klassische Phasenstruktur leitet den Verkäufer sicher vom ersten Beziehungsaufbau über die gezielte Problemergründung bis zum erfolgreichen Abschluss.',
      },
      {
        text: 'Frühstücksphase, Kaffeepause, Mittagspause, Nachmittagstee und Feierabendrunde.',
        korrekt: false,
        erklaerung: 'Dies sind private Pausenzeiten und stellen keine fachliche Strukturierung eines Verkaufsgesprächs dar.',
      },
      {
        text: 'Wareneingang, Lagerhaltung, Speditionsprüfung und Abfallentsorgung im Betrieb.',
        korrekt: false,
        erklaerung: 'Hierbei handelt es sich um betriebliche Logistikschritte, nicht um die Gesprächsphasen im Vertrieb.',
      },
      {
        text: 'Strafanzeige, Gerichtsverhandlung, Urteilsverkündung und Strafvollzug.',
        korrekt: false,
        erklaerung: 'Dies sind Stationen eines Strafverfahrens und haben nichts mit Verkaufsgesprächsführung zu tun.',
      },
    ],
    pruefen: false,
  },
  {
    id: 93,
    bereich: 9,
    frage: 'Was sind die «Top Ten»-Fehler bei Preisverhandlungen?',
    optionen: [
      {
        text: 'Typische Fehler: Zu frühe Preisnennung vor Nutzenaufbau, unsichere Körpersprache, ungefragte Rabatte, Nachgeben ohne Gegenleistung und das Brechen der Sprechpause nach Nennung.',
        korrekt: true,
        erklaerung: 'In Preisverhandlungen zerstören Scham beim Preis, sofortige Rabattflucht, Mangel an Gegenforderungen und das Zurechtfertigen des Preises die Marge des Verkäufers.',
      },
      {
        text: 'Dass der Verkäufer saubere Kleidung trägt und dem Kunden pünktlich die Hand reicht.',
        korrekt: false,
        erklaerung: 'Gepflegtes Auftreten und Pünktlichkeit sind fundamentale Erfolgsfaktoren und keineswegs Verhandlungsfehler.',
      },
      {
        text: 'Dass der Preis in der offiziellen Landeswährung Euro angegeben wird.',
        korrekt: false,
        erklaerung: 'Die Preisnennung in der gültigen Landeswährung ist Standard und stellt keinen Fehler dar.',
      },
      {
        text: 'Dass ein Taschenrechner auf dem Schreibtisch steht, um Rabattsätze exakt auszurechnen.',
        korrekt: false,
        erklaerung: 'Ein Taschenrechner ist ein nützliches kaufmännisches Hilfsmittel, aber kein Verhandlungsfehler.',
      },
    ],
    pruefen: true,
  },
  {
    id: 94,
    bereich: 9,
    frage: 'Was sind wichtige Punkte, die bei Preisverhandlungen zu beachten sind?',
    optionen: [
      {
        text: 'Nutzen immer vor dem Preis etablieren, den Preis selbstbewusst nennen und schweigen, niemals Rabatt ohne Gegenleistung gewähren («Konditionieren») und Wertargumente nutzen.',
        korrekt: true,
        erklaerung: 'Preisgespräche sind Wertverhandlungen: Wer nach der Preisnennung als Erster redet, verliert; Zugeständnisse müssen stets an Gegenleistungen gekoppelt werden.',
      },
      {
        text: 'Sofort beim kleinsten Zögern des Kunden den Preis unaufgefordert um die Hälfte reduzieren.',
        korrekt: false,
        erklaerung: 'Ungefragtes Nachgeben entwertet das Produkt, zerstört die Glaubwürdigkeit des Ausgangspreises und vernichtet den Gewinn.',
      },
      {
        text: 'Dem Kunden mit sofortiger körperlicher Gewalt drohen, falls er nach Skonto oder Rabatt fragt.',
        korrekt: false,
        erklaerung: 'Gewaltdrohungen sind Straftaten und haben in seriösen Verhandlungen absolut nichts verloren.',
      },
      {
        text: 'Den Preis grundsätzlich geheim halten und den Kunden erst nach der Lieferung per Mahnung überraschen.',
        korrekt: false,
        erklaerung: 'Versteckte Preise führen zu Reklamationen, Zahlungsverweigerung und juristischen Streitigkeiten.',
      },
    ],
    pruefen: false,
  },
  {
    id: 95,
    bereich: 9,
    frage: 'Was sind Preisanker?',
    optionen: [
      {
        text: 'Ein psychologischer Referenzwert (Ankereffekt): Ein zuerst genannter hoher Ausgangspreis dient als unbewusster Maßstab, wodurch nachfolgende Preise günstiger wahrgenommen werden.',
        korrekt: true,
        erklaerung: 'Nach Kahneman/Tversky verzerrt die erste genannte Zahl («Anker») alle folgenden Urteile; der Kunde vergleicht nicht absolut, sondern relativ zum Anker.',
      },
      {
        text: 'Schwere Metallanker aus Eisen, die im Bootshafen für Schiffe über zehn Tonnen verwendet werden.',
        korrekt: false,
        erklaerung: 'Dies nimmt den Begriff nautisch-buchstäblich, verkennt jedoch die kognitionspsychologische Bedeutung des Preisankers.',
      },
      {
        text: 'Feste Mindestpreise, die von der Weltbank für Rohöl an internationalen Häfen gesetzlich vorgeschrieben sind.',
        korrekt: false,
        erklaerung: 'Preisanker sind wahrnehmungspsychologische Effekte im Gehirn, keine staatlichen Preiskontrollen der Weltbank.',
      },
      {
        text: 'Gutscheinkarten aus Pappe, die Kunden beim Betreten eines Ladens als Souvenir geschenkt bekommen.',
        korrekt: false,
        erklaerung: 'Werbegeschenke sind Marketingartikel, haben aber keine Ankerfunktion für die Preiswahrnehmung.',
      },
    ],
    pruefen: false,
  },
  {
    id: 96,
    bereich: 9,
    frage: 'Was verstehen Sie unter «Bundling»?',
    optionen: [
      {
        text: 'Das Bündeln mehrerer Einzelprodukte oder Dienstleistungen zu einem Gesamtpaket zu einem Pauschalpreis, was den direkten Preisvergleich erschwert und den Mehrwert steigert.',
        korrekt: true,
        erklaerung: 'Product Bundling (Paketierung) erhöht den wahrgenommenen Gesamtnutzen, schützt Einzellistenpreise vor Erosion und steigert den durchschnittlichen Warenkorbwert.',
      },
      {
        text: 'Das Zusammenbinden alter Zeitungen mit einer Hanfschnur vor dem Einwerfen in die Altpapiertonne.',
        korrekt: false,
        erklaerung: 'Dies ist Abfallentsorgung im Haushalt und kein preispolitisches Vertriebsinstrument.',
      },
      {
        text: 'Das Verbot für Mitarbeiter, mehr als ein Produkt pro Monat an denselben Kunden zu verkaufen.',
        korrekt: false,
        erklaerung: 'Bundling strebt genau das Gegenteil an: mehr Produkte gleichzeitig als attraktives Bündel zu veräußern.',
      },
      {
        text: 'Ein juristischer Zusammenschluss aller Wettbewerber zu einem unzulässigen Preiskartell.',
        korrekt: false,
        erklaerung: 'Kartellbildung ist illegal; Produktbündelung ist eine völlig legale und gängige vertriebliche Preisstrategie.',
      },
    ],
    pruefen: false,
  },
  {
    id: 97,
    bereich: 9,
    frage: 'Was sind die 6 Phasen bei Verhandlungen?',
    optionen: [
      {
        text: 'Vorbereitung, Eröffnung/Beziehungsaufbau, Sondierung/Interessenerforschung, Verhandeln/Konzessionen, Einigung/Abschluss sowie Nachbereitung und Umsetzung.',
        korrekt: true,
        erklaerung: 'Diese 6 Phasen strukturieren strategische Verhandlungen: Gründliche Vorbereitung (inkl. BATNA), Austausch der Standpunkte, Feilschen mit Gegenforderungen und verbindliche Vereinbarung.',
      },
      {
        text: 'Aufwachen, Frühstücken, Zeitunglesen, Mittagessen, Spazierengehen und Schlafengehen.',
        korrekt: false,
        erklaerung: 'Dies beschreibt einen privaten Tagesablauf, keine methodische Phasenstruktur einer Verhandlung.',
      },
      {
        text: 'Begrüßung, Schlägerei, Polizeieinsatz, Flucht, Verhaftung und Gefängnisstrafe.',
        korrekt: false,
        erklaerung: 'Dies schildert eine Straftat und hat keinerlei Bezug zu professioneller Verhandlungsführung.',
      },
      {
        text: 'Anschreien, Beleidigen, Weinen, Schmollen, Auflegen und Kündigen.',
        korrekt: false,
        erklaerung: 'Destruktive emotionale Ausbrüche widersprechen den Grundsätzen professioneller Verhandlungsmethodik.',
      },
    ],
    pruefen: true,
  },
  {
    id: 98,
    bereich: 9,
    frage: 'Was sind die 4 Prinzipien des «Harvard Konzepts»?',
    optionen: [
      {
        text: 'Menschen und Probleme getrennt behandeln, auf Interessen statt Positionen konzentrieren, Optionen zum beiderseitigen Vorteil entwickeln und objektive Kriterien anwenden.',
        korrekt: true,
        erklaerung: 'Das Harvard-Konzept (Fisher, Ury, Patton 1981) ist das weltweit führende Modell sachbezogener Verhandlung für nachhaltige Win-Win-Lösungen.',
      },
      {
        text: 'Den Gegner bedrohen, die Unwahrheit sagen, Verträge brechen und Konkurrenten bestechen.',
        korrekt: false,
        erklaerung: 'Dies sind verwerfliche und unethische Praktiken, die den Harvard-Prinzipien fundamental widersprechen.',
      },
      {
        text: 'Ausschließlich Englisch sprechen, Harvard-Krawatten tragen, im Chor singen und nach Amerika auswandern.',
        korrekt: false,
        erklaerung: 'Dies karikiert den universitären Ursprung Harvard, beschreibt jedoch nicht die sachbezogenen Verhandlungsprinzipien.',
      },
      {
        text: 'Alle Forderungen des Gegners sofort bedingungslos unterschreiben, um den Raum schnell verlassen zu können.',
        korrekt: false,
        erklaerung: 'Kapitulation ist keine Verhandlungsmethode; das Harvard-Konzept zielt auf Verhandlungserfolg bei beiderseitigem Nutzen ab.',
      },
    ],
    pruefen: false,
  },
  {
    id: 99,
    bereich: 9,
    frage: 'Was versteht man in der Verhandlungstechnik unter der «LIMO-Methode»?',
    optionen: [
      {
        text: 'Ein Zielsystem zur Vorbereitung: Lust-Ziel (Maximalziel), Ideal-Ziel (realistisches Best-Case), Minimal-Ziel (Schmerzgrenze) und Ohne-mich-Ziel (Walk-Away-Point).',
        korrekt: true,
        erklaerung: 'LIMO schützt vor planlosem Nachgeben: Die Verhandlungsführung legt vorab fest, was maximal angestrebt wird (L), was realistisch ideal ist (I), wo das Minimum liegt (M) und ab wann abgebrochen wird (O).',
      },
      {
        text: 'Das Servieren von eisgekühlter Zitronenlimonade, um den Kunden bei Hitze milde zu stimmen.',
        korrekt: false,
        erklaerung: 'Dies nimmt das Akronym «LIMO» wörtlich als Erfrischungsgetränk, verkennt aber das führungstaktische Zielsystem.',
      },
      {
        text: 'Das Abholen des Verhandlungspartners in einer weißen Stretch-Limousine vom Flughafen.',
        korrekt: false,
        erklaerung: 'Limousinen-Shuttles sind Logistikleistungen, keine Verhandlungsvorbereitungsmethode.',
      },
      {
        text: 'Eine Methode zur Feststellung des Reifendrucks bei Limousinen vor Antritt einer Geschäftsreise.',
        korrekt: false,
        erklaerung: 'Reifendruckprüfung ist Kfz-Wartung und hat keinen Zusammenhang mit der Verhandlungstechnik.',
      },
    ],
    pruefen: true,
  },
  {
    id: 100,
    bereich: 9,
    frage: 'Wie kann man die Weiterempfehlungsrate steigern?',
    optionen: [
      {
        text: 'Durch konsequente Übertreffung der Erwartungen («Customer Delight»), aktives und systematisches Fragen nach Empfehlungen zum passenden Zeitpunkt und Wertschätzung.',
        korrekt: true,
        erklaerung: 'Empfehlungen entstehen, wenn Kunden begeistert sind und der Verkäufer gezielt nachfragt («Wer in Ihrem Netzwerk könnte von diesem Nutzen ebenfalls profitieren?»).',
      },
      {
        text: 'Indem man Kunden nach dem Kauf mit wöchentlichen Mahnbriefen und Drohungen überhäuft.',
        korrekt: false,
        erklaerung: 'Drohungen und grundlose Mahnungen verärgern Kunden und führen zu negativer Mundpropaganda statt zu Weiterempfehlungen.',
      },
      {
        text: 'Indem man die Telefonnummern aller Kunden heimlich an dubiose Callcenter im Ausland verkauft.',
        korrekt: false,
        erklaerung: 'Datenschutzverletzungen und Datenweitergabe sind illegal und vernichten jedes Vertrauen unwiederbringlich.',
      },
      {
        text: 'Indem man die Qualität der Produkte absichtlich halbiert, damit Kunden schneller Ersatzteile kaufen müssen.',
        korrekt: false,
        erklaerung: 'Minderwertige Produkte zerstören Kundenzufriedenheit und führen zu Beschwerden, nicht zu Weiterempfehlungen.',
      },
    ],
    pruefen: false,
  },
];




