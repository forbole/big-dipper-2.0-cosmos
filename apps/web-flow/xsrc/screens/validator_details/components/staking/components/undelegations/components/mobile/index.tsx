import React from 'react';
import classnames from 'classnames';
import dayjs, { formatDayJs } from '@utils/dayjs';
import useTranslation from 'next-translate/useTranslation';
import { AvatarName } from '@components';
import { formatNumber } from '@utils/format_token';
import { useRecoilValue } from 'recoil';
import { readDate } from '@recoil/settings';
import {
  Divider, Typography,
} from '@material-ui/core';
import { useStyles } from './styles';
import { ItemType } from '../../types';

const Mobile: React.FC<{
  className?: string;
  items: ItemType[];
}> = ({
  className, items,
}) => {
  const classes = useStyles();
  const { t } = useTranslation('validators');
  const dateFormat = useRecoilValue(readDate);
  return (
    <div className={classnames(className)}>
      {items.map((x, i) => {
        const amount = formatNumber(x.amount.value, x.amount.exponent);
        return (
          <React.Fragment key={`votes-mobile-${i}`}>
            <div className={classes.list}>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('address')}
                </Typography>
                <AvatarName
                  address={x.delegator.address}
                  imageUrl={x.delegator.imageUrl}
                  name={x.delegator.name}
                />
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('amount')}
                </Typography>
                <Typography variant="body1" className="value">
                  {`${amount} ${x.amount.displayDenom.toUpperCase()}`}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('linkedUntil')}
                </Typography>
                <Typography variant="body1" className="value">
                  {formatDayJs(dayjs.utc(x.linkedUntil), dateFormat)}
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
