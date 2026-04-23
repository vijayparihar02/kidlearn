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
      "data-ocid": "alphabet.back_button",
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
function LetterCard({ entry, index }) {
  const [clicked, setClicked] = reactExports.useState(false);
  const { playClick } = useAudio();
  const handleClick = () => {
    playClick();
    setClicked(true);
    setTimeout(() => setClicked(false), 600);
  };
  const colors = [
    "bg-primary",
    "bg-chart-2",
    "bg-accent",
    "bg-chart-4",
    "bg-secondary",
    "bg-chart-1"
  ];
  const color = colors[index % colors.length];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      "data-ocid": `alphabet.item.${index + 1}`,
      onClick: handleClick,
      className: `${color} ${clicked ? "animate-bounce-soft" : ""} rounded-2xl p-4 flex flex-col items-center justify-center aspect-square shadow-md transition-smooth active:scale-95 hover:shadow-lg`,
      "aria-label": `${entry.letter} for ${entry.word}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl select-none", "aria-hidden": "true", children: entry.emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-display font-bold text-2xl mt-1", children: entry.letter }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80 font-body text-xs mt-0.5 truncate max-w-full px-1", children: entry.word })
      ]
    }
  );
}
function Alphabet() {
  const [entries, setEntries] = reactExports.useState([]);
  const { fetchAlphabet } = useBackend();
  const { playSuccess } = useAudio();
  reactExports.useEffect(() => {
    fetchAlphabet().then(setEntries);
    playSuccess();
  }, [fetchAlphabet, playSuccess]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", "data-ocid": "alphabet.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary px-5 pt-10 pb-6 rounded-b-3xl shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white font-display font-bold text-2xl", children: "Alphabet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 font-body text-sm", children: "Tap a letter to learn!" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-4xl", "aria-hidden": "true", children: "🔤" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 px-4 pt-5 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: entries.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(LetterCard, { entry, index: i }, entry.letter)) }) })
  ] });
}
export {
  Alphabet as default
};
