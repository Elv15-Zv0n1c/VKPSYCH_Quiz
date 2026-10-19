import { AreaDefinition } from '../types/quiz';

export const THEMENBEREICHE: AreaDefinition[] = [
  {
    id: 1,
    titel: 'Grundlagen der Führung',
    bereichVonBis: [1, 6],
    beschreibung: 'Aufgaben, Wesen von Führung, Verantwortung und Effektivität',
  },
  {
    id: 2,
    titel: 'Menschenbilder',
    bereichVonBis: [7, 17],
    beschreibung: 'Theorie X/Y, Z-Theorie, Edgar Schein, Generationenunterschiede',
  },
  {
    id: 3,
    titel: 'Führungsstile und Führungsmodelle',
    bereichVonBis: [18, 37],
    beschreibung: 'Lewin, Weber, Tannenbaum/Schmidt, Homburg, Blake/Mouton, Reddin',
  },
  {
    id: 4,
    titel: 'Management by…, moderne und digitale Führung',
    bereichVonBis: [38, 53],
    beschreibung: 'Management-by-Techniken, Digital Leadership, Clean Leadership, Agilität',
  },
  {
    id: 5,
    titel: 'Wirksame Führung, Selbstmanagement und Coaching',
    bereichVonBis: [54, 68],
    beschreibung: 'Grundsätze nach Malik, Eisenhower, Coaching, Führungsspanne',
  },
  {
    id: 6,
    titel: 'Kaufverhalten und Emotionen',
    bereichVonBis: [69, 75],
    beschreibung: 'Kaufentscheidungen, Emotionssysteme, Limbic®-System von Häusel',
  },
  {
    id: 7,
    titel: 'Verkäufer- und Kundentypen',
    bereichVonBis: [76, 84],
    beschreibung: 'Hard-Seller, Kunden-Versteher, DISG®- und Insights®-MDI-Modelle',
  },
  {
    id: 8,
    titel: 'Kommunikation, Vertrauen, Kaufmotive und Emotionalisierung',
    bereichVonBis: [85, 92],
    beschreibung: 'Körpersprache, Spiegelneuronen, 3 Säulen des Vertrauens, Storytelling',
  },
  {
    id: 9,
    titel: 'Preis- und Verhandlungsführung',
    bereichVonBis: [93, 100],
    beschreibung: 'Preisanker, Harvard-Konzept, LIMO-Methode, Verhandlungsphasen',
  },
];

export function getAreaById(bereichId: number): AreaDefinition | undefined {
  return THEMENBEREICHE.find((b) => b.id === bereichId);
}
