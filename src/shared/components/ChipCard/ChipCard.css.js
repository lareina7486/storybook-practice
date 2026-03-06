import { style, styleVariants, fontFace } from '@vanilla-extract/css';
import '@fontsource/pretendard';

const pretendard_500 = fontFace({
  src: "url(@fontsource/pretendard/files/pretendard-latin-500-normal.woff2) format('woff2')",
});

/* Figma chip-card-status: px-12 py-8, rounded-24, gap-4, Pretendard Medium 13px */
const chipCardBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  height: '32px',
  padding: '8px 12px',
  borderRadius: '24px',
  textAlign: 'justify',
  fontSize: 'var(--font-size-xs)',
  fontFamily: pretendard_500,
  fontWeight: '500',
  wordWrap: 'break-word',
});

export const chipCard = styleVariants({
  recruitEnd: [
    chipCardBase,
    {
      backgroundColor: 'var(--gray-gray200, #E5E5E5)',
      color: 'var(--gray-gray800, #262626)',
    },
  ],
  dateEnd: [
    chipCardBase,
    {
      backgroundColor: 'var(--gray-gray800, #262626)',
      color: 'var(--white, #ffffff)',
    },
  ],
});
