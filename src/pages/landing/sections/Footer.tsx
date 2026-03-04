import { NuqleiLogo } from "../../../components/NuqleiLogo";

export function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <NuqleiLogo size="sm" variant="black" />
            <p className="text-sm text-text-secondary leading-relaxed">
              The trusted B2B marketplace for industrial automation instrumentation and programming services.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-text-default">Platform</h4>
              <nav className="flex flex-col gap-2">
                {["Directory", "Get started", "About", "Contact"].map((l) => (
                  <a key={l} href="#" className="text-sm text-text-secondary hover:text-text-default transition-colors">{l}</a>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-text-default">Resources</h4>
              <nav className="flex flex-col gap-2">
                {["News room", "Privacy policy", "Terms of service"].map((l) => (
                  <a key={l} href="#" className="text-sm text-text-secondary hover:text-text-default transition-colors">{l}</a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-200">
          <div className="flex items-center gap-2">
            <NuqleiLogo size="xs" variant="black" symbolOnly />
            <span className="text-xs text-text-secondary">All rights reserved. Nuqlei 2026.</span>
          </div>
          <p className="text-xs text-text-secondary">
            Produced by <span className="font-semibold text-text-default">CTH Controls</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
