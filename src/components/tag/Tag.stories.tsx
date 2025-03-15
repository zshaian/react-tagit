import { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";

const meta: Meta<typeof Tag> = {
  component: Tag,
};

export default meta;

export const tag: StoryObj<typeof Tag> = {
  render: () => (
    <Tag tagName="hello" onRemoveTag={(tagName) => console.log(tagName)} />
  ),
};
