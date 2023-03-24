import { FC, useEffect, useRef } from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    zIndex: 0,
    position: 'absolute',
    left: theme.spacing(1),
    right: theme.spacing(1),
    top: theme.spacing(1),
    bottom: theme.spacing(1),
    display: 'flex !important',
    justifyContent: 'center !important',
    alignItems: 'center !important',
    '& > .coinzilla': {
      position: 'relative',
      maxWidth: '100% !important',
      width: '100% !important',
      height: 'max(80px, min(116px, calc(100vw / 7))) !important',
      maxHeight: '100% !important',
      display: 'flex !important',
      justifyContent: 'center !important',
      alignItems: 'center !important',
      '& > iframe': {
        aspectRatio: `728 / 90 !important`,
      },
    },
  },
  hidden: {
    visibility: 'hidden',
  },
}));

export type CoinzillaBannerProps = JSX.IntrinsicElements['div'] & {
  zone: string;
};

const CoinzillaBanner: FC<CoinzillaBannerProps> = ({ zone, ...props }) => {
  const { classes } = useStyles();
  const divRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (divRef.current && zone) {
      if (!document.getElementById('coinzilla-ad-script')) {
        const div = divRef.current;
        const coinzillaScript = document.createElement('script');
        coinzillaScript.async = true;
        coinzillaScript.src = 'https://coinzillatag.com/lib/display.js';
        div.appendChild(coinzillaScript);

        const adScript = document.createElement('script');
        adScript.id = 'coinzilla-ad-script';
        adScript.innerHTML = `
window.coinzilla_display = window.coinzilla_display || [];
var c_display_preferences = {};
c_display_preferences.zone = ${JSON.stringify(zone)};
c_display_preferences.width = "728";
c_display_preferences.height = "90";
coinzilla_display.push(c_display_preferences);
`;
        div.appendChild(adScript);

        return () => {
          div.removeChild(coinzillaScript);
          div.removeChild(adScript);
        };
      }
    }
  }, [zone]);

  return (
    <div className={classes.root} ref={divRef} {...props}>
      <div className="coinzilla" data-zone={`C-${zone}`} />
    </div>
  );
};

export default CoinzillaBanner;
