import { ReactNode } from "react";
import { NuqleiLogo } from "../../components/NuqleiLogo";

// Illustration SVGs for emails — person with gears (registration) and handshake (verified)
export function GearIllustration() {
  return (
    <svg viewBox="0 0 576 494" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[480px]">
      {/* Couch / seat base */}
      <rect x="60" y="350" width="456" height="30" rx="8" fill="#E5E5E5" />
      <rect x="80" y="330" width="416" height="30" rx="8" fill="#D4D4D4" />
      {/* Person body */}
      <rect x="160" y="210" width="120" height="160" rx="20" fill="#262626" stroke="#262626" strokeWidth="2" />
      {/* Shirt stripes */}
      {[230, 250, 270, 290, 310, 330].map((y) => (
        <line key={y} x1="165" y1={y} x2="275" y2={y} stroke="#404040" strokeWidth="5" />
      ))}
      {/* Head */}
      <ellipse cx="220" cy="185" rx="45" ry="50" fill="#FBBF24" />
      {/* Hair */}
      <ellipse cx="220" cy="145" rx="45" ry="28" fill="#262626" />
      {/* Eyes */}
      <circle cx="207" cy="188" r="5" fill="#262626" />
      <circle cx="233" cy="188" r="5" fill="#262626" />
      {/* Smile */}
      <path d="M207 205 Q220 218 233 205" stroke="#262626" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Arm raised */}
      <path d="M275 260 Q340 220 380 180" stroke="#FBBF24" strokeWidth="18" strokeLinecap="round" fill="none" />
      {/* Gear large */}
      <circle cx="400" cy="155" r="55" fill="none" stroke="#262626" strokeWidth="12" />
      <circle cx="400" cy="155" r="22" fill="none" stroke="#262626" strokeWidth="8" />
      {[0,45,90,135,180,225,270,315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 400 + 50 * Math.cos(rad);
        const y1 = 155 + 50 * Math.sin(rad);
        const x2 = 400 + 65 * Math.cos(rad);
        const y2 = 155 + 65 * Math.sin(rad);
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#262626" strokeWidth="14" strokeLinecap="round" />;
      })}
      {/* Gear small */}
      <circle cx="450" cy="230" r="32" fill="none" stroke="#262626" strokeWidth="8" />
      <circle cx="450" cy="230" r="12" fill="none" stroke="#262626" strokeWidth="6" />
      {[0,60,120,180,240,300].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 450 + 28 * Math.cos(rad);
        const y1 = 230 + 28 * Math.sin(rad);
        const x2 = 450 + 38 * Math.cos(rad);
        const y2 = 230 + 38 * Math.sin(rad);
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#262626" strokeWidth="10" strokeLinecap="round" />;
      })}
      {/* Desk lines */}
      <line x1="60" y1="380" x2="516" y2="380" stroke="#D4D4D4" strokeWidth="3" />
    </svg>
  );
}

export function HandshakeIllustration() {
  return (
    <svg viewBox="0 0 576 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[480px]">
      {/* Left person */}
      <ellipse cx="140" cy="100" rx="38" ry="42" fill="#FBBF24" />
      <ellipse cx="140" cy="68" rx="38" ry="22" fill="#262626" />
      <rect x="100" y="138" width="80" height="110" rx="15" fill="#1E3A5F" />
      {/* Right person */}
      <ellipse cx="436" cy="100" rx="38" ry="42" fill="#FBBF24" />
      <rect x="396" y="138" width="80" height="110" rx="15" fill="#374151" />
      {/* Glasses on right person */}
      <circle cx="424" cy="100" r="10" fill="none" stroke="#262626" strokeWidth="3" />
      <circle cx="448" cy="100" r="10" fill="none" stroke="#262626" strokeWidth="3" />
      <line x1="434" y1="100" x2="438" y2="100" stroke="#262626" strokeWidth="3" />
      {/* Arms reaching to handshake */}
      <path d="M175 185 Q240 210 288 210" stroke="#FBBF24" strokeWidth="16" strokeLinecap="round" fill="none" />
      <path d="M401 185 Q336 210 288 210" stroke="#FBBF24" strokeWidth="16" strokeLinecap="round" fill="none" />
      {/* Clasped hands */}
      <ellipse cx="288" cy="212" rx="28" ry="18" fill="#FBBF24" />
      {/* Table */}
      <rect x="60" y="260" width="456" height="20" rx="6" fill="#D4D4D4" />
      <rect x="100" y="278" width="16" height="60" rx="4" fill="#D4D4D4" />
      <rect x="460" y="278" width="16" height="60" rx="4" fill="#D4D4D4" />
      {/* Coffee cups */}
      <rect x="200" y="238" width="30" height="22" rx="4" fill="#F5F5F5" stroke="#D4D4D4" strokeWidth="2" />
      <path d="M230 245 Q240 249 230 253" stroke="#D4D4D4" strokeWidth="2" fill="none" />
      <rect x="346" y="238" width="30" height="22" rx="4" fill="#F5F5F5" stroke="#D4D4D4" strokeWidth="2" />
      <path d="M376 245 Q386 249 376 253" stroke="#D4D4D4" strokeWidth="2" fill="none" />
      {/* Paper on table */}
      <rect x="262" y="236" width="52" height="24" rx="3" fill="white" stroke="#D4D4D4" strokeWidth="2" />
      <line x1="268" y1="244" x2="308" y2="244" stroke="#D4D4D4" strokeWidth="2" />
      <line x1="268" y1="250" x2="300" y2="250" stroke="#D4D4D4" strokeWidth="2" />
      {/* Pen */}
      <rect x="310" y="248" width="4" height="28" rx="2" fill="#00A6F4" transform="rotate(-20 310 248)" />
    </svg>
  );
}

// Social media icons
function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

interface EmailLayoutProps {
  children: ReactNode;
  illustration: "gear" | "handshake";
}

export function EmailLayout({ children, illustration }: EmailLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-100 py-8 px-4">
      {/* Email badge */}
      <div className="flex justify-center mb-4">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-brand-50 border border-sky-brand-200 text-sky-brand-700 text-xs font-semibold">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          Simulated Email — this is what was sent to your inbox
        </span>
      </div>

      {/* Email card */}
      <div className="max-w-[640px] mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header */}
        <div className="px-8 pt-8 pb-4">
          <NuqleiLogo size="sm" variant="default" />
        </div>

        {/* Illustration */}
        <div className="px-8 pb-2 flex justify-center">
          {illustration === "gear" ? <GearIllustration /> : <HandshakeIllustration />}
        </div>

        {/* Content */}
        <div className="px-8 pb-8">
          {children}
        </div>

        {/* Footer */}
        <div className="px-8 pb-8 border-t border-neutral-100">
          <p className="text-xs text-neutral-400 leading-relaxed mt-6 mb-4">
            This email was sent to sammy@email.com. If you'd rather not receive this kind of email, you can unsubscribe or manage your email preferences.
          </p>
          <p className="text-xs text-neutral-400 mb-6">
            © 2026 Nuqlei, 5100 South Service Rd, Unit 2, Burlington, ON L7L 6A5
          </p>

          <div className="h-px bg-neutral-100 mb-6" />

          <div className="flex items-center justify-between">
            <NuqleiLogo size="xs" variant="default" />
            <div className="flex items-center gap-3 text-neutral-400">
              <InstagramIcon />
              <LinkedinIcon />
              <FacebookIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Close tab hint */}
      <p className="text-center text-xs text-neutral-400 mt-4">
        Close this tab to continue where you left off.
      </p>
    </div>
  );
}
