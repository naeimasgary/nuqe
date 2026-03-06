function QuoteIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M8 28C8 22.477 12.477 18 18 18V14C10.268 14 4 20.268 4 28V36H16V28H8Z" fill="#e5e7eb" />
      <path d="M26 28C26 22.477 30.477 18 36 18V14C28.268 14 22 20.268 22 28V36H34V28H26Z" fill="#e5e7eb" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function AvatarPlaceholder() {
  return (
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-brand-300 to-sky-brand-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
      JW
    </div>
  );
}

/* ── Brand logos as inline SVG text wordmarks ─────────────────────── */

function IntelLogo() {
  return (
    <svg viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="700" fontStyle="italic" fill="#b0b0b0" letterSpacing="-1">intel</text>
      <circle cx="72" cy="6" r="4" fill="#b0b0b0" />
    </svg>
  );
}

function OracleLogo() {
  return (
    <svg viewBox="0 0 110 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto">
      <text x="0" y="21" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="400" fill="#b0b0b0" letterSpacing="2">ORACLE</text>
    </svg>
  );
}

function DellLogo() {
  return (
    <svg viewBox="0 0 70 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
      <text x="2" y="22" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="700" fill="#b0b0b0" letterSpacing="1">Dell</text>
    </svg>
  );
}

function SamsungLogo() {
  return (
    <svg viewBox="0 0 130 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto">
      <text x="0" y="21" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="600" fill="#b0b0b0" letterSpacing="3">SAMSUNG</text>
    </svg>
  );
}

function InfosysLogo() {
  return (
    <svg viewBox="0 0 105 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto">
      <text x="0" y="21" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="400" fill="#b0b0b0" letterSpacing="1">Infosys</text>
    </svg>
  );
}

function CapgeminiLogo() {
  return (
    <svg viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto">
      <text x="0" y="21" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="400" fill="#b0b0b0" letterSpacing="0.5">Capgemini</text>
      <circle cx="132" cy="18" r="5" fill="#b0b0b0" opacity="0.6" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* Testimonial row */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left: heading + nav */}
          <div className="flex flex-col gap-8 lg:w-72 flex-shrink-0">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold text-text-default">What our users think.</h2>
              <p className="text-text-secondary text-base">Pellentesque varius semper odio non pretium.</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-500 hover:bg-neutral-50 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeftIcon />
              </button>
              <span className="text-sm text-text-secondary">1 / 5</span>
              <button
                className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-500 hover:bg-neutral-50 transition-colors"
                aria-label="Next"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>

          {/* Right: quote */}
          <div className="flex flex-col gap-6 flex-1">
            <p className="text-text-default text-xl leading-relaxed font-medium">
              "Every feature designed to solve real problems in industrial procurement and vendor relationships."
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AvatarPlaceholder />
                <div>
                  <p className="text-sm font-semibold text-text-default">Jenny Wilson</p>
                  <p className="text-xs text-text-secondary">CEO &amp; Head of Comp Inc.</p>
                </div>
              </div>
              <QuoteIcon />
            </div>
          </div>

        </div>

        <hr className="border-neutral-200" />

        {/* Trusted by */}
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <h2 className="text-xl font-bold text-text-default">Trusted by</h2>
            <p className="text-sm text-text-secondary mt-1">
              Our robust analytics offer rich insights into the information buyers want, informing where teams
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <IntelLogo />
            <OracleLogo />
            <DellLogo />
            <SamsungLogo />
            <InfosysLogo />
            <CapgeminiLogo />
          </div>
        </div>

        <hr className="border-neutral-200 max-w-xs mx-auto w-full" />
      </div>
    </section>
  );
}
