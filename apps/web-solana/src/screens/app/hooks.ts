import { useEffect } from 'react';
import { init } from '@socialgouv/matomo-next';
import * as jdenticon from 'jdenticon';
import useTranslation from 'next-translate/useTranslation';

export const useApp = () => {
  // ==========================
  // language
  // ==========================
  const { lang } = useTranslation();

  useEffect(() => {
    const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
    const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;
    if (MATOMO_URL && MATOMO_SITE_ID) {
      init({
        url: MATOMO_URL, siteId: MATOMO_SITE_ID,
      });
    }
    // jdenticon theme
    jdenticon.configure({
      lightness: {
        color: [0.47, 0.67],
        grayscale: [0.28, 0.48],
      },
      saturation: {
        color: 0.10,
        grayscale: 0.02,
      },
      backColor: '#6b80342e',
    });
  }, []);

  useEffect(() => {
    document.cookie = `NEXT_LOCALE=${lang}`;
  }, [lang]);

  // ==========================
  // css
  // ==========================
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
};
