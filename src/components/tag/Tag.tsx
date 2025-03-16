import "./Tag.css";
import type { TagProps } from "./Tag.types";

export default function Tag({
  customTagItemClass,
  customRemoveButtonClass,
  customTagContentClass,
  tagName,
  tagsStyleProps,
  removeTagBtnStyleProps,
  theme,
  onRemoveTag,
}: TagProps) {
  return (
    <li
      className={`${customTagItemClass ||"input-tag-tag-item-element"} input-tag-tag-item ${theme}-input-tag-tag-item`}
      style={tagsStyleProps}
    >
      <button
        className={`${
          customRemoveButtonClass || "input-tag-tag-remove-btn-element"
        } input-tag-tag-remove-btn ${theme}-input-tag-tag-remove-btn`}
        style={removeTagBtnStyleProps}
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.stopPropagation();
          onRemoveTag(tagName);
        }}
      >
        ✕
      </button>
      <span
        className={`${
          customTagContentClass || "input-tag-tag-content-element"
        }`}
      >
        {tagName}
      </span>
    </li>
  );
}
