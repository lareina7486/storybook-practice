import { PageIndicator } from '@/shared/components/PageIndicator/PageIndicator';

export default {
  title: 'Components/PageIndicator',
  component: PageIndicator,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Status = () => (
  <div style={{display: 'flex', gap: '8px',}}>
    <PageIndicator current={2} />
  </div>
);