import { useState } from "react";
import { Cat } from "./Doodles.jsx";

const NO_LABELS = ["No", "Are you sure?", "Really though?", "Think again!", "Can't catch me", "...fine, ask again"];

export default function Ask({ onYes }) {
  const [tries, setTries] = useState(0);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const gone = tries >= NO_LABELS.length - 1;

  const dodge = () => {
    const r = () => (Math.random() - 0.5) * 2;
    setPos({ x: r() * 130, y: r() * 80 });
    setTries((t) => Math.min(t + 1, NO_LABELS.length - 1));
  };

  return (
    <section className="stage">
      <Cat size={110} mood="hopeful" />
      <h1>So… do you forgive me?</h1>
      <p className="hand">One button is telling the truth. The other one is a coward.</p>

      <div className="ask-zone">
        <button className="btn btn-big" onClick={onYes}>
          Yes, you idiot
        </button>
        {!gone && (
          <button
            className="btn btn-ghost no-btn"
            style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
            onMouseEnter={dodge}
            onFocus={dodge}
            onClick={dodge}
          >
            {NO_LABELS[tries]}
          </button>
        )}
      </div>

      {gone && <p className="footer-note">the No button quit. it wasn't built for this.</p>}
    </section>
  );
}
