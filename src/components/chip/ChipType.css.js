import { styleVariants } from '@vanilla-extract/css';
import { chipBase } from './ChipBase.css';

export const ChipType = styleVariants({
  next: [
    chipBase,
    {
      height: 26,
      padding: '3px 12px',
      borderRadius: 8,
      backgroundColor: '#79E16A',
    },
  ],
  api: [
    chipBase,
    {
      height: 26,
      padding: '3px 12px',
      borderRadius: 8,
      backgroundColor: '#FF9B5F',
    },
  ],
  career: [
    chipBase,
    {
      height: 26,
      padding: '3px 12px',
      borderRadius: 8,
      backgroundColor: '#8BBCFF',
    },
  ],
  modern: [
    chipBase,
    {
      height: 26,
      padding: '3px 12px',
      borderRadius: 8,
      backgroundColor: '#FF6F6F',
    },
  ],
  web: [
    chipBase,
    {
      height: 26,
      padding: '3px 12px',
      borderRadius: 8,
      backgroundColor: '#FFF36A',
    },
  ],
});
