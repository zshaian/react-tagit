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
  hideLabel?: boolean;
  label?: string;
  maxTags?: number;
  maxTagsValue?: number;
  separator?: "Enter" | "Space";
  theme?: "theme-1" | "theme-2" | "theme-3";
  value: Array<string>;
  onChange: React.Dispatch<React.SetStateAction<Array<string>>>;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};
