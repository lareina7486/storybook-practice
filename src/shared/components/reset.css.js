import { globalStyle, style } from '@vanilla-extract/css';

/**
 * CSS Reset
 * 브라우저 기본 스타일을 정리하고 일관된 기준을 둡니다.
 */

/* Vite vanilla-extract 플러그인이 파일을 인식하도록 (사용하지 않음) */
export const _resetScope = style({});

/* Box sizing */
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

/* 기본 여백 제거 */
globalStyle('*', {
  margin: 0,
  padding: 0,
});

/* HTML / Body */
globalStyle('html', {
  WebkitTextSizeAdjust: '100%',
});

globalStyle('body', {
  minHeight: '100vh',
  lineHeight: 1.5,
});

/* 제목 스타일 정리 (필요 시 global.css에서 폰트/크기 지정) */
globalStyle('h1, h2, h3, h4, h5, h6', {
  fontSize: 'inherit',
  fontWeight: 'inherit',
});

/* 리스트 */
globalStyle('ul, ol', {
  listStyle: 'none',
});

/* 링크 */
globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

/* 미디어 기본값 */
globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('img, video', {
  height: 'auto',
});

/* 폼 요소 리셋 */
globalStyle('input, button, textarea, select', {
  font: 'inherit',
  color: 'inherit',
});

globalStyle('button', {
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
});

globalStyle('button:disabled', {
  cursor: 'not-allowed',
});

/* 테이블 */
globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

/* 필드셋 */
globalStyle('fieldset', {
  border: 'none',
});

/* 접근성: 포커스 링크는 outline 제거하지 않음 (컴포넌트에서 focus-visible로 처리) */
globalStyle('input:focus, textarea:focus, select:focus', {
  outline: 'none',
});
