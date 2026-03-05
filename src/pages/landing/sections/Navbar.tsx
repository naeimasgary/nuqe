import { Link } from "react-router-dom";
import { NuqleiLogo } from "../../../components/NuqleiLogo";

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-neutral-200 px-6">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between gap-6">
        <div className="flex-shrink-0">
          <NuqleiLogo size="sm" variant="default" />
        </div>

        <div className="hidden md:flex items-center gap-1 flex-1">
          {["About Nuqlei", "Features"].map((l) => (
            <button key={l} className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-50 transition-colors">
              {l}
            </button>
          ))}
          <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-50 transition-colors">
            Solutions
            <span className="bg-sky-brand-100 text-sky-brand-600 text-[10px] font-semibold px-1.5 py-0.5 rounded-full">New</span>
          </button>
          {["Team", "Reviews"].map((l) => (
            <button key={l} className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-50 transition-colors">
              {l} <ChevronDownIcon />
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          {/* "Create Project" assumes buyer — pre-selects Buyer on registration */}
          <Link
            to="/register?from=create-project"
            className="px-4 py-2 rounded-full bg-sky-brand-500 text-white text-sm font-semibold hover:bg-sky-brand-600 transition-colors"
          >
            Create Project
          </Link>
          <Link
            to="/sign-in"
            className="px-4 py-2 rounded-full border border-neutral-300 text-neutral-800 text-sm font-semibold hover:bg-neutral-50 transition-colors"
          >
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
}
