import { useState } from "react";
import { DashboardLayout } from "../../components/DashboardLayout";
import { DataTable, StatusBadge } from "../../components/DataTable";
import type { Column } from "../../components/DataTable";

const avatarSrc = "https://www.figma.com/api/mcp/asset/ca4bb38f-9927-47c0-8bf1-0e34f5eec9b6";

interface Project {
  id: string;
  orderId: string;
  orderDate: string;
  customer: string;
  project: string;
  amount: string;
  status: "pending" | "shipped" | "canceled" | "active" | "draft";
}

const PROJECTS_DATA: Project[] = Array.from({ length: 8 }, (_, i) => ({
  id: String(i + 1),
  orderId: "1234",
  orderDate: "Nov 3, 2025",
  customer: "Bob",
  project: "RowCell",
  amount: "$55",
  status: i % 3 === 2 ? "shipped" : i % 5 === 0 ? "canceled" : "pending",
}));

const COLUMNS: Column<Project>[] = [
  {
    key: "orderId",
    label: "Order ID",
    sortable: true,
    render: (row) => <span className="font-medium text-text-default">{row.orderId}</span>,
  },
  {
    key: "orderDate",
    label: "Order Date",
    sortable: true,
  },
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
  {
    key: "project",
    label: "Project",
    sortable: true,
  },
  {
    key: "amount",
    label: "Amount",
    sortable: true,
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
    render: (row) => <StatusBadge status={row.status} />,
  },
];

export function ProjectsPage() {
  const [tab, setTab] = useState<"published" | "drafts">("published");

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-default">Projects</h1>
          <p className="text-sm text-text-secondary mt-0.5">View, process, and fulfill customer orders.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200 bg-white text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-colors shadow-xs">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Import Project
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-brand-500 text-white text-sm font-semibold hover:bg-sky-brand-600 transition-colors shadow-xs">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Create New Project
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-0 bg-white border border-neutral-200 rounded-xl p-1 w-fit mb-6 shadow-xs">
        {(["published", "drafts"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={[
              "flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors capitalize",
              tab === t
                ? "bg-sky-brand-500 text-white shadow-xs"
                : "text-neutral-500 hover:text-neutral-700",
            ].join(" ")}
          >
            {tab === "published" && t === "published" && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Table */}
      <DataTable
        columns={COLUMNS}
        data={tab === "published" ? PROJECTS_DATA : []}
        title="All Projects"
        onSearch={() => {}}
        emptyMessage="No draft projects found."
      />
    </DashboardLayout>
  );
}
