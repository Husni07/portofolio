"use client";

import { useEffect, useRef } from "react";

const CursorAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const points = [];
    const m = { x: null, y: null };
    let r = 0;

    const a = 20;
    const b = 5;
    const c = 0.1;
    const d = 100;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    m.x = canvas.width / 2;
    m.y = canvas.height / 2;

    window.addEventListener("mousemove", (e) => {
      m.x = e.clientX;
      m.y = e.clientY;
    });

    for (let i = 0; i < a; i++) {
      points.push({
        r: (360 / a) * i,
        p: { x: null, y: null },
        w: Math.random() * 5,
        c: "#fff",
        d: Math.random() * (d + 5) - 5,
        s: Math.random() * (b + 5) - 5,
      });
    }

    const render = () => {
      if (m.x == null || m.y == null) return;

      ctx.fillStyle = `rgba(0,0,0,${c})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.lineCap = "round";

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        p.r += p.s;
        if (p.r >= 360) p.r -= 360;

        const vel = {
          x: p.d * Math.cos((p.r * Math.PI) / 180),
          y: p.d * Math.sin((p.r * Math.PI) / 180),
        };

        if (p.p.x != null && p.p.y != null) {
          ctx.strokeStyle = p.c;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(p.p.x, p.p.y);
          ctx.lineTo(m.x + vel.x, m.y + vel.y);
          ctx.stroke();
          ctx.closePath();
        }

        p.p.x = m.x + vel.x;
        p.p.y = m.y + vel.y;
      }
    };

    const animloop = () => {
      requestAnimationFrame(animloop);
      render();
    };

    animloop();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} id="c"></canvas>

      <style jsx>{`
        canvas {
          margin: 0;
          overflow: hidden;
          background: #000;
          position: fixed;
          top: 0;
          left: 0;
          z-index: -1;
        }

        .message {
          color: #fff;
          font-family: Helvetica, Arial, sans-serif;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hide {
          display: none;
        }
      `}</style>
    </>
  );
};

export default CursorAnimation;
