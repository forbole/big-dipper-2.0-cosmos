import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import dayjs, { formatDayJs } from '@utils/dayjs';
import { Divider, Typography } from '@material-ui/core';
import AvatarName from '@components/avatar_name';
import { useRecoilValue } from 'recoil';
import { readDate } from '@recoil/settings';
import { formatNumber } from '@utils/format_token';
import { useStyles } from './styles';
import { ItemType } from '../../types';

const Mobile: React.FC<{
  className?: string;
  items: ItemType[];
}> = ({ className, items }) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const dateFormat = useRecoilValue(readDate);
  const formattedItems = items.map((x) => {
    return {
      validator: (
        <AvatarName
          address={x.validator.address}
          imageUrl={x.validator.imageUrl}
          name={x.validator.name}
        />
      ),
      amount: `${formatNumber(
        x.amount.value,
        x.amount.exponent
      )} ${x.amount.displayDenom.toUpperCase()}`,
      completionTime: formatDayJs(dayjs.utc(x.completionTime), dateFormat),
    };
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
                  {t('completionTime')}
                </Typography>
                {x.completionTime}
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('amount')}
                </Typography>
                {x.amount}
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
