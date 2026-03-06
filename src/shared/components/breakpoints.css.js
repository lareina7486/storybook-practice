// 공통 반응형 브레이크포인트
// Figma 기준 사이즈(PC 1920, Tablet 744, Mobile 375)를
// 실제 개발에서는 보통 width 구간으로 나누어 사용합니다.

export const breakpoint = {
  // lg: PC (넓은 화면)
  lg: 'screen and (min-width: 1200px)',

  // md: Tablet (중간 폭)
  md: 'screen and (min-width: 744px) and (max-width: 1199px)',

  // sm: Mobile (작은 화면)
  sm: 'screen and (max-width: 743px)',
};

