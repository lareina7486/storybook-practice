import { style, styleVariants } from '@vanilla-extract/css';
import { fontFace } from '@vanilla-extract/css';
import '@fontsource/quantico';

/**
 * Figma GNB 4711-52571
 * size: large | medium | small
 * status: member | member-login | admin
 */

const quantico = fontFace({
  src: "url(@fontsource/quantico/files/quantico-latin-400-normal.woff2) format('woff2')",
});

const gnbBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  minHeight: '60px',
  padding: '0 24px',
  backgroundColor: 'var(--white, #ffffff)',
  borderBottom: '1px solid var(--gray-gray100, #F5F5F5)',
  boxSizing: 'border-box',
});

export const gnb = styleVariants({
  default: [gnbBase],
  small: [
    gnbBase,
    {
      minHeight: '56px',
      padding: '0 16px',
    },
  ],
});

export const left = style({
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  flexShrink: 0,
});

const logoBase = style({
  fontFamily: quantico,
  fontWeight: 700,
  color: 'var(--gray-gray600, #525252)',
  textDecoration: 'none',
  letterSpacing: '0.2889px',
});

export const logo = styleVariants({
  large: [
    logoBase,
    {
      fontSize: '21.6px',
      lineHeight: '27px',
    },
  ],
  small: [
    logoBase,
    {
      fontSize: '14.4px',
      lineHeight: '18px',
    },
  ],
});

export const center = style({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  minWidth: 0,
});

export const tabs = style({
  display: 'flex',
  alignItems: 'stretch',
  gap: 0,
});

const tabBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '21px 17px',
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontSize: '15px',
  lineHeight: 'normal',
  color: 'var(--gray-gray500, #737373)',
  fontWeight: 600,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'color 0.2s ease, background-color 0.2s ease',
  outline: 'none',
  selectors: {
    '&:hover': {
      color: 'var(--gray-gray700, #404040)',
      backgroundColor: 'var(--gray-gray50, #FAFAFA)',
    },
    '&:focus-visible': {
      boxShadow: 'inset 0 0 0 2px var(--gray-gray400, #A3A3A3)',
    },
  },
});

export const tab = styleVariants({
  default: [tabBase],
  active: [
    tabBase,
    {
      color: 'var(--gray-gray800, #262626)',
      fontWeight: 700,
      selectors: {
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  ],
});

export const right = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  flexShrink: 0,
});

const loginButtonBase = style({
  padding: '2px 16px 3px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'var(--white, #ffffff)',
  border: '1px solid var(--gray-gray800, #262626)',
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontWeight: 600,
  color: 'var(--gray-gray800, #262626)',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
  outline: 'none',
  selectors: {
    '&:hover': {
      backgroundColor: 'var(--gray-gray50, #FAFAFA)',
      boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
    },
    '&:focus-visible': {
      boxShadow: '0 0 0 3px rgba(38, 38, 38, 0.25)',
    },
    '&:active': {
      backgroundColor: 'var(--gray-gray200, #E5E5E5)',
    },
  },
});

export const loginButton = styleVariants({
  default: [
    loginButtonBase,
    {
      height: '40px',
      fontSize: 'var(--font-size-base)',
      borderRadius: '12px',
    },
  ],
  small: [
    loginButtonBase,
    {
      height: '32px',
      fontSize: 'var(--font-size-sm)',
      borderRadius: '10px',
    },
  ],
});

export const profileWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 32,
  height: 32,
  flexShrink: 0,
});
