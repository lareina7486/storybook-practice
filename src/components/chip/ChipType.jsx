import { chipType } from './chipType.css';

export function ChipType({ label, type }) {
  return <span className={chipType[type]}>{label}</span>;
}