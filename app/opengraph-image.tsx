import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        padding: 80,
        background: "#102a39",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
        <div style={{ color: "#8fddd2", fontSize: 27, letterSpacing: 5 }}>
          PODO / PROJET EN DÉVELOPPEMENT
        </div>
        <div
          style={{
            fontSize: 74,
            fontWeight: 700,
            maxWidth: 980,
            lineHeight: 1.07,
          }}
        >
          La mesure du pied, repensée pour les podologues.
        </div>
        <div style={{ fontSize: 25, color: "#b5d0d0" }}>
          Capture 3D · Mesures morphologiques · Revue humaine
        </div>
      </div>
    </div>,
    size,
  );
}
