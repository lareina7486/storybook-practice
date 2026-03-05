import { globalStyle } from '@vanilla-extract/css';

/**
 * Global styles
 * 앱 전역에 적용되는 기본 폰트, 배경, 색상 등.
 * tokens.css.js의 변수와 함께 사용합니다.
 */

/* Vite vanilla-extract 플러그인이 파일을 인식하도록 (사용하지 않음) */
// export const _globalScope = style({});

globalStyle('html', {
  scrollBehavior: 'smooth',
});

globalStyle('body', {
  fontFamily:
    'var(--font-pretendard), Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  fontSize: '16px',
  color: 'var(--gray-gray800, #262626)',
  backgroundColor: 'var(--white, #ffffff)',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

/* 선택(드래그) 영역 스타일 */
globalStyle('::selection', {
  backgroundColor: 'var(--gray-gray200, #E5E5E5)',
  color: 'var(--gray-gray800, #262626)',
});

/* 스크롤바 (선택 사항, Webkit) */
globalStyle('::-webkit-scrollbar', {
  width: '8px',
  height: '8px',
});

globalStyle('::-webkit-scrollbar-track', {
  backgroundColor: 'var(--gray-gray100, #E8EBED)',
  borderRadius: '4px',
});

globalStyle('::-webkit-scrollbar-thumb', {
  backgroundColor: 'var(--gray-gray300, #D4D4D4)',
  borderRadius: '4px',
});

globalStyle('::-webkit-scrollbar-thumb:hover', {
  backgroundColor: 'var(--gray-gray400, #A3A3A3)',
});
