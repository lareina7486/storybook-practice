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

const panelBase = style({
  position: 'relative',
  backgroundColor: 'var(--white, #ffffff)',
  border: '2px solid var(--gray-gray800, #262626)',
  borderRadius: '12px',
  boxShadow: '0px 4px 16px 0px rgba(17, 34, 17, 0.05)',
  fontFamily: 'var(--font-pretendard), sans-serif',
  maxHeight: '90vh',
  overflow: 'auto',
});

export const panel = styleVariants({
  large: [
    panelBase,
    {
      width: '100%',
      maxWidth: '496px',
    },
  ],
  small: [
    panelBase,
    {
      width: '100%',
      maxWidth: '327px',
    },
  ],
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px 24px 0',
});

export const title = style({
  margin: 0,
  fontSize: 'var(--font-size-md)',
  fontWeight: 700,
  lineHeight: '26px',
  color: 'var(--gray-gray800, #262626)',
});

export const closeButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  padding: 0,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
});

export const body = styleVariants({
  default: {
    padding: '24px',
  },
  centered: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
    textAlign: 'center',
  },
});

export const message = style({
  margin: 0,
  fontSize: 'var(--font-size-base)',
  fontWeight: 500,
  lineHeight: 'normal',
  color: 'var(--gray-gray800, #262626)',
  maxWidth: '250px',
});

export const iconSlot = style({
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const actions = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  justifyContent: 'center',
});

export const formContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginTop: '16px',
});

export const formLabel = style({
  fontSize: 'var(--font-size-base)',
  fontWeight: 400,
  color: 'var(--gray-gray900, #171717)',
  lineHeight: '26px',
});

export const textarea = style({
  width: '100%',
  minHeight: '219px',
  padding: '16px 20px',
  borderRadius: '6px',
  border: '1px solid var(--gray-gray300, #D4D4D4)',
  backgroundColor: 'var(--white, #ffffff)',
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontSize: 'var(--font-size-base)',
  lineHeight: '26px',
  color: 'var(--gray-gray900, #171717)',
  boxSizing: 'border-box',
  resize: 'vertical',
  selectors: {
    '&::placeholder': {
      color: 'var(--gray-gray500, #737373)',
    },
  },
});

export const submitRow = style({
  padding: '24px 24px 24px',
});

export const submitButton = style({
  width: '100%',
  height: '48px',
  borderRadius: '12px',
  backgroundColor: 'var(--gray-gray800, #262626)',
  color: 'var(--white, #ffffff)',
  border: 'none',
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontSize: 'var(--font-size-base)',
  fontWeight: 600,
  cursor: 'pointer',
});
