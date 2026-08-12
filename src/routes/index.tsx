import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-goa-sunset.jpg";
import footerImg from "@/assets/footer-goa-panorama.jpg";
import { PassGenerator } from "@/components/goa/PassGenerator";
import {
  BoatDoodle,
  ChurchDoodle,
  CocktailDoodle,
  FlowerDoodle,
  PalmDoodle,
  StringLights,
  SurfboardDoodle,
  WaveDoodle,
} from "@/components/goa/doodles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HH Goa 2026 — Builder Access Pass Generator" },
      {
        name: "description",
        content:
          "Generate your collectible HH Goa 2026 Builder Access Pass. Tropical hacker festival in Goa, India, 28–31 Oct 2026. #FrameInGoa",
      },
      { property: "og:title", content: "HH Goa 2026 — Builder Access Pass Generator" },
      {
        property: "og:description",
        content:
          "Create and share your official HH Goa 2026 tropical hacker festival builder pass in seconds.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SIGNS = [
  { label: "🏖 BEACH", cls: "bg-goa-yellow text-goa-green-deep" },
  { label: "💻 CODE", cls: "bg-goa-pink text-white" },
  { label: "☕ COFFEE", cls: "bg-goa-cream text-goa-green-deep" },
  { label: "🌴 CHAOS", cls: "bg-goa-green-deep text-goa-yellow" },
  { label: "🍹 FENI", cls: "bg-goa-yellow text-goa-green-deep" },
];

const FEATURES = [
  { icon: "🌴", title: "Tropical vibes", copy: "Straight from the beaches of Goa" },
  { icon: "☀️", title: "Hacker energy", copy: "Built for builders who ship" },
  { icon: "🌊", title: "Unforgettable", copy: "Create memories that last forever" },
  { icon: "🚀", title: "Share it loud", copy: "Show the world you're coming to Goa" },
];

const LOVE = [
  {
    icon: "🌊",
    title: "Build by the beach",
    copy: "Ship code while listening to the ocean.",
    art: <WaveDoodle className="w-20 sm:w-24 text-goa-yellow" />,
  },
  {
    icon: "☕",
    title: "Coffee → code → coconut",
    copy: "The official Goa productivity loop.",
    art: <CocktailDoodle className="size-10 sm:size-14 text-goa-pink" />,
  },
  {
    icon: "🚀",
    title: "Meet wild builders",
    copy: "Founders, hackers, designers, and hardware rebels in one place.",
    art: <SurfboardDoodle className="size-10 sm:size-14 text-goa-yellow" />,
  },
];

