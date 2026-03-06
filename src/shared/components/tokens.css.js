import { globalStyle, style } from '@vanilla-extract/css';

// Figma Color System → CSS Custom Properties
// 링크: https://www.figma.com/design/8ZqOLwlXqxLjudjiXXQwpn

/* Vite vanilla-extract 플러그인이 파일을 인식하도록 (사용하지 않음) */
export const _tokensScope = style({});

globalStyle(':root', {
  // Gray scale (Figma color system)
  '--gray-gray900': '#171717',
  '--gray-gray800': '#262626',
  '--gray-gray700': '#404040',
  '--gray-gray600': '#525252',
  '--gray-gray500': '#737373',
  '--gray-gray400': '#A3A3A3',
  '--gray-gray300': '#D4D4D4',
  '--gray-gray200': '#E5E5E5',
  '--gray-gray100': '#E8EBED',
  '--gray-gray50': '#FAFAFA',

  // Base
  '--white': '#FFFFFF',

  // Brand
  '--brand-black': '#262626',
  '--brand-yellow': '#FFC117',
  '--brand-bg': '#F1F2F5',

  // Semantic
  '--red-error': '#EB3E3E',

  // Typography (Figma font system)
  // font-family는 next/font 변수(--font-pretendard)를 통해 적용

  // fontSize: 'var(--font-size-base)',
  // fontWeight: 'var(--font-weight-bold)',
  // lineHeight: 'var(--line-height-tight)',
  '--font-weight-bold': '700',
  '--font-weight-semibold': '600',
  '--font-weight-medium': '500',
  '--font-weight-regular': '400',

  '--font-size-xxl': '24px',
  '--font-size-xl': '22px',
  '--font-size-lg': '20px',
  '--font-size-md': '18px',
  '--font-size-base': '16px',
  '--font-size-sm': '14px',
  '--font-size-xs': '13px',
  '--font-size-2xs': '12px',

  '--line-height-tight': '1',
  '--line-height-normal': '1.5',
});
