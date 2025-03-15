export type InputTagProps = {
  label?: string;
  separator?: "Enter" | "Space";
  onCreateTag?: (newTag: string, tags: Array<string>) => void;
};
