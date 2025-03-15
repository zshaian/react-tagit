import { Tag } from "../tag";
import { Fragment, useRef, useState } from "react";
import "./InputTag.css";

export default function InputTag() {
  const inputTagRef = useRef<HTMLInputElement>(null);
  const [tagInputValue, setTagInputValue] = useState<string>("");
  const [tags, setTags] = useState<Array<string>>([]);

  const handleSetTags = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const valueIsNotAlreadyInTags =
      tags.filter((tag) => tag.toLowerCase() === tagInputValue.toLowerCase())
        .length === 0;
    const valueIsNotEmpty = tagInputValue !== "" && tagInputValue.length !== 0;

    if (event.key === "Enter" && valueIsNotEmpty && valueIsNotAlreadyInTags) {
      setTags((previousTags) => [...previousTags, tagInputValue]);
      setTagInputValue("");
    }
  };

  const handleRemoveTag = (tagName: string) => {
    setTags(tags.filter((tag) => tag !== tagName));
  };

  return (
    <section
      className="input-tag-container"
      onClick={() => inputTagRef.current!.focus()}
    >
      <ul className="tag-list">
        {tags.map((tag) => (
          <Fragment key={tag}>
            <Tag tagName={tag} onRemoveTag={handleRemoveTag} />
          </Fragment>
        ))}
        <li>
          <input
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
