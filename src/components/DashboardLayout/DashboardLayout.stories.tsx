import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { DashboardLayout } from "./DashboardLayout";

const meta: Meta<typeof DashboardLayout> = {
  title: "Dashboard/DashboardLayout",
  component: DashboardLayout,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/dashboard"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DashboardLayout>;

export const Default: Story = {
  args: {
    children: (
      <div className="flex flex-col gap-4">
        <div className="bg-white rounded-2xl border border-neutral-200 p-6">
          <h2 className="text-xl font-bold text-text-default">Page Content Area</h2>
          <p className="text-sm text-text-secondary mt-1">Content goes here inside the dashboard layout.</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {["Widget 1", "Widget 2", "Widget 3"].map((w) => (
            <div key={w} className="bg-white rounded-2xl border border-neutral-200 p-6 h-32 flex items-center justify-center">
              <span className="text-sm text-neutral-400">{w}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
};

export const WithQuotesActive: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/dashboard/quotes"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    children: (
      <p className="text-sm text-text-secondary">Quotes page content</p>
    ),
  },
};
