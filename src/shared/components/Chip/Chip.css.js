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

export const chipType = styleVariants({
  next: [
    chipBase,
    {
      height: '26px',
      padding: '3px 12px',
      borderRadius: 8,
      backgroundColor: '#79E16A',

      textAlign: 'justify',
      fontFamily: quantico,
      color: '#525252',
      fontSize: 14,
      fontWeight: '700',
      wordWrap: 'break-word',
    },
  ],
  api: [
    chipBase,
    {
      height: '26px',
      padding: '3px 12px',
      borderRadius: 8,
      backgroundColor: '#FF905E',

      fontFamily: quantico,
      color: '#525252',
      fontSize: 14,
      fontWeight: '700',
      wordWrap: 'break-word',
    },
  ],
  career: [
    chipBase,
    {
      height: 26,
      padding: '3px 12px',
      borderRadius: 8,
      backgroundColor: '#7EB2EE',

      fontFamily: quantico,
      color: '#525252',
      fontSize: 14,
      fontWeight: '700',
      wordWrap: 'break-word',
    },
  ],
  modernJs: [
    chipBase,
    {
      height: 26,
      padding: '3px 12px',
      borderRadius: 8,
      backgroundColor: '#F66E6B',

      fontFamily: quantico,
      color: '#525252',
      fontSize: 14,
      fontWeight: '700',
      wordWrap: 'break-word',
    },
  ],
  web: [
    chipBase,
    {
      height: 26,
      padding: '3px 12px',
      borderRadius: 8,
      backgroundColor: '#F7EA5D',

      fontFamily: quantico,
      color: '#525252',
      fontSize: 14,
      fontWeight: '700',
      wordWrap: 'break-word',
    },
  ],
});

export const chipCategory = styleVariants({
  default: [
    chipBase,
    {
      height: 26,
      padding: '5px 7px',
      borderRadius: 8,
      backgroundColor: '#FFFFFF',

      outline: '1px #D4D4D4 solid',
      outlineOffset: '-1px',

      color: '#525252',
      fontSize: 13,
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
      height: 24,
      padding: '4px 8px',
      borderRadius: 4,
      backgroundColor: '#FFFDE7',

      color: '#F2BC00',
      fontSize: 13,
      fontFamily: pretendard_600,
      fontWeight: '600',
      wordWrap: 'break-word',
    },
  ],
  rejected: [
    chipBase,
    {
      height: 24,
      padding: '4px 8px',
      borderRadius: 4,
      backgroundColor: '#FFF0F0',

      color: '#E54946',
      fontSize: 13,
      fontFamily: pretendard_600,
      fontWeight: '600',
      wordWrap: 'break-word',
    },
  ],
  approved: [
    chipBase,
    {
      height: 24,
      padding: '4px 8px',
      borderRadius: 4,
      backgroundColor: '#DFF0FF',

      color: '#4095DE',
      fontSize: 13,
      fontFamily: pretendard_600,
      fontWeight: '600',
      wordWrap: 'break-word',
    },
  ],
  deleted: [
    chipBase,
    {
      height: 24,
      padding: '4px 8px',
      borderRadius: 4,
      backgroundColor: '#E5E5E5',

      color: '#737373',
      fontSize: 13,
      fontFamily: pretendard_600,
      fontWeight: '600',
      wordWrap: 'break-word',
    },
  ],
});
