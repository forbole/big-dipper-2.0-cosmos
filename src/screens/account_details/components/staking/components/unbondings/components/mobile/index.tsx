import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import dayjs, { formatDayJs } from '@utils/dayjs';
import numeral from 'numeral';
import {
  Divider, Typography,
} from '@material-ui/core';
import { AvatarName } from '@components';
import { useSettingsContext } from '@contexts';
import { UnbondingType } from '@src/screens/account_details/types';
import { useStyles } from './styles';

const Mobile: React.FC<{
  className?: string;
  items: UnbondingType[];
}> = ({
  className, items,
}) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const {
    dateFormat,
  } = useSettingsContext();
  const formattedItems = items.map((x) => {
    return ({
      validator: (
        <AvatarName
          address={x.validator.address}
          imageUrl={x.validator.imageUrl}
          name={x.validator.name}
        />
      ),
      commission: `${numeral(x.commission * 100).format('0.00')}%`,
      linkedUntil: formatDayJs(dayjs.utc(x.linkedUntil), dateFormat),
      amount: `${numeral(x.amount.value).format(x.amount.format)} ${x.amount.denom.toUpperCase()}`,
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
