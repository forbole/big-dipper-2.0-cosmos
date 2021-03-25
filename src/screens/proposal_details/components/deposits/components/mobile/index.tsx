import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import dayjs from 'dayjs';
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
  const { t } = useTranslation('proposals');
  const classes = useStyles();
  const formatItems = items.map((x) => {
    return ({
      depositor: (
        <AvatarName
          address={x?.depositor?.identity}
          imageUrl={x?.depositor?.image}
          name={x?.depositor?.moniker}
        />
      ),
      amount: x.amount,
      time: dayjs(x.time).format('YYYY-MM-DD'),
    });
  });
  return (
    <div className={classnames(className)}>
      {formatItems.map((x, i) => {
        return (
          <React.Fragment key={`depositors-mobile-${i}`}>
            <div className={classes.list}>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('depositor')}
                </Typography>
                {x.depositor}
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
                  {t('time')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.time}
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
