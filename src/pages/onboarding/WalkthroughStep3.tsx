import { useState, FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { NuqleiLogo } from "../../components/NuqleiLogo";

const HERO_BG = "https://www.figma.com/api/mcp/asset/541f8515-702d-4085-b807-e8eee9261fe2";

const CATEGORIES = [
  "Thermostats",
  "Sensors & Transmitters",
  "PLCs & Controllers",
  "Drives & Motors",
  "Valves & Actuators",
  "Instrumentation",
  "SCADA Systems",
  "Safety Systems",
  "HMI & Operator Panels",
  "Power Distribution",
  "Robotics",
  "Flow Meters",
  "Pressure Instruments",
  "Temperature Instruments",
  "Level Instruments",
  "Cables & Wiring",
  "Programming Services",
  "Automation Consulting",
];

export function WalkthroughStep3() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query.trim()
    ? CATEGORIES.filter((c) => c.toLowerCase().includes(query.toLowerCase()))
    : CATEGORIES;

  function pickCategory(cat: string) {
    setSelected(cat);
    setQuery(cat);
    setShowDropdown(false);
  }

  function handleNext(e: FormEvent) {
    e.preventDefault();
    const finalCat = selected || query.trim();
    if (!finalCat) return;
    sessionStorage.setItem("wt_category", finalCat);
    navigate("/dashboard/projects?prefill=true");
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0f1b2d]">
      <img
        src={HERO_BG}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        aria-hidden="true"
      />

      {/* Progress dots */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-sky-brand-400" />
        <span className="w-2 h-2 rounded-full bg-sky-brand-400" />
        <span className="w-8 h-2 rounded-full bg-sky-brand-400" />
      </div>

      {/* Back link */}
      <button
        onClick={() => navigate("/onboarding/step/2")}
        className="absolute top-7 left-6 text-white/50 hover:text-white text-sm flex items-center gap-1.5 transition-colors"
        aria-label="Back"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center max-w-xl w-full">
        <NuqleiLogo size="md" variant="white" />

        <div className="flex flex-col gap-3">
          <p className="text-white/60 text-sm font-semibold tracking-widest uppercase">Step 3 of 3</p>
          <h1 className="text-white text-4xl font-bold leading-tight">
            What are you sourcing?
          </h1>
          <p className="text-white/70 text-lg">
            Select the category that best describes what you need.
          </p>
        </div>

        <form onSubmit={handleNext} className="flex flex-col items-center gap-4 w-full max-w-md">
          <div className="flex flex-col gap-1.5 w-full relative">
            <label className="text-white/80 text-sm font-medium text-left">Project category</label>

            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search or type category…"
                value={query}
                autoFocus
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelected("");
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                required
                className="w-full h-12 pl-11 pr-5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm outline-none focus:border-white/50 focus:bg-white/15 transition-all backdrop-blur-sm"
              />
            </div>

            {/* Dropdown */}
            {showDropdown && filtered.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-neutral-100 z-20 max-h-56 overflow-y-auto">
                {filtered.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => pickCategory(cat)}
                    className="w-full text-left px-5 py-3 text-sm text-text-default hover:bg-sky-brand-50 hover:text-sky-brand-700 transition-colors first:rounded-t-2xl last:rounded-b-2xl"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={!selected && !query.trim()}
            className="h-12 w-full max-w-xs rounded-full bg-sky-brand-500 text-white text-sm font-semibold hover:bg-sky-brand-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Build My Project →
          </button>
        </form>
      </div>
    </div>
  );
}
