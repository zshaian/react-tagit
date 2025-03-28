export type InputTagProps = {
  /**
   * Autofocus the tag input element when the component mounts.
   */
  autoFocus?: boolean;

  /**
   * Custom classes for the elements of the InputTag component.
   * These will override the default classes.
   */
  customClass?: {
    inputTagContainerElement?: string;
    inputTagLabelElement?: string;
    inputTagInputElement?: string;
    inputTagListContainerElement?: string;
    inputTagTagItemElement?: string;
    inputTagTagRemoveBtnElement?: string;
    inputTagTagContentElement?: string;
  };

  /**
   * Disable the InputTag component.
   * When disabled, the remove button for each tag is hidden.
   */
  disabled?: boolean;

  /**
   * Style props for the container element.
   */
  inputTagContainerStyleProps?: React.CSSProperties;

  /**
   * Style props for the label element.
   */
  labelStyleProps?: React.CSSProperties;

  /**
   * Style props for the input element.
   */
  inputStyleProps?: React.CSSProperties;

  /**
   * Style props for the tags list container.
   */
  tagsContainerStyleProps?: React.CSSProperties;

  /**
   * Style props for individual tag elements.
   */
  tagsStyleProps?: React.CSSProperties;

  /**
   * Style props for the remove button on each tag.
   */
  removeTagBtnStyleProps?: React.CSSProperties;

  /**
   * Whether to hide the label.
   */
  hideLabel?: boolean;

  /**
   * Label for the input.
   */
  label?: string;

  /**
   * Maximum number of tags allowed.
   */
  maxTags?: number;

  /**
   * Maximum number of characters per tag.
   */
  maxTagsValue?: number;

  /**
   * Name attribute for the input element.
   */
  name?: string;

  /**
   * The key that triggers tag creation.
   */
  separator?: 'Enter' | 'Space';

  /**
   * Available themes for styling the component.
   */
  theme?: 'theme-1' | 'theme-2' | 'theme-3';

  /**
   * Current tag values.
   */
  value: Array<string>;

  /**
   * Function to update the tag values.
   */
  onChange: React.Dispatch<React.SetStateAction<Array<string>>>;

  /**
   * Callback when the input gains focus.
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * Callback when the input loses focus.
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};
