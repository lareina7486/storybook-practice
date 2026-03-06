import '@/shared/components/reset.css.js';
import '@/shared/components/global.css.js';
import '@/shared/components/tokens.css.js';
import { pretendard, quantico } from '@/shared/fonts';

export default function App({ Component, pageProps }) {
  return (
    <div className={`${pretendard.variable} ${quantico.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
