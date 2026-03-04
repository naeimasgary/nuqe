import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { CreateAccount } from "./CreateAccount";

const meta: Meta<typeof CreateAccount> = {
  title: "Pages/Auth/CreateAccount",
  component: CreateAccount,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof CreateAccount>;

export const Default: Story = {};
