import { Chip } from '@/shared/components/Chip/Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Type = () => (
  <>
    <Chip type="next" />
    <Chip type="api" />
    <Chip type="career" />
    <Chip type="modernJs" />
    <Chip type="web" />
  </>
);

export const Category = () => (
  <>
    <Chip category="docs" />
    <Chip category="blog" />
  </>
);

export const Status = () => (
  <>
    <Chip status="wait" />
    <Chip status="rejected" />
    <Chip status="approved" />
    <Chip status="deleted" />
  </>
);
