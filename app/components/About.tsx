import Image from "next/image";
import Reveal from "./Reveal";
import { BASE } from "../lib/site";

const videos = [
  { id: "QuRupPh1kAU", label: "Inside JG University" },
  { id: "P5sIw2tbjYQ", label: "Voices from campus" },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">About the University</p>
              <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.4rem)] text-ink">
                “Knowledge is the power that no one can take away from you.”
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-7 text-lg leading-relaxed text-muted">
                Welcome to JG University — a New-Age, Tech-Driven University in
                Ahmedabad. We offer programmes that evolve with future industry
                demand, enabling students to move into employment or
                self-employment seamlessly.
              </p>
              <p className="mt-5 leading-relaxed text-muted">
                A UGC-approved university sponsored by the ASIA Charitable
                Trust, which has been in the field of education since 1965 —
                today successfully running 17 colleges and 6 schools.
              </p>
              <a
                href={`${BASE}/why-us.html`}
                className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-ink"
              >
                Why study at JG
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
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {videos.map((v, i) => (
                <Reveal key={v.id} delay={i * 120}>
                  <a
                    href={`https://www.youtube.com/watch?v=${v.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-square overflow-hidden rounded-3xl border border-edge bg-surface-2"
                  >
                    <Image
                      src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                      alt={v.label}
                      fill
                      sizes="(max-width: 640px) 90vw, 32vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0b0a14]/75 via-[#0b0a14]/10 to-transparent" />
                    <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-paper/90 text-brand-ink backdrop-blur transition-transform duration-300 group-hover:scale-110">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                    <span className="absolute bottom-5 left-5 right-5 font-display text-xl text-white">
                      {v.label}
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={180}>
              <div className="mt-5 rounded-3xl border border-edge bg-brand-soft p-7">
                <p className="font-display text-xl leading-snug text-brand-ink">
                  Education here combines cognitive and experiential learning —
                  so what you study is inseparable from what you can do.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
