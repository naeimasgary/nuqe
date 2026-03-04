import type { Meta, StoryObj } from "@storybook/react";
import { SiteHeader } from "./SiteHeader";

const meta: Meta<typeof SiteHeader> = {
  title: "Components/SiteHeader",
  component: SiteHeader,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "The public-facing site header used on all marketing pages. Includes an optional announcement banner, the main navbar with navigation links, CTA buttons, and a responsive mobile drawer.",
      },
    },
  },
  argTypes: {
    showBanner: {
      control: "boolean",
      description: "Show or hide the top announcement banner",
    },
    bannerBadge: {
      control: "text",
      description: "Label inside the badge pill in the banner",
    },
    bannerMessage: {
      control: "text",
      description: "Announcement message text",
    },
    primaryCtaLabel: {
      control: "text",
      description: "Primary CTA button label",
    },
    secondaryCtaLabel: {
      control: "text",
      description: "Secondary (outline) CTA button label",
    },
    onPrimaryCtaClick: { action: "primaryCta clicked" },
    onSecondaryCtaClick: { action: "secondaryCta clicked" },
  },
  args: {
    showBanner: true,
    bannerBadge: "New",
    bannerMessage: "Frontend Pages Added",
    primaryCtaLabel: "Create Project",
    secondaryCtaLabel: "Sign in",
  },
};

export default meta;
type Story = StoryObj<typeof SiteHeader>;

/** Default state — banner visible, all nav items, both CTAs */
export const Default: Story = {};

/** No announcement banner — clean header only */
export const NoBanner: Story = {
  args: {
    showBanner: false,
  },
};

/** Custom announcement content */
export const CustomAnnouncement: Story = {
  args: {
    bannerBadge: "Beta",
    bannerMessage: "Dashboard is now live — try it today!",
  },
};

/** Minimal nav — fewer items */
export const MinimalNav: Story = {
  args: {
    showBanner: false,
    navItems: [
      { label: "About" },
      { label: "Features" },
      { label: "Pricing" },
    ],
    primaryCtaLabel: "Get Started",
    secondaryCtaLabel: "Log in",
  },
};

/** Mobile viewport — shows hamburger menu */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "On mobile (≤768px) the nav links and action buttons are hidden. A hamburger icon opens a slide-in drawer.",
      },
    },
  },
};

/** Tablet viewport */
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
