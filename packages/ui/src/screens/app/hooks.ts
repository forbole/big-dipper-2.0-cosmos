import { init } from '@socialgouv/matomo-next';
import * as jdenticon from 'jdenticon';
import { useTranslation } from 'next-i18next';
import { useEffect, useRef } from 'react';
import chainConfig from '@/chainConfig';

const { marketing } = chainConfig();
const matomoUrls = [process.env.NEXT_PUBLIC_MATOMO_URL, marketing.matomoURL];
const matomoSiteIds = [process.env.NEXT_PUBLIC_MATOMO_SITE_ID, marketing.matomoSiteID];

export const useApp = () => {
  // ==========================
  // language
  // ==========================
  const { lang } = useTranslation();
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    const url = matomoUrls.find((u) => u);
    const siteId = matomoSiteIds.find((i) => i);
    if (url && siteId) init({ url, siteId });
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
  }, [lang]);

  useEffect(() => {
    document.cookie = `NEXT_LOCALE=${lang}`;
  }, [lang]);
};
