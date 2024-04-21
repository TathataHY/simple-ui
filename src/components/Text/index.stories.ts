import { Text } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "h1",
    children:
      "be parts correct potatoes sides donkey extra climate happily freedom relationship tape unit tall hung call cat window steady world front graph particular pick",
  },
};
