import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAudio } from "../hooks/useAudio";

function BackButton() {
  const navigate = useNavigate();
  const { playClick } = useAudio();
  return (
    <button
      type="button"
      data-ocid="coloring.back_button"
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

const COLORS = [
  "#EF4444",
  "#F97316",
  "#EAB308",
  "#22C55E",
  "#3B82F6",
  "#8B5CF6",
  "#EC4899",
  "#14B8A6",
];

// Draws the cartoon scene outline on the canvas
function drawScene(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, w, h);

  ctx.lineWidth = 3;
  ctx.strokeStyle = "#222222";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // Sky background region (top half)
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, w, h / 2);

  // Ground region (bottom half)
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, h / 2, w, h / 2);

  // --- Sun (top-right) ---
  ctx.beginPath();
  ctx.arc(w - 70, 65, 38, 0, Math.PI * 2);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.stroke();

  // Sun rays
  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI * 2) / 8;
    const x1 = w - 70 + Math.cos(angle) * 44;
    const y1 = 65 + Math.sin(angle) * 44;
    const x2 = w - 70 + Math.cos(angle) * 56;
    const y2 = 65 + Math.sin(angle) * 56;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  // Sun smile
  ctx.beginPath();
  ctx.arc(w - 70, 70, 14, 0.2, Math.PI - 0.2);
  ctx.stroke();
  // Sun eyes
  ctx.beginPath();
  ctx.arc(w - 82, 58, 3.5, 0, Math.PI * 2);
  ctx.fillStyle = "#222222";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(w - 58, 58, 3.5, 0, Math.PI * 2);
  ctx.fill();

  // --- Cloud (top-left) ---
  const cx = 80;
  const cy = 60;
  ctx.beginPath();
  ctx.arc(cx, cy, 28, Math.PI, 0);
  ctx.arc(cx + 28, cy - 8, 22, Math.PI, 0);
  ctx.arc(cx + 56, cy, 24, Math.PI, 0);
  ctx.lineTo(cx + 80, cy + 14);
  ctx.lineTo(cx - 24, cy + 14);
  ctx.closePath();
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.stroke();

  // --- House (center) ---
  const hx = w / 2 - 55;
  const hy = h / 2 - 10;
  const hw = 110;
  const hh = 85;

  // House body
  ctx.beginPath();
  ctx.rect(hx, hy, hw, hh);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.stroke();

  // Roof
  ctx.beginPath();
  ctx.moveTo(hx - 12, hy);
  ctx.lineTo(hx + hw / 2, hy - 52);
  ctx.lineTo(hx + hw + 12, hy);
  ctx.closePath();
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.stroke();

  // Door
  ctx.beginPath();
  ctx.roundRect(hx + hw / 2 - 16, hy + hh - 45, 32, 45, [5, 5, 0, 0]);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.stroke();
  // Door knob
  ctx.beginPath();
  ctx.arc(hx + hw / 2 + 10, hy + hh - 22, 3.5, 0, Math.PI * 2);
  ctx.fillStyle = "#222222";
  ctx.fill();

  // Window
  ctx.beginPath();
  ctx.rect(hx + 14, hy + 18, 28, 24);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(hx + 14, hy + 30);
  ctx.lineTo(hx + 42, hy + 30);
  ctx.moveTo(hx + 28, hy + 18);
  ctx.lineTo(hx + 28, hy + 42);
  ctx.stroke();

  // Window right
  ctx.beginPath();
  ctx.rect(hx + hw - 14 - 28, hy + 18, 28, 24);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(hx + hw - 14 - 28, hy + 30);
  ctx.lineTo(hx + hw - 14, hy + 30);
  ctx.moveTo(hx + hw - 14 - 14, hy + 18);
  ctx.lineTo(hx + hw - 14 - 14, hy + 42);
  ctx.stroke();

  // --- Ground line ---
  ctx.beginPath();
  ctx.moveTo(0, h / 2 + 75);
  ctx.lineTo(w, h / 2 + 75);
  ctx.stroke();

  // --- Flower (left side) ---
  const fx = 55;
  const fy = h / 2 + 40;
  // Stem
  ctx.beginPath();
  ctx.moveTo(fx, fy + 5);
  ctx.lineTo(fx, fy + 55);
  ctx.stroke();
  // Leaf
  ctx.beginPath();
  ctx.ellipse(fx - 14, fy + 30, 13, 7, -0.6, 0, Math.PI * 2);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.stroke();
  // Petals
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI * 2) / 6;
    ctx.beginPath();
    ctx.ellipse(
      fx + Math.cos(angle) * 14,
      fy - 10 + Math.sin(angle) * 14,
      8,
      13,
      angle,
      0,
      Math.PI * 2,
    );
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.stroke();
  }
  // Center
  ctx.beginPath();
  ctx.arc(fx, fy - 10, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.stroke();

  // --- Flower (right side) ---
  const fx2 = w - 55;
  const fy2 = h / 2 + 38;
  ctx.beginPath();
  ctx.moveTo(fx2, fy2 + 5);
  ctx.lineTo(fx2, fy2 + 55);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(fx2 + 14, fy2 + 28, 13, 7, 0.6, 0, Math.PI * 2);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.stroke();
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI * 2) / 6;
    ctx.beginPath();
    ctx.ellipse(
      fx2 + Math.cos(angle) * 14,
      fy2 - 10 + Math.sin(angle) * 14,
      8,
      13,
      angle,
      0,
      Math.PI * 2,
    );
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.arc(fx2, fy2 - 10, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.stroke();

  // --- Bird (top center) ---
  ctx.beginPath();
  ctx.arc(w / 2 - 20, 38, 0, 0.2, Math.PI - 0.2);
  ctx.moveTo(w / 2 + 5, 38);
  ctx.arc(w / 2 + 20, 38, 0, 0.2, Math.PI - 0.2);
  ctx.stroke();
}

