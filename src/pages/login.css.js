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

export const signupRow = style({
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

export const signupLink = style({
  color: vars.color.gray[900],
  textDecoration: 'underline',
  fontWeight: vars.fontWeight.regular,
  selectors: {
    '&:hover': {
      color: vars.color.gray[800],
    },
  },
});
