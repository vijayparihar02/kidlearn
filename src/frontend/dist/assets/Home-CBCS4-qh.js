import { j as jsxRuntimeExports, u as useNavigate } from "./index-Dv_H9hW9.js";
import { u as useAudio } from "./useAudio-DyLEPXvu.js";
function SectionCard({
  title,
  subtitle,
  emoji,
  bgColor,
  route,
  ocid
}) {
  const navigate = useNavigate();
  const { playClick } = useAudio();
  const handleClick = () => {
    playClick();
    navigate({ to: route });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      "data-ocid": ocid,
      onClick: handleClick,
      className: `${bgColor} rounded-3xl p-5 flex flex-col items-start justify-end min-h-40 w-full shadow-lg transition-smooth active:scale-95 hover:shadow-xl touch-target text-left relative overflow-hidden`,
      "aria-label": `Go to ${title}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-3 right-3 text-5xl select-none",
            "aria-hidden": "true",
            children: emoji
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-display font-bold text-xl leading-tight", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 font-body text-sm mt-0.5", children: subtitle })
        ] })
      ]
    }
  );
}
const sections = [
  {
    title: "Alphabet",
    subtitle: "Alphabet Fun",
    emoji: "🔤",
    bgColor: "bg-primary",
    route: "/alphabet",
    ocid: "home.alphabet_card"
  },
  {
    title: "Numbers",
    subtitle: "Counting Games",
    emoji: "🔢",
    bgColor: "bg-chart-2",
    route: "/numbers",
    ocid: "home.numbers_card"
  },
  {
    title: "Animals",
    subtitle: "Explore Wildlife",
    emoji: "🦁",
    bgColor: "bg-accent",
    route: "/animals",
    ocid: "home.animals_card"
  },
  {
    title: "Quiz",
    subtitle: "Fun Challenge",
    emoji: "⭐",
    bgColor: "bg-chart-4",
    route: "/quiz",
    ocid: "home.quiz_card"
  },
  {
    title: "Coloring",
    subtitle: "Art Studio",
    emoji: "🎨",
    bgColor: "bg-secondary",
    route: "/coloring",
    ocid: "home.coloring_card"
  },
  {
    title: "Settings",
    subtitle: "Parent's Corner",
    emoji: "⚙️",
    bgColor: "bg-chart-2",
    route: "/settings",
    ocid: "home.settings_card"
  }
];
function Home() {
  const { isMuted, toggleMute, playClick } = useAudio();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-secondary px-5 pt-10 pb-6 rounded-b-3xl shadow-md relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white font-display font-bold text-3xl leading-tight", children: "Hello, Explorer! 👋" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 font-body text-base mt-1", children: "What do you want to learn today?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "home.mute_toggle",
          onClick: () => {
            playClick();
            toggleMute();
          },
          className: "bg-white/20 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition-smooth active:scale-95 hover:bg-white/30",
          "aria-label": isMuted ? "Unmute sounds" : "Mute sounds",
          children: isMuted ? "🔇" : "🔊"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 px-4 pt-5 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: sections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { ...section }, section.route)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground font-body text-xs", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      ". Built with love using",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-primary hover:underline",
          children: "caffeine.ai"
        }
      )
    ] }) })
  ] });
}
export {
  Home as default
};
