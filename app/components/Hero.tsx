"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { cta, stats, campusImages } from "../lib/site";

const SLIDES = campusImages.slice(0, 7);
const INTERVAL = 4500;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % SLIDES.length),
    [],
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, INTERVAL);
    return () => clearInterval(t);
  }, [next, paused]);

  return (
    <section id="top" className="relative">
      {/* Full-bleed campus masthead */}
      <div
        className="relative min-h-[88vh] w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {SLIDES.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`JG University campus, Ahmedabad — slide ${i + 1}`}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-[1200ms] ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* legibility wash */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,8,7,0.55)_0%,rgba(20,8,7,0.35)_38%,rgba(20,8,7,0.82)_100%)]" />

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/55 sm:left-6 sm:h-13 sm:w-13"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/55 sm:right-6 sm:h-13 sm:w-13"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-5 pb-20 pt-36 sm:px-8 sm:pb-28">
          <div className="flex items-center gap-4">
            <span className="h-px w-14 bg-white/50" />
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-white/70">
              Established 1965 · UGC-Approved · Ahmedabad
            </span>
          </div>

          <h1 className="mt-7 max-w-4xl text-[clamp(2.6rem,6.4vw,5.4rem)] text-white">
            A new-age university,
            <br />
            built for what comes next.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/85">
            JG University offers programmes that evolve with future industry
            demand — pairing rigorous academics with real-world, experiential
            learning so graduates step seamlessly into employment or enterprise.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#programmes"
              className="btn bg-brand text-on-brand hover:bg-[#7a0d06]"
            >
              Explore Programmes
            </a>
            <a
              href={cta.apply}
              className="btn border border-white/40 text-white backdrop-blur-sm hover:border-white hover:bg-white/10"
            >
              Apply for 2026–27
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          {/* Carousel controls row */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-white"
                      : "w-1.5 bg-white/35 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-white/45 tabular-nums">
              {current + 1} / {SLIDES.length}
            </span>
          </div>
        </div>
      </div>

      {/* Accreditation / facts strip */}
      <div className="border-b border-edge bg-paper">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-7 sm:px-8 ${i !== 0 ? "border-l border-edge" : ""} ${i === 2 ? "border-l-0 md:border-l" : ""} ${i >= 2 ? "border-t border-edge md:border-t-0" : ""}`}
            >
              <dt className="font-display text-[2.1rem] leading-none text-brand-ink">
                {s.value}
              </dt>
              <dd className="mt-2.5 text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
