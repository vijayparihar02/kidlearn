export interface AlphabetEntry {
  letter: string;
  word: string;
  emoji: string;
}

export interface NumberEntry {
  number: number;
  label: string;
  emoji: string;
}

export interface AnimalEntry {
  name: string;
  emoji: string;
  sound: string;
}

export interface QuizQuestion {
  questionText: string;
  options: string[];
  correctIndex: number;
  category: string;
}
