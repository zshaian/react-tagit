export type TagProps = {
  tagName: string;
  tagsStyleProps?: React.CSSProperties;
  removeTagBtnStyleProps?: React.CSSProperties;
  onRemoveTag: (tagName: string) => void;
};
