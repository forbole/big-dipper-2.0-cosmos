import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import dayjs from '@utils/dayjs';
import numeral from 'numeral';
import {
  Divider, Typography,
} from '@material-ui/core';
import { AvatarName } from '@components';
import { RedelegationType } from '@src/screens/account_details/types';
import { chainConfig } from '@configs';
import { useStyles } from './styles';

const Mobile: React.FC<{
  className?: string;
  items?: RedelegationType[];
}> = ({
  className, items,
}) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const formattedItems = items.map((x) => {
    return ({
      to: (
        <AvatarName
          address={x.to.address}
          imageUrl={x.to.imageUrl}
          name={x.to.name}
        />
      ),
      from: (
        <AvatarName
          address={x.from.address}
          imageUrl={x.from.imageUrl}
          name={x.from.name}
        />
      ),
      linkedUntil: dayjs.utc(x.linkedUntil).local().format('MMMM DD, YYYY hh:mm A'),
      amount: `${numeral(x.amount).format('0,0.[0000]')} ${chainConfig.display.toUpperCase()}`,
    });
  });

  return (
    <div className={classnames(className)}>
      {formattedItems.map((x, i) => {
        return (
          <React.Fragment key={`votes-mobile-${i}`}>
            <div className={classes.list}>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('from')}
                </Typography>
                {x.from}
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('to')}
                </Typography>
                {x.to}
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
                  {t('linkedUntil')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.linkedUntil}
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
