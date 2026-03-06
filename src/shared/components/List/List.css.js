import { style } from '@vanilla-extract/css';

export const row = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  width: '100%',
  minHeight: '47px',
  padding: '6px 0',
  boxSizing: 'border-box',
});

export const badge = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '2px',
  padding: '2px 7px',
  backgroundColor: 'var(--gray-gray800, #262626)',
  borderRadius: '16px',
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontSize: 'var(--font-size-sm)',
  fontWeight: 500,
  color: 'var(--brand-yellow, #FFC117)',
  flexShrink: 0,
});

export const badgeIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const profile = style({
  flexShrink: 0,
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  flex: 1,
  minWidth: 0,
});

export const name = style({
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontSize: 'var(--font-size-sm)',
  fontWeight: 500,
  color: 'var(--gray-gray800, #262626)',
});

export const role = style({
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontSize: 'var(--font-size-2xs)',
  fontWeight: 500,
  color: 'var(--gray-gray500, #737373)',
});

export const right = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  flexShrink: 0,
});

export const likeCount = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontSize: 'var(--font-size-sm)',
  fontWeight: 500,
  color: 'var(--gray-gray500, #737373)',
  background: 'none',
  border: 'none',
  padding: '4px 6px',
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'color 0.2s ease, background-color 0.2s ease',
  outline: 'none',
  selectors: {
    '&:hover': {
      color: 'var(--gray-gray700, #404040)',
      backgroundColor: 'var(--gray-gray100, #E8EBED)',
    },
    '&:focus-visible': {
      boxShadow: '0 0 0 2px rgba(0,0,0,0.15)',
    },
  },
});

export const workLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '2px',
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontSize: 'var(--font-size-2xs)',
  fontWeight: 500,
  color: 'var(--gray-gray800, #262626)',
  background: 'none',
  border: 'none',
  padding: '4px 6px',
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'color 0.2s ease, background-color 0.2s ease',
  outline: 'none',
  selectors: {
    '&:hover': {
      color: 'var(--gray-gray900, #171717)',
      backgroundColor: 'var(--gray-gray100, #E8EBED)',
    },
    '&:focus-visible': {
      boxShadow: '0 0 0 2px rgba(0,0,0,0.15)',
    },
  },
});

export const divider = style({
  width: '100%',
  height: '1px',
  backgroundColor: 'var(--gray-gray200, #E5E5E5)',
  border: 'none',
  margin: 0,
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  width: '100%',
});
