import { useEffect, useRef, useState } from "react";

const FONT_SIZE = 14;
const FRAME_INTERVAL = 50;

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

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const letters = "01";
    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;

      const newColumns = Math.floor(width / FONT_SIZE);
      if (newColumns > columns) {
        drops = [...drops, ...Array(newColumns - columns).fill(1)];
      } else {
        drops = drops.slice(0, newColumns);
      }
      columns = newColumns;
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    let lastFrameTime = 0;
    let animationId = 0;

    const draw = (timestamp: number) => {
      animationId = requestAnimationFrame(draw);

      if (timestamp - lastFrameTime < FRAME_INTERVAL) return;
      lastFrameTime = timestamp;

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillStyle = "oklch(70.5% 0.213 47.604)";
        ctx.font = `${FONT_SIZE}px monospace`;
        ctx.fillText(text, i * FONT_SIZE, drops[i] * FONT_SIZE);
        if (drops[i] * FONT_SIZE > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, [bgColor]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setBgColor(getBackgroundColor);
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute -z-1 w-full h-full" />
  )
}

export default MatrixBackground;
