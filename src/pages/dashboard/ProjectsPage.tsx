import { useState, useEffect, useRef, FormEvent } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { DashboardLayout } from "../../components/DashboardLayout";
import { Button } from "../../components/Button";

// ── Icons ──────────────────────────────────────────────────────────────────

function UploadIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neutral-400">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neutral-400">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`text-neutral-400 flex-shrink-0 ${className}`}>
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

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ── Suggested Sellers Modal ────────────────────────────────────────────────

interface Seller {
  id: string;
  name: string;
  city: string;
  province: string;
  distance: number;
  website: string;
}

const MOCK_SELLERS: Seller[] = [
  { id: "1", name: "Company Name", city: "Burlington", province: "ON", distance: 2, website: "www.companyname.com" },
  { id: "2", name: "Company Name", city: "Oakville",   province: "ON", distance: 3, website: "www.companyname.com" },
  { id: "3", name: "Company Name", city: "Hamilton",   province: "ON", distance: 4, website: "www.companyname.com" },
  { id: "4", name: "TechSupply Co", city: "Mississauga", province: "ON", distance: 8,  website: "www.techsupply.com" },
  { id: "5", name: "AutoParts Ltd", city: "Toronto",   province: "ON", distance: 12, website: "www.autoparts.com" },
];

interface SuggestedSellersModalProps {
  defaultCategory: string;
  onClose: () => void;
  onSend: (selected: Set<string>) => void;
}

