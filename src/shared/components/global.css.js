import { globalStyle } from '@vanilla-extract/css';
import { vars } from './tokens.css.js';

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
  fontSize: vars.fontSize.base,
  color: vars.color.gray[800],
  backgroundColor: vars.color.white,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

/* 선택(드래그) 영역 스타일 */
globalStyle('::selection', {
  backgroundColor: vars.color.gray[200],
  color: vars.color.gray[800],
});

/* 스크롤바 (선택 사항, Webkit) */
globalStyle('::-webkit-scrollbar', {
  width: vars.space.sm,
  height: vars.space.sm,
});

globalStyle('::-webkit-scrollbar-track', {
  backgroundColor: vars.color.gray[100],
  borderRadius: vars.radius.sm,
});

globalStyle('::-webkit-scrollbar-thumb', {
  backgroundColor: vars.color.gray[300],
  borderRadius: vars.radius.sm,
});

globalStyle('::-webkit-scrollbar-thumb:hover', {
  backgroundColor: vars.color.gray[400],
});
