import { LoginForm } from "@/examples/LoginForm";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LoginForm> = {
  title: "Examples/Form",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Login: Story = {};
