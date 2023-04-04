import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { FC, useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import ChainIcon from '@/components/ChainIcon';
import useStyles from '@/components/nav/components/title_bar/styles';
import { formatMarket } from '@/components/nav/components/title_bar/utils';
import { readMarket } from '@/recoil/market';
import axios from 'axios';
import Big from 'big.js';

type TitleBarProps = {
  className?: string;
  title?: string;
};

const TitleBar: FC<TitleBarProps> = ({ className }) => {
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (async () => {
        try {
          const symbols = [
            'XRP/USD+rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
            '434F524500000000000000000000000000000000+rcoreNywaoz2ZCQ8Lg2EbSLnGuRBmun6D/XRP',
          ];
          const response = await axios.post('https://api.sologenic.org/api/v1/tickers/24h', {
            symbols,
          });

          if (response.status === 200) {
            const coreXrp: any = Object.values(response.data)[0];
            const xrpUsd: any = Object.values(response.data)[1];

            const coreumPrice = Big(coreXrp.last_price).times(xrpUsd.last_price);
            setPrice(coreumPrice.toNumber());
          }
        } catch (e) {
          console.error('Error getting CORE price', e);
          setPrice(0);
        }
      })();
    }
  }, []);

  const { t } = useTranslation('common');
  const { classes, cx } = useStyles();
  const marketState = useRecoilValue(readMarket);

  const market = formatMarket({ ...marketState, price });

  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.content}>
        {market.map((x) => (
          <div key={x.key} className={classes.item}>
            <Typography variant="body1" className="label">
              {t(x.key)}
            </Typography>
            <Typography variant="body1" className="data">
              {x.data}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleBar;
