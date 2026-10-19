import { ActiveQuestion, Question, ShuffledQuestionOption } from '../types/quiz';
import { THEMENBEREICHE } from '../data/areas';

/**
 * Fisher-Yates Shuffle
 */
export function shuffleArray<T>(array: readonly T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

interface AreaQuota {
  bereichId: number;
  availableQuestions: Question[];
  allocatedCount: number;
  remainder: number;
}

/**
 * Schichtung nach dem Verfahren der größten Reste (Hare-Niemeyer-Verfahren)
 * mit der Bedingung: mindestens 1 Frage pro verfügbarem Bereich (sofern K >= Anzahl aktiver Bereiche).
 */
export function sampleStratifiedQuestions(
  pool: Question[],
  desiredCount: number
): ActiveQuestion[] {
  if (pool.length === 0) return [];

  // Gruppiere nach Bereich
  const groupedByArea = new Map<number, Question[]>();
  for (const q of pool) {
    if (!groupedByArea.has(q.bereich)) {
      groupedByArea.set(q.bereich, []);
    }
    groupedByArea.get(q.bereich)!.push(q);
  }

  const activeAreas = Array.from(groupedByArea.keys()).sort((a, b) => a - b);
  const totalAvailable = pool.length;
  const targetCount = Math.min(desiredCount, totalAvailable);

  // Initialisiere Quotenberechnung
  const quotas: AreaQuota[] = activeAreas.map((bereichId) => {
    const questions = groupedByArea.get(bereichId)!;
    const exactQuota = (targetCount * questions.length) / totalAvailable;
    const integerPart = Math.floor(exactQuota);
    const remainder = exactQuota - integerPart;

    return {
      bereichId,
      availableQuestions: questions,
      allocatedCount: integerPart,
      remainder,
    };
  });

  // Garantie: Mindestens 1 Frage pro aktivem Bereich (falls targetCount >= activeAreas.length)
  if (targetCount >= activeAreas.length) {
    for (const q of quotas) {
      if (q.allocatedCount === 0 && q.availableQuestions.length > 0) {
        q.allocatedCount = 1;
      }
    }
  }

  // Korrigiere Überschreitung der verfügbaren Fragen im Bereich
  for (const q of quotas) {
    if (q.allocatedCount > q.availableQuestions.length) {
      q.allocatedCount = q.availableQuestions.length;
    }
  }

  // Prüfe Summe der Allokationen
  let currentSum = quotas.reduce((sum, q) => sum + q.allocatedCount, 0);

  // Falls zu viele zugeteilt wurden (durch die Min-1-Bedingung), reduziere bei den kleinsten Resten
  if (currentSum > targetCount) {
    const sortedByAscRemainder = [...quotas].sort((a, b) => a.remainder - b.remainder);
    for (const q of sortedByAscRemainder) {
      if (currentSum <= targetCount) break;
      if (q.allocatedCount > 1) {
        q.allocatedCount--;
        currentSum--;
      }
    }
  }

  // Falls noch Fragen fehlen (klassisches Verfahren der größten Reste),
  // verteile an die Bereiche mit den größten Nachkommastellen (Resten)
  if (currentSum < targetCount) {
    const sortedByDescRemainder = [...quotas].sort((a, b) => b.remainder - a.remainder);
    for (const q of sortedByDescRemainder) {
      if (currentSum >= targetCount) break;
      if (q.allocatedCount < q.availableQuestions.length) {
        q.allocatedCount++;
        currentSum++;
      }
    }
  }

  // Ziehe Fragen innerhalb jedes Bereichs zufällig
  const selectedQuestions: Question[] = [];
  for (const q of quotas) {
    const shuffledAreaPool = shuffleArray(q.availableQuestions);
    const picked = shuffledAreaPool.slice(0, q.allocatedCount);
    selectedQuestions.push(...picked);
  }

  // Mische anschließend alle gezogenen Fragen zufällig durch
  const fullyShuffled = shuffleArray(selectedQuestions);

  // Für jede Frage: Optionen zufällig mischen und Buchstaben A, B, C, D zuweisen
  const letters: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];

  return fullyShuffled.map((q) => {
    const shuffledOptionsRaw = shuffleArray(
      q.optionen.map((opt, origIdx) => ({
        ...opt,
        originalIndex: origIdx,
      }))
    );

    const shuffledOptions: ShuffledQuestionOption[] = shuffledOptionsRaw.map((opt, idx) => ({
      ...opt,
      buchstabe: letters[idx],
    }));

    return {
      id: q.id,
      bereich: q.bereich,
      frage: q.frage,
      pruefen: q.pruefen,
      optionen: shuffledOptions,
    };
  });
}

/**
 * Liefert eine Übersicht über die Verteilung pro Bereich für Statistik-Zwecke
 */
export function getAreaStatistics(pool: Question[]) {
  return THEMENBEREICHE.map((bereich) => {
    const count = pool.filter((q) => q.bereich === bereich.id).length;
    return {
      ...bereich,
      anzahlImPool: count,
      gesamtziel: bereich.bereichVonBis[1] - bereich.bereichVonBis[0] + 1,
    };
  });
}
