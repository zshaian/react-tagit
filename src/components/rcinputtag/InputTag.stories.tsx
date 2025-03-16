import type { Meta, StoryObj } from "@storybook/react";
import InputTag from "./InputTag";

const meta: Meta<typeof InputTag> = {
  component: InputTag,
};

export default meta;

export const RenderInputTag: StoryObj<typeof InputTag> = {
  render: () => (
    <InputTag
      theme="theme-3"
      initialTags={["first tag", "second tag", "third tag"]}
      onCreateTag={(newTag, tags) => console.log(newTag, tags)}
      onRemoveTag={(removedTag, tags) => console.log(removedTag, tags)}
    />
  ),
};
