import { ImageResponse } from "next/og";

export const alt = "MRK IT Solution — Jasa Pembuatan Website & Aplikasi Profesional di Indonesia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0F1C35",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Decorative gold blobs */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(212, 160, 23, 0.12)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: 200,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(212, 160, 23, 0.08)",
            filter: "blur(60px)",
          }}
        />

        {/* Logo area */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* Icon */}
          <div
            style={{
              width: 72,
              height: 72,
              background: "#152340",
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(212,160,23,0.3)",
            }}
          >
            {/* Simplified diamond icon */}
            <div
              style={{
                width: 28,
                height: 28,
                background: "#D4A017",
                transform: "rotate(45deg)",
              }}
            />
          </div>
          {/* Wordmark */}
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: 36,
                fontWeight: 800,
                letterSpacing: "0.2em",
                lineHeight: 1,
              }}
            >
              MRK
            </span>
            <span
              style={{
                color: "#D4A017",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.45em",
              }}
            >
              IT SOLUTION
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <h1
            style={{
              color: "#FFFFFF",
              fontSize: 60,
              fontWeight: 800,
              lineHeight: 1.1,
              margin: 0,
              maxWidth: 800,
            }}
          >
            Wujudkan{" "}
            <span style={{ color: "#D4A017" }}>Transformasi Digital</span>{" "}
            Bisnis Anda
          </h1>
          <p
            style={{
              color: "#8fa3c0",
              fontSize: 24,
              margin: 0,
              lineHeight: 1.5,
              maxWidth: 700,
            }}
          >
            Website · Aplikasi Mobile · Custom Software · Cloud & DevOps
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(212,160,23,0.2)",
            paddingTop: 28,
          }}
        >
          <span style={{ color: "#8fa3c0", fontSize: 20 }}>
            mrksolution.id
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(212,160,23,0.15)",
              border: "1px solid rgba(212,160,23,0.3)",
              borderRadius: 999,
              padding: "8px 20px",
            }}
          >
            <span style={{ color: "#D4A017", fontSize: 16, fontWeight: 600 }}>
              Konsultasi Gratis
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
