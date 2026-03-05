import { style, styleVariants } from '@vanilla-extract/css';

export const list = style({
  display: 'flex',
  alignItems: 'stretch',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  gap: 0,
});

const itemBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '21px 17px',
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontSize: '15px',
  fontWeight: 600,
  color: 'var(--gray-gray500, #737373)',
  cursor: 'pointer',
  background: 'var(--white, #ffffff)',
  border: 'none',
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
      fontWeight: 700,
      color: 'var(--gray-gray800, #262626)',
    },
  ],
});
