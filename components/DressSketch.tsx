import type { Silhouette } from "@/lib/dresses";

/**
 * Hand-drawn garment "flats", the way an atelier sketches a dress on
 * pattern paper: front view, no figure, a few drape lines.
 */
const SKETCHES: Record<Silhouette, React.ReactNode> = {
  slip: (
    <>
      <path d="M70 62 L62 34 M130 62 L138 34" />
      <path d="M70 62 Q85 80 100 82 Q115 80 130 62" />
      <path d="M82 70 Q100 94 118 70" opacity={0.5} />
      <path d="M70 62 C64 95 66 115 72 135 C60 200 58 250 64 300" />
      <path d="M130 62 C136 95 134 115 128 135 C140 200 142 250 136 300" />
      <path d="M64 300 Q100 312 136 300" />
      <path d="M88 96 Q92 155 84 224" opacity={0.45} />
      <path d="M109 102 Q113 175 118 252" opacity={0.45} />
    </>
  ),
  column: (
    <>
      <path d="M72 58 L66 34 M128 58 L134 34" />
      <path d="M72 58 L128 58" />
      <path d="M72 58 C66 100 68 120 74 138 L70 300" />
      <path d="M128 58 C134 100 132 120 126 138 L130 300" />
      <path d="M70 300 Q100 306 130 300" />
      <path d="M101 302 L105 212" opacity={0.6} />
      <path d="M86 60 Q84 100 88 136" opacity={0.45} />
      <path d="M114 60 Q116 100 112 136" opacity={0.45} />
    </>
  ),
  aline: (
    <>
      <path d="M72 60 L64 34 M128 60 L136 34" />
      <path d="M72 60 Q86 76 100 63 Q114 76 128 60" />
      <path d="M72 60 C68 95 72 114 80 128" />
      <path d="M128 60 C132 95 128 114 120 128" />
      <path d="M80 128 Q100 135 120 128" />
      <path d="M80 128 C60 190 46 250 40 298" />
      <path d="M120 128 C140 190 154 250 160 298" />
      <path d="M40 298 Q100 316 160 298" />
      <path d="M88 136 Q82 222 74 295" opacity={0.45} />
      <path d="M100 137 L100 304" opacity={0.45} />
      <path d="M112 136 Q118 222 126 295" opacity={0.45} />
    </>
  ),
  ballgown: (
    <>
      <path d="M62 66 Q100 50 138 66" />
      <path d="M62 66 C60 96 66 118 78 132" />
      <path d="M138 66 C140 96 134 118 122 132" />
      <path d="M78 132 Q100 145 122 132" />
      <path d="M84 64 Q82 100 87 132" opacity={0.45} />
      <path d="M100 60 L100 138" opacity={0.45} />
      <path d="M116 64 Q118 100 113 132" opacity={0.45} />
      <path d="M78 132 C44 180 24 240 18 300" />
      <path d="M122 132 C156 180 176 240 182 300" />
      <path d="M18 300 Q100 322 182 300" />
      <path d="M70 152 Q56 232 46 296" opacity={0.45} />
      <path d="M100 146 L100 310" opacity={0.45} />
      <path d="M130 152 Q144 232 154 296" opacity={0.45} />
    </>
  ),
  mermaid: (
    <>
      <path d="M74 62 Q100 71 126 62" />
      <path d="M74 62 C68 110 74 160 84 210 C70 250 52 275 40 298" />
      <path d="M126 62 C132 110 126 160 116 210 C130 250 148 275 160 298" />
      <path d="M40 298 Q100 312 160 298" />
      <path d="M84 210 Q100 218 116 210" opacity={0.5} />
      <path d="M86 216 Q76 262 64 294" opacity={0.45} />
      <path d="M114 216 Q124 262 136 294" opacity={0.45} />
      <path d="M100 214 L100 302" opacity={0.45} />
      <path d="M80 110 Q100 117 120 110" opacity={0.35} />
    </>
  ),
  empire: (
    <>
      <path d="M74 56 L66 34 M126 56 L134 34" />
      <path d="M74 56 L100 84 L126 56" />
      <path d="M74 56 C70 72 70 84 70 96" />
      <path d="M126 56 C130 72 130 84 130 96" />
      <path d="M70 96 Q100 105 130 96" />
      <path d="M70 96 C58 180 52 250 56 300" />
      <path d="M130 96 C142 180 148 250 144 300" />
      <path d="M56 300 Q100 311 144 300" />
      <path d="M86 104 Q80 200 76 296" opacity={0.45} />
      <path d="M100 105 Q102 210 100 302" opacity={0.45} />
      <path d="M114 104 Q120 200 124 296" opacity={0.45} />
    </>
  ),
  wrap: (
    <>
      <path d="M70 54 L64 32 M130 54 L136 32" />
      <path d="M70 54 C86 70 96 86 104 110" />
      <path d="M130 54 C114 70 104 86 96 110" />
      <path d="M70 54 C66 90 66 108 70 118" />
      <path d="M130 54 C134 90 134 108 130 118" />
      <path d="M70 118 Q100 126 130 118" />
      <path d="M70 128 Q100 136 130 128" opacity={0.6} />
      <path d="M70 128 C62 190 58 245 60 298" />
      <path d="M130 128 C138 190 142 245 140 298" />
      <path d="M60 298 Q100 308 140 298" />
      <path d="M105 133 C97 200 89 252 84 296" opacity={0.55} />
      <path d="M74 124 q-8 9 -3 17 q7 5 11 -3" opacity={0.6} />
    </>
  ),
  tea: (
    <>
      <path d="M84 58 L80 34 M116 58 L120 34" />
      <path d="M76 58 L124 58" />
      <path d="M76 58 C72 92 74 110 82 124" />
      <path d="M124 58 C128 92 126 110 118 124" />
      <path d="M82 124 Q100 130 118 124" />
      <path d="M82 124 C58 160 46 200 44 238" />
      <path d="M118 124 C142 160 154 200 156 238" />
      <path d="M44 238 Q100 256 156 238" />
      <path d="M86 132 Q74 188 66 234" opacity={0.45} />
      <path d="M100 132 L100 244" opacity={0.45} />
      <path d="M114 132 Q126 188 134 234" opacity={0.45} />
      <path d="M92 60 Q90 92 93 122" opacity={0.4} />
      <path d="M108 60 Q110 92 107 122" opacity={0.4} />
    </>
  ),
};

export default function DressSketch({
  silhouette,
  className,
  strokeWidth = 1.9,
}: {
  silhouette: Silhouette;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 200 320"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {SKETCHES[silhouette]}
    </svg>
  );
}
