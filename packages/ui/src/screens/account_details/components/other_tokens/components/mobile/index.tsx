import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC, Fragment } from 'react';
import { formatNumber } from '@/utils/format_token';
import type { OtherTokenType } from '@/screens/account_details/types';
import useStyles from '@/screens/account_details/components/other_tokens/components/mobile/styles';

type MobileProps = {
  className?: string;
  items?: OtherTokenType[];
};

const Mobile: FC<MobileProps> = ({ className, items }) => {
  const { classes } = useStyles();
  const { t } = useAppTranslation('accounts');
  return (
    <div className={className}>
      {items?.map((x, i) => {
        const available = formatNumber(x.available.value, x.available.exponent);
        const reward = x.reward ? formatNumber(x.reward.value, x.reward.exponent) : '';
        const commission = formatNumber(x.commission.value, x.commission.exponent);
        const isLast = !items || i === items.length - 1;
        return (
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={`votes-mobile-${i}`}>
            <div className={classes.list}>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('token')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.denom.toUpperCase()}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('available')}
                </Typography>
                <Typography variant="body1" className="value">
                  {available}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('reward')}
                </Typography>
                <Typography variant="body1" className="value">
                  {reward}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('commission')}
                </Typography>
                <Typography variant="body1" className="value">
                  {commission}
                </Typography>
              </div>
            </div>
            {!isLast && <Divider />}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
