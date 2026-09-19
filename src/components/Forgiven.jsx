import { CatWithHeart, Heart, Paw } from "./Doodles.jsx";
import { Confetti } from "./Ambient.jsx";

export default function Forgiven({ onReplay }) {
  return (
    <section className="stage">
      <Confetti on={true} />
      <div className="pop">
        <CatWithHeart size={120} />
      </div>
      <h1 className="pop">Thank you, Divya 💗</h1>
      <p className="hand" style={{ maxWidth: "34ch" }}>
        Nannu kshaminchav idhi chaalu madam, inka happy ga vunta kudirithe unblock chesi friendship cheyyu adhi nee istam. Nannu nee friend ga consider cheyyu please assal naak parichayam aina only one good mahila mitra nuvvey Divya madam.
      </p>
      <div className="promises">
        <span className="promise">
          <Heart size={16} /> friendship: restored
        </span>
        <span className="promise">
          <Paw size={18} /> cat approved
        </span>
      </div>
      <button className="link-btn" onClick={onReplay}>
        read it again
      </button>
    </section>
  );
}
