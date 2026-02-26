import { Button } from '@/shared/components/Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Solid = () => <Button variant="solid">승인하기</Button>;

export const Outline = () => <Button variant="outline">임시저장</Button>;

export const FilledTonal = () => (
  <Button variant="filledTonal">거절하기</Button>
);

export const Transparent = () => (
  <Button variant="transparent">링크 열기</Button>
);

export const Filled = () => <Button variant="filled">원문 보기</Button>;

export const WithRightIcon = () => (
  <Button
    variant="outline"
    icon={<ArrowRight size={16} />}
    iconPosition="right"
  >
    도전 계속하기
  </Button>
);

export const WithLeftIcon = () => (
  <Button variant="solid" icon={<Plus size={16} />}>
    신규 챌린지 신청
  </Button>
);

export const MobileSize = () => (
  <Button variant="solid" size="mobile">
    승인하기
  </Button>
);

export const Disabled = () => (
  <Button variant="solid" disabled>
    승인하기
  </Button>
);
