import Reveal from "./Reveal";
import { cta } from "../lib/site";

export default function CTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand px-7 py-16 text-white sm:px-16 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-30 [background:radial-gradient(circle,#fff,transparent_65%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full opacity-25 [background:radial-gradient(circle,var(--color-gold-bright),transparent_60%)]"
            />

            <div className="relative max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-bright">
                Admissions Open · 2026–27
              </p>
              <h2 className="mt-6 text-[clamp(2.2rem,5vw,4rem)] text-white">
                Your future is a decision away.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                Take the first step — apply, ask a question, or discover the
                path that fits you with a free psychometric assessment.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={cta.apply}
                  className="btn bg-white text-brand-ink hover:bg-white/90"
                >
                  Apply Now
                </a>
                <a
                  href={cta.enquire}
                  className="btn border border-white/35 text-white hover:border-white"
                >
                  Enquire Now
                </a>
                <a
                  href={cta.assessment}
                  className="btn border border-white/35 text-white hover:border-white"
                >
                  Free Psychometric Test
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
