import Reveal from "./Reveal";
import { features } from "../lib/site";

export default function Features() {
  return (
    <section id="features" className="bg-surface-2 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Salient Features</p>
            <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.4rem)] text-ink">
              What you can count on, every term.
            </h2>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-x-12 gap-y-2 sm:grid-cols-2">
          {features.map((f, i) => (
            <Reveal as="li" key={f} delay={(i % 2) * 70}>
              <div className="flex items-start gap-5 border-b border-edge py-6">
                <span className="font-display text-lg text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-snug text-ink">{f}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
