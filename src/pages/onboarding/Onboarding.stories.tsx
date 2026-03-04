import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { BusinessName } from "./BusinessName";
import { OnboardingStep1 } from "./OnboardingStep1";
import { Verification } from "./Verification";

// ── Business Name ──
const businessNameMeta: Meta<typeof BusinessName> = {
  title: "Pages/Onboarding/BusinessName",
  component: BusinessName,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
  parameters: { layout: "fullscreen" },
};
export default businessNameMeta;
type BNStory = StoryObj<typeof BusinessName>;
export const Default: BNStory = {};

// ── Step 1 — Categories ──
export const Step1: StoryObj<typeof OnboardingStep1> = {
  render: () => <MemoryRouter><OnboardingStep1 /></MemoryRouter>,
  name: "Step 1 — Categories",
};

// ── Verification States ──
export const VerifyPending: StoryObj<typeof Verification> = {
  render: () => <MemoryRouter><Verification state="pending" /></MemoryRouter>,
  name: "Verification — Pending",
};

export const VerifySuccess: StoryObj<typeof Verification> = {
  render: () => <MemoryRouter><Verification state="success" /></MemoryRouter>,
  name: "Verification — Success",
};

export const VerifyFailed: StoryObj<typeof Verification> = {
  render: () => <MemoryRouter><Verification state="failed" /></MemoryRouter>,
  name: "Verification — Failed",
};
