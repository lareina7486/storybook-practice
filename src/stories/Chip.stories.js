import { Chip } from '@/components/Chip/Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
};

export const Type = () => (
  <>
    <Chip type="Next.js" />
    <Chip type="API" />
    <Chip type="career" />
    <Chip type="Modern JS" />
    <Chip type="Web" />
  </>
);

export const Category = () => (
  <>
    <Chip category="공식문서" />
    <Chip category="블로그" />
  </>
);

export const Status = () => (
  <>
    <Chip status="승인 대기" />
    <Chip status="신청 거절" />
    <Chip status="신청 승인" />
    <Chip status="챌린지 삭제" />
  </>
);
