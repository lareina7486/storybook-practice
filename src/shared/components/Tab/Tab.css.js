import { style, styleVariants } from '@vanilla-extract/css';

export const list = style({
  display: 'flex',
  alignItems: 'center',
  gap: 0,
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

const itemBase = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px 24px',
  minHeight: '53px',
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontSize: '18px',
  fontWeight: 600,
  color: 'var(--gray-gray500, #737373)',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  gap: '13px',
  transition: 'color 0.15s',
  selectors: {
    '&:hover': {
      color: 'var(--gray-gray700, #404040)',
    },
  },
});

export const item = styleVariants({
  default: [itemBase],
  active: [
    itemBase,
    {
      color: 'var(--gray-gray800, #262626)',
    },
  ],
});

export const indicator = style({
  width: '100%',
  height: '3px',
  backgroundColor: 'var(--gray-gray800, #262626)',
  borderRadius: 0,
});
