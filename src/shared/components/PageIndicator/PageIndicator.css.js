import { style } from '@vanilla-extract/css';

export const pageIndicator = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
});

export const arrowButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  color: 'var(--gray-gray400, #A3A3A3)',
  transition: 'color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease',
  outline: 'none',
  selectors: {
    '&:disabled': {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    '&:not(:disabled):hover': {
      color: 'var(--gray-gray800, #262626)',
    },
    '&:focus-visible': {
      color: 'var(--gray-gray800, #262626)',
      boxShadow: '0 0 0 2px rgba(38, 38, 38, 0.25)',
      borderRadius: '8px',
    },
  },
});
