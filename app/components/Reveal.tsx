"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "li" | "span" | "article";
  className?: string;
};

/**
 * Progressive-enhancement reveal.
 *
 * Content is rendered fully visible by default — there is NO CSS that
 * hides it without the `data-reveal` attribute, which only this
 * component sets client-side. If JS, the observer, or anything else
 * fails, the section still shows. Elements already in view on mount are
 * never armed (no flash); only below-the-fold elements animate in, with
 * a hard safety timeout so nothing can stay hidden.
 */
export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    // Already visible on load → leave it shown, just transition-ready.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      el.dataset.reveal = "shown";
      return;
    }

    el.dataset.reveal = "armed";
    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      el.dataset.reveal = "shown";
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          show();
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);

    // Safety net: never let content stay hidden.
    const t = window.setTimeout(show, 1600);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
