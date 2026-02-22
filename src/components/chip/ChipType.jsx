import { chipType } from './ChipType.css.js';

export function ChipType({ label, type }) {
  return <span className={chipType[type]}>{label}</span>;
}
