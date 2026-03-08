/** @type { import('@storybook/nextjs-vite').Preview } */
import React from 'react';

// 컴포넌트 스타일은 vanilla-extract 해시 변수 사용 → tokens.css.js로 테마 주입
// reset/global은 preview에서 .css.js 로드 시 fileScope 오류 나므로 plain CSS 사용
import '../src/shared/components/tokens.css.js';
import '../src/shared/components/globalStyles.css';

import '@fontsource/pretendard/400.css';
import '@fontsource/pretendard/500.css';
import '@fontsource/pretendard/600.css';
import '@fontsource/pretendard/700.css';
import '@fontsource/quantico/400.css';
import '@fontsource/quantico/700.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },
  },
  decorators: [
    (Story) => {
      // next/font 미사용 환경에서 --font-pretendard, --font-quantico 변수 정의
      const fontVariables = `
        :root {
          --font-pretendard: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          --font-quantico: "Quantico", sans-serif;
        }
      `;
      return (
        <>
          <style dangerouslySetInnerHTML={{ __html: fontVariables }} />
          <div style={{ fontFamily: 'var(--font-pretendard), sans-serif' }}>
            <Story />
          </div>
        </>
      );
    },
  ],
};

export default preview;
