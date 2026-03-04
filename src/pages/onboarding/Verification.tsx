import { Link } from "react-router-dom";
import { NuqleiLogo } from "../../components/NuqleiLogo";

type VerificationState = "pending" | "success" | "failed";

interface VerificationProps {
  state: VerificationState;
}

const CONTENT = {
  pending: {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FFB900" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    iconBg: "bg-yellow-50",
    title: "Thank you for applying!",
    message: "We're reviewing your credentials and business information. This typically takes 12–24 hours.",
    detail: "You'll receive an email at your registered address once approved.",
    cta: { label: "Back to sign in", to: "/sign-in" },
    secondary: { label: "Questions? Contact us", to: "/contact" },
  },
  success: {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00CEB6" strokeWidth="1.8">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    iconBg: "bg-teal-50",
    title: "You are already Verified ✓",
    message: "Your account has been verified and you now have full access to the Nuqlei platform.",
    detail: null,
    cta: { label: "Go to Dashboard", to: "/dashboard" },
    secondary: null,
  },
  failed: {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF6692" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
    iconBg: "bg-rose-50",
    title: "We could not verify your account",
    message: "Sorry, we were unable to verify your business credentials at this time.",
    detail: "This may be due to incomplete or unverifiable business information.",
    cta: { label: "Contact support", to: "/contact" },
    secondary: { label: "Try again with different info", to: "/register" },
  },
};

export function Verification({ state }: VerificationProps) {
  const content = CONTENT[state];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center pt-10 px-4">
      <Link to="/" className="mb-10">
        <NuqleiLogo size="sm" variant="default" />
      </Link>

      <div className="w-full max-w-md bg-white rounded-2xl border border-neutral-200 shadow-sm p-8 flex flex-col items-center gap-5 text-center">
        <div className={`flex items-center justify-center w-16 h-16 rounded-full ${content.iconBg}`}>
          {content.icon}
        </div>

        <h1 className="text-text-default text-2xl font-bold">{content.title}</h1>
        <p className="text-text-secondary text-sm leading-relaxed">{content.message}</p>

        {content.detail && (
          <p className="text-text-secondary text-xs leading-relaxed">{content.detail}</p>
        )}

        <Link
          to={content.cta.to}
          className="w-full inline-flex items-center justify-center h-11 rounded-full bg-sky-brand-500 text-white text-sm font-semibold hover:bg-sky-brand-600 transition-colors"
        >
          {content.cta.label}
        </Link>

        {content.secondary && (
          <Link
            to={content.secondary.to}
            className="text-sm text-sky-brand-600 font-semibold hover:text-sky-brand-800 transition-colors"
          >
            {content.secondary.label}
          </Link>
        )}
      </div>
    </div>
  );
}
