import { DashboardLayout } from "../../components/DashboardLayout";

// Widget card placeholder
function WidgetCard({ title, className = "" }: { title?: string; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-neutral-200 shadow-xs flex flex-col ${className}`}>
      {title && (
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
          <span className="text-sm font-semibold text-text-default">{title}</span>
          <button className="text-neutral-400 hover:text-neutral-600 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" />
            </svg>
          </button>
        </div>
      )}
      <div className="flex-1 flex items-center justify-center p-6 min-h-[160px]">
        <p className="text-sm text-neutral-300">No data yet</p>
      </div>
    </div>
  );
}

export function DashboardHome() {
  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-default">Dashboard</h1>
          <p className="text-sm text-text-secondary mt-0.5">Here are your dashboard overview</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200 text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          Button Text
        </button>
      </div>

      {/* Main widget area */}
      <div className="flex flex-col gap-6">
        {/* Top wide widget */}
        <WidgetCard title="Page Title" className="min-h-[200px]" />

        {/* Mid row — 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <WidgetCard title="Page Title" className="min-h-[200px]" />
          <WidgetCard title="Page Title" className="min-h-[200px]" />
        </div>

        {/* Bottom row — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <WidgetCard title="Page Title" className="min-h-[180px]" />
          <WidgetCard title="Page Title" className="min-h-[180px]" />
          <WidgetCard title="Page Title" className="min-h-[180px]" />
        </div>
      </div>
    </DashboardLayout>
  );
}
