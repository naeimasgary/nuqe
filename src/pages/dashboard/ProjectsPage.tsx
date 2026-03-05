import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "../../components/DashboardLayout";
import { Button } from "../../components/Button";

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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neutral-300">
      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-neutral-400">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function ProjectsPage() {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("");
  const [category, setCategory] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [budget, setBudget] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!projectName.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard/projects/sellers");
    }, 800);
  }

  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-default">Projects</h1>
        <p className="text-sm text-text-secondary mt-0.5">Create a new project to get started</p>
      </div>

      {/* Main card */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs">
        <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-6">

          {/* Row 1: Project Name | Project Category | Postal Code */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Project Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-default">Project Name</label>
              <input
                type="text"
                placeholder="Business name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                required
                className="h-11 px-4 rounded-xl border border-outline-default bg-white text-text-default text-sm placeholder:text-neutral-400 outline-none focus:border-outline-focused transition-all"
              />
            </div>

            {/* Project Category */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-default">Project Category</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  placeholder="Search and select category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full h-11 pl-9 pr-4 rounded-xl border border-outline-default bg-white text-text-default text-sm placeholder:text-neutral-400 outline-none focus:border-outline-focused transition-all"
                />
              </div>
            </div>

            {/* Postal Code */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-default">Postal Code</label>
              <input
                type="text"
                placeholder="Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="h-11 px-4 rounded-xl border border-outline-default bg-white text-text-default text-sm placeholder:text-neutral-400 outline-none focus:border-outline-focused transition-all"
              />
              <p className="text-xs text-text-secondary">Postal code is used to determine the closest sellers</p>
            </div>
          </div>

          {/* Row 2: Budget | Delivery Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Budget */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-default">Budget</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 text-sm pointer-events-none">$</span>
                <input
                  type="text"
                  placeholder=""
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full h-11 pl-8 pr-4 rounded-xl border border-outline-default bg-white text-text-default text-sm placeholder:text-neutral-400 outline-none focus:border-outline-focused transition-all"
                />
              </div>
            </div>

            {/* Delivery Date */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-default">Delivery Date</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-neutral-400">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="September 2024"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full h-11 pl-9 pr-4 rounded-xl border border-outline-default bg-white text-text-default text-sm placeholder:text-neutral-400 outline-none focus:border-outline-focused transition-all"
                />
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-text-default">Project Description</label>
            <textarea
              placeholder="Describe your project requirements..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={6}
              className="w-full px-4 py-3 rounded-xl border border-outline-default bg-white text-text-default text-sm placeholder:text-neutral-400 outline-none focus:border-outline-focused transition-all resize-none"
            />
          </div>

          {/* File Upload Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Upload drop zone */}
            <div className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-neutral-200 rounded-xl p-8 text-center hover:border-sky-brand-300 hover:bg-sky-brand-50/30 transition-colors cursor-pointer">
              <UploadIcon />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-text-default">Upload Attachments</p>
                <p className="text-xs text-text-secondary">Dimensions: 600 × 600 px.</p>
                <p className="text-xs text-text-secondary">Maximum file size: 10 MB (Up to 9 files).</p>
                <p className="text-xs text-text-secondary">Format: PDF, JPG, JPEG, PNG</p>
              </div>
            </div>

            {/* Image slots grid (6 slots) */}
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl border-2 border-dashed border-neutral-200 flex items-center justify-center hover:border-sky-brand-300 hover:bg-sky-brand-50/30 transition-colors cursor-pointer"
                >
                  <PlusIcon />
                </div>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end pt-2">
            <Button type="submit" disabled={loading || !projectName.trim()} size="lg">
              {loading ? "Creating…" : "Next"}
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
