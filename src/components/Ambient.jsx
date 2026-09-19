import { useRef } from "react";
import { Heart, Paw } from "./Doodles.jsx";

export function FloatLayer() {
  const bits = useRef(
    Array.from({ length: 16 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 12 + Math.random() * 20,
      dur: 16 + Math.random() * 16,
      delay: -Math.random() * 26,
      paw: i % 3 === 0,
    }))
  ).current;

  return (
    <div className="float-layer" aria-hidden="true">
      {bits.map((b) => (
        <span
          key={b.id}
          className="float-bit"
          style={{ left: b.left + "%", animationDuration: b.dur + "s", animationDelay: b.delay + "s" }}
        >
          {b.paw ? <Paw size={b.size} /> : <Heart size={b.size} color="var(--petal)" />}
        </span>
      ))}
    </div>
  );
}

export function Confetti({ on }) {
  const bits = useRef(
    Array.from({ length: 44 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 14 + Math.random() * 20,
      dur: 2.6 + Math.random() * 2.6,
      delay: Math.random() * 1.6,
      kind: i % 5 === 0 ? "paw" : "heart",
    }))
  ).current;

  if (!on) return null;

  return (
    <div className="confetti" aria-hidden="true">
      {bits.map((b) => (
        <span
          key={b.id}
          className="conf-bit"
          style={{ left: b.left + "%", animationDuration: b.dur + "s", animationDelay: b.delay + "s" }}
        >
          {b.kind === "paw" ? <Paw size={b.size} color="var(--rose)" /> : <Heart size={b.size} />}
        </span>
      ))}
    </div>
  );
}
