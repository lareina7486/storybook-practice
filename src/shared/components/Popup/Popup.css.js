import { style, styleVariants } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  padding: '24px',
  boxSizing: 'border-box',
});

export const panel = style({
  position: 'relative',
  backgroundColor: 'var(--white, #ffffff)',
  border: '2px solid var(--gray-gray800, #262626)',
  borderRadius: '8px',
  fontFamily: 'var(--font-pretendard), sans-serif',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
});

export const size = styleVariants({
  small: {
    width: '327px',
    minHeight: '220px',
    padding: '40px 24px 28px',
  },
  large: {
    width: '100%',
    maxWidth: '540px',
    minHeight: '250px',
    padding: '48px 24px 32px',
  },
});

export const message = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '24px',
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontSize: '16px',
  fontWeight: 500,
  color: 'var(--gray-gray800, #262626)',
  textAlign: 'center',
});

export const buttonWrap = style({
  display: 'flex',
  justifyContent: 'center',
});

export const confirmButton = style({
  width: '120px',
  height: '40px',
  borderRadius: '12px',
  backgroundColor: 'var(--gray-gray800, #262626)',
  color: 'var(--white, #ffffff)',
  border: 'none',
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontSize: '16px',
  fontWeight: 600,
  cursor: 'pointer',
});
