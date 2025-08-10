import React, { useEffect, useRef } from "react";

export default function Footer() {
  const bubblesRef = useRef(null);

  useEffect(() => {
    const bubblesContainer = bubblesRef.current;
    bubblesContainer.innerHTML = ""; // Clear existing
    for (let i = 0; i < 128; i++) {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.setProperty("--size", `${2 + Math.random() * 4}rem`);
      bubble.style.setProperty("--distance", `${6 + Math.random() * 4}rem`);
      bubble.style.setProperty("--position", `${-5 + Math.random() * 110}%`);
      bubble.style.setProperty("--time", `${2 + Math.random() * 2}s`);
      bubble.style.setProperty("--delay", `${-1 * (2 + Math.random() * 2)}s`);
      bubblesContainer.appendChild(bubble);
    }
  }, []);

  return (
    <footer className="footer relative grid min-h-[12rem] bg-gradient-to-r from-emerald-600 to-green-500 overflow-hidden">
      {/* Bubbles */}
      <div ref={bubblesRef} className="bubbles absolute top-0 left-0 right-0 h-4 filter-[url('#blob')]"></div>

      {/* Content */}
      <div className="content z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 p-6 text-white">
        <div className="flex flex-col justify-center space-y-2">
          <h2 className="text-xl font-bold">Gul Snobar</h2>
          <p>Frontend Developer | Exploring Backend</p>
          <p>Email: <a href="mailto:gullsnobar07@gmail.com" className="underline">gullsnobar07@gmail.com</a></p>
          <p>Phone: <a href="tel:03114167260" className="underline">03114167260</a></p>
          <p>
         LinkedIn:{" "}
        <a
         href="https://www.linkedin.com/in/gullsanobar/"
         target="_blank"
         rel="noopener noreferrer"
         className="underline"
         >
    gulSanobar
  </a>
</p>

        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm opacity-80">© 2025 Gul Snobar. Built with React & Tailwind CSS</p>
        </div>
      </div>

      {/* SVG Filter for bubble effect */}
      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </footer>
  );
}
