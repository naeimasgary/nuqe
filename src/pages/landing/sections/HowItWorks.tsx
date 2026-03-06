import { useState } from "react";

const steps = [
  { id: "apply", title: "Apply & Get Vetted", description: "Submit your application. Our team verifies your business credentials." },
  { id: "browse", title: "Browse & Discover", description: null },
  { id: "connect", title: "Connect Anonymously", description: null },
];

function DotsMenuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="5" r="1.5" fill="#a3a3a3" />
      <circle cx="12" cy="12" r="1.5" fill="#a3a3a3" />
      <circle cx="12" cy="19" r="1.5" fill="#a3a3a3" />
    </svg>
  );
}

function UserAvatarIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" fill={color} opacity="0.9" />
      <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" fill={color} opacity="0.9" />
    </svg>
  );
}

function BanknoteIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  );
}

function MiniBarChart({ color }: { color: string }) {
  const bars = [14, 10, 16, 12, 18];
  const maxH = 20;
  return (
    <div className="flex items-end gap-0.5" style={{ height: `${maxH}px` }}>
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-2 rounded-sm"
          style={{
            height: `${h}px`,
            background: i % 2 === 0 ? "#e5e7eb" : color,
          }}
        />
      ))}
    </div>
  );
}

function TrendLineChart() {
  return (
    <svg width="80" height="36" viewBox="0 0 80 36" fill="none">
      <polyline
        points="0,28 16,22 32,26 48,10 64,16 80,6"
        stroke="#00ceb6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <polyline
        points="0,28 16,22 32,26 48,10 64,16 80,6 80,36 0,36"
        fill="#00ceb6"
        opacity="0.08"
      />
      <circle cx="48" cy="10" r="3" fill="#00ceb6" />
    </svg>
  );
}

function DonutChart() {
  const r = 36;
  const cx = 44;
  const cy = 44;
  const circumference = 2 * Math.PI * r;
  const segments = [
    { pct: 0.35, color: "#ff6692" },
    { pct: 0.30, color: "#fbbf24" },
    { pct: 0.35, color: "#00ceb6" },
  ];
  let offset = 0;
  return (
    <svg width="88" height="88" viewBox="0 0 88 88">
      {segments.map((seg, i) => {
        const dash = seg.pct * circumference;
        const gap = circumference - dash;
        const rotation = offset * 360 - 90;
        offset += seg.pct;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={seg.color}
            strokeWidth="10"
            strokeDasharray={`${dash} ${gap}`}
            strokeLinecap="butt"
            transform={`rotate(${rotation} ${cx} ${cy})`}
          />
        );
      })}
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="22" y2="22" />
    </svg>
  );
}

function PieChartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function CursorIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 3l14 9-7 1-4 7-3-17z" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l7-7a3.5 3.5 0 0 0-10-10l-7 7" />
      <path d="M12 2l3.5 3.5-7 7L5 9l7-7z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState("Project Dashboard");
  const tabs = ["Project Dashboard", "Feature", "Feature", "Feature"];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* Tab switcher */}
        <div className="flex items-center gap-1 border-b border-neutral-200">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab)}
              className={[
                "px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors",
                activeTab === tab && i === 0
                  ? "border-sky-brand-500 text-sky-brand-600"
                  : "border-transparent text-neutral-500 hover:text-neutral-700",
              ].join(" ")}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Dashboard preview */}
          <div className="flex flex-col gap-4 flex-1">

            {/* Top two stat cards */}
            <div className="flex gap-4">

              {/* Warning card */}
              <div className="flex-1 bg-white rounded-2xl border border-neutral-200 p-4 flex flex-col gap-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#ff6692] flex-shrink-0">
                    <UserAvatarIcon color="white" />
                  </div>
                  <span className="text-xs text-neutral-500 flex-1 leading-tight">Pink indicates warning</span>
                  <DotsMenuIcon />
                </div>
                <div className="flex items-end justify-between gap-2">
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="text-xl font-bold text-text-default">4,562</span>
                    <span className="text-xs bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded-full whitespace-nowrap self-start">+23% last month</span>
                  </div>
                  <div className="flex-shrink-0">
                    <MiniBarChart color="#ff6692" />
                  </div>
                </div>
              </div>

              {/* Success card */}
              <div className="flex-1 bg-white rounded-2xl border border-neutral-200 p-4 flex flex-col gap-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#00ceb6] flex-shrink-0">
                    <BanknoteIcon />
                  </div>
                  <span className="text-xs text-neutral-500 flex-1 leading-tight">Green indicates success</span>
                  <DotsMenuIcon />
                </div>
                <div className="flex items-end justify-between gap-2">
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="text-xl font-bold text-text-default">$2,529</span>
                    <span className="text-xs bg-teal-100 text-teal-600 px-1.5 py-0.5 rounded-full whitespace-nowrap self-start">+42% last month</span>
                  </div>
                  <div className="flex-shrink-0">
                    <TrendLineChart />
                  </div>
                </div>
              </div>

            </div>

            {/* Marketing Report */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-text-default">Marketing Report</span>
                <DotsMenuIcon />
              </div>
              <div className="flex items-center gap-6">
                <div className="flex flex-col gap-3 flex-1">
                  {[
                    { icon: <SearchIcon />, label: "Search Volume", value: "+2.9k" },
                    { icon: <PieChartIcon />, label: "Return Ratio", value: "1.22" },
                    { icon: <CursorIcon />, label: "Clicks / search", value: "0.83" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-neutral-100 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-text-secondary">{item.label}</p>
                        <p className="text-sm font-semibold text-text-default">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative flex-shrink-0 w-[88px] h-[88px] flex items-center justify-center">
                  <DonutChart />
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-text-default">275</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 bg-slate-50 rounded-xl p-3">
                <div className="flex-shrink-0">
                  <RocketIcon />
                </div>
                <span className="text-xs text-text-secondary flex-1">Learn how to manage all aspects of your startup.</span>
                <button className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-brand-500 flex items-center justify-center">
                  <ArrowRightIcon />
                </button>
              </div>
            </div>

          </div>

          {/* Accordion */}
          <div className="lg:w-80 flex-shrink-0 flex flex-col gap-0">
            <h2 className="text-2xl font-bold text-text-default mb-4">How It Works</h2>
            <hr className="border-neutral-200 mb-2" />
            {steps.map((step, i) => (
              <div key={step.id}>
                <div className={`flex items-center justify-between py-4 ${i === 0 ? "text-text-default" : "text-neutral-500"}`}>
                  <span className="text-sm font-semibold">{step.title}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    {i === 0
                      ? <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      : <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    }
                  </svg>
                </div>
                {i === 0 && step.description && (
                  <p className="text-sm text-text-secondary pb-4 leading-relaxed">{step.description}</p>
                )}
                <hr className="border-neutral-200" />
              </div>
            ))}
            <button className="mt-6 inline-flex items-center justify-center h-11 px-6 rounded-full bg-sky-brand-500 text-white text-sm font-semibold hover:bg-sky-brand-600 transition-colors self-start">
              Apply Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