function SuggestedSellersModal({ defaultCategory, onClose, onSend }: SuggestedSellersModalProps) {
  const navigate = useNavigate();
  const [search, setSearch] = useState(defaultCategory);
  const [selected, setSelected] = useState<Set<string>>(new Set(["1", "2", "3"]));
  const [loading, setLoading] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

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
      onSend(selected);
    }, 800);
  }

  // Close on backdrop click
  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === overlayRef.current) onClose();
  }

  // Top 3 by distance for "suggested", rest shown in See all sellers
  const suggestedSellers = MOCK_SELLERS.slice(0, 3);

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-50 flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[660px] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header section */}
        <div className="p-6 flex flex-col gap-5 border-b border-neutral-100">
          {/* Title + close */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-text-default">Suggested sellers</h2>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-neutral-600 transition-colors p-1"
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Search bar */}
          <div className="flex items-center h-11 px-4 gap-3 rounded-xl border border-outline-default bg-white">
            <button className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 text-text-default text-sm font-medium hover:bg-neutral-200 transition-colors flex-shrink-0">
              Category <ChevronDownIcon />
            </button>
            <div className="w-px h-5 bg-neutral-200 flex-shrink-0" />
            <SearchIcon />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search sellers by category…"
              className="flex-1 bg-transparent text-sm text-text-default placeholder:text-neutral-400 outline-none"
            />
          </div>

          {/* Filter pills */}
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-200 bg-white text-xs font-medium text-text-default hover:bg-neutral-50 transition-colors">
              Distance <ChevronDownIcon />
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-200 bg-white text-xs font-medium text-text-default hover:bg-neutral-50 transition-colors">
              Ascending <ChevronDownIcon />
            </button>
          </div>

          {/* Results summary */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">Top 3 results</span>
            {selected.size > 0 && (
              <span className="text-sky-brand-600 font-semibold">{selected.size} Sellers Selected</span>
            )}
          </div>
        </div>

        {/* Seller cards */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-3">
          {suggestedSellers.map((seller) => {
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

        {/* Footer CTA */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-neutral-100 bg-neutral-50">
          <Link
            to="/dashboard/projects/sellers"
            onClick={onClose}
            className="text-sm font-semibold text-text-default hover:text-sky-brand-600 transition-colors border border-neutral-200 bg-white px-4 py-2 rounded-full"
          >
            See all Sellers
          </Link>
          <Button onClick={handleSend} disabled={selected.size === 0 || loading}>
            {loading ? "Sending…" : "Send project to sellers"}
          </Button>
        </div>
      </div>
    </div>
  );
}

// ── Projects Page ──────────────────────────────────────────────────────────

export function ProjectsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isPrefill = searchParams.get("prefill") === "true";

  // Form state — pre-filled from walkthrough if ?prefill=true
  const [projectName, setProjectName] = useState("");
  const [category, setCategory]       = useState("");
  const [postalCode, setPostalCode]   = useState("");
  const [budget, setBudget]           = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [description, setDescription]   = useState("");

  const [showModal, setShowModal] = useState(false);

  // Load walkthrough pre-fill from sessionStorage once
  useEffect(() => {
    if (isPrefill) {
      setProjectName(sessionStorage.getItem("wt_projectName") || "");
      setPostalCode(sessionStorage.getItem("wt_postalCode") || "");
      setCategory(sessionStorage.getItem("wt_category") || "");
    }
  }, [isPrefill]);

  function handleFindSellers(e: FormEvent) {
    e.preventDefault();
    setShowModal(true);
  }

  function handleSendToSellers(selected: Set<string>) {
    // Clear walkthrough data
    sessionStorage.removeItem("wt_projectName");
    sessionStorage.removeItem("wt_postalCode");
    sessionStorage.removeItem("wt_category");
    navigate("/onboarding/loading");
  }

  const canFindSellers = projectName.trim() && category.trim() && postalCode.trim();

  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-default">Projects</h1>
          <p className="text-sm text-text-secondary mt-0.5">Create a new project</p>
        </div>
        {canFindSellers && (
          <Button onClick={() => setShowModal(true)}>
            Find sellers
          </Button>
        )}
      </div>

      {/* Form card */}
      <form onSubmit={handleFindSellers}>
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs overflow-hidden">
          <div className="p-8 flex flex-col gap-6">

            {/* Row 1: Project Name, Postal Code, Category */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-text-default">
                  Project Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter project name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  required
                  className={`h-11 px-4 rounded-xl border bg-white text-text-default text-sm placeholder:text-neutral-400 outline-none focus:border-outline-focused transition-all ${
                    isPrefill && projectName ? "border-sky-brand-300 bg-sky-brand-50/30" : "border-outline-default"
                  }`}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-text-default">
                  Delivery Date <span className="text-neutral-400 text-xs font-normal">(optional)</span>
                </label>
                <input
                  type="date"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="h-11 px-4 rounded-xl border border-outline-default bg-white text-text-default text-sm outline-none focus:border-outline-focused transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-text-default">
                  Project Category <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Thermostats"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className={`h-11 px-4 rounded-xl border bg-white text-text-default text-sm placeholder:text-neutral-400 outline-none focus:border-outline-focused transition-all ${
                    isPrefill && category ? "border-sky-brand-300 bg-sky-brand-50/30" : "border-outline-default"
                  }`}
                />
              </div>
            </div>

            {/* Row 2: Budget, Postal Code */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-text-default">
                  Budget <span className="text-neutral-400 text-xs font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary text-sm">$</span>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    min="0"
                    className="w-full h-11 pl-8 pr-4 rounded-xl border border-outline-default bg-white text-text-default text-sm placeholder:text-neutral-400 outline-none focus:border-outline-focused transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-text-default">
                  Postal Code <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. L7L 6A5"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value.toUpperCase())}
                  required
                  maxLength={10}
                  className={`h-11 px-4 rounded-xl border bg-white text-text-default text-sm placeholder:text-neutral-400 outline-none focus:border-outline-focused transition-all uppercase tracking-widest ${
                    isPrefill && postalCode ? "border-sky-brand-300 bg-sky-brand-50/30" : "border-outline-default"
                  }`}
                />
              </div>
            </div>

            {/* Pre-fill indicator */}
            {isPrefill && (
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-brand-50 border border-sky-brand-200">
                <svg className="text-sky-brand-500 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <p className="text-xs text-sky-brand-700 font-medium">
                  Fields highlighted in blue were pre-filled from your walkthrough. Fill in the optional fields below, then click Find Sellers.
                </p>
              </div>
            )}

            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-default">
                Project Description <span className="text-neutral-400 text-xs font-normal">(optional)</span>
              </label>
              <textarea
                placeholder="Describe what you're looking for, including specifications, quantities, or special requirements…"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                className="px-4 py-3 rounded-xl border border-outline-default bg-white text-text-default text-sm placeholder:text-neutral-400 outline-none focus:border-outline-focused transition-all resize-none"
              />
            </div>

            {/* Attachments */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-text-default">
                Attachments <span className="text-neutral-400 text-xs font-normal">(optional)</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                {/* Upload button */}
                <div className="flex flex-col items-center justify-center gap-2 h-[180px] rounded-xl border-2 border-dashed border-neutral-200 bg-neutral-50 hover:bg-neutral-100 cursor-pointer transition-colors">
                  <UploadIcon />
                  <p className="text-sm font-medium text-text-secondary">Upload Attachments</p>
                  <p className="text-xs text-neutral-400 text-center px-4 leading-relaxed">
                    Dimensions: 600 × 600 px. Max 10 MB (up to 9 files).<br />
                    Format: PDF, JPG, JPEG, PNG
                  </p>
                </div>

                {/* Image slots */}
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center h-[84px] rounded-lg border-2 border-dashed border-neutral-200 bg-neutral-50 hover:bg-neutral-100 cursor-pointer transition-colors"
                    >
                      <PlusIcon />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form footer CTA */}
          <div className="flex items-center justify-end px-8 py-4 border-t border-neutral-100 bg-neutral-50">
            <Button
              type="submit"
              disabled={!canFindSellers}
            >
              Find Sellers
            </Button>
          </div>
        </div>
      </form>

      {/* Suggested Sellers Modal */}
      {showModal && (
        <SuggestedSellersModal
          defaultCategory={category || "Thermostats"}
          onClose={() => setShowModal(false)}
          onSend={handleSendToSellers}
        />
      )}
    </DashboardLayout>
  );
}
