import { style, styleVariants } from '@vanilla-extract/css';
import { breakpoint } from '../breakpoints.css.js';

/* next/font로 주입되는 CSS 변수 사용 (Quantico: --font-quantico, Pretendard: --font-pretendard) */
const fontQuantico = 'var(--font-quantico), sans-serif';
const fontPretendard = 'var(--font-pretendard), sans-serif';

const chipBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',

  whiteSpace: 'nowrap',
  boxSizing: 'border-box',

  '@media': {
    [breakpoint.sm]: {
      height: '22px',
      padding: '3px 8px',
      borderRadius: '6px',
      fontSize: 'var(--font-size-2xs)',
    },
  },
});

/* Figma chip-type: px-12 py-3, rounded-8, Quantico Bold 14px #525252 */
export const chipType = styleVariants({
  next: [
    chipBase,
    {
      height: '26px',
      padding: '3px 12px',
      borderRadius: '8px',
      backgroundColor: '#79E16A',
      textAlign: 'justify',
      fontFamily: fontQuantico,
      color: 'var(--gray-gray600, #525252)',
      fontSize: 'var(--font-size-sm)',
      fontWeight: 'var(--font-weight-bold, 700)',
      wordWrap: 'break-word',
    },
  ],
  api: [
    chipBase,
    {
      height: '26px',
      padding: '3px 12px',
      borderRadius: '8px',
      backgroundColor: '#FF905E',
      fontFamily: fontQuantico,
      color: 'var(--gray-gray600, #525252)',
      fontSize: 'var(--font-size-sm)',
      fontWeight: 'var(--font-weight-bold, 700)',
      wordWrap: 'break-word',
    },
  ],
  career: [
    chipBase,
    {
      height: '26px',
      padding: '3px 12px',
      borderRadius: '8px',
      backgroundColor: '#7EB2EE',
      fontFamily: fontQuantico,
      color: 'var(--gray-gray600, #525252)',
      fontSize: 'var(--font-size-sm)',
      fontWeight: 'var(--font-weight-bold, 700)',
      wordWrap: 'break-word',
    },
  ],
  modernJs: [
    chipBase,
    {
      height: '26px',
      padding: '3px 12px',
      borderRadius: '8px',
      backgroundColor: '#F66E6B',
      fontFamily: fontQuantico,
      color: 'var(--gray-gray600, #525252)',
      fontSize: 'var(--font-size-sm)',
      fontWeight: 'var(--font-weight-bold, 700)',
      wordWrap: 'break-word',
    },
  ],
  web: [
    chipBase,
    {
      height: '26px',
      padding: '3px 12px',
      borderRadius: '8px',
      backgroundColor: '#F7EA5D',
      fontFamily: fontQuantico,
      color: 'var(--gray-gray600, #525252)',
      fontSize: 'var(--font-size-sm)',
      fontWeight: 'var(--font-weight-bold, 700)',
      wordWrap: 'break-word',
    },
  ],
});

/* Figma chip-category: white bg, border #D4D4D4, Pretendard Medium 13px #525252 */
export const chipCategory = styleVariants({
  default: [
    chipBase,
    {
      height: '26px',
      padding: '5px 7px',
      borderRadius: '8px',
      backgroundColor: 'var(--white, #ffffff)',
      border: '1px solid var(--gray-gray300, #D4D4D4)',
      color: 'var(--gray-gray600, #525252)',
      fontSize: 'var(--font-size-xs)',
      fontFamily: fontPretendard,
      fontWeight: 'var(--font-weight-medium, 500)',
      wordWrap: 'break-word',
    },
  ],
});

export const chipStatus = styleVariants({
  wait: [
    chipBase,
    {
      height: '24px',
      padding: '4px 8px',
      borderRadius: '4px',
      backgroundColor: '#FFFDE7',
      color: '#F2BC00',
      fontSize: 'var(--font-size-xs)',
      fontFamily: fontPretendard,
      fontWeight: 'var(--font-weight-semibold, 600)',
      wordWrap: 'break-word',
    },
  ],
  rejected: [
    chipBase,
    {
      height: '24px',
      padding: '4px 8px',
      borderRadius: '4px',
      backgroundColor: '#FFF0F0',
      color: '#E54946',
      fontSize: 'var(--font-size-xs)',
      fontFamily: fontPretendard,
      fontWeight: 'var(--font-weight-semibold, 600)',
      wordWrap: 'break-word',
    },
  ],
  approved: [
    chipBase,
    {
      height: '24px',
      padding: '4px 8px',
      borderRadius: '4px',
      backgroundColor: '#DFF0FF',
      color: '#4095DE',
      fontSize: 'var(--font-size-xs)',
      fontFamily: fontPretendard,
      fontWeight: 'var(--font-weight-semibold, 600)',
      wordWrap: 'break-word',
    },
  ],
  deleted: [
    chipBase,
    {
      height: '24px',
      padding: '4px 8px',
      borderRadius: '4px',
      backgroundColor: 'var(--gray-gray200, #E5E5E5)',
      color: 'var(--gray-gray500, #737373)',
      fontSize: 'var(--font-size-xs)',
      fontFamily: fontPretendard,
      fontWeight: 'var(--font-weight-semibold, 600)',
      wordWrap: 'break-word',
    },
  ],
});
