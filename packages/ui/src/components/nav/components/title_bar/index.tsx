import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { FC, useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import ChainIcon from '@/components/ChainIcon';
import useStyles from '@/components/nav/components/title_bar/styles';
import { formatMarket } from '@/components/nav/components/title_bar/utils';
import { readMarket } from '@/recoil/market';
import axios from 'axios';

type TitleBarProps = {
  className?: string;
};

const TitleBar: FC<TitleBarProps> = ({ className }) => {
  const [price, set] = useState<number>(0);

  useEffect(() => {
    const setPrice = async () => {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price?ids=coreum&vs_currencies=usd'
      );
      set(data.coreum.usd);
    };
    setPrice();
  }, []);

  const { t } = useTranslation('common');
  const { classes, cx } = useStyles();
  const marketState = useRecoilValue(readMarket);

  const market = formatMarket({ ...marketState, price });

  return (
    <div className={cx(classes.root, className)}>
      {/* {!title && <ChainIcon type="logo" className={classes.logo} alt="logo" />}
      {!!title && <Typography variant="h1">{title}</Typography>} */}
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
