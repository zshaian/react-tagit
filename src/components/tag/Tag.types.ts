export type TagProps = {
  customTagItemClass?: string;
  customRemoveButtonClass?: string;
  customTagContentClass?: string;
  tagName: string;
  tagsStyleProps?: React.CSSProperties;
  theme?: string;
  removeTagBtnStyleProps?: React.CSSProperties;
  onRemoveTag: (tagName: string) => void;
};
