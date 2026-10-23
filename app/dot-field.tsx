"use client";

import { useEffect, useRef } from "react";

// Halftone dot grid behind the page. Dots drift in slow cloudy patches and
// light up orange around the cursor. Static (no animation) with reduced motion.
const GAP = 7; // px between dots
const SIZE = 1.4; // base dot size in px
const RADIUS = 190; // cursor glow radius in px
const LEVELS = 24; // brightness steps; dots are batched per step for speed

export function DotField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    // Cursor target and the eased position that follows it.
    const target = { x: -9999, y: -9999, on: 0 };
    const mouse = { x: -9999, y: -9999, on: 0 };

    // Cheap smooth "noise": a few overlapping sine waves.
    const cloud = (x: number, y: number, t: number) =>
      (Math.sin(x * 0.0042 + t * 0.21) +
        Math.sin(y * 0.0057 - t * 0.17) +
        Math.sin((x + y) * 0.0029 + t * 0.13) +
        Math.sin((x - y) * 0.0048 - t * 0.09)) /
      4;

    const grey: Path2D[] = [];
    const warm: Path2D[] = [];

    const draw = (time: number) => {
      const t = time / 1000;
      mouse.x += (target.x - mouse.x) * 0.14;
      mouse.y += (target.y - mouse.y) * 0.14;
      mouse.on += (target.on - mouse.on) * 0.08;

      for (let i = 0; i < LEVELS; i++) {
        grey[i] = new Path2D();
        warm[i] = new Path2D();
      }

      for (let y = GAP / 2; y < height; y += GAP) {
        for (let x = GAP / 2; x < width; x += GAP) {
          // Base shimmer: 0 in dark patches, up to ~0.35 in bright ones.
          const n = cloud(x, y, t);
          let level = Math.max(0, n * 0.9 + 0.1) * 0.35;
          let size = SIZE;
          let glow = 0;

          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (mouse.on > 0.01 && d2 < RADIUS * RADIUS) {
            const f = 1 - Math.sqrt(d2) / RADIUS;
            glow = f * f * mouse.on;
            level = Math.min(1, level + glow * 0.9);
            size += glow * 1.6;
          }

          if (level < 0.03) continue;
          const step = Math.min(LEVELS - 1, Math.floor(level * LEVELS));
          const h = size / 2;
          (glow > 0.12 ? warm : grey)[step].rect(x - h, y - h, size, size);
        }
      }

      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < LEVELS; i++) {
        const a = (i + 1) / LEVELS;
        ctx.fillStyle = `rgba(255, 244, 238, ${(a * 0.55).toFixed(3)})`;
        ctx.fill(grey[i]);
        ctx.fillStyle = `rgba(244, 108, 56, ${a.toFixed(3)})`;
        ctx.fill(warm[i]);
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (still) draw(0);
    };

    const loop = (time: number) => {
      draw(time);
      frame = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      target.x = e.clientX;
      target.y = e.clientY;
      if (!target.on) {
        // Jump straight to the cursor on first entry instead of sliding in.
        mouse.x = target.x;
        mouse.y = target.y;
      }
      target.on = 1;
    };
    const onLeave = () => {
      target.on = 0;
    };

    resize();
    window.addEventListener("resize", resize);
    if (!still) {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="dot-field" aria-hidden="true" />;
}
