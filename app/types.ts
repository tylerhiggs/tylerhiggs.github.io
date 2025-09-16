export type Item = {
  id: string;
  label: string;
  items: Item[];
  isVisible?: boolean;
};
