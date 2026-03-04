import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "primary",
    size: "md"
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "danger"]
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"]
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary"
  }
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary"
  }
};

export const Danger: Story = {
  args: {
    children: "Danger",
    variant: "danger"
  }
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true
  }
};

