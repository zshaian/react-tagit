export type InputTagProps = {
  autoFocus?: boolean;
  labelStyleProps?: React.CSSProperties;
  inputStyleProps?: React.CSSProperties;
  tagsContainerStyleProps?: React.CSSProperties;
  tagsStyleProps?: React.CSSProperties;
  removeTagBtnStyleProps?: React.CSSProperties;
  initialTags?: Array<string>;
  label?: string;
  separator?: "Enter" | "Space";
  theme?: "theme-1" | "theme-2" | "theme-3";
  onCreateTag?: (newTag: string, tags: Array<string>) => void;
  onRemoveTag?: (removedTag: string, tags: Array<string>) => void;
};
