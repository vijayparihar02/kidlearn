import { useNavigate } from "@tanstack/react-router";
import { useAudio } from "../hooks/useAudio";

interface SectionCardProps {
  title: string;
  subtitle: string;
  emoji: string;
  bgColor: string;
  route: string;
  ocid: string;
}

function SectionCard({
  title,
  subtitle,
  emoji,
  bgColor,
  route,
  ocid,
}: SectionCardProps) {
  const navigate = useNavigate();
  const { playClick } = useAudio();

  const handleClick = () => {
    playClick();
    navigate({ to: route });
  };

  return (
    <button
      type="button"
      data-ocid={ocid}
      onClick={handleClick}
      className={`${bgColor} rounded-3xl p-5 flex flex-col items-start justify-end min-h-40 w-full shadow-lg transition-smooth active:scale-95 hover:shadow-xl touch-target text-left relative overflow-hidden`}
      aria-label={`Go to ${title}`}
    >
      <div
        className="absolute top-3 right-3 text-5xl select-none"
        aria-hidden="true"
      >
        {emoji}
      </div>
      <div>
        <p className="text-white font-display font-bold text-xl leading-tight">
          {title}
        </p>
        <p className="text-white/80 font-body text-sm mt-0.5">{subtitle}</p>
      </div>
    </button>
  );
}

const sections: SectionCardProps[] = [
  {
    title: "Alphabet",
    subtitle: "Alphabet Fun",
    emoji: "🔤",
    bgColor: "bg-primary",
    route: "/alphabet",
    ocid: "home.alphabet_card",
  },
  {
    title: "Numbers",
    subtitle: "Counting Games",
    emoji: "🔢",
    bgColor: "bg-chart-2",
    route: "/numbers",
    ocid: "home.numbers_card",
  },
  {
    title: "Animals",
    subtitle: "Explore Wildlife",
    emoji: "🦁",
    bgColor: "bg-accent",
    route: "/animals",
    ocid: "home.animals_card",
  },
  {
    title: "Quiz",
    subtitle: "Fun Challenge",
    emoji: "⭐",
    bgColor: "bg-chart-4",
    route: "/quiz",
    ocid: "home.quiz_card",
  },
  {
    title: "Coloring",
    subtitle: "Art Studio",
    emoji: "🎨",
    bgColor: "bg-secondary",
    route: "/coloring",
    ocid: "home.coloring_card",
  },
  {
    title: "Settings",
    subtitle: "Parent's Corner",
    emoji: "⚙️",
    bgColor: "bg-chart-2",
    route: "/settings",
    ocid: "home.settings_card",
  },
];

export default function Home() {
  const { isMuted, toggleMute, playClick } = useAudio();

  return (
    <div className="flex flex-col min-h-screen" data-ocid="home.page">
      {/* Header */}
      <div className="bg-secondary px-5 pt-10 pb-6 rounded-b-3xl shadow-md relative">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white font-display font-bold text-3xl leading-tight">
              Hello, Explorer! 👋
            </h1>
            <p className="text-white/80 font-body text-base mt-1">
              What do you want to learn today?
            </p>
          </div>
          <button
            type="button"
            data-ocid="home.mute_toggle"
            onClick={() => {
              playClick();
              toggleMute();
            }}
            className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition-smooth active:scale-95 hover:bg-white/30"
            aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
          >
            {isMuted ? "🔇" : "🔊"}
          </button>
        </div>
      </div>

      {/* Section grid */}
      <div className="flex-1 px-4 pt-5 pb-8">
        <div className="grid grid-cols-2 gap-4">
          {sections.map((section) => (
            <SectionCard key={section.route} {...section} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-6 text-center">
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