// BFS flood-fill on canvas ImageData
function floodFill(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  fillColor: string,
  w: number,
  h: number,
) {
  const imageData = ctx.getImageData(0, 0, w, h);
  const data = imageData.data;

  // Parse target color
  const tmpCanvas = document.createElement("canvas");
  tmpCanvas.width = 1;
  tmpCanvas.height = 1;
  const tmpCtx = tmpCanvas.getContext("2d")!;
  tmpCtx.fillStyle = fillColor;
  tmpCtx.fillRect(0, 0, 1, 1);
  const fillRgba = tmpCtx.getImageData(0, 0, 1, 1).data;

  const idx = (px: number, py: number) => (py * w + px) * 4;
  const startIdx = idx(x, y);
  const targetR = data[startIdx];
  const targetG = data[startIdx + 1];
  const targetB = data[startIdx + 2];
  const targetA = data[startIdx + 3];

  // If already the fill color, do nothing
  if (
    targetR === fillRgba[0] &&
    targetG === fillRgba[1] &&
    targetB === fillRgba[2]
  )
    return;

  const tolerance = 40;
  const matchColor = (i: number) =>
    Math.abs(data[i] - targetR) <= tolerance &&
    Math.abs(data[i + 1] - targetG) <= tolerance &&
    Math.abs(data[i + 2] - targetB) <= tolerance &&
    Math.abs(data[i + 3] - targetA) <= tolerance;

  const stack: [number, number][] = [[x, y]];
  const visited = new Uint8Array(w * h);
  visited[y * w + x] = 1;

  while (stack.length > 0) {
    const [px, py] = stack.pop()!;
    const i = idx(px, py);
    data[i] = fillRgba[0];
    data[i + 1] = fillRgba[1];
    data[i + 2] = fillRgba[2];
    data[i + 3] = 255;

    const neighbors: [number, number][] = [
      [px - 1, py],
      [px + 1, py],
      [px, py - 1],
      [px, py + 1],
    ];
    for (const [nx, ny] of neighbors) {
      if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
      const ni = ny * w + nx;
      if (visited[ni]) continue;
      visited[ni] = 1;
      if (matchColor(ni * 4)) {
        stack.push([nx, ny]);
      }
    }
  }

  ctx.putImageData(imageData, 0, 0);
}

