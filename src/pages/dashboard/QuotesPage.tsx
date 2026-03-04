import { DashboardLayout } from "../../components/DashboardLayout";
import { DataTable, StatusBadge } from "../../components/DataTable";
import type { Column } from "../../components/DataTable";

const avatarSrc = "https://www.figma.com/api/mcp/asset/ca4bb38f-9927-47c0-8bf1-0e34f5eec9b6";

// ── Stat cards ────────────────────────────────────────────────────────────────
interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  trend?: { value: string; up: boolean };
  chart?: React.ReactNode;
}

function StatCard({ icon, label, value, sub, trend, chart }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2 text-neutral-500">
        {icon}
        <span className="text-sm font-medium text-neutral-500">{label}</span>
      </div>
      <div className="flex items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-3xl font-bold text-text-default leading-none">{value}</span>
          {sub && (
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <span>{sub}</span>
              {trend && (
                <span className={`flex items-center gap-0.5 font-semibold ${trend.up ? "text-teal-600" : "text-red-500"}`}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    {trend.up
                      ? <polyline points="18 15 12 9 6 15" />
                      : <polyline points="6 9 12 15 18 9" />}
                  </svg>
                  {trend.value}
                </span>
              )}
            </div>
          )}
        </div>
        {chart && <div className="flex-shrink-0">{chart}</div>}
      </div>
    </div>
  );
}

// ── Mini bar chart ─────────────────────────────────────────────────────────────
function BarChart({ heights, color }: { heights: number[]; color: string }) {
  return (
    <div className="flex items-end gap-0.5 h-10">
      {heights.map((h, i) => (
        <div key={i} className="w-2 rounded-sm" style={{ height: `${h}%`, backgroundColor: color }} />
      ))}
    </div>
  );
}

// ── Order progress bar ────────────────────────────────────────────────────────
function OrderProgress() {
  const items = [
    { label: "Pending", color: "#FFB800", pct: 40 },
    { label: "Shipped", color: "#00CEB6", pct: 45 },
    { label: "Canceled", color: "#FF6692", pct: 15 },
  ];
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-0.5 rounded-full overflow-hidden h-3">
        {items.map((item) => (
          <div key={item.label} style={{ width: `${item.pct}%`, backgroundColor: item.color }} />
        ))}
      </div>
      <div className="flex items-center gap-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5 text-xs text-neutral-500">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Table data ────────────────────────────────────────────────────────────────
interface Order {
  id: string;
  orderId: string;
  orderDate: string;
  customer: string;
  project: string;
  amount: string;
  status: "pending" | "shipped" | "canceled";
}

const ORDERS: Order[] = Array.from({ length: 8 }, (_, i) => ({
  id: String(i + 1),
  orderId: "1234",
  orderDate: "Nov 3, 2025",
  customer: "Bob",
  project: "RowCell",
  amount: "$55",
  status: i % 3 === 0 ? "shipped" : i % 5 === 0 ? "canceled" : "pending",
}));

const COLUMNS: Column<Order>[] = [
  {
    key: "orderId",
    label: "Order ID",
    sortable: true,
    render: (row) => <span className="font-medium">{row.orderId}</span>,
  },
  { key: "orderDate", label: "Order Date", sortable: true },
  {
    key: "customer",
    label: "Customer",
    sortable: true,
    render: (row) => (
      <div className="flex items-center gap-2">
        <img src={avatarSrc} alt="" className="w-6 h-6 rounded-full object-cover" />
        <span>{row.customer}</span>
      </div>
    ),
  },
  { key: "project", label: "Project", sortable: true },
  { key: "amount", label: "Amount", sortable: true },
  {
    key: "status",
    label: "Status",
    sortable: true,
    render: (row) => <StatusBadge status={row.status} />,
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export function QuotesPage() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-default">Quotes</h1>
          <p className="text-sm text-text-secondary mt-0.5">View, process, and fulfill customer orders.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200 bg-white text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-colors shadow-xs">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          Button Text
        </button>
      </div>

      {/* Stat cards row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
        {/* Total Orders + Shipping Distance */}
        <div className="flex flex-col gap-4">
          <StatCard
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /><rect x="9" y="3" width="6" height="4" rx="1" /></svg>}
            label="Total Orders"
            value="432,500"
          />
          <StatCard
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>}
            label="Average Shipping Distance"
            value="481"
            sub="miles · From yesterday"
            trend={{ value: "7%", up: true }}
          />
        </div>

        {/* Centre — total sales + orders breakdown */}
        <div className="flex flex-col gap-4">
          <StatCard
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>}
            label="Total Sales"
            value="3,700"
            sub="Last week: 2,340"
            trend={{ value: "7%", up: true }}
          />
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-5 flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Pending Orders", value: "720", trend: { value: "7%", up: true } },
                { label: "Shipped Orders", value: "985", trend: { value: "7%", up: false } },
                { label: "Canceled Orders", value: "24", trend: { value: "7%", up: true } },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="text-xs text-neutral-500">{s.label}</span>
                  <span className="text-2xl font-bold text-text-default">{s.value}</span>
                  <div className="flex items-center gap-1 text-xs">
                    <span className={`flex items-center gap-0.5 font-semibold ${s.trend.up ? "text-teal-600" : "text-red-500"}`}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        {s.trend.up ? <polyline points="18 15 12 9 6 15" /> : <polyline points="6 9 12 15 18 9" />}
                      </svg>
                      {s.trend.value}
                    </span>
                    <span className="text-neutral-400">From yesterday</span>
                  </div>
                </div>
              ))}
            </div>
            <OrderProgress />
          </div>
        </div>

        {/* Right — average delivery time */}
        <StatCard
          icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>}
          label="Average Delivery Time"
          value="4.1"
          sub="days · Last week: 4.8"
          trend={{ value: "7%", up: true }}
          chart={
            <BarChart
              heights={[40, 55, 60, 70, 75, 80, 88, 95]}
              color="#00CEB6"
            />
          }
        />
      </div>

      {/* Recent orders table */}
      <DataTable
        columns={COLUMNS}
        data={ORDERS}
        title="Recent Orders"
        onSearch={() => {}}
      />
    </DashboardLayout>
  );
}
