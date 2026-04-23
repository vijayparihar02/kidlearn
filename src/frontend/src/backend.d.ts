import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface AnimalEntry {
    name: string;
    emoji: string;
    sound: string;
}
export interface NumberEntry {
    value: bigint;
    wordLabel: string;
    emoji: string;
}
export interface AlphabetEntry {
    word: string;
    emoji: string;
    letter: string;
}
export interface QuizQuestion {
    correctIndex: bigint;
    questionText: string;
    category: string;
    options: Array<string>;
}
export interface backendInterface {
    getAlphabet(): Promise<Array<AlphabetEntry>>;
    getAnimals(): Promise<Array<AnimalEntry>>;
    getNumbers(): Promise<Array<NumberEntry>>;
    getQuizQuestions(): Promise<Array<QuizQuestion>>;
}
