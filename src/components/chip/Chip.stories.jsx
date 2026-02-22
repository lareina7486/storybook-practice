import { ChipType } from './ChipType';
import { ChipCategory } from './ChipCategory';
import { ChipStatus } from './ChipStatus';

export default {
  title: 'Components/Chip',
};

export const Type = () => (
  <>
    <ChipType label="Next.js" type="next" />
    <ChipType label="API" type="api" />
    <ChipType label="Career" type="career" />
  </>
);

export const Category = () => (
  <>
    <ChipCategory label="공식문서" />
    <ChipCategory label="블로그" />
  </>
);

export const Status = () => (
  <>
    <ChipStatus label="승인 대기" status="wait" />
    <ChipStatus label="신청 거절" status="reject" />
    <ChipStatus label="신청 승인" status="approve" />
    <ChipStatus label="챌린지 삭제" status="delete" />
  </>
);
