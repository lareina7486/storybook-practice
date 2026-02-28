import { PageIndicator } from '@/shared/components/PageIndicator/PageIndicator';

export default {
  title: 'Components/PageIndicator',
  component: PageIndicator,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Page = () => (
  <div style={{display: 'flex', gap: '8px',}}>
    {/* <PageIndicator current={1} />
    <PageIndicator current={2} /> */}
    <PageIndicator current={3} />
    {/* <PageIndicator current={4} />
    <PageIndicator current={5} /> */}
  </div>
);