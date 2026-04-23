import { useCallback } from "react";
import {
  ALPHABET_DATA,
  ANIMALS_DATA,
  NUMBERS_DATA,
  QUIZ_QUESTIONS,
} from "../constants";
import type {
  AlphabetEntry,
  AnimalEntry,
  NumberEntry,
  QuizQuestion,
} from "../types";

/**
 * Wraps backend actor calls with static fallback data.
 * Since the backend interface is currently empty (backend.d.ts),
 * all data is served from static constants for full offline support.
 */
export function useBackend() {
  const fetchAlphabet = useCallback(async (): Promise<AlphabetEntry[]> => {
    try {
      // Future: const result = await actor.getAlphabet();
      return ALPHABET_DATA;
    } catch {
      return ALPHABET_DATA;
    }
  }, []);

  const fetchNumbers = useCallback(async (): Promise<NumberEntry[]> => {
    try {
      // Future: const result = await actor.getNumbers();
      return NUMBERS_DATA;
    } catch {
      return NUMBERS_DATA;
    }
  }, []);

  const fetchAnimals = useCallback(async (): Promise<AnimalEntry[]> => {
    try {
      // Future: const result = await actor.getAnimals();
      return ANIMALS_DATA;
    } catch {
      return ANIMALS_DATA;
    }
  }, []);

  const fetchQuizQuestions = useCallback(async (): Promise<QuizQuestion[]> => {
    try {
      // Future: const result = await actor.getQuizQuestions();
      return QUIZ_QUESTIONS;
    } catch {
      return QUIZ_QUESTIONS;
    }
  }, []);

  return { fetchAlphabet, fetchNumbers, fetchAnimals, fetchQuizQuestions };
}
