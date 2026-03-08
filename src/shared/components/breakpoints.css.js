// 미디어 쿼리에서는 CSS 변수(var(--xxx)) 사용 불가
// vanilla-extract @media 키는 전체 미디어 조건이어야 함 (예: (min-width: 480px))
export const breakpoint = {
  sm: '(min-width: 480px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
};
