"use client";

import { useState } from "react";
import { programmes, cta } from "../lib/site";

export default function Programmes() {
  const [active, setActive] = useState(programmes[0].id);
  const current = programmes.find((p) => p.id === active)!;

  return (
    <section id="programmes" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Programmes</p>
            <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4.2vw,3.4rem)] text-ink">
              Choose a path that keeps pace with industry.
            </h2>
          </div>
          <a
            href={cta.admissions}
            className="inline-flex items-center gap-2 self-start font-semibold text-brand-ink lg:self-auto"
          >
            View all admissions
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap gap-2 border-b border-edge">
          {programmes.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`relative px-5 py-3 text-sm font-semibold transition-colors ${active === p.id
                  ? "text-ink"
                  : "text-faint hover:text-muted"
                }`}
            >
              {p.label}
              <span
                className={`absolute inset-x-0 -bottom-px h-0.5 rounded-full transition-all duration-300 ${active === p.id ? "bg-brand opacity-100" : "opacity-0"
                  }`}
              />
            </button>
          ))}
        </div>

        <p key={`${current.id}-blurb`} className="mt-8 max-w-2xl text-muted">
          {current.blurb}
        </p>

        <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-3">
          {current.items.map((item) => (
            <a
              key={`${current.id}-${item.name}`}
              href={item.href}
              className="group flex flex-col justify-between gap-8 bg-paper p-7 transition-colors duration-300 hover:bg-surface"
            >
              <div>
                <h3 className="text-xl text-ink">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">{item.meta}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-ink">
                Programme details
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
