import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { useAudio } from "../hooks/useAudio";
import { useBackend } from "../hooks/useBackend";
import type { QuizQuestion } from "../types";

function BackButton() {
  const navigate = useNavigate();
  const { playClick } = useAudio();
  return (
    <button
      type="button"
      data-ocid="quiz.back_button"
      onClick={() => {
        playClick();
        navigate({ to: "/" });
      }}
      className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white text-xl transition-smooth active:scale-95 hover:bg-white/30"
      aria-label="Go back"
    >
      ←
    </button>
  );
}

type AnswerState = "idle" | "correct" | "wrong";

export default function Quiz() {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answerState, setAnswerState] = useState<AnswerState>("idle");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const { fetchQuizQuestions } = useBackend();
  const { playSuccess, playError, playClick } = useAudio();

  const loadQuestions = useCallback(() => {
    fetchQuizQuestions().then((qs) => {
      const shuffled = [...qs].sort(() => Math.random() - 0.5).slice(0, 10);
      setQuestions(shuffled);
    });
  }, [fetchQuizQuestions]);

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = useCallback(
    (optionIndex: number) => {
      if (answerState !== "idle" || !currentQuestion) return;
      setSelectedOption(optionIndex);
      const isCorrect = optionIndex === currentQuestion.correctIndex;
      setAnswerState(isCorrect ? "correct" : "wrong");
      if (isCorrect) {
        playSuccess();
        setScore((s) => s + 1);
      } else {
        playError();
      }
      setTimeout(() => {
        if (currentIndex + 1 >= questions.length) {
          setGameOver(true);
        } else {
          setCurrentIndex((i) => i + 1);
          setAnswerState("idle");
          setSelectedOption(null);
        }
      }, 1400);
    },
    [
      answerState,
      currentQuestion,
      currentIndex,
      questions.length,
      playSuccess,
      playError,
    ],
  );

  const restart = () => {
    playClick();
    setCurrentIndex(0);
    setScore(0);
    setAnswerState("idle");
    setSelectedOption(null);
    setGameOver(false);
    loadQuestions();
  };

  const optionColors = (i: number): string => {
    if (answerState === "idle")
      return "bg-card border-2 border-border text-foreground hover:border-primary hover:shadow-md";
    if (i === currentQuestion?.correctIndex)
      return "bg-chart-4 border-2 border-transparent text-white";
    if (i === selectedOption && answerState === "wrong")
      return "bg-primary border-2 border-transparent text-white";
    return "bg-card border-2 border-border text-muted-foreground opacity-60";
  };

  if (!currentQuestion && !gameOver) {
    return (
      <div
        className="flex flex-col min-h-screen items-center justify-center"
        data-ocid="quiz.loading_state"
      >
        <div className="text-6xl animate-bounce">⭐</div>
        <p className="font-display font-bold text-xl text-foreground mt-4">
          Loading Quiz...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen" data-ocid="quiz.page">
      <div className="bg-chart-4 px-5 pt-10 pb-6 rounded-b-3xl shadow-md">
        <div className="flex items-center gap-3">
          <BackButton />
          <div>
            <h1 className="text-white font-display font-bold text-2xl">
              Quiz Time!
            </h1>
            <p className="text-white/80 font-body text-sm">
              Question {currentIndex + 1} of {questions.length}
            </p>
          </div>
          <div className="ml-auto bg-white/20 rounded-2xl px-3 py-1.5 flex items-center gap-1.5">
            <span className="text-lg">⭐</span>
            <span
              className="text-white font-display font-bold text-lg"
              data-ocid="quiz.score"
            >
              {score}
            </span>
          </div>
        </div>
        {/* Progress bar */}
        <div className="mt-4 bg-white/20 rounded-full h-2.5">
          <div
            className="bg-white rounded-full h-2.5 transition-smooth"
            style={{
              width: `${(currentIndex / Math.max(questions.length, 1)) * 100}%`,
            }}
          />
        </div>
      </div>

      {gameOver ? (
        <div
          className="flex-1 flex flex-col items-center justify-center px-6 gap-6"
          data-ocid="quiz.success_state"
        >
          <div className="text-8xl animate-bounce-soft">🏆</div>
          <div className="text-center">
            <p className="font-display font-bold text-3xl text-foreground">
              {score >= 8
                ? "Amazing! 🌟"
                : score >= 5
                  ? "Good Job! 👍"
                  : "Keep Trying! 💪"}
            </p>
            <p className="font-body text-lg text-muted-foreground mt-2">
              You got <span className="font-bold text-primary">{score}</span>{" "}
              out of <span className="font-bold">{questions.length}</span>{" "}
              correct!
            </p>
          </div>
          <button
            type="button"
            data-ocid="quiz.restart_button"
            onClick={restart}
            className="btn-primary w-full max-w-xs"
          >
            Play Again! 🎮
          </button>
        </div>
      ) : (
        <div className="flex-1 px-4 pt-6 pb-8 flex flex-col gap-5">
          {/* Question card */}
          <div className="bg-card rounded-3xl p-6 shadow-md border-2 border-border text-center animate-slide-in">
            <p
              className="font-display font-bold text-xl text-foreground leading-snug"
              data-ocid="quiz.question_text"
            >
              {currentQuestion?.questionText}
            </p>
          </div>

          {/* Feedback */}
          {answerState !== "idle" && (
            <div
              className={`rounded-2xl py-3 px-5 text-center font-display font-bold text-xl animate-pop-in ${
                answerState === "correct"
                  ? "bg-chart-4 text-white"
                  : "bg-primary text-primary-foreground"
              }`}
              data-ocid={
                answerState === "correct"
                  ? "quiz.success_state"
                  : "quiz.error_state"
              }
            >
              {answerState === "correct" ? "✅ Good Job!" : "❌ Try Again!"}
            </div>
          )}

          {/* Options */}
          <div className="grid grid-cols-2 gap-3">
            {currentQuestion?.options.map((option, i) => (
              <button
                type="button"
                key={option}
                data-ocid={`quiz.option.${i + 1}`}
                onClick={() => handleAnswer(i)}
                disabled={answerState !== "idle"}
                className={`${optionColors(i)} rounded-2xl py-4 px-3 font-display font-bold text-lg transition-smooth active:scale-95 touch-target w-full text-center`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
