import { style, styleVariants } from '@vanilla-extract/css';

const cardBase = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '24px',
  backgroundColor: 'var(--white, #ffffff)',
  border: '2px solid var(--gray-gray800, #262626)',
  borderRadius: '12px',
  fontFamily: 'var(--font-pretendard), sans-serif',
  boxSizing: 'border-box',
});

export const card = styleVariants({
  large: [
    cardBase,
    {
      maxWidth: '996px',
    },
  ],
  medium: [
    cardBase,
    {
      maxWidth: '696px',
    },
  ],
  small: [
    cardBase,
    {
      maxWidth: '343px',
    },
  ],
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
});

export const titleRow = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  width: '100%',
});

export const chipsRow = style({
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',
});

export const title = style({
  fontSize: 'var(--font-size-xl)',
  fontWeight: 600,
  lineHeight: 'normal',
  color: 'var(--gray-gray700, #404040)',
  margin: 0,
});

export const divider = style({
  height: '1px',
  width: '100%',
  backgroundColor: 'var(--gray-gray200, #E5E5E5)',
  border: 'none',
  margin: 0,
});

export const footer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
});

export const metaRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '12px',
});

export const metaLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  flexWrap: 'wrap',
});

export const metaItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontSize: 'var(--font-size-xs)',
  fontWeight: 400,
  color: 'var(--gray-gray600, #525252)',
});
