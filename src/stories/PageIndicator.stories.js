import { PageIndicator } from '@/shared/components/PageIndicator/PageIndicator';

export default {
  title: 'Components/PageIndicator',
  component: PageIndicator,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

const page = 3;
const total = 21;
const setPage = (newPage) => {
  console.log(`페이지가 ${newPage}로 변경되었습니다.`);
};

export const Page = () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    {/* <PageIndicator current={1} />
    <PageIndicator current={2} /> */}
    {/* <PageIndicator current={3} /> */}
    {/* <PageIndicator current={4} />
    <PageIndicator current={5} /> */}
    <PageIndicator current={page} total={total} onChange={setPage} />
  </div>
);
