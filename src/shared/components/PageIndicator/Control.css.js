import { style, styleVariants } from '@vanilla-extract/css';

const base = {
  width: '40px',
  height: '40px',
  borderRadius: '8px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontSize: 'var(--font-size-sm)',
  fontWeight: 500,
  lineHeight: 'normal',
  boxSizing: 'border-box',
  transition: 'background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease',
  outline: 'none',
};

export const control = styleVariants({
  page: [
    base,
    {
      backgroundColor: 'transparent',
      color: 'var(--gray-gray400, #A3A3A3)',
      selectors: {
        '&:hover': {
          backgroundColor: 'var(--gray-gray200, #E5E5E5)',
          color: 'var(--gray-gray800, #262626)',
        },
        '&:focus-visible': {
          boxShadow: '0 0 0 2px rgba(38, 38, 38, 0.3)',
        },
      },
    },
  ],
  selected: {
    backgroundColor: 'var(--gray-gray800, #262626)',
    color: 'var(--brand-yellow, #FFC117)',
    selectors: {
      '&:hover': {
        backgroundColor: 'var(--gray-gray900, #171717)',
        color: 'var(--brand-yellow, #FFC117)',
      },
      '&:focus-visible': {
        boxShadow: '0 0 0 2px var(--brand-yellow, #FFC117)',
      },
    },
  },
});
