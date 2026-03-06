/**
 * next/font로 폰트 로드 후 CSS 변수(--font-pretendard, --font-quantico)로 사용.
 * _app.js에서 이 모듈의 variable className을 루트에 적용해야 합니다.
 */
import localFont from 'next/font/local';
import { Quantico } from 'next/font/google';

const pretendard = localFont({
  src: [
    {
      path: '../../node_modules/@fontsource/pretendard/files/pretendard-latin-500-normal.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../node_modules/@fontsource/pretendard/files/pretendard-latin-600-normal.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
});

const quantico = Quantico({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-quantico',
  display: 'swap',
});

export { pretendard, quantico };

/**
 * _app.js에서 적용할 때: className={`${pretendard.variable} ${quantico.variable}`}
 */
