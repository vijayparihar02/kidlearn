import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAudio } from "../hooks/useAudio";
import { useBackend } from "../hooks/useBackend";
import type { NumberEntry } from "../types";

function BackButton() {
  const navigate = useNavigate();
  const { playClick } = useAudio();
  return (
    <button
      type="button"
      data-ocid="numbers.back_button"
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

function NumberCard({ entry, index }: { entry: NumberEntry; index: number }) {
  const [clicked, setClicked] = useState(false);
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
    "bg-secondary",
  ];
  const color = colors[index % colors.length];

  // Generate dot indicators
  const dots = Array.from({ length: Math.min(entry.number, 10) }, (_, i) => i);

  return (
    <button
      type="button"
      data-ocid={`numbers.item.${index + 1}`}
      onClick={handleClick}
      className={`${color} ${clicked ? "animate-bounce-soft" : ""} rounded-3xl p-5 flex flex-col items-center gap-2 shadow-md transition-smooth active:scale-95 hover:shadow-lg w-full`}
      aria-label={`Number ${entry.number}: ${entry.label}`}
    >
      <span className="text-4xl select-none" aria-hidden="true">
        {entry.emoji}
      </span>
      <span className="text-white font-display font-bold text-5xl leading-none">
        {entry.number}
      </span>
      <span className="text-white font-body font-semibold text-lg">
        {entry.label}
      </span>
      <div
        className="flex flex-wrap justify-center gap-1 max-w-20"
        aria-hidden="true"
      >
        {dots.map((dotIdx) => (
          <span
            key={dotIdx}
            className="w-3 h-3 rounded-full bg-white/70 inline-block"
          />
        ))}
      </div>
    </button>
  );
}

export default function Numbers() {
  const [entries, setEntries] = useState<NumberEntry[]>([]);
  const { fetchNumbers } = useBackend();
  const { playSuccess } = useAudio();

  useEffect(() => {
    fetchNumbers().then(setEntries);
    playSuccess();
  }, [fetchNumbers, playSuccess]);

  return (
    <div className="flex flex-col min-h-screen" data-ocid="numbers.page">
      <div className="bg-chart-2 px-5 pt-10 pb-6 rounded-b-3xl shadow-md">
        <div className="flex items-center gap-3">
          <BackButton />
          <div>
            <h1 className="text-white font-display font-bold text-2xl">
              Numbers
            </h1>
            <p className="text-white/80 font-body text-sm">Count and learn!</p>
          </div>
          <span className="ml-auto text-4xl" aria-hidden="true">
            🔢
          </span>
        </div>
      </div>

      <div className="flex-1 px-4 pt-5 pb-8">
        <div className="grid grid-cols-2 gap-4">
          {entries.map((entry, i) => (
            <NumberCard key={entry.number} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
