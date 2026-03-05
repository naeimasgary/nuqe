import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NuqleiLogo } from "../../components/NuqleiLogo";

const HERO_BG = "https://www.figma.com/api/mcp/asset/541f8515-702d-4085-b807-e8eee9261fe2";

export function WaitingScreen() {
  const navigate = useNavigate();

  // Simulate loading then redirect to dashboard
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

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
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <NuqleiLogo size="md" variant="white" />

        <div className="flex flex-col gap-2">
          <h1 className="text-white text-3xl font-bold">Waiting screen</h1>
          <p className="text-white/60 text-base">Project loading in Dashboard</p>
        </div>

        {/* Loading dots */}
        <div className="flex items-center gap-2 mt-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-sky-brand-400 animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
