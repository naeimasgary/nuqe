import type { Meta, StoryObj } from "@storybook/react";
import { DataTable, StatusBadge } from "./DataTable";
import type { Column } from "./DataTable";

// ── Status Badge ──────────────────────────────────────────────────────────────
const badgeMeta: Meta<typeof StatusBadge> = {
  title: "Dashboard/StatusBadge",
  component: StatusBadge,
};
export default badgeMeta;

// ── DataTable stories (separate export) ──────────────────────────────────────
interface Row {
  id: string;
  orderId: string;
  orderDate: string;
  customer: string;
  amount: string;
  status: "pending" | "shipped" | "canceled";
}

const COLUMNS: Column<Row>[] = [
  { key: "orderId", label: "Order ID", sortable: true },
  { key: "orderDate", label: "Order Date", sortable: true },
  { key: "customer", label: "Customer", sortable: true },
  { key: "amount", label: "Amount", sortable: true },
  {
    key: "status",
    label: "Status",
    sortable: true,
    render: (row) => <StatusBadge status={row.status} />,
  },
];

const DATA: Row[] = Array.from({ length: 5 }, (_, i) => ({
  id: String(i + 1),
  orderId: `#${1000 + i}`,
  orderDate: "Nov 3, 2025",
  customer: "Bob Smith",
  amount: "$55.00",
  status: i % 3 === 0 ? "shipped" : i % 4 === 0 ? "canceled" : "pending",
}));

type BadgeStory = StoryObj<typeof StatusBadge>;

export const AllBadges: BadgeStory = {
  name: "All Status Badges",
  render: () => (
    <div className="flex flex-wrap gap-3 p-4">
      {(["pending", "shipped", "canceled", "active", "draft", "success", "error"] as const).map((s) => (
        <StatusBadge key={s} status={s} />
      ))}
    </div>
  ),
};

// DataTable is exported separately so Storybook can pick it up
export const Table = {
  render: () => (
    <div className="p-6 bg-slate-50 min-h-screen">
      <DataTable columns={COLUMNS} data={DATA} title="Recent Orders" onSearch={() => {}} />
    </div>
  ),
};

export const EmptyTable = {
  render: () => (
    <div className="p-6 bg-slate-50">
      <DataTable columns={COLUMNS} data={[]} title="No Orders" emptyMessage="No orders found. Create your first project." />
    </div>
  ),
};
