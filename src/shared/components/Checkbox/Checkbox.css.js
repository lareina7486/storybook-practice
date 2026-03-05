import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  width: '24px',
  height: '24px',
  flexShrink: 0,
});

export const input = style({
  position: 'absolute',
  opacity: 0,
  width: '100%',
  height: '100%',
  margin: 0,
  cursor: 'pointer',
});

const boxBase = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '18px',
  height: '18px',
  borderRadius: '2px',
  backgroundColor: '#F5F5F5',
  border: '1px solid var(--gray-gray200, #E5E5E5)',
  boxSizing: 'border-box',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const box = styleVariants({
  unchecked: [boxBase],
  checked: [
    boxBase,
    {
      backgroundColor: 'var(--gray-gray800, #262626)',
      borderColor: 'var(--gray-gray800, #262626)',
    },
  ],
});

export const check = style({
  width: '8px',
  height: '5px',
  borderLeft: '2px solid var(--white, #ffffff)',
  borderBottom: '2px solid var(--white, #ffffff)',
  transform: 'rotate(-45deg)',
  marginBottom: '3px',
});
