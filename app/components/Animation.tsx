"use client";
import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const lines: {
      x: number;
      y: number;
      dx: number;
      dy: number;
      length: number;
    }[] = [];

    for (let i = 0; i < 30; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: Math.random() * 1.5 - 0.75,
        dy: Math.random() * 1.5 - 0.75,
        length: 50 + Math.random() * 100,
      });
    }

    function animate() {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let line of lines) {
          ctx.beginPath();
          ctx.moveTo(line.x, line.y);
          ctx.lineTo(line.x + line.length, line.y + line.length);
          ctx.strokeStyle = "rgb(255, 136, 39)";
          ctx.lineWidth = 1;
          ctx.stroke();

          line.x += line.dx;
          line.y += line.dy;

          if (line.x > canvas.width || line.x < 0) line.dx *= -1;
          if (line.y > canvas.height || line.y < 0) line.dy *= -1;
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default AnimatedBackground;
