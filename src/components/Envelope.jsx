import { useState } from "react";
import { Paw } from "./Doodles.jsx";

export default function Envelope({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const go = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(onOpen, 780);
  };

  return (
    <section className="stage">
      <p className="kicker">a small note, hand delivered</p>
      <h1>Divya, Idhi nee kosame</h1>

      <button
        className={"env-btn" + (opening ? " env-open" : "")}
        onClick={go}
        aria-label="Open the note"
      >
        <svg className="env" viewBox="0 0 320 210">
          <rect x="6" y="40" width="308" height="164" rx="14" fill="var(--paper-2)" stroke="var(--rule)" strokeWidth="2" />
          <path d="M6 54 L160 150 L314 54" fill="none" stroke="var(--rule)" strokeWidth="2" />
          <path d="M6 204 L120 118 M314 204 L200 118" stroke="var(--rule)" strokeWidth="2" fill="none" />
          <g className="flap">
            <path
              d="M6 54 A14 14 0 0 1 20 40 h280 a14 14 0 0 1 14 14 L160 150 Z"
              fill="var(--petal)"
              stroke="var(--rule)"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </g>
          <circle cx="160" cy="112" r="24" fill="var(--rose)" />
          <g transform="translate(144,96) scale(0.5)">
            <Paw size={64} color="#FFF3F7" />
          </g>
          <text x="160" y="186" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="26" fill="var(--ink-soft)">
            for Divya
          </text>
        </svg>
      </button>

      <p className="hint">{opening ? "opening…" : "tap the envelope"}</p>
    </section>
  );
}
