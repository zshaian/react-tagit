export type TagProps = {
  tagName: string;
  tagsStyleProps?: React.CSSProperties;
  theme?: string;
  removeTagBtnStyleProps?: React.CSSProperties;
  onRemoveTag: (tagName: string) => void;
};
