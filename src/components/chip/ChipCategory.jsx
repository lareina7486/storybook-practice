import { chipCategory } from './chipCategory.css';

export function ChipCategory({ label }) {
  return <span className={chipCategory}>{label}</span>;
}