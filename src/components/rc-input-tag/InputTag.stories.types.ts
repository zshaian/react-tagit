export type InputTagProps = {
  initialTags?: Array<string>;
  label?: string;
  separator?: "Enter" | "Space";
  onCreateTag?: (newTag: string, tags: Array<string>) => void;
  onRemoveTag?: (removedTag: string, tags: Array<string>) => void;
};
