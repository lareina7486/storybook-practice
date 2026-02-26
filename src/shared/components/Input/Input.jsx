import Image from 'next/image.js';
import { input } from './Input.css.js';
import person from '@/shared/icons/ic_person.svg';
import deadline from '@/shared/icons/ic_deadline.svg';

const CHIP_STATUS = {
  recruitEnd: {
    label: '모집이 완료된 상태에요',
    icon: person,
    alt: '모집 종료',
  },
  dateEnd: {
    label: '챌린지가 마감되었어요',
    icon: deadline,
    alt: '챌린지 마감',
  },
};

export const Input = ({ type, standard }) => {
  const meta = CHIP_STATUS[status];

  return (
    <div className={chipCard[status]}>
      <Image src={meta.icon} width={16} height={16} alt={meta.alt} />
      <span>{meta.label}</span>
    </div>
  );
};