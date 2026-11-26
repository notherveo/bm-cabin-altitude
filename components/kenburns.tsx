"use client";

import { useEffect, useRef } from "react";

/**
 * Ken Burns effect for a hero image: a slow zoom + pan over a still photo.
 * CSS-only (no JS-driven transforms), so it runs on the compositor and
 * survives a page refresh. `data-paused` stops the animation.
 */
export function KenBurns({
  src,
  alt,
  className,
  paused = false,
}: {
  src: string;
  alt: string;
  className?: string;
  paused?: boolean;
}) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          img.classList.add("kenburns-active");
        } else {
          img.classList.remove("kenburns-active");
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(img);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`relative h-screen w-full overflow-hidden ${className ?? ""}`}
      data-paused={paused}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="kenburns-image absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
    </div>
  );
}
