import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "../../components/DashboardLayout";
import { Button } from "../../components/Button";

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-400 flex-shrink-0">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
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

const ALL_SELLERS: Seller[] = [
  { id: "1",  name: "Company Name",       city: "Burlington",  province: "ON", distance: 2,  website: "www.companyname.com" },
  { id: "2",  name: "Company Name",       city: "Oakville",    province: "ON", distance: 3,  website: "www.companyname.com" },
  { id: "3",  name: "Company Name",       city: "Hamilton",    province: "ON", distance: 4,  website: "www.companyname.com" },
  { id: "4",  name: "TechSupply Co",      city: "Mississauga", province: "ON", distance: 8,  website: "www.techsupply.com" },
  { id: "5",  name: "AutoParts Ltd",      city: "Toronto",     province: "ON", distance: 12, website: "www.autoparts.com" },
  { id: "6",  name: "IndustrialPro Inc",  city: "Brampton",    province: "ON", distance: 15, website: "www.industrialpro.com" },
  { id: "7",  name: "Nexus Automation",   city: "Kitchener",   province: "ON", distance: 22, website: "www.nexusauto.com" },
  { id: "8",  name: "Apex Controls",      city: "Cambridge",   province: "ON", distance: 28, website: "www.apexcontrols.com" },
  { id: "9",  name: "Delta Systems",      city: "Guelph",      province: "ON", distance: 34, website: "www.deltasystems.com" },
  { id: "10", name: "Omega Instruments",  city: "London",      province: "ON", distance: 98, website: "www.omegainst.com" },
];

export function SearchSellersPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);

  const filtered = search.trim()
    ? ALL_SELLERS.filter(
        (s) =>
          s.name.toLowerCase().includes(search.toLowerCase()) ||
          s.city.toLowerCase().includes(search.toLowerCase())
      )
    : ALL_SELLERS;

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
        <h1 className="text-2xl font-bold text-text-default">All Sellers</h1>
        <p className="text-sm text-text-secondary mt-0.5">
          Browse the full list of verified sellers and select the ones to send your project to.
        </p>
      </div>

      {/* Main card */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs overflow-hidden">
        <div className="p-6 flex flex-col gap-5">

          {/* Search bar */}
          <div className="flex items-center gap-3 h-11 px-4 rounded-xl border border-outline-default bg-white">
            <button className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 text-text-default text-sm font-medium hover:bg-neutral-200 transition-colors flex-shrink-0">
              Category <ChevronDownIcon />
            </button>
            <div className="w-px h-5 bg-neutral-200 flex-shrink-0" />
            <SearchIcon />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search sellers by name or city…"
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
            <span className="text-text-secondary">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </span>
            {selected.size > 0 && (
              <span className="text-sky-brand-600 font-semibold">{selected.size} Sellers Selected</span>
            )}
          </div>

          {/* Seller cards */}
          <div className="flex flex-col gap-3">
            {filtered.map((seller) => {
              const isSelected = selected.has(seller.id);
              return (
                <label
                  key={seller.id}
                  className={[
                    "flex items-start gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all",
                    isSelected ? "border-sky-brand-400 bg-sky-brand-50/40" : "border-neutral-200 bg-white hover:border-neutral-300",
                  ].join(" ")}
                >
                  <div className="flex-shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSeller(seller.id)}
                      className="w-4 h-4 rounded accent-sky-brand-500 cursor-pointer"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
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
          <Button onClick={handleSend} disabled={selected.size === 0 || loading}>
            {loading ? "Sending…" : "Send project to sellers"}
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
