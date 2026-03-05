import { GNB } from '@/shared/components';

const meta = {
  title: 'Components/GNB',
  component: GNB,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['large', 'medium', 'small'],
      description: 'large 60px, small 56px',
    },
    status: {
      control: 'radio',
      options: ['member', 'member-login', 'admin'],
      description: 'member=로그인 버튼, member-login=알림+멤버 프로필, admin=탭+관리자 프로필',
    },
  },
  args: {
    size: 'large',
    status: 'member',
  },
};

export default meta;

/** 비로그인: 로고 + 로그인 버튼 (Figma size=large, status=member) */
export const Member = (args) => (
  <GNB {...args} status="member" onLogin={() => console.log('로그인')} />
);

/** 로그인된 멤버: 로고 + 알림 + 멤버 프로필 아이콘 (Figma status=member-login) */
export const MemberLogin = (args) => (
  <GNB {...args} status="member-login" />
);

/** 관리자: 로고 + 챌린지 관리/챌린지 목록 탭 + 관리자 프로필 (Figma status=admin) */
export const Admin = (args) => (
  <GNB
    {...args}
    status="admin"
    tabs={[
      { label: '챌린지 관리', active: true },
      { label: '챌린지 목록', active: false },
    ]}
    onTabChange={(i) => console.log('탭', i)}
  />
);

/** 모바일 너비 (size=small) */
export const Small = (args) => (
  <div style={{ maxWidth: 375, margin: '0 auto' }}>
    <GNB {...args} size="small" status="member" onLogin={() => {}} />
  </div>
);

/** 모든 상태 한눈에 */
export const AllStatuses = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
    <GNB size="large" status="member" onLogin={() => {}} />
    <div style={{ padding: 16, background: '#f5f5f5' }} />
    <GNB size="large" status="member-login" />
    <div style={{ padding: 16, background: '#f5f5f5' }} />
    <GNB
      size="large"
      status="admin"
      tabs={[
        { label: '챌린지 관리', active: true },
        { label: '챌린지 목록', active: false },
      ]}
    />
  </div>
);
