import { style } from '@vanilla-extract/css';
import { vars } from '../shared/components/tokens.css.js';

export const page = style({
  minHeight: '100vh',
  backgroundColor: vars.color.gray[100],
});

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 40,
  paddingBottom: 40,
  paddingLeft: 24,
  paddingRight: 24,
});

export const logoBlock = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 40,
});

export const logo = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.sm,
  fontFamily: 'var(--font-quantico), sans-serif',
  fontWeight: vars.fontWeight.bold,
  fontSize: '36px',
  color: vars.color.gray[600],
  letterSpacing: '0.2889px',
  textDecoration: 'none',
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  width: '100%',
  maxWidth: 518,
});

export const inputFullWidth = style({
  width: '100%',
});

export const submitButton = style({
  width: '100%',
  height: 48,
  borderRadius: vars.radius.lg,
});

export const buttonGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
  width: '100%',
});

export const googleButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space.sm,
  width: '100%',
  height: 48,
  padding: `11px ${vars.space.xl}`,
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: vars.radius.lg,
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray[900],
  cursor: 'pointer',
  boxSizing: 'border-box',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.gray[50],
    },
  },
});

export const loginRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space.sm,
  marginTop: 24,
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray[600],
});

export const loginLink = style({
  color: vars.color.gray[900],
  textDecoration: 'underline',
  fontWeight: vars.fontWeight.regular,
  selectors: {
    '&:hover': {
      color: vars.color.gray[800],
    },
  },
});
