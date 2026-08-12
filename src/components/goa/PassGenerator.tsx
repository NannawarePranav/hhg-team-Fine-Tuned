import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toPng } from "html-to-image";
import {
  Download,
  RefreshCw,
  RotateCcw,
  Sliders,
  Sparkles,
  Trash2,
  UploadCloud,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { TicketPreview, type PassData } from "./TicketPreview";
import { CoconutDrinkDoodle, FeniBottleDoodle, PalmDoodle } from "./doodles";

const TITLES = [
  "⚡ Sunset Shipmaster ⚡",
  "⚡ Coconut-Powered Coder ⚡",
  "⚡ Midnight Deploy Wizard ⚡",
  "⚡ Neural Bug Hunter ⚡",
  "⚡ Hardware Phantom ⚡",
  "⚡ Full-Stack Beach Rebel ⚡",
  "⚡ AI Protocol Engineer ⚡",
  "⚡ The Sentinel Architect ⚡",
];

const DEFAULTS = {
  name: "",
  stack: "",
  team: "",
  title: "",
};

const pinColors = ["bg-goa-pink", "bg-goa-yellow", "bg-goa-green", "bg-goa-pink"];

function Pins() {
  return (
    <>
      {[
        { top: 12, left: 12 },
        { top: 12, right: 12 },
        { bottom: 12, left: 12 },
        { bottom: 12, right: 12 },
      ].map((pos, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`absolute size-3.5 sm:size-4 rounded-full ring-2 ring-goa-green-deep/25 ${pinColors[i]}`}
          style={{ ...pos, boxShadow: "inset 0 -2px 3px oklch(0 0 0 / 0.35)" }}
        />
      ))}
    </>
  );
}

function LabelledInput({
  label,
  value,
  onChange,
  id,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  id: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="label-mono block text-xs font-bold text-goa-green-deep/80 mb-1.5"
      >
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border-2 border-goa-green-deep/35 bg-white/80 px-4 text-sm sm:text-base font-semibold text-goa-green-deep outline-none transition-all placeholder:text-goa-green-deep/40 focus:border-goa-pink focus:bg-white focus:ring-2 focus:ring-goa-pink/20"
      />
    </div>
  );
}

