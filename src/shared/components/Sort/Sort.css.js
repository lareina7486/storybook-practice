import { style, styleVariants } from '@vanilla-extract/css';

const base = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '8px 8px 8px 12px',
  backgroundColor: 'var(--white, #ffffff)',
  border: '1px solid var(--gray-gray300, #D4D4D4)',
  borderRadius: '32px',
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  cursor: 'pointer',
  boxSizing: 'border-box',
});

export const root = styleVariants({
  large: [base, { width: '140px' }],
  small: [base, { width: '140px', padding: '6px 6px 6px 10px', fontSize: '14px' }],
});

export const label = styleVariants({
  default: {
    color: 'var(--gray-gray400, #A3A3A3)',
  },
  active: {
    color: 'var(--gray-gray800, #262626)',
  },
});

export const iconWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
