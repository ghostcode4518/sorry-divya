import { useEffect, useState } from "react";
import { Cat, Heart, Paw } from "./Doodles.jsx";

const LINES = [
  "Hello Divya madam, Ninnu disturb chesina ane guilt feeling naa mind lone vundhi and I cant suffer with that feel. Sorry Sorry Sorry Divya Madam gaaru ",
  "Okka ammai naa valla feel ayyindhi adhi naak nachadhu I cant digest that and I feel shame on my self for that",
  "Relationship lo aithe nenu ninnu chudaledhu I am making it clear Nenu ninnu a a female friend ga who can trust me ani consider chesanu.",
];

export default function Letter({ onNext }) {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
  const full = LINES.join("\n\n");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTyped(full);
      setDone(true);
      return;
    }
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(t);
        setDone(true);
      }
    }, 22);
    return () => clearInterval(t);
  }, [full]);

  const skip = () => {
    setTyped(full);
    setDone(true);
  };

  const paragraphs = typed.split("\n\n");

  return (
    <section className="stage">
      <div className="letter-wrap" onClick={done ? undefined : skip}>
        <span className="tape tape-l" aria-hidden="true"></span>
        <span className="tape tape-r" aria-hidden="true"></span>
        <div className="letter">
          {paragraphs.map((p, idx) => (
            <p key={idx}>
              {p}
              {!done && idx === paragraphs.length - 1 && <span className="caret" />}
            </p>
          ))}
          {done && <p className="sign">— Nannu kshamistav ani naa guilt feel pothadi ani expect chesutnna</p>}
          <span className="letter-cat">
            <Cat size={64} mood={done ? "hopeful" : "sad"} />
          </span>
        </div>
      </div>

      {done && (
        <div className="promises pop">
          <span className="promise">
            <Paw size={18} /> Sare friend ga vunta nuvvu msg chesey varak cheyyanu ok naaa
          </span>
          <span className="promise">
            <Heart size={16} /> Naa account unblock cheyy kadha
          </span>
          <span className="promise">
            <Paw size={18} /> SORRYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
          </span>
        </div>
      )}

      {done ? (
        <button className="btn btn-big pop" onClick={onNext}>
          Read the last bit
        </button>
      ) : (
        <p className="hint">tap the letter to read it all at once</p>
      )}
    </section>
  );
}
