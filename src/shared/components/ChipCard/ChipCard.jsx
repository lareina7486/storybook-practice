import { chipCard } from './ChipCard.css.js';

const STATUS_LABEL = {
  'recruit-end': '모집이 완료된 상태에요',
  'date-end': '챌린지가 마감되었어요',
};

export function ChipCard({ status }) {
  return <span className={chipCard[status]}>{STATUS_LABEL[status]}</span>;
}
