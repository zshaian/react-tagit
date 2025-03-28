# react-tagit

Simple Input Tag Component For React

## Demo

## Installation

You can install it using the package manager that you like

**NPM**

```bash
npm install react-tagit
```

**Yarn**

```bash
yarn add react-tagit
```

**PNPM**

```bash
pnpm add react-tagit
```

Make sure that you have the necessary **peer dependecies** to use this package

```json
  "peerDependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
```

## Usage

Let's see an example on how to use the `<InputTag>` component and some of the props that we can passed into it.

```tsx
import { InputTag } from 'react-tagit';
import { useState } from 'react';

export default function App() {
  const [tags, setTags] = useState<Array<string>>([]);

  return (
    <form>
      <InpTag
        separator="Space"
        theme="theme-1"
        maxTags={5}
        maxTagsValue={25}
        value={tags}
        onChange={setTags}
      />
      <button type="submit">Submit Tags</button>
    </form>
  );
}
```

And as easy as that you have now an input tag component

## Props

Here are the list of the `props` that you can add pass into the component
|Props|Type|Default|Description|
|-|-|-|-|
|autoFocus|`boolean`|`false`|Autofocus the tag input element when the component mounts.|
|customClass|`object`|`{}`|Custom classes for the elements of the InputTag component. These will override the default classes.|
|disabled|`boolean`|`false`|Disable the InputTag component. When disabled, the remove button for each tag is hidden.|
|inputTagContainerStyleProps|`object`|`{}`|Style props for the container element.|
|labelStyleProps|`object`|`{}`|Style props for the label element.|
|inputStyleProps|`object`|`{}`|Style props for the input element.|
|tagsContainerStyleProps|`object`|`{}`|Style props for the tags list container.|
|tagsStyleProps|`object`|`{}`|Style props for individual tag elements.|
|removeTagBtnStyleProps|`object`|`{}`|Style props for the remove button on each tag.|
|hideLabel|`boolean`|`false`|Whether to hide the label.|
|label|`string`|`tags`|Label for the input.|
|maxTags|`number`|`infinite`|Maximum number of tags allowed.|
|maxTagsValue|`number`|`infinite`|Maximum number of characters per tag.|
|name|`string`|`tags`|Name attribute for the input element.|
|separator|`'Enter' \| 'Space'`|`'Enter'`|The key that triggers tag creation.|
|theme|`'theme-1' \| 'theme-2' \| 'theme-3'` |Available themes for styling the component.|
|value|`Array<string>`||Current tag values.|
|onChange|`React.Dispatch<React.SetStateAction<Array<string>>>`||Function to update the tag values.|
|onFocus|`(event: React.FocusEvent<HTMLInputElement>) => void`|`() => {}`|Callback when the input gains focus.|
|onBlur|`(event: React.FocusEvent<HTMLInputElement>) => void`|`() => {}`|Callback when the input loses focus.|

## Styling & Theming

`react-tagit` comes with theme that you can use, you can also target the elements of the
`InputTag` component using classes, or using the `style` props. so that designing your own
`InputTag` component is much less trouble.

**Here are the list of the classes if you want to target some elements of `InputTag` component**

- `input-tag-container-element`
- `input-tag-label-element`
- `input-tag-list-container-element`
- `input-tag-tag-item-element`
- `input-tag-tag-remove-btn-element`
- `input-tag-tag-content-element`
- `input-tag-input-element`

**You can also override these classes and create your own**

```tsx
<InputTag customClass={{
    inputTagContainerElement: 'new_class_here',
    inputTagLabelElement: 'new_class_here',
    inputTagListContainerElement: 'new_class_here',
    inputTagTagItemElement:'new_class_here',
    inputTagTagRemoveBtnElement: 'new_class_here',
    inputTagTagContentElement: 'new_class_here',
    inputTagInputElement: 'new_class_here',
}}>
```

## Development
