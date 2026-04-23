import { j as jsxRuntimeExports, u as useNavigate } from "./index-Dv_H9hW9.js";
import { u as useAudio } from "./useAudio-DyLEPXvu.js";
function BackButton() {
  const navigate = useNavigate();
  const { playClick } = useAudio();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      "data-ocid": "settings.back_button",
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
function Settings() {
  const { isMuted, toggleMute, playClick } = useAudio();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", "data-ocid": "settings.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-chart-2 px-5 pt-10 pb-6 rounded-b-3xl shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white font-display font-bold text-2xl", children: "Settings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 font-body text-sm", children: "Parent's Corner" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-4xl", "aria-hidden": "true", children: "⚙️" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 px-4 pt-6 pb-8 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card rounded-3xl p-5 shadow-md border-2 border-border",
          "data-ocid": "settings.sound_panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground mb-4", children: "🔊 Sound" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-semibold text-foreground", children: "Sound Effects" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground", children: "Click sounds & feedback" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "settings.sound_toggle",
                  onClick: () => {
                    playClick();
                    toggleMute();
                  },
                  className: `relative w-16 h-8 rounded-full transition-smooth active:scale-95 ${isMuted ? "bg-muted" : "bg-chart-4"}`,
                  role: "switch",
                  "aria-checked": !isMuted,
                  "aria-label": "Toggle sound effects",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-smooth ${isMuted ? "left-1" : "left-9"}`
                    }
                  )
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card rounded-3xl p-5 shadow-md border-2 border-border",
          "data-ocid": "settings.about_panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground mb-4", children: "📚 About KidLearn" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: [
              { label: "Age Range", value: "3 – 8 years" },
              { label: "Topics", value: "Alphabet, Numbers, Animals, Quiz" },
              { label: "Works Offline", value: "✅ Yes, fully offline" },
              { label: "No Ads", value: "✅ Kid-safe & distraction-free" }
            ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex justify-between items-start gap-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-sm text-muted-foreground", children: label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-sm font-semibold text-foreground text-right", children: value })
                ]
              },
              label
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-primary/10 rounded-3xl p-5 border-2 border-primary/20",
          "data-ocid": "settings.tips_panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-primary mb-3", children: "💡 Tips for Parents" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-2", children: [
              "Let your child explore at their own pace",
              "Praise effort, not just correct answers",
              "Repeat sections your child enjoys most",
              "Use the Quiz to track learning progress"
            ].map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary mt-0.5", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-sm text-foreground", children: tip })
            ] }, tip)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground font-body text-xs", children: [
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
  Settings as default
};
