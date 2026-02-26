import { style } from '@vanilla-extract/css';

export const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  borderRadius: '8px',
  fontWeight: 500,
  border: '1px solid transparent',
  cursor: 'pointer',
});

/* =======================
   SIZE
======================= */

export const pc = style({
  height: '48px',
  padding: '0 20px',
  fontSize: '16px',
});

export const mobile = style({
  height: '40px',
  padding: '0 16px',
  fontSize: '14px',
});

/* =======================
   VARIANT
======================= */

export const solid = style({
  backgroundColor: 'black',
  color: 'white',
});

export const outline = style({
  backgroundColor: 'white',
  border: '1px solid black',
  color: 'black',
});

export const filledTonal = style({
  backgroundColor: '#f5f5f5',
  color: 'red',
});

export const transparent = style({
  backgroundColor: 'transparent',
  color: 'black',
});

export const filled = style({
  backgroundColor: '#ffcc00',
  color: 'black',
});

/* =======================
   ICON
======================= */

export const icon = style({
  display: 'flex',
  alignItems: 'center',
});

/* =======================
   DISABLED
======================= */

export const disabled = style({
  opacity: 0.5,
  cursor: 'not-allowed',
});