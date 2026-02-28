// import { pageIndicator } from './PageIndicator.css.js';
import { Control } from './Control.jsx';

export const PageIndicator = ({ current }) => {
  const LENGTH = 5;

  return (
    <>
      {Array.from({ length: LENGTH }).map((_, i) => {
        const step = i + 1;
        return (
          <Control
            variant="page"
            key={step}
            selected={current}
          >
            {step}
          </Control>
        );
      })}
    </>
  );
};
