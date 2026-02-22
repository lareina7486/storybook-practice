import { styleVariants } from '@vanilla-extract/css';
import { chipBase } from './ChipBase.css';

export const chipStatus = styleVariants({
  wait: [
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
  reject: [
    chipBase,
    {
      height: 24,
      padding: '4px 8px',
      borderRadius: 4,
      backgroundColor: '#FFEAEA',
      color: '#FF4D4F',
    },
  ],
  approve: [
    chipBase,
    {
      height: 24,
      padding: '4px 8px',
      borderRadius: 4,
      backgroundColor: '#E6F4FF',
      color: '#1677FF',
    },
  ],
  delete: [
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
