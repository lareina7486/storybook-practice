import Image from 'next/image.js';
import arrowLeft from '@/shared/icons/ic_arrow_left.svg';
import arrowRight from '@/shared/icons/ic_arrow_right.svg';
import { Control } from './Control.jsx';
import { pageIndicator } from './PageIndicator.css.js';

export const PageIndicator = ({ current, total = 5 }) => {
  return (
    <div className={pageIndicator}>
      <Image src={arrowLeft} width={40} height={40} alt="이전 페이지" />
      {Array.from({ length: total }).map((_, i) => {
        const step = i + 1;
        return (
          <Control key={step} variant="page" selected={step === current}>
            {step}
          </Control>
        );
      })}
      <Image src={arrowRight} width={40} height={40} alt="이후 페이지" />
    </div>
  );
};
