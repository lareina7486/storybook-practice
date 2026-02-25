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
  <>
    <ChipCard status="recruit-end" />
    <ChipCard status="date-end" />
  </>
);