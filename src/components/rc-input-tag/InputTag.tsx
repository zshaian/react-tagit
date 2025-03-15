import { Tag } from "../tag";
import { Fragment, useRef, useState } from "react";
import "./InputTag.css";
import type { InputTagProps } from "./InputTag.stories.types";

export default function InputTag({
  initialTags = [],
  label = "Tags",
  separator = "Enter",
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
      <label htmlFor="tag-input" className="tag-input-label">
        {label}
      </label>
      <ul className="tag-list">
        {tags.map((tag) => (
          <Fragment key={tag}>
            <Tag tagName={tag} onRemoveTag={handleRemoveTag} />
          </Fragment>
        ))}
        <li>
          <input
            id="tag-input"
            ref={inputTagRef}
            type="text"
            className="tag-input"
            value={tagInputValue}
            onKeyDown={handleSetTags}
            onChange={(event) => setTagInputValue(event.target.value)}
          />
        </li>
      </ul>
    </section>
  );
}
