import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import {
  Divider,
  Typography,
} from '@material-ui/core';
import {
  AvatarName,
} from '@components';
import { DelegationType } from '@src/screens/account_details/types';
import { useStyles } from './styles';

const Mobile: React.FC<{
  className?: string;
  items?: DelegationType[];
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
                  {t('validator')}
                </Typography>
                <AvatarName
                  name={x.validator.name}
                  address={x.validator.address}
                  imageUrl={x.validator.imageUrl}
                />
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('commission')}
                </Typography>
                <Typography variant="body1" className="value">
                  {numeral(x.commission * 100).format('0.00')}
                  %
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('amount')}
                </Typography>
                <Typography variant="body1" className="value">
                  {numeral(x.amount.value).format('0,0.[0000]')}
                  {' '}
                  {x.amount.denom.toUpperCase()}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('reward')}
                </Typography>
                <Typography variant="body1" className="value">
                  {numeral(x.reward.value).format('0,0.[0000]')}
                  {' '}
                  {x.reward.denom.toUpperCase()}
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
