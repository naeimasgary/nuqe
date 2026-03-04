import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { NuqleiLogo } from "../NuqleiLogo";

interface AuthLayoutProps {
  children: ReactNode;
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
}

export function AuthLayout({ children, eyebrow, title, description }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left hero panel */}
      <aside className="hidden lg:flex flex-col justify-between w-[480px] min-h-screen bg-slate-900 p-10 flex-shrink-0">
        <Link to="/">
          <NuqleiLogo size="sm" variant="white" />
        </Link>

        <div className="flex flex-col gap-6">
          {eyebrow && <p className="text-sky-brand-400 text-sm font-medium uppercase tracking-widest">{eyebrow}</p>}
          {title && <h1 className="text-white text-4xl font-bold leading-tight">{title}</h1>}
          {description && <p className="text-slate-400 text-base leading-relaxed">{description}</p>}
        </div>

        <div className="flex flex-col gap-4">
          {[
            { icon: "shield", label: "Vetted & Verified", sub: "All buyers are admin-approved" },
            { icon: "heart", label: "Anonymous by Default", sub: "Your identity stays private" },
            { icon: "activity", label: "Industrial B2B Focus", sub: "Instrumentation & automation" },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 text-sky-brand-400 flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {badge.icon === "shield" && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />}
                  {badge.icon === "heart" && <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />}
                  {badge.icon === "activity" && <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />}
                </svg>
              </div>
              <div>
                <div className="text-white text-sm font-semibold">{badge.label}</div>
                <div className="text-slate-400 text-xs">{badge.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Right form panel */}
      <main className="flex flex-1 items-center justify-center p-6 bg-slate-50">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-neutral-200 p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
