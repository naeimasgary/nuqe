import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { NuqleiLogo } from "../../components/NuqleiLogo";

// Same neon background used across auth pages
const HERO_BG = "https://www.figma.com/api/mcp/asset/541f8515-702d-4085-b807-e8eee9261fe2";

export function WelcomeScreen() {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("");

  function handleCreate(e: FormEvent) {
    e.preventDefault();
    if (!projectName.trim()) return;
    navigate("/dashboard/projects");
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0f1b2d]">
      {/* Background */}
      <img
        src={HERO_BG}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center max-w-xl w-full">
        <NuqleiLogo size="md" variant="white" />

        <div className="flex flex-col gap-3">
          <h1 className="text-white text-4xl font-bold leading-tight">Welcome to Nuqlei</h1>
          <p className="text-white/70 text-lg">Lets build your first project!</p>
        </div>

        <form
          onSubmit={handleCreate}
          className="flex items-center gap-3 w-full max-w-md"
        >
          <input
            type="text"
            placeholder="Project name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="flex-1 h-11 px-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm outline-none focus:border-white/50 focus:bg-white/15 transition-all backdrop-blur-sm"
            autoFocus
          />
          <button
            type="submit"
            disabled={!projectName.trim()}
            className="h-11 px-6 rounded-full bg-sky-brand-500 text-white text-sm font-semibold hover:bg-sky-brand-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
