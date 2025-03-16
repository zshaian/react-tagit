export type InputTagProps = {
  autoFocus?: boolean;
  customClass?: {
    inputTagContainerElement?: string;
    inputTagLabelElement?: string;
    inputTagInputElement?: string;
    inputTagListContainerElement?: string;
    inputTagTagItemElement?: string;
    inputTagTagRemoveBtnElement?: string;
    inputTagTagContentElement?: string;
  };
  disabled?: boolean;
  labelStyleProps?: React.CSSProperties;
  inputStyleProps?: React.CSSProperties;
  tagsContainerStyleProps?: React.CSSProperties;
  tagsStyleProps?: React.CSSProperties;
  removeTagBtnStyleProps?: React.CSSProperties;
  initialTags?: Array<string>;
  label?: string;
  maxTags?: number;
  maxTagsValue?: number;
  separator?: "Enter" | "Space";
  theme?: "theme-1" | "theme-2" | "theme-3";
  onCreateTag?: (newTag: string, tags: Array<string>) => void;
  onRemoveTag?: (removedTag: string, tags: Array<string>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};
