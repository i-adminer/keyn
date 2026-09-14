"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isHidden, setIsHidden] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth hover scaling tracking
  const scaleRef = useRef(1);
  const targetScaleRef = useRef(1);

  // Solar burst explosion mechanics
  const isBurstingRef = useRef(false);
  const burstProgressRef = useRef(0); // 0 to 1 for the boom animation timeline

  // Tail positions & persistent velocities for explosion vectors
  const tail = useRef(
    Array.from({ length: 14 }, (_, index) => ({
      x: -100,
      y: -100,
      // Assign unique radial angles to each particle for a circular burst pattern
      angle: (index / 14) * Math.PI * 2,
      // Random explosive velocity vectors
      speed: 4 + Math.random() * 6,
    })),
  );

  const tailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let animationFrame: number;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Hover check over interactive nodes
      const target = e.target as HTMLElement | null;
      if (target && !isBurstingRef.current) {
        const isInteractive =
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.getAttribute("role") === "button" ||
          window.getComputedStyle(target).cursor === "pointer";

        setIsHovering(!!isInteractive);
      }
    };

    const animateTail = () => {
      const targetX = cursorX.get();
      const targetY = cursorY.get();

      if (isBurstingRef.current) {
        // Advance the explosion timeline
        burstProgressRef.current += 0.05; // Controls speed of explosion/fade cycle

        if (burstProgressRef.current >= 1) {
          // Reset burst state: snap particles back to cursor to "come back"
          isBurstingRef.current = false;
          burstProgressRef.current = 0;
          tail.current.forEach((p) => {
            p.x = targetX;
            p.y = targetY;
          });
        }
      }

      // Update positions based on current state (Normal vs. Explosion)
      if (!isBurstingRef.current) {
        // NORMAL TRACKING PHYSICS
        tail.current[0].x += (targetX - tail.current[0].x) * 0.45;
        tail.current[0].y += (targetY - tail.current[0].y) * 0.45;

        for (let i = 1; i < tail.current.length; i++) {
          tail.current[i].x +=
            (tail.current[i - 1].x - tail.current[i].x) * 0.3;
          tail.current[i].y +=
            (tail.current[i - 1].y - tail.current[i].y) * 0.3;
        }
      } else {
        // SOLAR EXPLOSION PHYSICS (Fly away from center point)
        tail.current.forEach((particle) => {
          // Push outward along the particle's radial vector angle
          particle.x +=
            Math.cos(particle.angle) *
            particle.speed *
            (1 - burstProgressRef.current);
          particle.y +=
            Math.sin(particle.angle) *
            particle.speed *
            (1 - burstProgressRef.current);
        });
      }

      // Interpolate normal hover scale modifications
      targetScaleRef.current = isHovering ? 1.4 : 1.0;
      scaleRef.current += (targetScaleRef.current - scaleRef.current) * 0.2;

      // Render modifications safely directly to DOM nodes
      tail.current.forEach((particle, index) => {
        const element = tailRefs.current[index];
        if (!element) return;

        let size = Math.max(2, (14 - index * 1.1) * scaleRef.current);
        let opacity = Math.max(0, 0.85 - index * 0.06);

        // Apply specialized fading and dilation metrics if bursting
        if (isBurstingRef.current) {
          // Expand visually as particles drift outwards, then clear out entirely
          size = size * (1 + burstProgressRef.current * 0.8);
          opacity = Math.max(0, (1 - burstProgressRef.current) * 0.9);
        }

        // Generate burning color grades (White core to Red ashes)
        const ratio = index / (tail.current.length - 1);
        const r = Math.round(255 - (255 - 225) * ratio);
        const g = Math.round(220 - (220 - 30) * ratio);
        const b = Math.round(120 - (120 - 5) * ratio);

        element.style.transform = `translate3d(${particle.x - size / 2}px, ${particle.y - size / 2}px, 0)`;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.opacity = `${opacity}`;
        element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        element.style.boxShadow = isBurstingRef.current
          ? `0 0 ${12 * (1 - burstProgressRef.current)}px rgba(${r}, ${g}, ${b}, 0.9)`
          : `0 0 ${6 + index * 0.6}px rgba(${r}, ${g}, ${b}, 0.8)`;
      });

      animationFrame = requestAnimationFrame(animateTail);
    };

    const handleMouseDown = () => {
      // Trigger solar burst cycle if it isn't running already
      if (!isBurstingRef.current) {
        const currentX = cursorX.get();
        const currentY = cursorY.get();

        // Center all particles immediately for clean radial dispersal paths
        tail.current.forEach((particle) => {
          particle.x = currentX;
          particle.y = currentY;
          particle.speed = 6 + Math.random() * 9; // Randomize kick velocities
        });

        burstProgressRef.current = 0;
        isBurstingRef.current = true;
      }
    };

    const mouseEnter = () => setIsHidden(false);
    const mouseLeave = () => setIsHidden(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseenter", mouseEnter);
    document.addEventListener("mouseleave", mouseLeave);

    animationFrame = requestAnimationFrame(animateTail);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseenter", mouseEnter);
      document.removeEventListener("mouseleave", mouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, [cursorX, cursorY, isHovering]);

  if (isHidden) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-99999">
      {/* ================================
          BURNING TAIL / SOLAR FLARE PARTICLES
      ================================= */}
      {tail.current.map((_, index) => (
        <div
          key={index}
          ref={(element) => {
            tailRefs.current[index] = element;
          }}
          className="fixed left-0 top-0 rounded-full will-change-transform"
          style={{
            width: "10px",
            height: "10px",
          }}
        />
      ))}
    </div>
  );
}
