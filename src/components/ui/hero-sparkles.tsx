"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Sparkle {
  id: number;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
  rotation: number;
}

const COLORS = { first: "#ffd700", second: "#ffed4e" };
const SPARKLE_COUNT = 22;

function generateSparkle(id: number): Sparkle {
  return {
    id,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    color: Math.random() > 0.5 ? COLORS.first : COLORS.second,
    delay: Math.random() * 8,
    scale: Math.random() * 0.4 + 0.4,
    lifespan: Math.random() * 3 + 2.5,
    rotation: Math.random() * 360,
  };
}

export function HeroSparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    setSparkles(Array.from({ length: SPARKLE_COUNT }, (_, i) => generateSparkle(i)));

    const interval = setInterval(() => {
      setSparkles((prev) => {
        if (prev.length > 0 && Math.random() > 0.5) {
          const idx = Math.floor(Math.random() * prev.length);
          const next = [...prev];
          next[idx] = generateSparkle(prev[idx].id);
          return next;
        }
        return prev;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 2,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {sparkles.map((s) => (
        <motion.svg
          key={s.id}
          style={{
            position: "absolute",
            left: s.x,
            top: s.y,
            width: "clamp(14px, 2.2vw, 30px)",
            height: "clamp(14px, 2.2vw, 30px)",
          }}
          viewBox="0 0 160 160"
          initial={{ opacity: 0, scale: 0, rotate: s.rotation }}
          animate={{
            opacity: [0, 0.5, 0.7, 0.5, 0],
            scale: [0, 0.6, s.scale, 0.6, 0],
            rotate: [s.rotation, s.rotation + 90, s.rotation + 180],
          }}
          transition={{
            duration: s.lifespan,
            repeat: Infinity,
            delay: s.delay,
            ease: "easeInOut",
            repeatDelay: Math.random() * 2,
          }}
        >
          <path
            d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
            fill={s.color}
            style={{ filter: "drop-shadow(0 0 4px currentColor)" }}
          />
        </motion.svg>
      ))}
    </div>
  );
}
