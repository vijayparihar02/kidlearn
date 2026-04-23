import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAudio } from "../hooks/useAudio";
import { useBackend } from "../hooks/useBackend";
import type { AlphabetEntry } from "../types";

function BackButton() {
  const navigate = useNavigate();
  const { playClick } = useAudio();
  return (
    <button
      type="button"
      data-ocid="alphabet.back_button"
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

function LetterCard({ entry, index }: { entry: AlphabetEntry; index: number }) {
  const [clicked, setClicked] = useState(false);
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
    "bg-chart-1",
  ];
  const color = colors[index % colors.length];

  return (
    <button
      type="button"
      data-ocid={`alphabet.item.${index + 1}`}
      onClick={handleClick}
      className={`${color} ${clicked ? "animate-bounce-soft" : ""} rounded-2xl p-4 flex flex-col items-center justify-center aspect-square shadow-md transition-smooth active:scale-95 hover:shadow-lg`}
      aria-label={`${entry.letter} for ${entry.word}`}
    >
      <span className="text-3xl select-none" aria-hidden="true">
        {entry.emoji}
      </span>
      <span className="text-white font-display font-bold text-2xl mt-1">
        {entry.letter}
      </span>
      <span className="text-white/80 font-body text-xs mt-0.5 truncate max-w-full px-1">
        {entry.word}
      </span>
    </button>
  );
}

export default function Alphabet() {
  const [entries, setEntries] = useState<AlphabetEntry[]>([]);
  const { fetchAlphabet } = useBackend();
  const { playSuccess } = useAudio();

  useEffect(() => {
    fetchAlphabet().then(setEntries);
    playSuccess();
  }, [fetchAlphabet, playSuccess]);

  return (
    <div className="flex flex-col min-h-screen" data-ocid="alphabet.page">
      <div className="bg-primary px-5 pt-10 pb-6 rounded-b-3xl shadow-md">
        <div className="flex items-center gap-3">
          <BackButton />
          <div>
            <h1 className="text-white font-display font-bold text-2xl">
              Alphabet
            </h1>
            <p className="text-white/80 font-body text-sm">
              Tap a letter to learn!
            </p>
          </div>
          <span className="ml-auto text-4xl" aria-hidden="true">
            🔤
          </span>
        </div>
      </div>

      <div className="flex-1 px-4 pt-5 pb-8">
        <div className="grid grid-cols-3 gap-3">
          {entries.map((entry, i) => (
            <LetterCard key={entry.letter} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