export default function Coloring() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const { playClick, playSuccess } = useAudio();

  const CANVAS_W = 400;
  const CANVAS_H = 480;

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    drawScene(ctx, CANVAS_W, CANVAS_H);
  }, []);

  useEffect(() => {
    initCanvas();
  }, [initCanvas]);

  const handleCanvasTap = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const scaleX = CANVAS_W / rect.width;
      const scaleY = CANVAS_H / rect.height;
      let clientX: number;
      let clientY: number;
      if ("touches" in e) {
        clientX = e.changedTouches[0].clientX;
        clientY = e.changedTouches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      const x = Math.floor((clientX - rect.left) * scaleX);
      const y = Math.floor((clientY - rect.top) * scaleY);
      if (x < 0 || y < 0 || x >= CANVAS_W || y >= CANVAS_H) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      floodFill(ctx, x, y, selectedColor, CANVAS_W, CANVAS_H);
      playSuccess();
    },
    [selectedColor, playSuccess],
  );

  const clearCanvas = () => {
    playClick();
    initCanvas();
  };

  return (
    <div className="flex flex-col min-h-screen" data-ocid="coloring.page">
      <div className="bg-secondary px-5 pt-10 pb-6 rounded-b-3xl shadow-md">
        <div className="flex items-center gap-3">
          <BackButton />
          <div>
            <h1 className="text-white font-display font-bold text-2xl">
              Coloring
            </h1>
            <p className="text-white/80 font-body text-sm">
              Pick a color, tap to fill!
            </p>
          </div>
          <span className="ml-auto text-4xl" aria-hidden="true">
            🎨
          </span>
        </div>
      </div>

      <div className="flex-1 px-4 pt-4 pb-6 flex flex-col gap-4">
        {/* Color palette */}
        <div
          className="bg-card rounded-2xl p-3 shadow-sm border border-border"
          data-ocid="coloring.palette"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {COLORS.map((color) => (
              <button
                type="button"
                key={color}
                data-ocid="coloring.color_button"
                onClick={() => {
                  playClick();
                  setSelectedColor(color);
                }}
                className="w-12 h-12 rounded-full transition-smooth active:scale-90 flex items-center justify-center"
                style={{
                  backgroundColor: color,
                  outline:
                    selectedColor === color
                      ? "3px solid oklch(0.65 0.18 280)"
                      : "none",
                  outlineOffset: "2px",
                }}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>
        </div>

        {/* Action row */}
        <div className="flex items-center gap-3 justify-between">
          <p className="font-body text-sm text-muted-foreground flex-1">
            👆 Tap a region to fill with color
          </p>
          <button
            type="button"
            data-ocid="coloring.clear_button"
            onClick={clearCanvas}
            className="h-12 px-5 rounded-xl border-2 border-border bg-card font-body font-semibold text-sm transition-smooth active:scale-95 text-foreground"
            aria-label="Clear canvas"
          >
            🗑️ Reset
          </button>
        </div>

        {/* Canvas */}
        <div
          className="flex-1 rounded-3xl overflow-hidden shadow-md border-2 border-border bg-white"
          data-ocid="coloring.canvas_target"
        >
          <canvas
            ref={canvasRef}
            width={CANVAS_W}
            height={CANVAS_H}
            className="w-full h-full touch-none cursor-crosshair"
            style={{ touchAction: "none" }}
            onClick={handleCanvasTap}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                // keyboard activation not meaningful on canvas; suppress default
                e.preventDefault();
              }
            }}
            onTouchEnd={handleCanvasTap}
            aria-label="Coloring canvas — tap a region to fill with the selected color"
          />
        </div>
      </div>
    </div>
  );
}
