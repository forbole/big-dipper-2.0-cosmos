import chainConfig from '@/chainConfig';
import { init } from '@socialgouv/matomo-next';
import * as jdenticon from 'jdenticon';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';

export const useApp = () => {
  // ==========================
  // language
  // ==========================
  const { lang } = useTranslation();

  useEffect(() => {
    const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL || chainConfig.marketing.matomoURL;
    const MATOMO_SITE_ID =
      process.env.NEXT_PUBLIC_MATOMO_SITE_ID || chainConfig.marketing.matomoSiteID;
    if (MATOMO_URL && MATOMO_SITE_ID) {
      init({
        url: MATOMO_URL,
        siteId: MATOMO_SITE_ID,
      });
    }
    // jdenticon theme
    jdenticon.configure({
      hues: [207],
      lightness: {
        color: [0.84, 0.84],
        grayscale: [0.84, 0.84],
      },
      saturation: {
        color: 0.48,
        grayscale: 0.48,
      },
      backColor: '#2a4766',
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
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);
};
