"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useHomeMessages } from "@/i18n/messages";
import { SparklesText } from "@/components/ui/sparkles-text";

/**
 * Matches tagline total width to the "Dingho" mark via letter-spacing
 * (binary search; re-runs on resize, after webfonts load, and when locale/tagline changes).
 */
export function HeroTitles() {
  const { heroTagline } = useHomeMessages();
  const titlesRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);
  const markRef = useRef<HTMLSpanElement>(null);
  const [letterSpacingPx, setLetterSpacingPx] = useState<number | null>(null);

  useLayoutEffect(() => {
    function measureAndSync() {
      const tag = taglineRef.current;
      const mark = markRef.current;
      if (!tag || !mark) return;

      const targetW = mark.getBoundingClientRect().width;
      const text = tag.textContent ?? "";
      const charCount = [...text].length;
      if (charCount < 2 || targetW <= 0) {
        tag.style.width = "";
        return;
      }

      /* width:100% from grid makes bbox === column width; measure ink with shrink-to-fit */
      tag.style.width = "max-content";
      tag.style.letterSpacing = "0px";
      const naturalW = tag.getBoundingClientRect().width;
      const gap = targetW - naturalW;
      if (gap <= 0) {
        tag.style.width = "";
        setLetterSpacingPx(0);
        return;
      }

      let low = 0;
      let high = gap / (charCount - 1) + 6;
      for (let i = 0; i < 20; i++) {
        const mid = (low + high) / 2;
        tag.style.letterSpacing = `${mid}px`;
        const w = tag.getBoundingClientRect().width;
        if (w < targetW) low = mid;
        else high = mid;
      }
      const best = (low + high) / 2;
      tag.style.width = "";
      setLetterSpacingPx(best);
    }

    function run() {
      requestAnimationFrame(() => {
        requestAnimationFrame(measureAndSync);
      });
    }

    void document.fonts.ready.then(run);
    run();

    const mark = markRef.current;
    const ro = new ResizeObserver(run);
    if (titlesRef.current) ro.observe(titlesRef.current);
    if (mark) ro.observe(mark);

    window.addEventListener("resize", run);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", run);
    };
  }, [heroTagline]);

  return (
    <h1 id="hero-title" ref={titlesRef} className="hero__titles">
      <span
        ref={taglineRef}
        className="hero__tagline"
        style={letterSpacingPx !== null ? { letterSpacing: `${letterSpacingPx}px` } : undefined}
      >
        {heroTagline}
      </span>
      <span ref={markRef} className="hero__mark">
        <SparklesText 
          colors={{ first: "#ffd700", second: "#ffed4e" }}
          sparklesCount={12}
        >
          Dingho
        </SparklesText>
      </span>
    </h1>
  );
}
