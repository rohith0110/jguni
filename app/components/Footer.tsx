import Logo from "./Logo";
import SocialIcon from "./SocialIcon";
import {
  footerColumns,
  contact,
  legalLinks,
  cta,
  socials,
} from "../lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-surface-2">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-xs leading-relaxed text-muted">
              A New-Age, Tech-Driven University in Ahmedabad — UGC-approved and
              sponsored by the ASIA Charitable Trust.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={cta.apply} className="btn btn-primary px-5! py-3! text-sm">
                Apply for 2026–27
              </a>
              <a href={cta.enquire} className="btn btn-ghost px-5! py-3! text-sm">
                Enquire
              </a>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-faint">
                Follow JG
              </p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      title={s.label}
                      className="grid h-10 w-10 place-items-center rounded-lg border border-edge text-muted transition-colors hover:border-brand hover:bg-brand hover:text-on-brand"
                    >
                      <SocialIcon name={s.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-faint">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[0.92rem] text-muted transition-colors hover:text-brand-ink"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-edge pt-10 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-faint">
              Campus
            </p>
            <p className="mt-3 text-[0.92rem] leading-relaxed text-muted">
              {contact.address}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-faint">
              Email
            </p>
            <ul className="mt-3 space-y-1.5">
              {contact.emails.map((e) => (
                <li key={e}>
                  <a
                    href={`mailto:${e}`}
                    className="text-[0.92rem] text-muted transition-colors hover:text-brand-ink"
                  >
                    {e}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-faint">
              Phone
            </p>
            <ul className="mt-3 space-y-1.5">
              {contact.phones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="text-[0.92rem] text-muted transition-colors hover:text-brand-ink"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-edge pt-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} JG University. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="transition-colors hover:text-brand-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
