import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "../../components/DashboardLayout";
import { Button } from "../../components/Button";

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

interface Seller {
  id: string;
  name: string;
  city: string;
  province: string;
  distance: number;
  website: string;
}

const MOCK_SELLERS: Seller[] = [
  { id: "1", name: "Company Name", city: "Toronto", province: "ON", distance: 2, website: "www.companyname.com" },
  { id: "2", name: "Company Name", city: "Mississauga", province: "ON", distance: 3, website: "www.companyname.com" },
  { id: "3", name: "Company Name", city: "Brampton", province: "ON", distance: 4, website: "www.companyname.com" },
];

export function SearchSellersPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("Thermostats");
  const [selected, setSelected] = useState<Set<string>>(new Set(["1", "2", "3"]));
  const [loading, setLoading] = useState(false);

  function toggleSeller(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function handleSend() {
    if (selected.size === 0) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/onboarding/loading");
    }, 800);
  }

  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-default">Search all sellers</h1>
        <p className="text-sm text-text-secondary mt-0.5">Search all sellers</p>
      </div>

      {/* Main card */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs overflow-hidden">
        <div className="p-6 flex flex-col gap-5">

          {/* Search bar with category filter */}
          <div className="flex items-center gap-2 h-11 px-3 rounded-xl border border-outline-default bg-white">
            {/* Category pill */}
            <button className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 text-text-default text-sm font-medium hover:bg-neutral-200 transition-colors flex-shrink-0">
              Category
              <ChevronDownIcon />
            </button>
            <div className="w-px h-5 bg-neutral-200 mx-1 flex-shrink-0" />
            <SearchIcon />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search sellers by category..."
              className="flex-1 bg-transparent text-sm text-text-default placeholder:text-neutral-400 outline-none"
            />
          </div>

          {/* Filter pills */}
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-sm text-text-default hover:bg-neutral-50 transition-colors">
              Distance <ChevronDownIcon />
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-sm text-text-default hover:bg-neutral-50 transition-colors">
              Ascending <ChevronDownIcon />
            </button>
          </div>

          {/* Results summary */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">Top {MOCK_SELLERS.length} results</span>
            {selected.size > 0 && (
              <span className="text-sky-brand-600 font-semibold">{selected.size} Sellers Selected</span>
            )}
          </div>

          {/* Seller cards */}
          <div className="flex flex-col gap-3">
            {MOCK_SELLERS.map((seller) => {
              const isSelected = selected.has(seller.id);
              return (
                <label
                  key={seller.id}
                  className={[
                    "flex items-start gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all",
                    isSelected
                      ? "border-sky-brand-400 bg-sky-brand-50/40"
                      : "border-neutral-200 bg-white hover:border-neutral-300",
                  ].join(" ")}
                >
                  {/* Checkbox */}
                  <div className="flex-shrink-0 mt-0.5">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSeller(seller.id)}
                      className="w-4 h-4 rounded accent-sky-brand-500 cursor-pointer"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-1 min-w-0">
                    <p className="text-base font-semibold text-text-default">{seller.name}</p>
                    <p className="text-sm text-text-secondary">{seller.city}, {seller.province}</p>
                    <p className="text-sm text-text-secondary">Distance: {seller.distance} km</p>
                    <a
                      href={`https://${seller.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-sky-brand-600 hover:text-sky-brand-800 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {seller.website}
                    </a>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="flex items-center justify-end px-6 py-4 border-t border-neutral-100 bg-neutral-50">
          <Button
            onClick={handleSend}
            disabled={selected.size === 0 || loading}
          >
            {loading ? "Sending…" : "Send project to sellers"}
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
