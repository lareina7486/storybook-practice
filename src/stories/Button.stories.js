import { Button } from '@/shared/components';
import { Icon } from '@/shared/icons/Icon';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'solid',
        'outline',
        'filledTonal',
        'transparent',
        'filled',
        'outlineIcon',
      ],
      description: 'Figma 4711-52320 버튼 변형',
    },
    status: {
      control: 'boolean',
      description: 'solid일 때만: true=활성, false=비활성',
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
      description: '버튼 텍스트',
    },
  },
  args: {
    variant: 'solid',
    status: true,
    disabled: false,
    children: '승인하기',
  },
};

export default meta;

export const Default = (args) => <Button {...args}>{args.children}</Button>;

/** Figma solid (pc-large, 활성): bg #262626, 48px, 12px radius */
export const Solid = (args) => (
  <Button {...args} variant="solid" status={true}>
    승인하기
  </Button>
);

/** Figma solid 비활성: bg #E5E5E5, 텍스트 #737373 */
export const SolidInactive = (args) => (
  <Button {...args} variant="solid" status={false}>
    승인하기
  </Button>
);

/** Figma outline: 흰 배경, 테두리 #262626, 40px */
export const Outline = (args) => (
  <Button {...args} variant="outline">
    임시저장
  </Button>
);

/** Figma outline mobile: 32px, 10px radius */
export const OutlineMobile = (args) => (
  <Button {...args} variant="outline">
    임시저장
  </Button>
);

/** Figma filled-tonal: 배경 #FFE7E7, 텍스트 #F24744 */
export const FilledTonal = (args) => (
  <Button {...args} variant="filledTonal">
    거절하기
  </Button>
);

/** Figma transparent: 반투명 배경, Bold 16px #404040 */
export const Transparent = (args) => (
  <Button {...args} variant="transparent">
    링크 열기
  </Button>
);

/** Figma transparent + 아이콘 (우측) */
export const TransparentWithIcon = (args) => (
  <Button
    {...args}
    variant="transparent"
    icon={<Icon name="arrow_right" width={24} height={24} />}
    iconPosition="right"
  >
    링크 열기
  </Button>
);

/** Figma filled: 브랜드 옐로우 #FFC117, 테두리 #262626, Bold 14px */
export const Filled = (args) => (
  <Button {...args} variant="filled">
    원문 보기
  </Button>
);

/** Figma outlineIcon - 도전 계속하기: 테두리, 우측 화살표 */
export const OutlineIconOngoing = (args) => (
  <Button
    {...args}
    variant="outlineIcon"
    icon={<Icon name="arrow_right" width={24} height={24} />}
    iconPosition="right"
  >
    도전 계속하기
  </Button>
);

/** Figma outlineIcon - 내 작업물 보기: 문서 아이콘 */
export const OutlineIconView = (args) => (
  <Button
    {...args}
    variant="outlineIcon"
    icon={<Icon name="document" width={24} height={24} />}
    iconPosition="right"
  >
    내 작업물 보기
  </Button>
);

/** Figma solid + 좌측 아이콘 (신규 챌린지 신청) */
export const SolidWithLeftIcon = (args) => (
  <Button
    {...args}
    variant="solid"
    icon={<Icon name="plus" width={16} height={16} />}
    iconPosition="left"
  >
    신규 챌린지 신청
  </Button>
);

/** 비활성 상태 */
export const Disabled = (args) => (
  <Button {...args} variant="solid" disabled>
    승인하기
  </Button>
);

/** 모든 변형 한눈에 */
export const AllVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <div
      style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <Button variant="solid" status={true}>
        승인하기
      </Button>
      <Button variant="solid" status={false}>
        승인하기
      </Button>
      <Button variant="outline">
        임시저장
      </Button>
      <Button variant="outline">
        임시저장
      </Button>
      <Button variant="filledTonal">
        거절하기
      </Button>
      <Button variant="transparent">
        링크 열기
      </Button>
      <Button variant="filled">원문 보기</Button>
    </div>
    <div
      style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <Button
        variant="outlineIcon"
        icon={<Icon name="arrow_right" width={24} height={24} />}
        iconPosition="right"
      >
        도전 계속하기
      </Button>
      <Button
        variant="outlineIcon"
        icon={<Icon name="document" width={24} height={24} />}
        iconPosition="right"
      >
        내 작업물 보기
      </Button>
      <Button
        variant="solid"
        icon={<Icon name="plus" width={16} height={16} />}
        iconPosition="right"
      >
        신규 챌린지 신청
      </Button>
    </div>
  </div>
);
