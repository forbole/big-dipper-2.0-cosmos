import chainConfig from '@/chainConfig';
import { init } from '@socialgouv/matomo-next';
import * as jdenticon from 'jdenticon';
import useAppTranslation from '@/hooks/useAppTranslation';
import { useEffect, useRef } from 'react';

const { chainType, marketing } = chainConfig();
const matomoUrls = [process.env.NEXT_PUBLIC_MATOMO_URL, marketing.matomoURL];
const matomoSiteIds = [process.env.NEXT_PUBLIC_MATOMO_SITE_ID, marketing.matomoSiteID];

export const useApp = () => {
  // ==========================
  // language
  // ==========================
  const { i18n } = useAppTranslation();
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    const url = matomoUrls.find((u) => u);
    const siteId = matomoSiteIds.find((i) => i);
    if (url && siteId && /^mainnet$/i.test(chainType)) init({ url, siteId });
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
  }, [i18n.language]);

  useEffect(() => {
    document.cookie = `NEXT_LOCALE=${i18n.language}`;
  }, [i18n.language]);
};
