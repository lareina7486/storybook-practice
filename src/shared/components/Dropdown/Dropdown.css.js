import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  width: '100%',
  maxWidth: '800px',
});

const triggerBase = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '56px',
  padding: '8px 16px',
  backgroundColor: 'var(--white, #ffffff)',
  border: '1px solid var(--gray-gray200, #E5E5E5)',
  borderRadius: '4px',
  cursor: 'pointer',
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  color: 'var(--gray-gray400, #A3A3A3)',
  textAlign: 'left',
});

export const trigger = styleVariants({
  default: [triggerBase],
  active: [
    triggerBase,
    {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  ],
});

export const triggerLabel = style({
  flex: 1,
});

export const triggerIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',
  height: '48px',
  margin: '-8px -8px -8px 0',
});

export const list = style({
  position: 'absolute',
  left: 0,
  right: 0,
  top: '100%',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'var(--white, #ffffff)',
  border: '1px solid var(--gray-gray300, #D4D4D4)',
  borderTop: 'none',
  borderBottomLeftRadius: '8px',
  borderBottomRightRadius: '8px',
  overflow: 'hidden',
});

export const item = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '12px 16px',
  borderBottom: '1px solid var(--gray-gray300, #D4D4D4)',
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  color: 'var(--gray-gray500, #737373)',
  cursor: 'pointer',
  backgroundColor: 'var(--white, #ffffff)',
  transition: 'background-color 0.15s, color 0.15s',
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: 'var(--gray-gray50, #FAFAFA)',
      color: 'var(--gray-gray800, #262626)',
    },
  },
});
