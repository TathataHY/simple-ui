import { Button } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    children: "Hello, World!",
    variant: "solid",
  },
};

export const Outline: Story = {
  args: {
    children: "Hello, World!",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Hello, World!",
    variant: "ghost",
  },
};
