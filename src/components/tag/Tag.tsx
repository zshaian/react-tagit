import "./Tag.css";
import type { TagProps } from "./Tag.types";

export default function Tag({
  tagName,
  tagsStyleProps,
  removeTagBtnStyleProps,
  onRemoveTag,
}: TagProps) {
  return (
    <li className="tag-item" style={tagsStyleProps}>
      <button
        className="input-tags-remove-btn tag-item__remove-btn"
        style={removeTagBtnStyleProps}
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.stopPropagation();
          onRemoveTag(tagName);
        }}
      >
        ✕
      </button>
      <span className="input-tags-tag-content">{tagName}</span>
    </li>
  );
}
