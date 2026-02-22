import { style } from '@vanilla-extract/css';

// chip? chipBase?
export const chipBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  whiteSpace: 'nowrap',
  fontSize: 13,
  fontWeight: 500,
  lineHeight: 1,
});