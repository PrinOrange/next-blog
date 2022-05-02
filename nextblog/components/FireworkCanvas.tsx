import Script from "next/script";

export default function FireworkCanvas() {
    
    return (
        <>
            <canvas id="fireworks" className="fireworks"
                style={{ position: "fixed",pointerEvents:"none", left: 0, top: 0, zIndex: 999999, width: "100%", height: "100%" }}>
            </canvas >
            <Script src="/external/anime.min.js"></Script>
        </>

    )
}