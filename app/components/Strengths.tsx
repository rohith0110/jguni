import Reveal from "./Reveal";
import { strengths } from "../lib/site";

export default function Strengths() {
  return (
    <section id="strengths" className="bg-surface-2 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Our Strengths</p>
              <h2 className="mt-6 max-w-xl text-[clamp(2rem,4.2vw,3.4rem)] text-ink">
                Built differently, on purpose.
              </h2>
            </div>
            <p className="max-w-sm text-muted">
              Four principles shape every classroom, lab and project at JG
              University.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-edge bg-edge sm:grid-cols-2">
          {strengths.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 90} className="bg-paper">
              <div className="group h-full p-8 transition-colors duration-300 hover:bg-surface sm:p-10">
                <div className="flex items-start justify-between">
                  <span
                    className={`font-display text-5xl ${s.tone === "gold" ? "text-gold" : "text-brand"
                      } opacity-45`}
                  >
                    0{i + 1}
                  </span>
                  <span
                    aria-hidden
                    className={`mt-2 h-2.5 w-2.5 rounded-full ${s.tone === "gold" ? "bg-gold" : "bg-brand"
                      } transition-transform duration-500 group-hover:scale-150`}
                  />
                </div>
                <h3 className="mt-8 text-2xl text-ink">{s.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
