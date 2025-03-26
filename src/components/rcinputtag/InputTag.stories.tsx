import type { Meta, StoryObj } from '@storybook/react';
import InputTag from './InputTag';
import { useState } from 'react';

const meta: Meta<typeof InputTag> = {
  component: InputTag,
};

export default meta;

export const RenderInputTag: StoryObj<typeof InputTag> = {
  render: function Render() {
    const [tags, setTags] = useState<Array<string>>([]);
    return (
      <InputTag
        value={tags}
        onChange={setTags}
        theme="theme-3"
        separator="Space"
      />
    );
  },
};
