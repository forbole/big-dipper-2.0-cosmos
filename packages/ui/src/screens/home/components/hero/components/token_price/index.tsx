import { usePrice } from '@/screens/home/components/hero/components/token_price/hooks';
import useStyles from '@/screens/home/components/hero/components/token_price/styles';
import type { TokenPriceType } from '@/screens/home/components/hero/types';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';

const TokenPrice: FC<{ items: TokenPriceType[] }> = (props) => {
  const { classes, theme } = useStyles();
  const { t } = useAppTranslation('home');
  const { chartRef } = usePrice(props.items, theme);

  return (
    <div>
      <Typography variant="h2">{t('priceHistory')}</Typography>
      <div ref={chartRef} className={classes.chart} />
    </div>
  );
};

export default TokenPrice;
