import { ChipCard } from '@/shared/components/ChipCard/ChipCard';

export default {
  title: 'Components/ChipCard',
  component: ChipCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Status = () => (
  <div style={{display: 'flex', gap: '8px',}}>
    <ChipCard status="recruitEnd" />
    <ChipCard status="dateEnd" />
  </div>
);