"use client";

import { CSSProperties, FC, ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SparklesTextProps {
  text?: string;
  className?: string;
  colors?: {
    first: string;
    second: string;
  };
  sparklesCount?: number;
  children?: ReactNode;
}

interface Sparkle {
  id: number;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
  rotation: number;
  zIndex: number;
}

export const SparklesText: FC<SparklesTextProps> = ({
  text = "",
  colors = { first: "#9E7AFF", second: "#FE8BBB" },
  sparklesCount = 10,
  className = "",
  children,
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateStar = (id: number): Sparkle => {
      // Completely random position without any pattern
      const x = Math.random() * 120 - 10; // -10% to 110%
      const y = Math.random() * 120 - 10; // -10% to 110%
      
      return {
        id,
        x: `${x}%`,
        y: `${y}%`,
        color: Math.random() > 0.5 ? colors.first : colors.second,
        delay: Math.random() * 6, // 0-6 seconds initial delay
        scale: Math.random() * 0.5 + 0.6, // 0.6-1.1
        lifespan: Math.random() * 2.5 + 2, // 2-4.5 seconds (faster)
        rotation: Math.random() * 360,
        zIndex: Math.random() > 0.5 ? 2 : 0, // Half in front, half behind
      };
    };

    const initializeStars = () => {
      return Array.from({ length: sparklesCount }, (_, i) => generateStar(i));
    };

    setSparkles(initializeStars());

    // Faster regeneration
    const interval = setInterval(() => {
      setSparkles((currentSparkles) => {
        if (currentSparkles.length > 0 && Math.random() > 0.5) {
          const randomIndex = Math.floor(Math.random() * currentSparkles.length);
          const newSparkles = [...currentSparkles];
          newSparkles[randomIndex] = generateStar(currentSparkles[randomIndex].id);
          return newSparkles;
        }
        return currentSparkles;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [colors.first, colors.second, sparklesCount]);

  return (
    <span
      className={className}
      style={
        {
          display: "inline-block",
          position: "relative",
        } as CSSProperties
      }
    >
      <span style={{ position: "relative", zIndex: 1 }}>
        {children || text}
      </span>
      {sparkles.map((sparkle) => (
        <motion.svg
          key={sparkle.id}
          className="pointer-events-none"
          style={{
            position: "absolute",
            left: sparkle.x,
            top: sparkle.y,
            width: "clamp(18px, 2.8vw, 38px)",
            height: "clamp(18px, 2.8vw, 38px)",
            zIndex: sparkle.zIndex,
          }}
          viewBox="0 0 160 160"
          initial={{ 
            opacity: 0, 
            scale: 0,
            rotate: sparkle.rotation,
          }}
          animate={{
            opacity: [0, 0.6, 0.8, 0.6, 0],
            scale: [0, 0.7, sparkle.scale, 0.7, 0],
            rotate: [sparkle.rotation, sparkle.rotation + 90, sparkle.rotation + 180],
          }}
          transition={{
            duration: sparkle.lifespan,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
            repeatDelay: Math.random() * 1.5,
          }}
        >
          <path
            d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
            fill={sparkle.color}
            style={{
              filter: "drop-shadow(0 0 6px currentColor)",
            }}
          />
        </motion.svg>
      ))}
    </span>
  );
};
