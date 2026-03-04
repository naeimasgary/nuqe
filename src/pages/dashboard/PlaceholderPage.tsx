import { DashboardLayout } from "../../components/DashboardLayout";

export function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-text-default">Settings</h1>
        <p className="text-sm text-text-secondary">Manage your account and preferences.</p>
      </div>
      <div className="mt-6 bg-white rounded-2xl border border-neutral-200 shadow-xs p-12 flex items-center justify-center">
        <p className="text-neutral-300 text-sm">Settings — coming soon</p>
      </div>
    </DashboardLayout>
  );
}

export function HelpPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-text-default">Help Center</h1>
        <p className="text-sm text-text-secondary">Find answers and support.</p>
      </div>
      <div className="mt-6 bg-white rounded-2xl border border-neutral-200 shadow-xs p-12 flex items-center justify-center">
        <p className="text-neutral-300 text-sm">Help Center — coming soon</p>
      </div>
    </DashboardLayout>
  );
}
