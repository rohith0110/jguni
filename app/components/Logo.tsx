/* Uses the official JG University logo (downloaded from jguni.in). */
export default function Logo({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href="#top"
      onClick={onClick}
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="JG University — home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/jg-logo.svg"
        alt="JG University"
        className="h-12 w-auto sm:h-14"
        width={36}
        height={56}
      />
      <span className="flex flex-col leading-none border-l border-edge pl-3">
        <span className="font-display text-[1.12rem] font-semibold tracking-tight text-ink">
          JG University
        </span>
        <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-faint">
          Ahmedabad
        </span>
      </span>
    </a>
  );
}
