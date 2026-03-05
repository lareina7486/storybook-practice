import { Card } from '@/shared/components';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Large = () => (
  <Card
    size="large"
    status="recruitEnd"
    title="Next.js - App Router: Routing Fundamentals"
    chipType="next"
    chipCategory="docs"
    deadlineText="2024년 3월 3일 마감"
    personText="5/5 참여 완료"
    ctaLabel="도전 계속하기"
    onCtaClick={() => {}}
  />
);

export const Medium = () => (
  <Card
    size="medium"
    status="dateEnd"
    title="API 설계 베스트 프랙티스"
    chipType="api"
    chipCategory="blog"
    deadlineText="2024년 2월 15일 마감"
    personText="3/5 참여 완료"
  />
);

export const Small = () => (
  <Card
    size="small"
    title="모던 자바스크립트"
    chipType="modernJs"
    deadlineText="마감 D-7"
  />
);
