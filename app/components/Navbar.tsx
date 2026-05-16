"use client";

import { useEffect, useState } from "react";
import { nav, cta } from "../lib/site";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`border-b border-edge bg-paper/95 backdrop-blur-xl transition-shadow duration-500 ${scrolled ? "shadow-[0_10px_30px_-20px_rgba(67,23,20,0.45)]" : ""
          }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 sm:px-8 sm:py-4">
          <Logo />

          <div className="hidden items-center gap-1 lg:flex">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <button
                    className="flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[0.92rem] font-medium text-muted transition-colors hover:text-ink"
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      className="transition-transform duration-300 group-hover:rotate-180"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-edge bg-surface p-2 shadow-(--shadow)">
                      {item.children.map((c) => (
                        <a
                          key={c.label}
                          href={c.href}
                          className="block rounded-xl px-4 py-2.5 text-[0.9rem] text-muted transition-colors hover:bg-brand-soft hover:text-brand-ink"
                        >
                          {c.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-4 py-2.5 text-[0.92rem] font-medium text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              ),
            )}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle className="hidden sm:grid" />
            <a
              href={cta.apply}
              className="hidden rounded-lg bg-brand px-5 py-2.5 text-[0.9rem] font-semibold text-on-brand transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
            >
              Apply for 2026–27
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-edge-strong text-ink lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"
                    }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-all duration-300 ${open ? "opacity-0" : "opacity-100"
                    }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"
                    }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 top-18 z-40 origin-top overflow-y-auto bg-paper transition-all duration-300 sm:top-22.25 lg:hidden ${open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
          }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 py-8">
          <div className="flex flex-col gap-1">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-edge py-1">
                  <button
                    onClick={() =>
                      setOpenGroup((g) =>
                        g === item.label ? null : item.label,
                      )
                    }
                    className="flex w-full items-center justify-between py-3 font-display text-xl text-ink"
                  >
                    {item.label}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      className={`transition-transform duration-300 ${openGroup === item.label ? "rotate-180" : ""
                        }`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${openGroup === item.label
                        ? "grid-rows-[1fr] pb-3"
                        : "grid-rows-[0fr]"
                      }`}
                  >
                    <div className="overflow-hidden">
                      {item.children.map((c) => (
                        <a
                          key={c.label}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="block py-2.5 pl-1 text-[0.95rem] text-muted"
                        >
                          {c.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-edge py-4 font-display text-xl text-ink"
                >
                  {item.label}
                </a>
              ),
            )}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <a href={cta.apply} className="btn btn-primary w-full">
              Apply for 2026–27
            </a>
            <a href={cta.enquire} className="btn btn-ghost w-full">
              Enquire Now
            </a>
            <div className="mt-2 flex items-center justify-between rounded-full border border-edge px-5 py-3">
              <span className="text-sm text-muted">Colour theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
