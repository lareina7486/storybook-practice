import { style, styleVariants } from '@vanilla-extract/css';

/**
 * Figma component 4711-52320 기준 Button 스타일
 * variant: solid | outline | filledTonal | transparent | filled | outlineIcon
 * size: pc | mobile
 */

export const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  fontFamily: 'var(--font-pretendard), sans-serif',
  lineHeight: 'normal',
  cursor: 'pointer',
  border: 'none',
  boxSizing: 'border-box',
  transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease',
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
    padding: '0 20px',
    fontSize: '16px',
    fontWeight: 600,
    borderRadius: '12px',
  },
  pcMedium: {
    height: '40px',
    padding: '0 20px',
    fontSize: '16px',
    fontWeight: 600,
    borderRadius: '12px',
  },
  mobile: {
    height: '32px',
    padding: '0 16px',
    fontSize: '14px',
    fontWeight: 600,
    borderRadius: '10px',
  },
});

export const variant = styleVariants({
  solid: {
    backgroundColor: 'var(--gray-gray800, #262626)',
    color: 'var(--white, #ffffff)',
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: 'var(--gray-gray900, #171717)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      },
      '&:focus-visible': {
        boxShadow: '0 0 0 3px rgba(38, 38, 38, 0.4)',
      },
      '&:active:not(:disabled)': {
        backgroundColor: 'var(--gray-gray900, #171717)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
      },
    },
  },
  solidInactive: {
    backgroundColor: 'var(--gray-gray200, #E5E5E5)',
    color: 'var(--gray-gray500, #737373)',
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: 'var(--gray-gray300, #D4D4D4)',
      },
      '&:focus-visible': {
        boxShadow: '0 0 0 3px rgba(115, 115, 115, 0.3)',
      },
    },
  },
  outline: {
    height: '40px',
    padding: '2px 16px 3px',
    backgroundColor: 'var(--white, #ffffff)',
    border: '1px solid var(--gray-gray800, #262626)',
    color: 'var(--gray-gray800, #262626)',
    fontSize: '16px',
    fontWeight: 600,
    borderRadius: '12px',
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: 'var(--gray-gray50, #FAFAFA)',
        boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
      },
      '&:focus-visible': {
        boxShadow: '0 0 0 3px rgba(38, 38, 38, 0.25)',
      },
      '&:active:not(:disabled)': {
        backgroundColor: 'var(--gray-gray200, #E5E5E5)',
      },
    },
  },
  outlineMobile: {
    height: '32px',
    padding: '2px 16px 3px',
    backgroundColor: 'var(--white, #ffffff)',
    border: '1px solid var(--gray-gray800, #262626)',
    color: 'var(--gray-gray800, #262626)',
    fontSize: '14px',
    fontWeight: 600,
    borderRadius: '10px',
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: 'var(--gray-gray50, #FAFAFA)',
        boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
      },
      '&:focus-visible': {
        boxShadow: '0 0 0 3px rgba(38, 38, 38, 0.25)',
      },
      '&:active:not(:disabled)': {
        backgroundColor: 'var(--gray-gray200, #E5E5E5)',
      },
    },
  },
  filledTonal: {
    backgroundColor: '#FFE7E7',
    color: '#F24744',
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: '#ffd4d4',
        boxShadow: '0 2px 8px rgba(242, 71, 68, 0.25)',
      },
      '&:focus-visible': {
        boxShadow: '0 0 0 3px rgba(242, 71, 68, 0.35)',
      },
      '&:active:not(:disabled)': {
        backgroundColor: '#ffc0c0',
      },
    },
  },
  transparent: {
    height: '32px',
    padding: '4px 12px',
    borderRadius: '12px',
    backgroundColor: 'rgba(246, 248, 250, 0.5)',
    color: 'var(--gray-gray700, #404040)',
    fontSize: '16px',
    fontWeight: 700,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: 'rgba(230, 234, 238, 0.8)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      },
      '&:focus-visible': {
        boxShadow: '0 0 0 3px rgba(64, 64, 64, 0.2)',
      },
      '&:active:not(:disabled)': {
        backgroundColor: 'rgba(214, 218, 222, 0.9)',
      },
    },
  },
  transparentMobile: {
    fontSize: '14px',
    borderRadius: '10px',
  },
  filled: {
    height: '40px',
    padding: '0 16px',
    backgroundColor: 'var(--brand-yellow, #FFC117)',
    border: '2px solid var(--gray-gray800, #262626)',
    color: 'var(--gray-gray800, #262626)',
    fontSize: '14px',
    fontWeight: 700,
    borderRadius: '12px',
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: '#e6ad15',
        boxShadow: '0 2px 8px rgba(255, 193, 23, 0.4)',
      },
      '&:focus-visible': {
        boxShadow: '0 0 0 3px rgba(255, 193, 23, 0.5)',
      },
      '&:active:not(:disabled)': {
        backgroundColor: '#cc9a12',
        boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
      },
    },
  },
  outlineIcon: {
    height: '33px',
    padding: '0 16px',
    backgroundColor: 'var(--white, #ffffff)',
    border: '1px solid var(--gray-gray800, #262626)',
    color: 'var(--gray-gray800, #262626)',
    fontSize: '14px',
    fontWeight: 700,
    borderRadius: '30.5px',
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: 'var(--gray-gray50, #FAFAFA)',
        boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
      },
      '&:focus-visible': {
        boxShadow: '0 0 0 3px rgba(38, 38, 38, 0.25)',
      },
      '&:active:not(:disabled)': {
        backgroundColor: 'var(--gray-gray200, #E5E5E5)',
      },
    },
  },
});

export const icon = style({
  display: 'inline-flex',
  alignItems: 'center',
  flexShrink: 0,
});

export const disabled = style({
  opacity: 0.5,
  cursor: 'not-allowed',
  pointerEvents: 'none',
  transition: 'none',
});
