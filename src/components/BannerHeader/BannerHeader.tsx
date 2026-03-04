import { useState } from "react";

export interface BannerHeaderProps {
  badge?: string;
  message?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export function BannerHeader({
  badge = "New",
  message = "Frontend Pages Added",
  dismissible = false,
  onDismiss,
}: BannerHeaderProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  function handleDismiss() {
    setDismissed(true);
    onDismiss?.();
  }

  return (
    <div
      className="w-full bg-slate-900 flex items-center justify-center px-6 py-3 relative overflow-hidden"
      role="banner"
      aria-label="Announcement"
      style={{
        background: "radial-gradient(ellipse 60% 100% at 50% 50%, #1e3a5f 0%, #0f172b 70%)",
      }}
    >
      <div className="flex items-center gap-3 relative z-10">
        {badge && (
          <span className="bg-sky-brand-100 text-sky-brand-500 text-xs font-medium px-2 py-0.5 rounded-full leading-none">
            {badge}
          </span>
        )}
        <span className="text-white text-xs font-normal">{message}</span>
      </div>

      {dismissible && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-1"
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
