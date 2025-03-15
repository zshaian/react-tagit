import "./Tag.css";
import type { TagProps } from "./Tag.types";

export default function Tag({ tagName, onRemoveTag }: TagProps) {
  return (
    <li className="tag-item">
      <button
        className="tag-item__remove-btn"
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.stopPropagation();
          onRemoveTag(tagName);
        }}
      >
        X
      </button>
      <span>{tagName}</span>
    </li>
  );
}
