import { style } from '@vanilla-extract/css';
import { vars } from '../shared/components/tokens.css.js';
import { breakpoint } from '../shared/components/breakpoints.css.js';

export const page = style({
  minHeight: '100vh',
  backgroundColor: '#f5f5f5',
});

export const hero = style({
  position: 'relative',
  height: 278,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
});

export const heroImage = style({
  objectFit: 'cover',
  objectPosition: 'center',
  zIndex: 0,
});

export const heroContent = style({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const heroLogo = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, calc(-50% - 75px))',
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.sm,
  fontFamily: 'var(--font-quantico), sans-serif',
  fontWeight: vars.fontWeight.bold,
  fontSize: '22.68px',
  color: '#d8d8d8',
  letterSpacing: '0.2889px',
});

export const heroHeadline = style({
  margin: 0,
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontWeight: vars.fontWeight.semibold,
  fontSize: vars.fontSize['2xl'],
  lineHeight: 1.5,
  color: vars.color.white,
  textAlign: 'center',
  letterSpacing: '0.39px',
  whiteSpace: 'pre-line',
});

export const heroCta = style({
  marginTop: 24,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 40,
  padding: `2px 16px 3px`,
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontWeight: vars.fontWeight.semibold,
  fontSize: vars.fontSize.base,
  color: vars.color.gray[800],
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray[800]}`,
  borderRadius: vars.radius.lg,
  textDecoration: 'none',
  boxSizing: 'border-box',
  cursor: 'pointer',
});

export const main = style({
  width: '100%',
  maxWidth: 996,
  margin: '0 auto',
  padding: '0 16px 80px',
  boxSizing: 'border-box',
  '@media': {
    [breakpoint.md]: {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
});

export const section = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 24,
  alignItems: 'start',
  paddingTop: 80,
  paddingBottom: 80,
  '@media': {
    [breakpoint.lg]: {
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'center',
    },
  },
});

export const sectionContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
});

export const sectionIcon = style({
  width: 24,
  height: 24,
  flexShrink: 0,
  color: vars.color.gray[800],
});

export const sectionTitle = style({
  margin: 0,
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontWeight: vars.fontWeight.bold,
  fontSize: vars.fontSize['2xl'],
  lineHeight: '32px',
  color: vars.color.gray[900],
  letterSpacing: '0.39px',
});

export const sectionDescription = style({
  margin: 0,
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontWeight: vars.fontWeight.regular,
  fontSize: vars.fontSize.base,
  lineHeight: 1.5,
  color: '#676767',
  letterSpacing: '0.39px',
});

export const sectionImage = style({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  borderRadius: 14,
});

export const divider = style({
  width: '100%',
  maxWidth: 991,
  height: 1,
  margin: '0 auto',
  backgroundColor: vars.color.gray[200],
  border: 'none',
});

export const ctaBlock = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 20,
  paddingTop: 60,
  paddingBottom: 80,
});

export const ctaTitle = style({
  margin: 0,
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontWeight: vars.fontWeight.semibold,
  fontSize: vars.fontSize.md,
  lineHeight: '32px',
  color: vars.color.gray[900],
  textAlign: 'center',
  letterSpacing: '0.39px',
});

export const ctaButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 48,
  padding: `0 ${vars.space.xl}`,
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontWeight: vars.fontWeight.semibold,
  fontSize: vars.fontSize.base,
  color: vars.color.white,
  backgroundColor: vars.color.gray[800],
  border: 'none',
  borderRadius: vars.radius.lg,
  textDecoration: 'none',
  boxSizing: 'border-box',
  cursor: 'pointer',
});
