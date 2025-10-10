import { useEffect, useRef, useState } from "react";

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const getBackgroundColor = () => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    return isDarkMode ? "rgba(47, 72, 88, 0.15)" : "rgba(231, 233, 223, 0.15)";
  };
  const [bgColor, setBgColor] = useState(getBackgroundColor);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    const letters = "01";
    const fontSize = 14;
    const columns = Math.floor(window.innerWidth / fontSize);
    const drops = Array(columns).fill(1);

    canvas.width = window.innerWidth;
    canvas.height = 500;

    const draw = () => {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillStyle = "oklch(70.5% 0.213 47.604)";
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, [bgColor]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setBgColor(getBackgroundColor);
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="absolute -z-1 w-full h-full" />
    </>
  )
}

export default MatrixBackground;
