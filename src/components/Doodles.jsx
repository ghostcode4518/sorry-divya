export function Heart({ size = 22, color = "var(--rose)", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 30" style={style} aria-hidden="true">
      <path
        d="M16 29S1 19.6 1 10.4A8.4 8.4 0 0 1 16 5.6 8.4 8.4 0 0 1 31 10.4C31 19.6 16 29 16 29z"
        fill={color}
      />
      <ellipse cx="10" cy="10" rx="3.2" ry="2.2" fill="#fff" opacity=".45" />
    </svg>
  );
}

export function Paw({ size = 20, color = "var(--petal)", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" style={style} aria-hidden="true">
      <ellipse cx="16" cy="21" rx="8.5" ry="7" fill={color} />
      <ellipse cx="7" cy="12" rx="3.4" ry="4.2" fill={color} />
      <ellipse cx="13" cy="7.5" rx="3.2" ry="4.2" fill={color} />
      <ellipse cx="19" cy="7.5" rx="3.2" ry="4.2" fill={color} />
      <ellipse cx="25" cy="12" rx="3.4" ry="4.2" fill={color} />
    </svg>
  );
}

/** mood: "sad" | "hopeful" | "happy" | "sleepy" */
export function Cat({ size = 72, mood = "hopeful", style }) {
  const cream = "#FFF3F7";
  const stroke = "var(--rose-deep)";
  const blush = "#FFB8CE";

  const eyesByMood = {
    sad: (
      <g>
        <path d="M24 30c1.6-1.6 4.4-1.6 6 0" stroke={stroke} strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path d="M40 30c1.6-1.6 4.4-1.6 6 0" stroke={stroke} strokeWidth="2.2" fill="none" strokeLinecap="round" />
      </g>
    ),
    hopeful: (
      <g>
        <circle cx="27" cy="31" r="3" fill={stroke} />
        <circle cx="43" cy="31" r="3" fill={stroke} />
        <circle cx="28.2" cy="29.8" r="1" fill="#fff" />
        <circle cx="44.2" cy="29.8" r="1" fill="#fff" />
      </g>
    ),
    happy: (
      <g>
        <path d="M23 32c2-3 5-3 7 0" stroke={stroke} strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <path d="M40 32c2-3 5-3 7 0" stroke={stroke} strokeWidth="2.4" fill="none" strokeLinecap="round" />
      </g>
    ),
    sleepy: (
      <g>
        <path d="M23 31h7" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
        <path d="M40 31h7" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
      </g>
    ),
  };

  const mouth =
    mood === "sad" ? (
      <path d="M31 40c1.8 2 5.4 2 7.2 0" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" />
    ) : (
      <path d="M31 38c1.8 2.4 5.4 2.4 7.2 0" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" />
    );

  return (
    <svg width={size} height={size * 0.92} viewBox="0 0 70 64" style={style} aria-hidden="true">
      <path d="M16 20 L14 5 L28 13 Z" fill={cream} stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
      <path d="M54 20 L56 5 L42 13 Z" fill={cream} stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
      <path d="M18 8.5 L17.6 14 L23 12 Z" fill={blush} />
      <path d="M52 8.5 L52.4 14 L47 12 Z" fill={blush} />
      <ellipse cx="35" cy="33" rx="25" ry="22" fill={cream} stroke={stroke} strokeWidth="2" />
      {eyesByMood[mood]}
      <path d="M33.4 35.4h3.2l-1.6 1.9z" fill={stroke} />
      {mouth}
      <ellipse cx="19" cy="37" rx="4.6" ry="3" fill={blush} opacity=".75" />
      <ellipse cx="51" cy="37" rx="4.6" ry="3" fill={blush} opacity=".75" />
      <g stroke={stroke} strokeWidth="1.5" strokeLinecap="round" opacity=".85">
        <path d="M6 32h8M6 38h8M56 32h8M56 38h8" />
      </g>
      {mood === "sad" && <circle cx="22.5" cy="37" r="2" fill="#9BD2F0" opacity=".9" />}
    </svg>
  );
}

/** A cat sitting with a little heart beside it */
export function CatWithHeart({ size = 90 }) {
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <Cat size={size} mood="hopeful" />
      <Heart size={size * 0.3} style={{ position: "absolute", right: -4, bottom: 2 }} />
    </div>
  );
}
