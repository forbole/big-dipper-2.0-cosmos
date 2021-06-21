import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import {
  Divider,
  Typography,
} from '@material-ui/core';
import { OtherTokenType } from '@src/screens/account_details/types';
import { useStyles } from './styles';

const Mobile: React.FC<{
  className?: string;
  items?: OtherTokenType[];
}> = ({
  className, items,
}) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');

  return (
    <div className={classnames(className)}>
      {items.map((x, i) => {
        return (
          <React.Fragment key={`votes-mobile-${i}`}>
            <div className={classes.list}>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('token')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.denom}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('available')}
                </Typography>
                <Typography variant="body1" className="value">
                  {numeral(x.available.value).format('0,0.[0000]')}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('reward')}
                </Typography>
                <Typography variant="body1" className="value">
                  {numeral(x.reward.value).format('0,0.[0000]')}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('commission')}
                </Typography>
                <Typography variant="body1" className="value">
                  {numeral(x.commission.value).format('0,0.[0000]')}
                </Typography>
              </div>
            </div>
            {i !== items.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
