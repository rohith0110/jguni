import Image from "next/image";
import Reveal from "./Reveal";
import { facilities, BASE } from "../lib/site";

const shots = [4, 6, 9, 11];

export default function Campus() {
  return (
    <section id="campus" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Campus & Facilities</p>
              <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.4rem)] text-ink">
                A campus built for makers.
              </h2>
              <p className="mt-6 leading-relaxed text-muted">
                Labs, libraries and incubation spaces designed for hands-on
                work — accessible around the clock, on a fully connected
                campus.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-px overflow-hidden rounded-[1.25rem] border border-edge bg-edge sm:grid-cols-2">
              {facilities.map((f, i) => (
                <Reveal key={f.name} delay={(i % 2) * 80} className="bg-paper">
                  <div className="p-6">
                    <p className="font-display text-lg text-ink">{f.name}</p>
                    <p className="mt-1.5 text-sm text-muted">{f.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                {shots.map((n, i) => (
                  <div
                    key={n}
                    className={`relative overflow-hidden rounded-[1.25rem] border border-edge bg-surface-2 ${i === 0 ? "col-span-2 aspect-video" : "aspect-4/3"
                      }`}
                  >
                    <Image
                      src={`${BASE}/images/campus/${n}.jpg`}
                      alt={`JG University campus ${n}`}
                      fill
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
