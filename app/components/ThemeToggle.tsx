"use client";

import { useEffect, useState } from "react";

/**
 * Light/dark switch. The initial theme is applied pre-paint by the
 * inline script in the root layout; this only handles user toggles
 * and persists the choice.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    try {
      localStorage.setItem("jg-theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
      title={`Switch to ${dark ? "light" : "dark"} mode`}
      className={`group relative grid h-10 w-10 place-items-center rounded-full border border-edge-strong text-ink transition-colors hover:border-brand hover:text-brand-ink ${className}`}
    >
      <span className="sr-only">Toggle colour theme</span>
      {/* Sun / moon — only render after mount to avoid SSR mismatch */}
      {mounted && (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-500 group-hover:rotate-45"
        >
          {dark ? (
            <circle cx="12" cy="12" r="4" />
          ) : (
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          )}
          {dark && (
            <g>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </g>
          )}
        </svg>
      )}
    </button>
  );
}
