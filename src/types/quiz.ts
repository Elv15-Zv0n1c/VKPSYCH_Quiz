export interface QuestionOption {
  text: string;
  korrekt: boolean;
  erklaerung: string;
}

export interface Question {
  id: number;
  bereich: number;
  frage: string;
  optionen: [QuestionOption, QuestionOption, QuestionOption, QuestionOption];
  pruefen: boolean;
}

export interface AreaDefinition {
  id: number;
  titel: string;
  bereichVonBis: [number, number];
  beschreibung: string;
}

export interface ShuffledQuestionOption extends QuestionOption {
  originalIndex: number;
  buchstabe: 'A' | 'B' | 'C' | 'D';
}

export interface ActiveQuestion extends Omit<Question, 'optionen'> {
  optionen: ShuffledQuestionOption[];
}

export interface UserAnswerRecord {
  question: ActiveQuestion;
  selectedOptionIndex: number; // 0, 1, 2, 3 in shuffled options
  isCorrect: boolean;
}

export type QuizScreenType = 'start' | 'quiz' | 'result';
