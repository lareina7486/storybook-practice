import { chipStatus } from './ChipStatus.css';

export function ChipStatus({ label, status }) {
  return <span className={chipStatus[status]}>{label}</span>;
}
