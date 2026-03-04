import { useState, ReactNode } from "react";

// ── Status Badge ──────────────────────────────────────────────────────────────
type BadgeVariant = "pending" | "shipped" | "canceled" | "active" | "draft" | "success" | "error";

const BADGE_STYLES: Record<BadgeVariant, string> = {
  pending:  "bg-amber-50  text-amber-600  border border-amber-200",
  shipped:  "bg-teal-50   text-teal-600   border border-teal-200",
  canceled: "bg-red-50    text-red-500    border border-red-200",
  active:   "bg-sky-brand-50 text-sky-brand-600 border border-sky-brand-200",
  draft:    "bg-neutral-100 text-neutral-500 border border-neutral-200",
  success:  "bg-teal-50   text-teal-600   border border-teal-200",
  error:    "bg-red-50    text-red-500    border border-red-200",
};

export function StatusBadge({ status }: { status: BadgeVariant }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${BADGE_STYLES[status]}`}>
      {status}
    </span>
  );
}

// ── Sort icon ─────────────────────────────────────────────────────────────────
function SortIcon({ active }: { active?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={active ? "text-sky-brand-500" : "text-neutral-300"}>
      <path d="M7 16V4m0 0L3 8m4-4l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 8v12m0 0l4-4m-4 4l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Types ─────────────────────────────────────────────────────────────────────
export interface Column<T> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  render?: (row: T) => ReactNode;
  width?: string;
}

export interface DataTableProps<T extends { id: string | number }> {
  columns: Column<T>[];
  data: T[];
  title?: string;
  onSearch?: (q: string) => void;
  extraActions?: ReactNode;
  emptyMessage?: string;
}

// ── Component ─────────────────────────────────────────────────────────────────
export function DataTable<T extends { id: string | number }>({
  columns,
  data,
  title,
  onSearch,
  extraActions,
  emptyMessage = "No records found.",
}: DataTableProps<T>) {
  const [selected, setSelected] = useState<Set<string | number>>(new Set());
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const allSelected = data.length > 0 && selected.size === data.length;

  function toggleAll() {
    setSelected(allSelected ? new Set() : new Set(data.map((r) => r.id)));
  }

  function toggleRow(id: string | number) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function handleSort(key: string) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs overflow-hidden">
      {/* Table toolbar */}
      {(title || onSearch || extraActions) && (
        <div className="flex items-center gap-3 px-5 py-4 border-b border-neutral-200">
          {title && (
            <span className="text-base font-semibold text-text-default flex-1">{title}</span>
          )}
          <div className="flex items-center gap-2 ml-auto">
            {onSearch && (
              <button className="flex items-center justify-center w-9 h-9 rounded-xl border border-neutral-200 text-neutral-500 hover:bg-neutral-50 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            )}
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-neutral-200 text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              Categories
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-neutral-200 text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              Filter
            </button>
            {extraActions && extraActions}
            <button className="flex items-center justify-center w-9 h-9 rounded-xl border border-neutral-200 text-neutral-500 hover:bg-neutral-50 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50">
              {/* Checkbox col */}
              <th className="w-12 px-4 py-3 text-left">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleAll}
                  className="w-4 h-4 rounded border-neutral-300 accent-sky-brand-500"
                />
              </th>
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  style={col.width ? { width: col.width } : undefined}
                  className="px-4 py-3 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wider whitespace-nowrap"
                >
                  {col.sortable ? (
                    <button
                      className="inline-flex items-center gap-1 hover:text-neutral-700 transition-colors"
                      onClick={() => handleSort(String(col.key))}
                    >
                      {col.label}
                      <SortIcon active={sortKey === String(col.key)} />
                    </button>
                  ) : (
                    col.label
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="px-4 py-10 text-center text-sm text-neutral-400">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row) => (
                <tr
                  key={row.id}
                  className={`hover:bg-neutral-50 transition-colors ${selected.has(row.id) ? "bg-sky-brand-50/40" : ""}`}
                >
                  <td className="w-12 px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selected.has(row.id)}
                      onChange={() => toggleRow(row.id)}
                      className="w-4 h-4 rounded border-neutral-300 accent-sky-brand-500"
                    />
                  </td>
                  {columns.map((col) => (
                    <td key={String(col.key)} className="px-4 py-3 text-sm text-text-default">
                      {col.render
                        ? col.render(row)
                        : String((row as Record<string, unknown>)[String(col.key)] ?? "")}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
