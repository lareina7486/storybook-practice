import { style, styleVariants, fontFace } from '@vanilla-extract/css';
import '@fontsource/pretendard';

const pretendard_500 = fontFace({
  src: "url(@fontsource/pretendard/files/pretendard-latin-500-normal.woff2) format('woff2')",
});

const chipCardBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,

  whiteSpace: 'nowrap',
  boxSizing: 'border-box',

  height: '32px',
  padding: '8px 12px',
  borderRadius: 24,

  textAlign: 'justify',
  fontSize: 13,
  fontFamily: pretendard_500,
  fontWeight: '500',
  wordWrap: 'break-word',
});

export const chipCard = styleVariants({
  recruitEnd: [
    chipCardBase,
    {
      backgroundColor: '#E5E5E5',
      color: '#262626',
    },
  ],
  dateEnd: [
    chipCardBase,
    {
      backgroundColor: '#262626',
      color: '#FFFFFF',
    },
  ],
});
