import React, { useEffect } from 'react';

type CoinzillaBannerAdProps = {
  zone: string;
  width: string;
  height: string;
};

const CoinzillaBannerAd = ({ zone, width, height }: CoinzillaBannerAdProps) => {
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (zone && width && height) {
      const coinzillaScript = document.createElement('script');
      coinzillaScript.src = 'https://coinzillatag.com/lib/display.js';
      coinzillaScript.async = true;
      document.body.appendChild(coinzillaScript);

      const adScript = document.createElement('script');
      adScript.innerHTML = `
        window.coinzilla_display = window.coinzilla_display || [];
        var c_display_preferences = {};
        c_display_preferences.zone = "${zone}";
        c_display_preferences.width = "${width}";
        c_display_preferences.height = "${height}";
        coinzilla_display.push(c_display_preferences);
      `;
      document.body.appendChild(adScript);

      return () => {
        document.body.removeChild(coinzillaScript);
        document.body.removeChild(adScript);
      };
    }
  }, [zone, width, height]);

  return <div className="coinzilla" data-zone={zone} />;
};

export default CoinzillaBannerAd;
