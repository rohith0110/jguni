import Image from "next/image";
import Reveal from "./Reveal";
import { faculty, BASE } from "../lib/site";

function FacultyCard({ f }: { f: (typeof faculty)[number] }) {
  return (
    <a
      href={f.href}
      className="group block w-60 shrink-0 overflow-hidden rounded-xl border border-edge bg-surface sm:w-66"
    >
      <div className="relative aspect-4/5 overflow-hidden bg-surface-2">
        <Image
          src={f.img}
          alt={f.name}
          fill
          sizes="260px"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#160d0c]/55 via-transparent to-transparent" />
      </div>
      <div className="border-t border-edge p-5">
        <h3 className="text-lg leading-tight text-ink">{f.name}</h3>
        <p className="mt-1.5 text-sm text-muted">{f.school}</p>
      </div>
    </a>
  );
}

export default function Faculty() {
  const row = [...faculty, ...faculty];

  return (
    <section id="faculty" className="overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Faculty Members</p>
              <h2 className="mt-6 max-w-xl text-[clamp(2rem,4.2vw,3.4rem)] text-ink">
                Scholars from academia and industry.
              </h2>
            </div>
            <a
              href={`${BASE}/faculty.html`}
              className="inline-flex items-center gap-2 self-start font-semibold text-brand-ink sm:self-auto"
            >
              Meet all faculty
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>

      <div className="group relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-paper to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-paper to-transparent sm:w-28" />
        <div className="flex w-max gap-5 px-5 animate-marquee group-hover:[animation-play-state:paused] sm:px-8">
          {row.map((f, i) => (
            <FacultyCard key={`${f.name}-${i}`} f={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
