import Reveal from "./Reveal";
import { testimonials } from "../lib/site";

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="flex w-[20rem] shrink-0 flex-col justify-between gap-7 rounded-3xl border border-edge bg-paper p-7 sm:w-[24rem]">
      <div>
        <span className="font-display text-5xl leading-none text-gold">“</span>
        <blockquote className="mt-2 text-[0.98rem] leading-relaxed text-ink">
          {t.quote}
        </blockquote>
      </div>
      <figcaption>
        <p className="font-display text-lg text-ink">{t.name}</p>
        <p className="mt-1 text-sm text-muted">{t.role}</p>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const row = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Alumni Testimonials</p>
              <h2 className="mt-6 max-w-xl text-[clamp(2rem,4.2vw,3.4rem)] text-ink">
                Where our graduates went next.
              </h2>
            </div>
            <p className="max-w-xs text-muted">
              Singers, art directors, bankers, engineers — JG alumni across
              industries.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="group relative mt-14">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-paper to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-paper to-transparent sm:w-32" />
        <div className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <Card key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
