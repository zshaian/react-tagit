import { Tag } from "../tag";
import { Fragment, useRef, useState } from "react";
import "./InputTag.css";
import type { InputTagProps } from "./InputTag.stories.types";

export default function InputTag({
  autoFocus = false,
  labelStyleProps,
  inputStyleProps,
  tagsContainerStyleProps,
  tagsStyleProps,
  removeTagBtnStyleProps,
  initialTags = [],
  label = "Tags",
  separator = "Enter",
  theme,
  onCreateTag = () => {},
  onRemoveTag = () => {},
}: InputTagProps) {
  const inputTagRef = useRef<HTMLInputElement>(null);
  const [tagInputValue, setTagInputValue] = useState<string>("");
  const [tags, setTags] = useState<Array<string>>([...new Set(initialTags)]);

  const valueIsNotAlreadyInTags =
    tags.filter(
      (tag) => tag.toLowerCase().trim() === tagInputValue.toLowerCase().trim()
    ).length === 0;
  const valueIsNotEmpty =
    tagInputValue.trim() !== "" && tagInputValue.length > 0;

  const separatorTriggerKey = separator === "Enter" ? "Enter" : " ";

  const handleSetTags = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !valueIsNotEmpty && tags.length > 0) {
      handleRemoveTag(tags[tags.length - 1]);
    }
    if (
      event.key === separatorTriggerKey &&
      valueIsNotEmpty &&
      valueIsNotAlreadyInTags
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
      className="input-tag-container"
      onClick={() => inputTagRef.current!.focus()}
    >
      <label
        htmlFor="tag-input"
        className={`input-tags-label tag-input-label ${theme}-tag-input-label`}
        style={labelStyleProps}
      >
        {label}
      </label>
      <ul
        className={`input-tags-container tag-list ${theme}-tag-list`}
        style={tagsContainerStyleProps}
      >
        {tags.map((tag) => (
          <Fragment key={tag}>
            <Tag
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
            ref={inputTagRef}
            type="text"
            className={`input-tags-input tag-input ${theme}-tag-input`}
            value={tagInputValue}
            onKeyDown={handleSetTags}
            onChange={(event) => setTagInputValue(event.target.value)}
            autoFocus={autoFocus}
            minLength={1}
            style={inputStyleProps}
          />
        </li>
      </ul>
    </section>
  );
}
