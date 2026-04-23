import { useCallback, useEffect, useRef, useState } from "react";

const MUTE_KEY = "kidlearn_muted";

function createAudioContext(): AudioContext | null {
  try {
    return new (
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext
    )();
  } catch {
    return null;
  }
}

function playTone(
  ctx: AudioContext,
  frequency: number,
  duration: number,
  type: OscillatorType = "sine",
  gainValue = 0.3,
  delay = 0,
) {
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, ctx.currentTime + delay);
  gain.gain.setValueAtTime(0, ctx.currentTime + delay);
  gain.gain.linearRampToValueAtTime(gainValue, ctx.currentTime + delay + 0.01);
  gain.gain.exponentialRampToValueAtTime(
    0.001,
    ctx.currentTime + delay + duration,
  );
  oscillator.start(ctx.currentTime + delay);
  oscillator.stop(ctx.currentTime + delay + duration + 0.05);
}

export function useAudio() {
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    try {
      return localStorage.getItem(MUTE_KEY) === "true";
    } catch {
      return false;
    }
  });
  const ctxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(MUTE_KEY, String(isMuted));
    } catch {
      // ignore
    }
  }, [isMuted]);

  const getCtx = useCallback((): AudioContext | null => {
    if (!ctxRef.current || ctxRef.current.state === "closed") {
      ctxRef.current = createAudioContext();
    }
    if (ctxRef.current?.state === "suspended") {
      ctxRef.current.resume();
    }
    return ctxRef.current;
  }, []);

  const playClick = useCallback(() => {
    if (isMuted) return;
    const ctx = getCtx();
    if (!ctx) return;
    playTone(ctx, 600, 0.08, "triangle", 0.25);
  }, [isMuted, getCtx]);

  const playSuccess = useCallback(() => {
    if (isMuted) return;
    const ctx = getCtx();
    if (!ctx) return;
    // Cheerful ascending chime
    const notes = [523, 659, 784, 1047];
    notes.forEach((freq, i) => {
      playTone(ctx, freq, 0.25, "sine", 0.3, i * 0.12);
    });
  }, [isMuted, getCtx]);

  const playError = useCallback(() => {
    if (isMuted) return;
    const ctx = getCtx();
    if (!ctx) return;
    // Short descending buzz
    playTone(ctx, 300, 0.12, "sawtooth", 0.2);
    playTone(ctx, 220, 0.18, "sawtooth", 0.2, 0.12);
  }, [isMuted, getCtx]);

  const playAnimalSound = useCallback(
    (name: string) => {
      if (isMuted) return;
      const ctx = getCtx();
      if (!ctx) return;
      // Map each animal to a distinct frequency/pattern
      const animalTones: Record<
        string,
        { freqs: number[]; type: OscillatorType }
      > = {
        Dog: { freqs: [400, 450, 400], type: "square" },
        Cat: { freqs: [600, 700, 600, 700], type: "sine" },
        Cow: { freqs: [180, 160, 170], type: "sawtooth" },
        Duck: { freqs: [500, 450, 500, 450], type: "triangle" },
        Lion: { freqs: [120, 100, 90], type: "sawtooth" },
        Elephant: { freqs: [250, 300, 350, 400], type: "sawtooth" },
        Frog: { freqs: [350, 550, 350, 550], type: "square" },
        Monkey: { freqs: [700, 600, 700, 500, 700], type: "sine" },
        Horse: { freqs: [300, 350, 300, 350, 400], type: "triangle" },
        Sheep: { freqs: [500, 550, 500], type: "sine" },
        Pig: { freqs: [400, 380, 360, 340], type: "square" },
        Bear: { freqs: [150, 130, 120], type: "sawtooth" },
      };
      const config = animalTones[name] ?? {
        freqs: [440, 550],
        type: "sine" as OscillatorType,
      };
      config.freqs.forEach((freq, i) => {
        playTone(ctx, freq, 0.18, config.type, 0.25, i * 0.15);
      });
    },
    [isMuted, getCtx],
  );

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  return {
    isMuted,
    toggleMute,
    playClick,
    playSuccess,
    playError,
    playAnimalSound,
  };
}
