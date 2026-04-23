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
      "data-ocid": "animals.back_button",
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
function AnimalCard({ entry, index }) {
  const [showSound, setShowSound] = reactExports.useState(false);
  const { playAnimalSound, playClick } = useAudio();
  const handleClick = () => {
    playClick();
    playAnimalSound(entry.name);
    setShowSound(true);
    setTimeout(() => setShowSound(false), 1800);
  };
  const colors = [
    "bg-accent",
    "bg-primary",
    "bg-chart-4",
    "bg-secondary",
    "bg-chart-2",
    "bg-chart-1"
  ];
  const color = colors[index % colors.length];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      "data-ocid": `animals.item.${index + 1}`,
      onClick: handleClick,
      className: `${color} rounded-3xl p-5 flex flex-col items-center gap-2 shadow-md transition-smooth active:scale-95 hover:shadow-lg w-full relative overflow-hidden`,
      "aria-label": `${entry.name}: ${entry.sound}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl select-none", "aria-hidden": "true", children: entry.emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-display font-bold text-xl", children: entry.name }),
        showSound ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/90 font-body text-sm animate-pop-in text-center leading-tight px-1", children: [
          "“",
          entry.sound,
          "”"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60 font-body text-sm", children: "Tap me! 👆" })
      ]
    }
  );
}
function Animals() {
  const [entries, setEntries] = reactExports.useState([]);
  const { fetchAnimals } = useBackend();
  const { playSuccess } = useAudio();
  reactExports.useEffect(() => {
    fetchAnimals().then(setEntries);
    playSuccess();
  }, [fetchAnimals, playSuccess]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", "data-ocid": "animals.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-accent px-5 pt-10 pb-6 rounded-b-3xl shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-accent-foreground font-display font-bold text-2xl", children: "Animals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent-foreground/70 font-body text-sm", children: "Tap an animal to hear its sound!" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-4xl", "aria-hidden": "true", children: "🦁" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 px-4 pt-5 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: entries.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimalCard, { entry, index: i }, entry.name)) }) })
  ] });
}
export {
  Animals as default
};
