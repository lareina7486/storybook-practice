import { style, styleVariants, fontFace } from '@vanilla-extract/css';
import '@fontsource/pretendard';

const pretendard_500 = fontFace({
  src: "url(@fontsource/pretendard/files/pretendard-latin-500-normal.woff2) format('woff2')",
});

// const controlBase = style({});

export const control = styleVariants({
  page: [
    {
      width: 40,
      height: 40,
      position: 'absolute',
      background: '#262626',
      borderRadius: 8,

    //   left: 17,
    //   top: 12,
      color: '#FFC117',
      fontSize: 14,
      fontFamily: pretendard_500,
      fontWeight: '500',
      wordWrap: 'break-word',
    },
  ],
});
