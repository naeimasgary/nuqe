import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NuqleiLogo } from "../../components/NuqleiLogo";

export function BusinessName() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    navigate("/onboarding/step-1");
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center pt-10 px-4">
      <Link to="/" className="mb-10">
        <NuqleiLogo size="sm" variant="default" />
      </Link>

      <div className="w-full max-w-md bg-white rounded-2xl border border-neutral-200 shadow-sm p-8 flex flex-col gap-6">
        {/* Step indicator */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-sky-brand-500" />
          <div className="w-2 h-2 rounded-full bg-neutral-200" />
          <div className="w-2 h-2 rounded-full bg-neutral-200" />
          <span className="text-xs text-text-secondary ml-1">Step 1 of 3</span>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sky-brand-500 text-sm font-medium">Welcome</p>
          <h1 className="text-text-default text-2xl font-bold">What is your business name?</h1>
          <p className="text-text-secondary text-sm leading-relaxed">
            This will be displayed on your profile and visible to other members on the platform.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex items-center gap-3 h-11 px-4 rounded-full border border-outline-default bg-white focus-within:border-outline-focused focus-within:shadow-focus-primary transition-all">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a1a1a1" strokeWidth="1.8" className="flex-shrink-0">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            <input
              type="text"
              placeholder="e.g. Acme Industrial Co."
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              className="flex-1 bg-transparent text-sm text-text-default placeholder:text-neutral-400 outline-none"
            />
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
              type="submit"
              disabled={!name.trim()}
              className="flex-1 h-11 rounded-full bg-sky-brand-500 text-white text-sm font-semibold hover:bg-sky-brand-600 disabled:bg-sky-brand-200 disabled:cursor-not-allowed transition-colors"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
