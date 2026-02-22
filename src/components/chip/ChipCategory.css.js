import { style } from '@vanilla-extract/css';
import { chipBase } from './chipBase.css';

export const chipCategory = style([
  chipBase,
  {
    height: 26,
    padding: '5px 7px',
    borderRadius: 8,
    border: '1px solid #D9D9D9',
    backgroundColor: '#FFFFFF',
    color: '#333',
  },
]);