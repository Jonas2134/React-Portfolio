import { useEffect, useRef, useState } from "react";

const codeLines = [
  `const dev = {\n`,
  `  name: "Jonas Stiefer",\n`,
  `  createWith: ["Vite", "React", "TypeScript", "Tailwind"],\n`,
  `  passion: "building clean UI"\n`,
  `};\n`,
  `\n`,
  `function sayHello(name: string) {\n`,
  `  console.log("Hello, \${name} 👋");\n`,
  `}\n`,
  `\n`,
  `sayHello("World");\n`,
];

export default function MatrixTerminal() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [typedText, setTypedText] = useState("");
  const [step, setStep] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00FF00";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (step >= codeLines.length) return;

    const line = codeLines[step];
    const chars = Array.from(line);
    const idxRef = { current: 0 };
    let cancelled = false;

    const typeNext = () => {
      if (cancelled) return;

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      if (idxRef.current < chars.length) {
        const char = chars[idxRef.current];
        setTypedText((prev) => prev + char);
        idxRef.current++;
        const delay = 30 + Math.floor(Math.random() * 60);
        timeoutRef.current = setTimeout(typeNext, delay);
      } else {
        timeoutRef.current = setTimeout(() => {
          if (cancelled) return;
          setTypedText((prev) => prev);
          setStep((s) => s + 1);
        }, 250);
      }
    };

    typeNext();

    return () => {
      cancelled = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [step]);

  return (
    <div className="relative w-full max-w-2xl mx-auto h-[400px] rounded overflow-hidden shadow-2xl">
      <canvas ref={canvasRef} className="absolute inset-0 bg-terminal-bg backdrop-blur-md" />

      <div className="absolute inset-0 bg-terminal-bg/60 text-white font-mono p-6 text-sm text-left leading-relaxed whitespace-pre overflow-hidden">
        <div className="border border-terminal-border rounded p-4 shadow-inner h-full">
          <div className="text-terminal-prompt mb-2">~/portfolio $</div>
          <pre>{typedText}</pre>
          <span className="animate-pulse">▋</span>
        </div>
      </div>
    </div>
  );
}
