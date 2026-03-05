import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { NuqleiLogo } from "../../components/NuqleiLogo";

const HERO_BG = "https://www.figma.com/api/mcp/asset/541f8515-702d-4085-b807-e8eee9261fe2";

export function WalkthroughStep1() {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("");

  function handleNext(e: FormEvent) {
    e.preventDefault();
    if (!projectName.trim()) return;
    // Save to sessionStorage for pre-fill
    sessionStorage.setItem("wt_projectName", projectName.trim());
    navigate("/onboarding/step/2");
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
        <span className="w-8 h-2 rounded-full bg-sky-brand-400" />
        <span className="w-2 h-2 rounded-full bg-white/30" />
        <span className="w-2 h-2 rounded-full bg-white/30" />
      </div>

      {/* Back link */}
      <button
        onClick={() => navigate("/sign-in")}
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
          <p className="text-white/60 text-sm font-semibold tracking-widest uppercase">Step 1 of 3</p>
          <h1 className="text-white text-4xl font-bold leading-tight">
            Welcome to Nuqlei
          </h1>
          <p className="text-white/70 text-lg">Let's build your first project!</p>
        </div>

        <form onSubmit={handleNext} className="flex flex-col items-center gap-4 w-full max-w-md">
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-white/80 text-sm font-medium text-left">What would you like to call your project?</label>
            <input
              type="text"
              placeholder="e.g. Thermostat Procurement Q2 2026"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
              autoFocus
              className="w-full h-12 px-5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm outline-none focus:border-white/50 focus:bg-white/15 transition-all backdrop-blur-sm"
            />
          </div>
          <button
            type="submit"
            disabled={!projectName.trim()}
            className="h-12 w-full max-w-xs rounded-full bg-sky-brand-500 text-white text-sm font-semibold hover:bg-sky-brand-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Next →
          </button>
        </form>
      </div>
    </div>
  );
}
