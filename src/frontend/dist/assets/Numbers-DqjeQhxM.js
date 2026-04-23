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
      "data-ocid": "numbers.back_button",
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
function NumberCard({ entry, index }) {
  const [clicked, setClicked] = reactExports.useState(false);
  const { playClick } = useAudio();
  const handleClick = () => {
    playClick();
    setClicked(true);
    setTimeout(() => setClicked(false), 600);
  };
  const colors = [
    "bg-chart-2",
    "bg-primary",
    "bg-chart-4",
    "bg-accent",
    "bg-secondary"
  ];
  const color = colors[index % colors.length];
  const dots = Array.from({ length: Math.min(entry.number, 10) }, (_, i) => i);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      "data-ocid": `numbers.item.${index + 1}`,
      onClick: handleClick,
      className: `${color} ${clicked ? "animate-bounce-soft" : ""} rounded-3xl p-5 flex flex-col items-center gap-2 shadow-md transition-smooth active:scale-95 hover:shadow-lg w-full`,
      "aria-label": `Number ${entry.number}: ${entry.label}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl select-none", "aria-hidden": "true", children: entry.emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-display font-bold text-5xl leading-none", children: entry.number }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-body font-semibold text-lg", children: entry.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex flex-wrap justify-center gap-1 max-w-20",
            "aria-hidden": "true",
            children: dots.map((dotIdx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "w-3 h-3 rounded-full bg-white/70 inline-block"
              },
              dotIdx
            ))
          }
        )
      ]
    }
  );
}
function Numbers() {
  const [entries, setEntries] = reactExports.useState([]);
  const { fetchNumbers } = useBackend();
  const { playSuccess } = useAudio();
  reactExports.useEffect(() => {
    fetchNumbers().then(setEntries);
    playSuccess();
  }, [fetchNumbers, playSuccess]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", "data-ocid": "numbers.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-chart-2 px-5 pt-10 pb-6 rounded-b-3xl shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white font-display font-bold text-2xl", children: "Numbers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 font-body text-sm", children: "Count and learn!" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-4xl", "aria-hidden": "true", children: "🔢" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 px-4 pt-5 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: entries.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(NumberCard, { entry, index: i }, entry.number)) }) })
  ] });
}
export {
  Numbers as default
};
