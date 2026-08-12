/** Hand-drawn style inline SVG doodles for the HH Goa 2026 pass generator. */

type D = { className?: string; style?: React.CSSProperties };

export const PalmDoodle = ({ className, style }: D) => (
  <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden="true">
    <path d="M32 62V26" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    <path
      d="M32 26C22 18 12 20 6 27c9-2 15 0 20 6M32 26c10-8 20-6 26 1-9-2-15 0-20 6M32 26c-4-11 1-19 9-22-5 6-6 12-4 18M32 26c5-9 14-11 21-8-7 1-13 4-16 9"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="29" cy="27" r="2.6" fill="currentColor" />
    <circle cx="36" cy="29" r="2.2" fill="currentColor" />
  </svg>
);

export const SurfboardDoodle = ({ className, style }: D) => (
  <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden="true">
    <path
      d="M32 3c9 10 13 24 13 33 0 14-6 25-13 25S19 50 19 36C19 27 23 13 32 3Z"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
    />
    <path d="M32 10v44" stroke="currentColor" strokeWidth="2.4" strokeDasharray="5 5" />
  </svg>
);

export const CoconutDrinkDoodle = ({ className, style }: D) => (
  <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden="true">
    <path
      d="M14 24h36c0 18-7 32-18 32S14 42 14 24Z"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
    />
    <path d="M12 24h40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M38 22 52 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path
      d="M24 20c2-6 8-9 13-8"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const WaveDoodle = ({ className, style }: D) => (
  <svg viewBox="0 0 120 24" className={className} style={style} aria-hidden="true">
    <path
      d="M2 16c8-12 18-12 26 0s18 12 26 0 18-12 26 0 18 12 26 0"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const SunDoodle = ({ className, style }: D) => (
  <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden="true">
    <circle cx="32" cy="32" r="12" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M32 6v8M32 50v8M6 32h8M50 32h8M14 14l6 6M44 44l6 6M50 14l-6 6M20 44l-6 6" />
    </g>
  </svg>
);

export const ShackDoodle = ({ className, style }: D) => (
  <svg viewBox="0 0 80 64" className={className} style={style} aria-hidden="true">
    <path d="M6 26 40 8l34 18" stroke="currentColor" strokeWidth="3" fill="none" />
    <path d="M14 26v30h52V26" stroke="currentColor" strokeWidth="3" fill="none" />
    <path d="M28 56V40h12v16" stroke="currentColor" strokeWidth="2.6" fill="none" />
    <path d="M48 38h12v10H48z" stroke="currentColor" strokeWidth="2.6" fill="none" />
  </svg>
);

export const BoatDoodle = ({ className, style }: D) => (
  <svg viewBox="0 0 80 64" className={className} style={style} aria-hidden="true">
    <path d="M8 40h64l-10 14H18L8 40Z" stroke="currentColor" strokeWidth="3" fill="none" />
    <path d="M40 40V8l22 26" stroke="currentColor" strokeWidth="3" fill="none" />
  </svg>
);

export const ChurchDoodle = ({ className, style }: D) => (
  <svg viewBox="0 0 80 64" className={className} style={style} aria-hidden="true">
    <path d="M40 2v10M35 7h10" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    <path
      d="M24 60V26c0-8 7-14 16-14s16 6 16 14v34"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
    />
    <path d="M12 60V34h12M68 60V34H56" stroke="currentColor" strokeWidth="3" fill="none" />
    <path d="M36 60V44h8v16" stroke="currentColor" strokeWidth="2.6" fill="none" />
  </svg>
);

export const FeniBottleDoodle = ({ className, style }: D) => (
  <svg viewBox="0 0 40 64" className={className} style={style} aria-hidden="true">
    <path
      d="M16 4h8v12c0 4 6 8 6 14v28c0 3-2 4-4 4H14c-2 0-4-1-4-4V30c0-6 6-10 6-14V4Z"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
    />
    <path d="M11 38h18" stroke="currentColor" strokeWidth="2.4" />
    <path d="M15 44h10v10H15z" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

export const CocktailDoodle = ({ className, style }: D) => (
  <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden="true">
    <path d="M8 12h48L32 38 8 12Z" stroke="currentColor" strokeWidth="3" fill="none" />
    <path d="M32 38v18M22 58h20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M44 10 58 2" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
  </svg>
);

export const FlowerDoodle = ({ className, style }: D) => (
  <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden="true">
    <g stroke="currentColor" strokeWidth="3" fill="none">
      <circle cx="32" cy="16" r="9" />
      <circle cx="48" cy="32" r="9" />
      <circle cx="32" cy="48" r="9" />
      <circle cx="16" cy="32" r="9" />
    </g>
    <circle cx="32" cy="32" r="5" fill="currentColor" />
  </svg>
);

export const StringLights = ({ className, style }: D) => (
  <svg
    viewBox="0 0 400 40"
    className={className}
    style={style}
    aria-hidden="true"
    preserveAspectRatio="none"
  >
    <path
      d="M0 4c60 26 140 26 200 12s140-14 200 8"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    {[20, 70, 120, 170, 220, 270, 320, 370].map((x, i) => (
      <g key={x}>
        <path d={`M${x} ${10 + (i % 3) * 2}v8`} stroke="currentColor" strokeWidth="2" />
        <circle cx={x} cy={22 + (i % 3) * 2} r="4.5" fill="currentColor" opacity={0.85} />
      </g>
    ))}
  </svg>
);

export const AvatarSilhouette = ({ className, style }: D) => (
  <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true">
    <circle cx="50" cy="36" r="18" fill="currentColor" opacity="0.9" />
    <path d="M14 100c0-22 16-34 36-34s36 12 36 34" fill="currentColor" opacity="0.9" />
  </svg>
);
