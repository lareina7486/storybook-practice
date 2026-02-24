import { style, styleVariants } from '@vanilla-extract/css';

export const chipBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',

  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
});

export const chipVariants = styleVariants({
  sm: {
    padding: '3px 12px',
  },
  md: {
    padding: '4px 8px',
  },
  lg: {
    padding: '5px 7px',
  },
});

export const chipType = styleVariants({
  'Next.js': [
    chipBase,
    {
      height: 26,
      padding: '3px 12px',
      borderRadius: 8,
      backgroundColor: '#79E16A',
    },
  ],
  API: [
    chipBase,
    {
      height: 26,
      padding: '3px 12px',
      borderRadius: 8,
      backgroundColor: '#FF9B5F',
    },
  ],
  Career: [
    chipBase,
    {
      height: 26,
      padding: '3px 12px',
      borderRadius: 8,
      backgroundColor: '#8BBCFF',
    },
  ],
  'Modern JS': [
    chipBase,
    {
      height: 26,
      padding: '3px 12px',
      borderRadius: 8,
      backgroundColor: '#FF6F6F',
    },
  ],
  Web: [
    chipBase,
    {
      height: 26,
      padding: '3px 12px',
      borderRadius: 8,
      backgroundColor: '#FFF36A',
    },
  ],
});

export const chipCategory = styleVariants({
  '공식 문서': [
    chipBase,
    {
      height: 26,
      padding: '5px 7px',
      borderRadius: 8,
      border: '1px solid #D9D9D9',
      backgroundColor: '#FFFFFF',
      color: '#333',
    },
  ],
  '공식 문서': [
    chipBase,
    {
      height: 26,
      padding: '5px 7px',
      borderRadius: 8,
      border: '1px solid #D9D9D9',
      backgroundColor: '#FFFFFF',
      color: '#333',
    },
  ],
});

export const chipStatus = styleVariants({
  '승인 대기': [
    chipBase,
    {
      height: 24,
      padding: '4px 8px',
      borderRadius: 4,
      backgroundColor: '#FFFDE7',
      color: '#F4B400',
      fontSize: 12,
      fontWeight: 600,
    },
  ],
  '신청 거절': [
    chipBase,
    {
      height: 24,
      padding: '4px 8px',
      borderRadius: 4,
      backgroundColor: '#FFEAEA',
      color: '#FF4D4F',
    },
  ],
  '신청 승인': [
    chipBase,
    {
      height: 24,
      padding: '4px 8px',
      borderRadius: 4,
      backgroundColor: '#E6F4FF',
      color: '#1677FF',
    },
  ],
  '챌린지 삭제': [
    chipBase,
    {
      height: 24,
      padding: '4px 8px',
      borderRadius: 4,
      backgroundColor: '#F2F2F2',
      color: '#888',
    },
  ],
});
