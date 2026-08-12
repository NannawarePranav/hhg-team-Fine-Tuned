import { forwardRef } from "react";
import {
  AvatarSilhouette,
  CoconutDrinkDoodle,
  PalmDoodle,
  ShackDoodle,
  SunDoodle,
  SurfboardDoodle,
  WaveDoodle,
} from "./doodles";

export type PassData = {
  name: string;
  stack: string;
  team: string;
  title: string;
  passId: string;
  photo: string | null;
  photoZoom?: number;
  photoX?: number;
  photoY?: number;
};

const Field = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div
      className="text-goa-yellow uppercase"
      style={{ fontFamily: "var(--font-mono)", fontSize: 22, letterSpacing: "0.22em" }}
    >
      {label}
    </div>
    <div
      className="text-white truncate overflow-hidden text-ellipsis uppercase"
      style={{ fontSize: 40, fontWeight: 700, lineHeight: 1.15, marginTop: 6 }}
      title={value}
    >
      {value.toUpperCase()}
    </div>
  </div>
);

/** Fixed 1080x1350 ticket composition, scaled by the parent for display. */
export const TicketPreview = forwardRef<HTMLDivElement, { data: PassData }>(({ data }, ref) => (
  <div
    ref={ref}
    className="relative overflow-hidden bg-goa-green-deep uppercase"
    style={{ width: 1080, height: 1350, borderRadius: 32, border: "4px solid var(--goa-yellow)" }}
  >
    <div className="dot-matrix absolute inset-0" />
    <div className="absolute inset-0" style={{ background: "var(--gradient-sunset)" }} />

    {/* side perforations */}
    {[0, 1].map((side) => (
      <div
        key={side}
        className="absolute flex flex-col justify-between"
        style={{
          top: 120,
          bottom: 120,
          [side ? "right" : "left"]: -18,
          width: 36,
        }}
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="bg-goa-green"
            style={{ width: 36, height: 36, borderRadius: 999 }}
          />
        ))}
      </div>
    ))}

    {/* registration marks */}
    {[
      { top: 26, left: 26 },
      { top: 26, right: 26 },
      { bottom: 26, left: 26 },
      { bottom: 26, right: 26 },
    ].map((pos, i) => (
      <div
        key={i}
        className="absolute border-goa-yellow/60"
        style={{ ...pos, width: 30, height: 30, borderWidth: 3 }}
      />
    ))}

    <div className="relative flex h-full flex-col" style={{ padding: "64px 96px 56px" }}>
      {/* header */}
      <div className="text-center">
        <div
          className="text-goa-yellow"
          style={{ fontFamily: "var(--font-mono)", fontSize: 30, letterSpacing: "0.35em" }}
        >
          [ HH GOA 2026 ]
        </div>
        <div
          className="text-white"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 40,
            letterSpacing: "0.24em",
            marginTop: 14,
          }}
        >
          BUILDER ACCESS PASS
        </div>
        <div className="bg-goa-yellow/50" style={{ height: 2, marginTop: 26 }} />
      </div>

      {/* photo + doodles */}
      <div className="relative flex items-center justify-center" style={{ marginTop: 44 }}>
        <PalmDoodle
          className="absolute text-goa-yellow"
          style={{ left: 10, top: 4, width: 84, height: 84 }}
        />
        <SurfboardDoodle
          className="absolute text-goa-pink"
          style={{ left: 96, bottom: 0, width: 54, height: 54 }}
        />
        <CoconutDrinkDoodle
          className="absolute text-goa-yellow"
          style={{ right: 24, top: 0, width: 74, height: 74 }}
        />
        <SunDoodle
          className="absolute text-goa-pink"
          style={{ right: 120, bottom: 4, width: 56, height: 56 }}
        />
        <WaveDoodle
          className="absolute text-goa-yellow/70"
          style={{ left: 0, bottom: -18, width: 180 }}
        />
        <WaveDoodle
          className="absolute text-goa-yellow/70"
          style={{ right: 0, bottom: -18, width: 180 }}
        />
        <div
          className="flex items-center justify-center overflow-hidden bg-goa-green"
          style={{
            width: 330,
            height: 330,
            borderRadius: 999,
            border: "12px solid var(--goa-yellow)",
            boxShadow: "0 24px 50px oklch(0 0 0 / 0.45)",
          }}
        >
          {data.photo ? (
            <img
              src={data.photo}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: `scale(${data.photoZoom ?? 1}) translate(${data.photoX ?? 0}%, ${data.photoY ?? 0}%)`,
              }}
            />
          ) : (
            <AvatarSilhouette className="text-goa-cream/60" style={{ width: 220, height: 220 }} />
          )}
        </div>
      </div>

      {/* info */}
      <div
        style={{
          marginTop: 52,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "34px 40px",
        }}
      >
        <div style={{ gridColumn: "span 2" }}>
          <Field label="NAME" value={data.name.trim() || "YOUR NAME"} />
        </div>
        <div style={{ gridColumn: "span 2" }}>
          <Field label="STACK / ROLE" value={data.stack.trim() || "BUILDER / HACKER"} />
        </div>
        <Field label="TEAM" value={data.team.trim() || "SOLO BUILDER"} />
        <Field label="PASS ID" value={data.passId} />
        <Field label="ACCESS" value="BUILDER" />
        <Field label="ISSUED IN" value="GOA, INDIA" />
        <div style={{ gridColumn: "span 2" }}>
          <div
            className="text-goa-yellow uppercase"
            style={{ fontFamily: "var(--font-mono)", fontSize: 22, letterSpacing: "0.22em" }}
          >
            BUILDER TITLE
          </div>
          <div
            className="inline-block max-w-full truncate bg-goa-pink text-goa-yellow uppercase"
            style={{
              marginTop: 12,
              padding: "16px 34px",
              borderRadius: 999,
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            {(data.title.trim() || "⚡ Sunset Shipmaster ⚡").toUpperCase()}
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="mt-auto">
        <div className="flex items-end justify-between" style={{ marginBottom: 20 }}>
          <ShackDoodle className="text-goa-yellow/80" style={{ width: 90, height: 72 }} />
          <div className="flex items-end gap-2">
            {Array.from({ length: 34 }).map((_, i) => (
              <span
                key={i}
                className="bg-goa-yellow/85"
                style={{ width: i % 3 === 0 ? 6 : 3, height: 46 }}
              />
            ))}
          </div>
          <div
            style={{
              width: 84,
              height: 84,
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 3,
            }}
          >
            {Array.from({ length: 25 }).map((_, i) => (
              <span
                key={i}
                style={{
                  background: [0, 2, 4, 6, 8, 12, 14, 16, 18, 20, 24].includes(i)
                    ? "var(--goa-yellow)"
                    : "transparent",
                }}
              />
            ))}
          </div>
        </div>
        <div className="bg-goa-yellow/50" style={{ height: 2 }} />
        <div
          className="flex items-center justify-between"
          style={{
            marginTop: 22,
            fontFamily: "var(--font-mono)",
            fontSize: 26,
            letterSpacing: "0.18em",
          }}
        >
          <span className="text-goa-pink" style={{ fontWeight: 600 }}>
            #FrameInGoa
          </span>
          <span className="text-goa-yellow">GOA BEACH • HH GOA 2026</span>
        </div>
      </div>
    </div>
  </div>
));
TicketPreview.displayName = "TicketPreview";
