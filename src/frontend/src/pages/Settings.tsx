import { useNavigate } from "@tanstack/react-router";
import { useAudio } from "../hooks/useAudio";

function BackButton() {
  const navigate = useNavigate();
  const { playClick } = useAudio();
  return (
    <button
      type="button"
      data-ocid="settings.back_button"
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

export default function Settings() {
  const { isMuted, toggleMute, playClick } = useAudio();

  return (
    <div className="flex flex-col min-h-screen" data-ocid="settings.page">
      <div className="bg-chart-2 px-5 pt-10 pb-6 rounded-b-3xl shadow-md">
        <div className="flex items-center gap-3">
          <BackButton />
          <div>
            <h1 className="text-white font-display font-bold text-2xl">
              Settings
            </h1>
            <p className="text-white/80 font-body text-sm">
              Parent&apos;s Corner
            </p>
          </div>
          <span className="ml-auto text-4xl" aria-hidden="true">
            ⚙️
          </span>
        </div>
      </div>

      <div className="flex-1 px-4 pt-6 pb-8 flex flex-col gap-4">
        {/* Sound settings */}
        <div
          className="bg-card rounded-3xl p-5 shadow-md border-2 border-border"
          data-ocid="settings.sound_panel"
        >
          <h2 className="font-display font-bold text-xl text-foreground mb-4">
            🔊 Sound
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-body font-semibold text-foreground">
                Sound Effects
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Click sounds &amp; feedback
              </p>
            </div>
            <button
              type="button"
              data-ocid="settings.sound_toggle"
              onClick={() => {
                playClick();
                toggleMute();
              }}
              className={`relative w-16 h-8 rounded-full transition-smooth active:scale-95 ${isMuted ? "bg-muted" : "bg-chart-4"}`}
              role="switch"
              aria-checked={!isMuted}
              aria-label="Toggle sound effects"
            >
              <span
                className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-smooth ${isMuted ? "left-1" : "left-9"}`}
              />
            </button>
          </div>
        </div>

        {/* About */}
        <div
          className="bg-card rounded-3xl p-5 shadow-md border-2 border-border"
          data-ocid="settings.about_panel"
        >
          <h2 className="font-display font-bold text-xl text-foreground mb-4">
            📚 About KidLearn
          </h2>
          <div className="flex flex-col gap-3">
            {[
              { label: "Age Range", value: "3 – 8 years" },
              { label: "Topics", value: "Alphabet, Numbers, Animals, Quiz" },
              { label: "Works Offline", value: "✅ Yes, fully offline" },
              { label: "No Ads", value: "✅ Kid-safe & distraction-free" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex justify-between items-start gap-3"
              >
                <span className="font-body text-sm text-muted-foreground">
                  {label}
                </span>
                <span className="font-body text-sm font-semibold text-foreground text-right">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tips for parents */}
        <div
          className="bg-primary/10 rounded-3xl p-5 border-2 border-primary/20"
          data-ocid="settings.tips_panel"
        >
          <h2 className="font-display font-bold text-xl text-primary mb-3">
            💡 Tips for Parents
          </h2>
          <ul className="flex flex-col gap-2">
            {[
              "Let your child explore at their own pace",
              "Praise effort, not just correct answers",
              "Repeat sections your child enjoys most",
              "Use the Quiz to track learning progress",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span className="font-body text-sm text-foreground">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-8 text-center">
        <p className="text-muted-foreground font-body text-xs">
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </div>
  );
}