function Index() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-goa-green">
      {/* TOP BRAND BAR */}
      <header className="sticky top-0 z-50 border-b border-goa-yellow/20 bg-goa-green/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:px-6 sm:py-3">
          <div className="label-mono leading-tight text-goa-cream">
            <div className="text-xs sm:text-sm font-bold text-goa-yellow">HH GOA 2026</div>
            <div className="text-[9px] sm:text-[10px] text-goa-cream/80">BUILDER PASS STUDIO</div>
          </div>
          <a
            href="#generator"
            className="glow-pink inline-flex min-h-9 sm:min-h-10 items-center rounded-full bg-goa-pink px-3.5 sm:px-4 py-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-white shadow-[var(--shadow-lift)]"
          >
            Create Pass
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Illustrated Goa beach sunset with palm trees, surfboards and a beach shack"
          width={1920}
          height={1088}
          className="h-[48vh] min-h-[340px] w-full object-cover sm:h-[76vh] sm:min-h-[420px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-goa-green/45 via-goa-green/5 to-goa-green" />
        <StringLights className="absolute left-0 top-2 sm:top-4 w-full text-goa-yellow/80" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-3 text-center">
          <div className="animate-fade-up relative max-w-full">
            <h1 className="font-display text-[clamp(2.1rem,8.5vw,7.5rem)] font-black leading-[0.95] tracking-tight text-goa-cream">
              HACKER
              <br className="sm:hidden" /> HOUSE
            </h1>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-6deg] rounded-full bg-goa-pink px-3 py-1 font-display text-base text-goa-yellow shadow-[var(--shadow-lift)] sm:px-4 sm:py-1.5 sm:text-3xl">
              गोवा
            </span>
          </div>
          <p className="label-mono mt-4 text-[10px] text-goa-yellow sm:mt-6 sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2">
            <span>GOA, INDIA • 28 — 31 OCT 2026</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-extrabold text-goa-pink uppercase">
              PRESENTED BY TEAM FINE TUNED
            </span>
          </p>
          <a
            href="#generator"
            className="glow-pink mt-6 inline-flex min-h-11 items-center rounded-full bg-goa-pink px-6 text-xs font-bold uppercase tracking-widest text-white sm:mt-8 sm:min-h-12 sm:px-8 sm:text-sm"
          >
            Generate my pass
          </a>
        </div>

        {/* GOA STREET SIGN */}
        <div className="absolute bottom-6 left-4 hidden select-none lg:block">
          <div className="relative flex flex-col items-start gap-2 pl-6">
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-4 top-0 w-3 rounded-sm bg-[#8a5a2b]"
            />
            {SIGNS.map((s, i) => (
              <span
                key={s.label}
                className={`label-mono rounded-md px-4 py-2 font-bold shadow-[var(--shadow-lift)] ${s.cls}`}
                style={{ transform: `rotate(${i % 2 ? 2.5 : -2.5}deg)` }}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* GENERATOR */}
      <div className="relative -mt-4 pt-6 sm:-mt-6 sm:pt-12">
        <PassGenerator />
      </div>

      {/* FEATURE STRIP */}
      <section className="px-3 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="card-lift rounded-2xl border-2 border-goa-yellow/35 bg-goa-green-deep p-4 sm:p-6 text-center"
            >
              <div className="text-2xl sm:text-3xl" aria-hidden="true">
                {f.icon}
              </div>
              <h3 className="label-mono mt-2 sm:mt-3 text-goa-yellow text-xs sm:text-sm">
                {f.title}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-goa-cream/80">{f.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY BUILDERS LOVE GOA */}
      <section className="relative px-3 pb-14 sm:px-6 sm:pb-20">
        <FlowerDoodle className="animate-sway pointer-events-none absolute right-4 top-0 size-12 text-goa-pink/60 sm:right-6 sm:size-16" />
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-2xl text-goa-cream sm:text-5xl">
            Why builders love Goa
          </h2>
          <div className="mt-6 sm:mt-10 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {LOVE.map((c) => (
              <article
                key={c.title}
                className="card-lift paper-texture rounded-[20px] sm:rounded-[26px] bg-goa-cream p-5 sm:p-7 shadow-[var(--shadow-lift)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl" aria-hidden="true">
                    {c.icon}
                  </span>
                  {c.art}
                </div>
                <h3 className="font-display mt-4 sm:mt-5 text-xl sm:text-2xl text-goa-green-deep">
                  {c.title}
                </h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-goa-green-deep/75">{c.copy}</p>
              </article>
            ))}
          </div>
        </div>
        <PalmDoodle className="animate-sway pointer-events-none absolute -bottom-4 left-2 size-14 text-goa-yellow/60 sm:left-4 sm:size-20" />
      </section>

      {/* FOOTER PANORAMA */}
      <footer className="relative overflow-hidden w-full">
        <img
          src={footerImg}
          alt="Illustrated Goa evening panorama with palm trees, church silhouette and fishing boat"
          loading="lazy"
          width={1920}
          height={640}
          className="h-48 w-full object-cover sm:h-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-goa-green-deep via-goa-green-deep/40 to-transparent" />
        <WaveDoodle className="animate-wave absolute bottom-12 left-0 w-[140%] text-goa-yellow/40 sm:bottom-16" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-3 pb-4 sm:px-8 sm:pb-6">
          <ChurchDoodle className="hidden h-16 text-goa-cream/70 sm:block" />
          <p className="label-mono flex-1 text-center text-[9px] sm:text-xs text-goa-yellow">
            HH GOA 2026 • GOA, INDIA • CODE • COCONUTS • CHAOS
          </p>
          <BoatDoodle className="hidden h-14 text-goa-cream/70 sm:block" />
        </div>
      </footer>
    </div>
  );
}
