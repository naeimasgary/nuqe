import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NuqleiLogo } from "../../components/NuqleiLogo";

const CATEGORIES = [
  "Process Control",
  "Instrumentation",
  "PLC Programming",
  "SCADA Systems",
  "Industrial Networking",
  "Safety Systems",
  "Robotics & Automation",
  "Electrical Engineering",
  "Field Services",
];

export function OnboardingStep1() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(cat: string) {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center pt-10 px-4">
      <Link to="/" className="mb-10">
        <NuqleiLogo size="sm" variant="default" />
      </Link>

      <div className="w-full max-w-md bg-white rounded-2xl border border-neutral-200 shadow-sm p-8 flex flex-col gap-6">
        {/* Step indicator */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-sky-brand-500 ring-2 ring-sky-brand-200" />
          <div className="w-2 h-2 rounded-full bg-sky-brand-500" />
          <div className="w-2 h-2 rounded-full bg-neutral-200" />
          <span className="text-xs text-text-secondary ml-1">Step 2 of 3</span>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sky-brand-500 text-sm font-medium">Tell us about your business</p>
          <h1 className="text-text-default text-2xl font-bold">What best describes what you do?</h1>
          <p className="text-text-secondary text-sm leading-relaxed">
            Select all categories that apply. This helps us match you with the right partners.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => toggle(cat)}
              className={[
                "px-3 py-1.5 rounded-full border text-sm font-medium transition-all",
                selected.includes(cat)
                  ? "bg-sky-brand-500 border-sky-brand-500 text-white"
                  : "bg-white border-neutral-300 text-neutral-700 hover:border-sky-brand-300 hover:text-sky-brand-600",
              ].join(" ")}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex-1 h-11 rounded-full border border-neutral-300 text-neutral-700 text-sm font-semibold hover:bg-neutral-50 transition-colors"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            type="button"
            disabled={selected.length === 0}
            className="flex-1 h-11 rounded-full bg-sky-brand-500 text-white text-sm font-semibold hover:bg-sky-brand-600 disabled:bg-sky-brand-200 disabled:cursor-not-allowed transition-colors"
            onClick={() => navigate("/onboarding/step-2")}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
