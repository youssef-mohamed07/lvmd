"use client";

import { useEffect, useRef } from "react";

const particleCount = 6;

export default function GlobalCursor() {
  const trailRef = useRef<HTMLDivElement>(null);
  const particleRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const trail = trailRef.current;
    if (!trail) return;

    let pointerX = -100;
    let pointerY = -100;
    let frame = 0;
    let hideTimer = 0;
    const points = Array.from({ length: particleCount }, () => ({ x: -100, y: -100 }));

    const render = () => {
      points.forEach((point, index) => {
        const target = index === 0 ? { x: pointerX - 8, y: pointerY + 10 } : points[index - 1];
        const follow = Math.max(0.12, 0.28 - index * 0.025);
        point.x += (target.x - point.x) * follow;
        point.y += (target.y - point.y) * follow;
        const particle = particleRefs.current[index];
        if (particle) particle.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) scale(${1 - index * 0.08})`;
      });
      frame = requestAnimationFrame(render);
    };

    const move = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      trail.dataset.visible = "true";
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => { trail.dataset.visible = "false"; }, 110);
    };
    const leave = () => { trail.dataset.visible = "false"; };

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(hideTimer);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div ref={trailRef} className="cleaning-cursor-trail" aria-hidden="true">
      {Array.from({ length: particleCount }, (_, index) => (
        <span
          key={index}
          ref={(node) => { particleRefs.current[index] = node; }}
          className={index === 1 || index === 4 ? "is-sparkle" : "is-bubble"}
        />
      ))}
    </div>
  );
}
