import { style } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  width: '100%',
  maxWidth: '375px',
});

export const inputWrap = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  height: '40px',
  padding: '8px 8px 8px 16px',
  backgroundColor: 'var(--white, #ffffff)',
  border: '1px solid var(--gray-gray200, #E5E5E5)',
  borderRadius: '20px',
  boxSizing: 'border-box',
});

export const iconWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

export const input = style({
  flex: 1,
  minWidth: 0,
  border: 'none',
  outline: 'none',
  background: 'transparent',
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  color: 'var(--gray-gray900, #171717)',
  selectors: {
    '&::placeholder': {
      color: 'var(--gray-gray400, #A3A3A3)',
    },
  },
});
