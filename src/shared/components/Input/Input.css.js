import { style, styleVariants } from '@vanilla-extract/css';

export const inputRoot = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '350px',
});

export const label = style({
  fontFamily:
    'var(--font-pretendard), system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  fontSize: 'var(--font-size-sm)',
  fontWeight: 500,
  lineHeight: 'normal',
  color: 'var(--gray-gray900, #171717)',
});

const fieldBase = style({
  display: 'flex',
  alignItems: 'center',
  padding: '11px 20px',
  borderRadius: '12px',
  backgroundColor: 'var(--white, #ffffff)',
  border: '1px solid var(--gray-gray200, #E5E5E5)',
  selectors: {
    '&:focus-within': {
      borderColor: 'var(--brand-black, #262626)',
    },
  },
});

export const field = styleVariants({
  default: [fieldBase],
  error: [
    fieldBase,
    {
      borderColor: 'var(--red-error, #EB3E3E)',
    },
  ],
});

export const input = style({
  flex: 1,
  border: 'none',
  outline: 'none',
  background: 'transparent',
  fontFamily:
    'var(--font-pretendard), system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  fontSize: 'var(--font-size-base)',
  fontWeight: 400,
  lineHeight: 'normal',
  color: 'var(--gray-gray900, #171717)',
  selectors: {
    '&::placeholder': {
      color: 'var(--gray-gray400, #A3A3A3)',
    },
  },
});

export const iconButton = style({
  border: 'none',
  background: 'transparent',
  padding: 0,
  marginLeft: '8px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const helperTextBase = style({
  marginLeft: '8px',
  fontFamily:
    'var(--font-pretendard), system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  fontSize: 'var(--font-size-2xs)',
  lineHeight: '16px',
  color: 'var(--gray-gray600, #525252)',
});

export const helperText = styleVariants({
  default: [helperTextBase],
  error: [
    helperTextBase,
    {
      color: 'var(--red-error, #EB3E3E)',
    },
  ],
});

