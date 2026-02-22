import { chipCategory } from './ChipCategory.css';

export function ChipCategory({ label }) {
  return <span className={chipCategory}>{label}</span>;
}
