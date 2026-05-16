import Image from "next/image";
import Reveal from "./Reveal";
import { leaders } from "../lib/site";

export default function Leaders() {
  return (
    <section id="leaders" className="bg-surface-2 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Our Leaders</p>
          <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4.2vw,3.4rem)] text-ink">
            Guided by experience that spans academia and industry.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={i * 120}>
              <article className="flex h-full flex-col gap-7 rounded-3xl border border-edge bg-paper p-7 sm:flex-row sm:p-9">
                <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-2xl border border-edge bg-surface-2 sm:h-44 sm:w-40">
                  <Image
                    src={l.image}
                    alt={l.name}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl text-ink">{l.name}</h3>
                  <p className="mt-1.5 text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                    {l.role}
                  </p>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
                    {l.bio}
                  </p>
                  <a
                    href={l.link}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-ink"
                  >
                    Read the message
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
