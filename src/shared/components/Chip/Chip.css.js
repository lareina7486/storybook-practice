import { style, styleVariants, fontFace } from '@vanilla-extract/css';
import '@fontsource/quantico';
import '@fontsource/pretendard';

const quantico = fontFace({
  src: "url(@fontsource/quantico/files/quantico-latin-400-normal.woff2) format('woff2'), url(@fontsource/quantico/files/quantico-latin-400-normal.woff) format('woff')",
});

const pretendard_500 = fontFace({
  src: "url(@fontsource/pretendard/files/pretendard-latin-500-normal.woff2) format('woff2')",
});

const pretendard_600 = fontFace({
  src: "url(@fontsource/pretendard/files/pretendard-latin-500-normal.woff2) format('woff2')",
});

const chipBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',

  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
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
      fontFamily: quantico,
      color: 'var(--gray-gray600, #525252)',
      fontSize: '14px',
      fontWeight: '700',
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
      fontFamily: quantico,
      color: 'var(--gray-gray600, #525252)',
      fontSize: '14px',
      fontWeight: '700',
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
      fontFamily: quantico,
      color: 'var(--gray-gray600, #525252)',
      fontSize: '14px',
      fontWeight: '700',
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
      fontFamily: quantico,
      color: 'var(--gray-gray600, #525252)',
      fontSize: '14px',
      fontWeight: '700',
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
      fontFamily: quantico,
      color: 'var(--gray-gray600, #525252)',
      fontSize: '14px',
      fontWeight: '700',
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
      fontSize: '13px',
      fontFamily: pretendard_500,
      fontWeight: '500',
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
      fontSize: '13px',
      fontFamily: pretendard_600,
      fontWeight: '600',
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
      fontSize: '13px',
      fontFamily: pretendard_600,
      fontWeight: '600',
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
      fontSize: '13px',
      fontFamily: pretendard_600,
      fontWeight: '600',
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
      fontSize: '13px',
      fontFamily: pretendard_600,
      fontWeight: '600',
      wordWrap: 'break-word',
    },
  ],
});
