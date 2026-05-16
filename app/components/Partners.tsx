import Image from "next/image";
import Reveal from "./Reveal";
import { partners } from "../lib/site";

export default function Partners() {
  const row = [...partners, ...partners];

  return (
    <section className="border-y border-edge bg-surface-2 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-faint">
            Industry & Institutional Partners
          </p>
        </Reveal>
      </div>

      <div className="group relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-linear-to-r from-surface-2 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-linear-to-l from-surface-2 to-transparent sm:w-32" />
        <div className="flex w-max items-center gap-5 animate-marquee-slow group-hover:[animation-play-state:paused]">
          {row.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex h-24 w-44 shrink-0 items-center justify-center rounded-xl border border-edge bg-white px-6"
              title={p.name}
            >
              <Image
                src={p.img}
                alt={p.name}
                width={150}
                height={70}
                className="max-h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
