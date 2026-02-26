import { Input } from '@/shared/components/Input/Input';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Auth = () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Input label="이메일" type="email" placeholder="이메일을 입력해주세요" />
    <Input label="닉네임" type="text" placeholder="닉네임을 입력해주세요" />
    <Input
      label="비밀번호"
      type="password"
      placeholder="비밀번호를 입력해주세요"
    />
    <Input
      label="비밀번호 확인"
      type="password"
      placeholder="비밀번호를 한번 더 입력해주세요"
    />
  </div>
);

export const Search = () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Input type="search" standard="pc" />
    <Input type="search" standard="mobile" />
  </div>
);