export function PassGenerator() {
  const [name, setName] = useState(DEFAULTS.name);
  const [stack, setStack] = useState(DEFAULTS.stack);
  const [team, setTeam] = useState(DEFAULTS.team);
  const [title, setTitle] = useState(DEFAULTS.title);
  const [photo, setPhoto] = useState<string | null>(null);
  const [photoZoom, setPhotoZoom] = useState(1);
  const [photoX, setPhotoX] = useState(0);
  const [photoY, setPhotoY] = useState(0);

  const [dragging, setDragging] = useState(false);
  const [busy, setBusy] = useState(false);

  const fileRef = useRef<HTMLInputElement>(null);
  const ticketRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setScale(el.clientWidth / 1080));
    ro.observe(el);
    setScale(el.clientWidth / 1080);
    return () => ro.disconnect();
  }, []);

  const passId = useMemo(
    () =>
      `HH-2026-${String((((name || "BUILDER") + (team || "GOA")).length * 37 + 142) % 10000).padStart(4, "0")}`,
    [name, team],
  );

  const data: PassData = {
    name,
    stack,
    team,
    title,
    passId,
    photo,
    photoZoom,
    photoX,
    photoY,
  };

  const resetAdjustments = () => {
    setPhotoZoom(1);
    setPhotoX(0);
    setPhotoY(0);
  };

  const removePhoto = () => {
    setPhoto(null);
    resetAdjustments();
    if (fileRef.current) fileRef.current.value = "";
  };

  const readFile = useCallback((file?: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPhoto(String(reader.result));
      setPhotoZoom(1);
      setPhotoX(0);
      setPhotoY(0);
    };
    reader.readAsDataURL(file);
  }, []);

  const download = async () => {
    if (!ticketRef.current) return;
    setBusy(true);
    try {
      let dataUrl: string;
      try {
        dataUrl = await toPng(ticketRef.current, { width: 1080, height: 1350, pixelRatio: 1 });
      } catch {
        dataUrl = await toPng(ticketRef.current, {
          width: 1080,
          height: 1350,
          pixelRatio: 1,
          skipFonts: true,
        });
      }

      // Generate clean filename based on user's name
      const safeName = name.trim()
        ? name
            .trim()
            .replace(/[^a-zA-Z0-9_\-\s]/g, "")
            .replace(/\s+/g, "_")
        : "Builder";
      const fileName = `${safeName}_HH_Goa_2026_Pass.png`;

      // Convert data URL to Blob for reliable browser download naming with extension
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
    } catch (err) {
      console.error("Failed to download pass:", err);
    } finally {
      setBusy(false);
    }
  };

  const share = () => {
    const text = "Just generated my HH Goa 2026 Builder Access Pass 🚀\n#FrameInGoa";
    window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(text)}`, "_blank");
  };

  const reset = () => {
    setName("");
    setStack("");
    setTeam("");
    setTitle("");
    setPhoto(null);
    resetAdjustments();
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <section id="generator" className="relative px-2.5 sm:px-6 pb-6 sm:pb-8 w-full min-w-0">
      <div className="relative mx-auto max-w-6xl w-full min-w-0">
        <div className="paper-texture relative rounded-[16px] sm:rounded-[28px] bg-goa-cream p-3.5 sm:p-8 md:p-12 shadow-[var(--shadow-board)] w-full min-w-0 overflow-hidden">
          <Pins />
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[1fr_460px] items-start w-full min-w-0">
            {/* LEFT — form */}
            <div className="w-full min-w-0">
              <h2 className="font-display text-xl leading-tight text-goa-green-deep sm:text-3xl md:text-4xl">
                🌴 Create your builder access pass
              </h2>

              <div className="mt-5 sm:mt-8">
                <p className="label-mono text-goa-pink text-[10px] sm:text-xs">
                  Step 1 — Upload photo
                </p>

                <input
                  ref={fileRef}
                  id="photo-input"
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={(e) => readFile(e.target.files?.[0])}
                />

                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragging(true);
                  }}
                  onDragLeave={() => setDragging(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragging(false);
                    readFile(e.dataTransfer.files?.[0]);
                  }}
                  className={`mt-2.5 flex flex-col items-center gap-3 rounded-xl sm:rounded-2xl border-2 sm:border-[3px] border-dashed p-3.5 sm:p-6 text-center transition-colors ${
                    dragging
                      ? "border-goa-pink bg-goa-pink/5"
                      : "border-goa-green-deep/45 bg-white/50"
                  }`}
                >
                  {photo ? (
                    <div className="flex flex-col items-center gap-4 w-full">
                      {/* Photo preview with live adjustments */}
                      <div className="relative flex items-center justify-center size-28 sm:size-32 rounded-full border-4 border-goa-yellow overflow-hidden bg-goa-green shadow-md">
                        <img
                          src={photo}
                          alt="Uploaded pass photo preview"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transform: `scale(${photoZoom}) translate(${photoX}%, ${photoY}%)`,
                          }}
                        />
                      </div>

                      {/* Photo Adjustment Controls */}
                      <div className="w-full rounded-xl bg-white/80 p-3 sm:p-4 border border-goa-green-deep/20 space-y-3">
                        <p className="label-mono text-xs font-bold text-goa-green-deep flex items-center justify-center gap-1.5">
                          <Sliders className="size-3.5 text-goa-pink" /> Adjust Photo Position &
                          Zoom
                        </p>

                        {/* Zoom slider */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[11px] sm:text-xs font-semibold text-goa-green-deep/80">
                            <span className="flex items-center gap-1">
                              <ZoomOut className="size-3" /> Zoom
                            </span>
                            <span>{Math.round(photoZoom * 100)}%</span>
                          </div>
                          <input
                            type="range"
                            min="1"
                            max="2.5"
                            step="0.05"
                            value={photoZoom}
                            onChange={(e) => setPhotoZoom(parseFloat(e.target.value))}
                            className="w-full accent-goa-pink cursor-pointer h-1.5 rounded-lg bg-goa-green-deep/20"
                          />
                        </div>

                        {/* Pan X slider */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[11px] sm:text-xs font-semibold text-goa-green-deep/80">
                            <span>Horizontal position (X)</span>
                            <span>{photoX}%</span>
                          </div>
                          <input
                            type="range"
                            min="-50"
                            max="50"
                            step="1"
                            value={photoX}
                            onChange={(e) => setPhotoX(parseInt(e.target.value, 10))}
                            className="w-full accent-goa-pink cursor-pointer h-1.5 rounded-lg bg-goa-green-deep/20"
                          />
                        </div>

                        {/* Pan Y slider */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[11px] sm:text-xs font-semibold text-goa-green-deep/80">
                            <span>Vertical position (Y)</span>
                            <span>{photoY}%</span>
                          </div>
                          <input
                            type="range"
                            min="-50"
                            max="50"
                            step="1"
                            value={photoY}
                            onChange={(e) => setPhotoY(parseInt(e.target.value, 10))}
                            className="w-full accent-goa-pink cursor-pointer h-1.5 rounded-lg bg-goa-green-deep/20"
                          />
                        </div>

                        {/* Reset position button if modified */}
                        {(photoZoom !== 1 || photoX !== 0 || photoY !== 0) && (
                          <button
                            type="button"
                            onClick={resetAdjustments}
                            className="text-[10px] sm:text-xs font-bold text-goa-pink underline hover:text-goa-pink/80 flex items-center gap-1 mx-auto"
                          >
                            <RotateCcw className="size-3" /> Reset position & zoom
                          </button>
                        )}
                      </div>

                      {/* Photo actions row */}
                      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full">
                        <button
                          type="button"
                          onClick={() => fileRef.current?.click()}
                          className="glow-pink inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full bg-goa-pink px-5 text-xs font-bold uppercase tracking-widest text-white shadow-sm hover:bg-goa-pink/90"
                        >
                          <UploadCloud className="size-3.5" /> Change photo
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <UploadCloud
                        className="size-7 sm:size-10 text-goa-green-deep/70"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-semibold text-xs sm:text-base text-goa-green-deep">
                          Drop your hacker photo here
                        </p>
                        <p className="label-mono mt-0.5 text-[9px] sm:text-xs text-goa-green-deep/60">
                          JPG, PNG, HEIC supported
                        </p>
                      </div>
                      <label
                        htmlFor="photo-input"
                        className="glow-pink inline-flex min-h-10 sm:min-h-12 cursor-pointer items-center rounded-full bg-goa-pink px-4 sm:px-6 text-[11px] sm:text-sm font-bold uppercase tracking-widest text-white"
                      >
                        Choose photo
                      </label>
                    </>
                  )}
                </div>
              </div>

              <div className="mt-5 sm:mt-8">
                <p className="label-mono text-goa-pink text-[10px] sm:text-xs">
                  Step 2 — Your details
                </p>
                <div className="mt-2.5 grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 w-full min-w-0">
                  <div className="sm:col-span-2 w-full min-w-0">
                    <LabelledInput
                      id="f-name"
                      label="Name"
                      value={name}
                      onChange={setName}
                      placeholder="e.g. Alex Rivera"
                    />
                  </div>
                  <div className="sm:col-span-2 w-full min-w-0">
                    <LabelledInput
                      id="f-stack"
                      label="Stack / Role"
                      value={stack}
                      onChange={setStack}
                      placeholder="e.g. Full-Stack / AI Engineer"
                    />
                  </div>
                  <div className="w-full min-w-0">
                    <LabelledInput
                      id="f-team"
                      label="Team"
                      value={team}
                      onChange={setTeam}
                      placeholder="e.g. HackGoa Team"
                    />
                  </div>
                  <div className="w-full min-w-0">
                    <LabelledInput
                      id="f-title"
                      label="Builder title"
                      value={title}
                      onChange={setTitle}
                      placeholder="e.g. ⚡ Sunset Shipmaster ⚡"
                    />
                  </div>
                </div>
                <div className="mt-3.5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setTitle(TITLES[Math.floor(Math.random() * TITLES.length)] as string)
                    }
                    className="glow-pink inline-flex min-h-10 sm:min-h-12 items-center justify-center gap-2 rounded-full bg-goa-pink px-4 sm:px-6 text-[11px] sm:text-sm font-bold uppercase tracking-widest text-white w-full sm:w-auto"
                  >
                    <Sparkles className="size-3.5 sm:size-4" aria-hidden="true" /> Generate title
                  </button>
                  <span className="label-mono text-[9px] sm:text-xs text-center sm:text-left text-goa-green-deep/60">
                    Get a random hacker title
                  </span>
                </div>
              </div>

              {/* beach shack status sticky note */}
              <div className="mt-6 sm:mt-10 w-full sm:max-w-sm rounded-xl bg-goa-yellow p-3.5 sm:p-5 shadow-[var(--shadow-lift)] sm:-rotate-2">
                <span
                  aria-hidden="true"
                  className="mx-auto mb-2 block size-3 sm:size-4 rounded-full bg-goa-pink ring-2 ring-goa-green-deep/25"
                />
                <h3 className="font-display text-base sm:text-xl text-goa-green-deep text-center sm:text-left">
                  🌴 Beach shack status
                </h3>
                <ul className="mt-2 space-y-1 font-mono text-xs sm:text-sm text-goa-green-deep">
                  <li className="flex items-center justify-between sm:justify-start sm:gap-2">
                    <span>Feni:</span> <span>Cold ✅</span>
                  </li>
                  <li className="flex items-center justify-between sm:justify-start sm:gap-2">
                    <span>Wi-Fi:</span> <span>Questionable ⚠️</span>
                  </li>
                  <li className="flex items-center justify-between sm:justify-start sm:gap-2">
                    <span>Builders Online:</span> <span>247 🚀</span>
                  </li>
                  <li className="flex items-center justify-between sm:justify-start sm:gap-2">
                    <span>Sunset ETA:</span> <span>18:42 🌅</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT — live preview */}
            <div className="w-full min-w-0 max-w-[460px] mx-auto lg:sticky lg:top-24 lg:self-start">
              <p className="label-mono mb-2 sm:mb-3 text-center lg:text-left text-goa-green-deep/70 text-[10px] sm:text-xs">
                Live ticket preview
              </p>
              <div
                ref={frameRef}
                className="relative w-full min-w-0 overflow-hidden rounded-[16px] sm:rounded-[24px] shadow-md border-2 border-goa-green-deep/15 bg-goa-green-deep"
                style={{ height: scale ? `${1350 * scale}px` : "auto" }}
              >
                <div style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}>
                  <TicketPreview ref={ticketRef} data={data} />
                </div>
              </div>

              <div className="mt-4 sm:mt-5 flex flex-col gap-2.5 sm:gap-3 w-full">
                <button
                  type="button"
                  onClick={download}
                  disabled={busy}
                  className="glow-pink inline-flex min-h-11 sm:min-h-14 w-full items-center justify-center gap-2 rounded-full bg-goa-pink text-xs sm:text-base font-bold uppercase tracking-widest text-white disabled:opacity-60"
                >
                  <Download className="size-4 sm:size-5" aria-hidden="true" />
                  {busy ? "Exporting…" : "Download PNG"}
                </button>
                <button
                  type="button"
                  onClick={share}
                  className="inline-flex min-h-11 sm:min-h-14 w-full items-center justify-center gap-2 rounded-full border-2 border-goa-yellow bg-goa-green-deep text-xs sm:text-base font-bold uppercase tracking-widest text-goa-yellow transition-colors hover:bg-goa-green"
                >
                  <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
                    <path d="M18.9 2H22l-7 8 8.2 12H16l-5-7.3L4.8 22H1.6l7.4-8.5L1 2h7.3l4.7 6.8L18.9 2Z" />
                  </svg>
                  Share to X
                </button>
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex min-h-10 sm:min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-goa-green-deep/50 text-[11px] sm:text-sm font-bold uppercase tracking-widest text-goa-green-deep transition-colors hover:bg-goa-green-deep/5"
                >
                  <RefreshCw className="size-3.5 sm:size-4" aria-hidden="true" /> New ticket
                </button>
              </div>
            </div>
          </div>
        </div>

        <PalmDoodle className="animate-sway pointer-events-none absolute -left-10 -top-14 hidden size-24 text-goa-yellow/70 lg:block" />
        <FeniBottleDoodle className="pointer-events-none absolute -right-8 -bottom-10 hidden h-24 text-goa-yellow/70 lg:block" />
        <CoconutDrinkDoodle className="pointer-events-none absolute -left-12 bottom-24 hidden size-16 text-goa-pink/70 lg:block" />
      </div>
    </section>
  );
}
