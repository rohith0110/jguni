"use client";

import { cta, socials } from "../lib/site";
import SocialIcon from "./SocialIcon";

/**
 * Re-creates the original site's persistent affordances:
 *  - vertical social rail (left edge, lg+)
 *  - rotated Apply / Enquire / Free-Test tab rail (right edge, md+)
 *  - a compact sticky action bar on mobile
 */
export default function FloatingActions() {
  return (
    <>
      {/* Social rail — left edge */}
      <div className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
        <ul className="flex flex-col overflow-hidden rounded-r-xl border border-l-0 border-edge bg-surface/90 backdrop-blur">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="flex h-10 w-10 items-center justify-center text-muted transition-colors hover:bg-brand hover:text-on-brand"
              >
                <SocialIcon name={s.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Rotated CTA rail — right edge */}
      <div className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-2 md:flex">
        <a
          href={cta.apply}
          className="origin-right -rotate-90 translate-x-[calc(50%-1.1rem)] rounded-t-lg bg-brand px-5 py-2.5 text-sm font-semibold text-on-brand shadow-lg transition-[padding] hover:px-7"
        >
          Apply Now
        </a>
        <a
          href={cta.enquire}
          className="origin-right -rotate-90 translate-x-[calc(50%-1.1rem)] rounded-t-lg bg-gold-bright px-5 py-2.5 text-sm font-semibold text-[#221615] shadow-lg transition-[padding] hover:px-7"
        >
          Enquire Now
        </a>
        <a
          href={cta.assessment}
          className="origin-right -rotate-90 translate-x-[calc(50%-1.1rem)] rounded-t-lg border border-edge-strong bg-surface px-5 py-2.5 text-sm font-semibold text-ink shadow-lg transition-[padding] hover:px-7"
        >
          Free Psychometric Test
        </a>
      </div>

      {/* Floating call button */}
      <a
        href={cta.call}
        aria-label="Call JG University"
        className="fixed bottom-5 right-5 z-40 hidden h-12 w-12 items-center justify-center rounded-full bg-brand text-on-brand shadow-xl transition-transform hover:scale-110 md:flex"
      >
        <SocialIcon name="phone" size={19} />
      </a>

      {/* Mobile sticky action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-edge bg-surface/95 backdrop-blur md:hidden">
        <a
          href={cta.apply}
          className="flex items-center justify-center bg-brand py-3.5 text-sm font-semibold text-on-brand"
        >
          Apply Now
        </a>
        <a
          href={cta.enquire}
          className="flex items-center justify-center py-3.5 text-sm font-semibold text-ink"
        >
          Enquire
        </a>
        <a
          href={cta.call}
          className="flex items-center justify-center gap-1.5 border-l border-edge py-3.5 text-sm font-semibold text-ink"
        >
          <SocialIcon name="phone" size={15} />
          Call
        </a>
      </div>
    </>
  );
}
