import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAudio } from "../hooks/useAudio";
import { useBackend } from "../hooks/useBackend";
import type { AnimalEntry } from "../types";

function BackButton() {
  const navigate = useNavigate();
  const { playClick } = useAudio();
  return (
    <button
      type="button"
      data-ocid="animals.back_button"
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

function AnimalCard({ entry, index }: { entry: AnimalEntry; index: number }) {
  const [showSound, setShowSound] = useState(false);
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
    "bg-chart-1",
  ];
  const color = colors[index % colors.length];

  return (
    <button
      type="button"
      data-ocid={`animals.item.${index + 1}`}
      onClick={handleClick}
      className={`${color} rounded-3xl p-5 flex flex-col items-center gap-2 shadow-md transition-smooth active:scale-95 hover:shadow-lg w-full relative overflow-hidden`}
      aria-label={`${entry.name}: ${entry.sound}`}
    >
      <span className="text-6xl select-none" aria-hidden="true">
        {entry.emoji}
      </span>
      <span className="text-white font-display font-bold text-xl">
        {entry.name}
      </span>
      {showSound ? (
        <span className="text-white/90 font-body text-sm animate-pop-in text-center leading-tight px-1">
          &ldquo;{entry.sound}&rdquo;
        </span>
      ) : (
        <span className="text-white/60 font-body text-sm">Tap me! 👆</span>
      )}
    </button>
  );
}

export default function Animals() {
  const [entries, setEntries] = useState<AnimalEntry[]>([]);
  const { fetchAnimals } = useBackend();
  const { playSuccess } = useAudio();

  useEffect(() => {
    fetchAnimals().then(setEntries);
    playSuccess();
  }, [fetchAnimals, playSuccess]);

  return (
    <div className="flex flex-col min-h-screen" data-ocid="animals.page">
      <div className="bg-accent px-5 pt-10 pb-6 rounded-b-3xl shadow-md">
        <div className="flex items-center gap-3">
          <BackButton />
          <div>
            <h1 className="text-accent-foreground font-display font-bold text-2xl">
              Animals
            </h1>
            <p className="text-accent-foreground/70 font-body text-sm">
              Tap an animal to hear its sound!
            </p>
          </div>
          <span className="ml-auto text-4xl" aria-hidden="true">
            🦁
          </span>
        </div>
      </div>

      <div className="flex-1 px-4 pt-5 pb-8">
        <div className="grid grid-cols-2 gap-4">
          {entries.map((entry, i) => (
            <AnimalCard key={entry.name} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
