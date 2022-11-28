import { useStyles } from '@/screens/account_details/components/other_tokens/components/mobile/styles';
import type { OtherTokenType } from '@/screens/account_details/types';
import { formatNumber } from '@/utils/format_token';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

const Mobile: React.FC<{
  className?: string;
  items?: OtherTokenType[];
}> = ({ className, items }) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  return (
    <div className={classnames(className)}>
      {items?.map((x, i) => {
        const available = formatNumber(x.available.value, x.available.exponent);
        const reward = formatNumber(x.reward.value, x.reward.exponent);
        const commission = formatNumber(x.commission.value, x.commission.exponent);
        return (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={`votes-mobile-${i}`}>
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
            {!!items && i !== items.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
