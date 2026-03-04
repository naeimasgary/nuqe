import { useState } from "react";

const cardWarning = "https://www.figma.com/api/mcp/asset/aec20afc-30b0-44c8-985d-578eea540d45";
const cardSuccess = "https://www.figma.com/api/mcp/asset/6611bedb-aa3e-480b-9c45-7b8e38bc135b";
const chartSvg = "https://www.figma.com/api/mcp/asset/0926d88e-4494-4d9a-ab73-1840e7df4180";
const chartDonut = "https://www.figma.com/api/mcp/asset/ae504ba0-c2d7-4351-9613-46382e04da7e";
const iconRocket = "https://www.figma.com/api/mcp/asset/ca876b58-6657-4927-baad-4987d167cf4d";
const iconArrow = "https://www.figma.com/api/mcp/asset/bbcc08a0-6352-4848-9003-3a139360c7fb";
const iconSearch = "https://www.figma.com/api/mcp/asset/192410d6-d4f9-45c5-aa24-6d4cc5fecd34";
const iconPie = "https://www.figma.com/api/mcp/asset/12000136-bc85-4209-b580-2fe8ee98071b";
const iconCursor = "https://www.figma.com/api/mcp/asset/260417a5-54ee-4a09-b82e-b23fe55e4c6d";
const userIcon1 = "https://www.figma.com/api/mcp/asset/f3641f1a-1e86-45c0-a8b5-9a1068429198";
const banknoteIcon = "https://www.figma.com/api/mcp/asset/4cdbec07-0be8-409a-b6d3-a744f5e41dc5";

const steps = [
  { id: "apply", title: "Apply & Get Vetted", description: "Submit your application. Our team verifies your business credentials." },
  { id: "browse", title: "Browse & Discover", description: null },
  { id: "connect", title: "Connect Anonymously", description: null },
];

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
            <div className="flex gap-4">
              {/* Warning card */}
              <div className="flex-1 bg-white rounded-2xl border border-neutral-200 p-4 flex flex-col gap-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#ff6692]">
                    <img src={userIcon1} alt="" className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-neutral-500 flex-1">Pink indicates warning</span>
                  <img src={cardWarning} alt="" className="w-4 h-4" />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-xl font-bold text-text-default">4,562</span>
                    <span className="ml-2 text-xs bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded-full">+23% last month</span>
                  </div>
                  <div className="flex items-end gap-0.5 h-8">
                    {[23, 19, 25, 21, 26].map((h, idx) => (
                      <div key={idx} className="flex flex-col gap-0.5 items-center">
                        <div className="w-2 rounded-sm bg-neutral-200" style={{ height: `${h * 0.6}px` }} />
                        <div className="w-2 rounded-sm bg-[#ff6692]" style={{ height: `${(h + 3) * 0.6}px` }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Success card */}
              <div className="flex-1 bg-white rounded-2xl border border-neutral-200 p-4 flex flex-col gap-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#00ceb6]">
                    <img src={banknoteIcon} alt="" className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-neutral-500 flex-1">Green indicates success</span>
                  <img src={cardSuccess} alt="" className="w-4 h-4" />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-xl font-bold text-text-default">$2,529</span>
                    <span className="ml-2 text-xs bg-teal-100 text-teal-600 px-1.5 py-0.5 rounded-full">+42% last month</span>
                  </div>
                  <img src={chartSvg} alt="" className="h-8" />
                </div>
              </div>
            </div>

            {/* Marketing Report */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-text-default">Marketing Report</span>
                <img src={cardWarning} alt="" className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-6">
                <div className="flex flex-col gap-3 flex-1">
                  {[
                    { icon: iconSearch, label: "Search Volume", value: "+2.9k" },
                    { icon: iconPie, label: "Return Ratio", value: "1.22" },
                    { icon: iconCursor, label: "Clicks / search", value: "0.83" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-neutral-100 flex items-center justify-center flex-shrink-0">
                        <img src={item.icon} alt="" className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-text-secondary">{item.label}</p>
                        <p className="text-sm font-semibold text-text-default">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative flex-shrink-0">
                  <img src={chartDonut} alt="chart" className="w-20 h-20" />
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-text-default">275</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 bg-slate-50 rounded-xl p-3">
                <img src={iconRocket} alt="" className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs text-text-secondary flex-1">Learn how to manage all aspects of your startup.</span>
                <button className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-brand-500 flex items-center justify-center">
                  <img src={iconArrow} alt="go" className="w-3 h-3" />
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
