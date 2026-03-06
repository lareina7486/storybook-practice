import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  width: '100%',
});

const textareaBase = style({
  width: '100%',
  minHeight: '89px',
  padding: '16px',
  backgroundColor: 'var(--white, #ffffff)',
  border: '1px solid var(--gray-gray200, #E5E5E5)',
  borderRadius: '12px',
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontSize: 'var(--font-size-base)',
  fontWeight: 500,
  lineHeight: 'normal',
  color: 'var(--gray-gray900, #171717)',
  boxSizing: 'border-box',
  resize: 'vertical',
  outline: 'none',
  selectors: {
    '&::placeholder': {
      color: 'var(--gray-gray400, #A3A3A3)',
    },
    '&:focus': {
      borderColor: 'var(--gray-gray800, #262626)',
    },
  },
});

export const textarea = styleVariants({
  default: [textareaBase],
  max: [
    textareaBase,
    {
      minHeight: '120px',
    },
  ],
});
