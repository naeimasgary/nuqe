import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { DashboardHome } from "./DashboardHome";
import { QuotesPage } from "./QuotesPage";
import { ProjectsPage } from "./ProjectsPage";
import { ChatsPage } from "./ChatsPage";

const withRouter = (path: string) => (Story: React.ComponentType) => (
  <MemoryRouter initialEntries={[path]}>
    <Story />
  </MemoryRouter>
);

// ── Dashboard Home ────────────────────────────────────────────────────────────
const dashMeta: Meta<typeof DashboardHome> = {
  title: "Dashboard/Pages/DashboardHome",
  component: DashboardHome,
  parameters: { layout: "fullscreen" },
  decorators: [withRouter("/dashboard")],
};
export default dashMeta;
type DashStory = StoryObj<typeof DashboardHome>;
export const Home: DashStory = {};

// ── Quotes ────────────────────────────────────────────────────────────────────
export const Quotes: StoryObj = {
  render: () => (
    <MemoryRouter initialEntries={["/dashboard/quotes"]}>
      <QuotesPage />
    </MemoryRouter>
  ),
  parameters: { layout: "fullscreen" },
};

// ── Projects ──────────────────────────────────────────────────────────────────
export const Projects: StoryObj = {
  render: () => (
    <MemoryRouter initialEntries={["/dashboard/projects"]}>
      <ProjectsPage />
    </MemoryRouter>
  ),
  parameters: { layout: "fullscreen" },
};

// ── Chats ─────────────────────────────────────────────────────────────────────
export const Chats: StoryObj = {
  render: () => (
    <MemoryRouter initialEntries={["/dashboard/chats"]}>
      <ChatsPage />
    </MemoryRouter>
  ),
  parameters: { layout: "fullscreen" },
};
