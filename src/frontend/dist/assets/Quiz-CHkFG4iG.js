import { r as reactExports, j as jsxRuntimeExports, u as useNavigate } from "./index-Dv_H9hW9.js";
import { u as useAudio } from "./useAudio-DyLEPXvu.js";
import { u as useBackend } from "./useBackend-C7E9OHat.js";
function BackButton() {
  const navigate = useNavigate();
  const { playClick } = useAudio();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      "data-ocid": "quiz.back_button",
      onClick: () => {
        playClick();
        navigate({ to: "/" });
      },
      className: "w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white text-xl transition-smooth active:scale-95 hover:bg-white/30",
      "aria-label": "Go back",
      children: "←"
    }
  );
}
function Quiz() {
  const [questions, setQuestions] = reactExports.useState([]);
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [score, setScore] = reactExports.useState(0);
  const [answerState, setAnswerState] = reactExports.useState("idle");
  const [selectedOption, setSelectedOption] = reactExports.useState(null);
  const [gameOver, setGameOver] = reactExports.useState(false);
  const { fetchQuizQuestions } = useBackend();
  const { playSuccess, playError, playClick } = useAudio();
  const loadQuestions = reactExports.useCallback(() => {
    fetchQuizQuestions().then((qs) => {
      const shuffled = [...qs].sort(() => Math.random() - 0.5).slice(0, 10);
      setQuestions(shuffled);
    });
  }, [fetchQuizQuestions]);
  reactExports.useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);
  const currentQuestion = questions[currentIndex];
  const handleAnswer = reactExports.useCallback(
    (optionIndex) => {
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
      playError
    ]
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
  const optionColors = (i) => {
    if (answerState === "idle")
      return "bg-card border-2 border-border text-foreground hover:border-primary hover:shadow-md";
    if (i === (currentQuestion == null ? void 0 : currentQuestion.correctIndex))
      return "bg-chart-4 border-2 border-transparent text-white";
    if (i === selectedOption && answerState === "wrong")
      return "bg-primary border-2 border-transparent text-white";
    return "bg-card border-2 border-border text-muted-foreground opacity-60";
  };
  if (!currentQuestion && !gameOver) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col min-h-screen items-center justify-center",
        "data-ocid": "quiz.loading_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl animate-bounce", children: "⭐" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-xl text-foreground mt-4", children: "Loading Quiz..." })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", "data-ocid": "quiz.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-chart-4 px-5 pt-10 pb-6 rounded-b-3xl shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white font-display font-bold text-2xl", children: "Quiz Time!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/80 font-body text-sm", children: [
            "Question ",
            currentIndex + 1,
            " of ",
            questions.length
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto bg-white/20 rounded-2xl px-3 py-1.5 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "⭐" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-white font-display font-bold text-lg",
              "data-ocid": "quiz.score",
              children: score
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 bg-white/20 rounded-full h-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "bg-white rounded-full h-2.5 transition-smooth",
          style: {
            width: `${currentIndex / Math.max(questions.length, 1) * 100}%`
          }
        }
      ) })
    ] }),
    gameOver ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex-1 flex flex-col items-center justify-center px-6 gap-6",
        "data-ocid": "quiz.success_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-8xl animate-bounce-soft", children: "🏆" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-3xl text-foreground", children: score >= 8 ? "Amazing! 🌟" : score >= 5 ? "Good Job! 👍" : "Keep Trying! 💪" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-lg text-muted-foreground mt-2", children: [
              "You got ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary", children: score }),
              " ",
              "out of ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: questions.length }),
              " ",
              "correct!"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "quiz.restart_button",
              onClick: restart,
              className: "btn-primary w-full max-w-xs",
              children: "Play Again! 🎮"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 px-4 pt-6 pb-8 flex flex-col gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-3xl p-6 shadow-md border-2 border-border text-center animate-slide-in", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-display font-bold text-xl text-foreground leading-snug",
          "data-ocid": "quiz.question_text",
          children: currentQuestion == null ? void 0 : currentQuestion.questionText
        }
      ) }),
      answerState !== "idle" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `rounded-2xl py-3 px-5 text-center font-display font-bold text-xl animate-pop-in ${answerState === "correct" ? "bg-chart-4 text-white" : "bg-primary text-primary-foreground"}`,
          "data-ocid": answerState === "correct" ? "quiz.success_state" : "quiz.error_state",
          children: answerState === "correct" ? "✅ Good Job!" : "❌ Try Again!"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: currentQuestion == null ? void 0 : currentQuestion.options.map((option, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": `quiz.option.${i + 1}`,
          onClick: () => handleAnswer(i),
          disabled: answerState !== "idle",
          className: `${optionColors(i)} rounded-2xl py-4 px-3 font-display font-bold text-lg transition-smooth active:scale-95 touch-target w-full text-center`,
          children: option
        },
        option
      )) })
    ] })
  ] });
}
export {
  Quiz as default
};
