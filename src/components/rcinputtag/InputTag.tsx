import { Tag } from "../tag";
import { Fragment, useRef, useState } from "react";
import "./InputTag.css";
import type { InputTagProps } from "./InputTag.stories.types";

export default function InputTag({
  autoFocus = false,
  customClass,
  disabled = false,
  labelStyleProps,
  inputStyleProps,
  tagsContainerStyleProps,
  tagsStyleProps,
  removeTagBtnStyleProps,
  hideLabel = false,
  initialTags = [],
  label = "Tags",
  maxTags,
  maxTagsValue,
  separator = "Enter",
  theme,
  onCreateTag = () => {},
  onRemoveTag = () => {},
  onFocus = () => {},
  onBlur = () => {},
}: InputTagProps) {
  const inputTagRef = useRef<HTMLInputElement>(null);
  const [tagInputValue, setTagInputValue] = useState<string>("");
  const [tags, setTags] = useState<Array<string>>(initialTags);

  const valueIsNotAlreadyInTags =
    tags.filter(
      (tag) => tag.toLowerCase().trim() === tagInputValue.toLowerCase().trim()
    ).length === 0;
  const valueIsNotEmpty =
    tagInputValue.trim() !== "" && tagInputValue.length > 0;
  const isLessThanMaxTags =
    maxTags && maxTags > 0 ? tags.length < maxTags : true;

  const separatorTriggerKey = separator === "Enter" ? "Enter" : " ";

  const handleSetTags = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !valueIsNotEmpty && tags.length > 0) {
      handleRemoveTag(tags[tags.length - 1]);
    }
    if (
      event.key === separatorTriggerKey &&
      valueIsNotEmpty &&
      valueIsNotAlreadyInTags &&
      isLessThanMaxTags
    ) {
      setTags((previousTags) => {
        const updatedTags = [...previousTags, tagInputValue];
        onCreateTag(tagInputValue, updatedTags);
        return updatedTags;
      });
      setTagInputValue("");
    }
  };

  const handleRemoveTag = (tagName: string) => {
    setTags((previousTags) => {
      const updatedTags = previousTags.filter((tag) => tag !== tagName);
      onRemoveTag(tagName, updatedTags);
      return updatedTags;
    });
  };

  return (
    <section
      className={`${
        customClass?.inputTagContainerElement || "input-tag-container-element"
      } input-tag-container`}
      onClick={() => inputTagRef.current!.focus()}
    >
      <label
        htmlFor="tag-input"
        className={`${
          customClass?.inputTagLabelElement || "input-tag-label-element"
        } input-tag-label ${theme}-input-tag-label`}
        style={{ ...labelStyleProps, display: hideLabel ? "none" : "block" }}
      >
        {label}
      </label>
      <ul
        className={`${
          customClass?.inputTagListContainerElement ||
          "input-tag-list-container-element"
        } input-tag-list-container ${theme}-input-tag-list-container`}
        style={{
          cursor: disabled ? "default" : "text",
          ...tagsContainerStyleProps,
        }}
      >
        {tags.map((tag) => (
          <Fragment key={tag}>
            <Tag
              customTagItemClass={customClass?.inputTagTagItemElement}
              customRemoveButtonClass={customClass?.inputTagTagRemoveBtnElement}
              customTagContentClass={customClass?.inputTagTagContentElement}
              disabled={disabled}
              tagName={tag}
              tagsStyleProps={tagsStyleProps}
              removeTagBtnStyleProps={removeTagBtnStyleProps}
              theme={theme}
              onRemoveTag={handleRemoveTag}
            />
          </Fragment>
        ))}
        <li>
          <input
            id="tag-input"
            aria-label={`${label} input`}
            ref={inputTagRef}
            type="text"
            className={`${
              customClass?.inputTagInputElement || "input-tag-input-element"
            } input-tag-input ${theme}-input-tag-input`}
            value={tagInputValue}
            onKeyDown={handleSetTags}
            onChange={(event) => setTagInputValue(event.target.value)}
            autoFocus={autoFocus}
            minLength={1}
            maxLength={maxTagsValue}
            style={inputStyleProps}
            onBlur={onBlur}
            onFocus={onFocus}
            disabled={disabled}
          />
        </li>
      </ul>
    </section>
  );
}
