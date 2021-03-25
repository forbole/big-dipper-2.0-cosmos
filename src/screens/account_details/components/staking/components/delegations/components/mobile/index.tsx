import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Divider, Typography,
} from '@material-ui/core';
import { AvatarName } from '@components';
import { useStyles } from './styles';

const Mobile: React.FC<{
  className?: string;
  items?: any[];
}> = ({
  className, items,
}) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const formatItems = items.map((x) => {
    return ({
      validator: (
        <AvatarName
          address={x?.validator?.identity}
          imageUrl={x?.validator?.image}
          name={x?.validator?.moniker}
        />
      ),
      amount: x.amount,
      commission: x.commission,
      reward: x.reward,
    });
  });
  return (
    <div className={classnames(className)}>
      {formatItems.map((x, i) => {
        return (
          <React.Fragment key={`votes-mobile-${i}`}>
            <div className={classes.list}>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('validator')}
                </Typography>
                {x.validator}
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('commission')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.commission}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('amount')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.amount}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('reward')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.reward}
                </Typography>
              </div>
            </div>
            {i !== formatItems.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
