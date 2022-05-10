import Script from "next/script";

export default function FireworkCanvas() {
  return (
    <>
      <canvas
        id="fireworks"
        className="fireworks"
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 999999,
          width: "100vw",
          height: "100vh",
        }}
      ></canvas>
      <Script src="/external/anime.min.js" strategy="afterInteractive"></Script>
    </>
  );
}
