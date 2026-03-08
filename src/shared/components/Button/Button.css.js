import { style, styleVariants } from '@vanilla-extract/css';
import { breakpoint } from '../breakpoints.css.js';
import { vars } from '../tokens.css.js';

/**
 * Figma component 4711-52320 기준 Button 스타일
 * variant: solid | outline | filledTonal | transparent | filled | outlineIcon
 * size: pc | mobile
 */

const transition = `background-color ${vars.transition.duration.normal} ${vars.transition.timing.ease}, color ${vars.transition.duration.normal} ${vars.transition.timing.ease}, border-color ${vars.transition.duration.normal} ${vars.transition.timing.ease}, box-shadow ${vars.transition.duration.normal} ${vars.transition.timing.ease}, transform ${vars.transition.duration.fast} ${vars.transition.timing.ease}`;

export const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space.sm,
  fontFamily: 'var(--font-pretendard), sans-serif',
  lineHeight: vars.lineHeight.normal,
  cursor: 'pointer',
  border: 'none',
  boxSizing: 'border-box',
  transition,
  outline: 'none',
  selectors: {
    '&:active:not(:disabled)': {
      transform: 'scale(0.98)',
    },
  },
});

export const size = styleVariants({
  pc: {
    height: '48px',
    padding: `0 ${vars.space.xl}`,
    fontSize: vars.fontSize.base,
    fontWeight: vars.fontWeight.semibold,
    borderRadius: vars.radius.lg,
  },
  pcMedium: {
    height: '40px',
    padding: `0 ${vars.space.xl}`,
    fontSize: vars.fontSize.base,
    fontWeight: vars.fontWeight.semibold,
    borderRadius: vars.radius.lg,
  },
  mobile: {
    height: '32px',
    padding: `0 ${vars.space.lg}`,
    fontSize: vars.fontSize.sm,
    fontWeight: vars.fontWeight.semibold,
    borderRadius: vars.radius.md,
  },
});

export const variant = styleVariants({
  solid: {
    backgroundColor: vars.color.gray[800],
    color: vars.color.white,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.color.gray[900],
        boxShadow: vars.shadow.lg,
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 3px ${vars.color.gray[800]}40`,
      },
      '&:active:not(:disabled)': {
        backgroundColor: vars.color.gray[900],
        boxShadow: vars.shadow.md,
      },
    },
  },
  solidInactive: {
    backgroundColor: vars.color.gray[200],
    color: vars.color.gray[500],
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.color.gray[300],
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 3px ${vars.color.gray[500]}4D`,
      },
    },
  },
  outline: {
    height: '40px',
    padding: `2px ${vars.space.lg} 3px`,
    backgroundColor: vars.color.white,
    border: `1px solid ${vars.color.gray[800]}`,
    color: vars.color.gray[800],
    fontSize: vars.fontSize.base,
    fontWeight: vars.fontWeight.semibold,
    borderRadius: vars.radius.lg,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.color.gray[50],
        boxShadow: vars.shadow.sm,
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 3px ${vars.color.gray[800]}40`,
      },
      '&:active:not(:disabled)': {
        backgroundColor: vars.color.gray[200],
      },
    },
    '@media': {
      [breakpoint.sm]: {
        height: '32px',
        fontSize: vars.fontSize.sm,
        borderRadius: vars.radius.md,
      },
    },
  },
  filledTonal: {
    backgroundColor: '#FFE7E7',
    color: vars.color.semantic.error,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: '#ffd4d4',
        boxShadow: `0 2px 8px ${vars.color.semantic.error}40`,
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 3px ${vars.color.semantic.error}59`,
      },
      '&:active:not(:disabled)': {
        backgroundColor: '#ffc0c0',
      },
    },
  },
  transparent: {
    height: '32px',
    padding: `${vars.space.xs} ${vars.space.md}`,
    borderRadius: vars.radius.lg,
    backgroundColor: 'rgba(246, 248, 250, 0.5)',
    color: vars.color.gray[700],
    fontSize: vars.fontSize.base,
    fontWeight: vars.fontWeight.bold,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: 'rgba(230, 234, 238, 0.8)',
        boxShadow: vars.shadow.xs,
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 3px ${vars.color.gray[700]}33`,
      },
      '&:active:not(:disabled)': {
        backgroundColor: 'rgba(214, 218, 222, 0.9)',
      },
    },
    '@media': {
      [breakpoint.sm]: {
        fontSize: vars.fontSize.sm,
        borderRadius: vars.radius.md,
      },
    },
  },
  filled: {
    height: '40px',
    padding: `0 ${vars.space.lg}`,
    backgroundColor: vars.color.brand.point,
    border: `2px solid ${vars.color.gray[800]}`,
    color: vars.color.gray[800],
    fontSize: vars.fontSize.sm,
    fontWeight: vars.fontWeight.bold,
    borderRadius: vars.radius.lg,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: '#e6ad15',
        boxShadow: `0 2px 8px ${vars.color.brand.point}66`,
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 3px ${vars.color.brand.point}80`,
      },
      '&:active:not(:disabled)': {
        backgroundColor: '#cc9a12',
        boxShadow: vars.shadow.md,
      },
    },
  },
  outlineIcon: {
    height: '33px',
    padding: `0 ${vars.space.lg}`,
    backgroundColor: vars.color.white,
    border: `1px solid ${vars.color.gray[800]}`,
    color: vars.color.gray[800],
    fontSize: vars.fontSize.sm,
    fontWeight: vars.fontWeight.bold,
    borderRadius: vars.radius.full,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.color.gray[50],
        boxShadow: vars.shadow.sm,
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 3px ${vars.color.gray[800]}40`,
      },
      '&:active:not(:disabled)': {
        backgroundColor: vars.color.gray[200],
      },
    },
  },
});

export const icon = style({
  display: 'inline-flex',
  alignItems: 'center',
  flexShrink: 0,
});

export const linkInner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  minWidth: 0,
  textDecoration: 'none',
  color: 'inherit',
  font: 'inherit',
});

export const disabled = style({
  opacity: vars.opacity.disabled,
  cursor: 'not-allowed',
  pointerEvents: 'none',
  transition: 'none',
});
