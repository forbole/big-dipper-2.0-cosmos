import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Divider, Typography } from '@material-ui/core';
import { formatNumber } from 'ui/utils/format_token';
import dayjs, { formatDayJs } from '@utils/dayjs';
import AvatarName from '@components/avatar_name';
import { useRecoilValue } from 'recoil';
import { readDate } from '@recoil/settings';
import { useStyles } from './styles';
import { ItemType } from '../../types';

const Mobile: React.FC<{
  className?: string;
  items?: ItemType[];
}> = ({ className, items }) => {
  const { t } = useTranslation('proposals');
  const classes = useStyles();
  const dateFormat = useRecoilValue(readDate);

  const formattedItems = items.map((x) => {
    return {
      depositor: (
        <>
          {x.user.address ? (
            <AvatarName address={x.user.address} imageUrl={x.user.imageUrl} name={x.user.name} />
          ) : (
            <>-</>
          )}
        </>
      ),
      amount: `${formatNumber(
        x.amount.value,
        x.amount.exponent
      )} ${x.amount.displayDenom.toUpperCase()}`,
      time: formatDayJs(dayjs.utc(x.timestamp), dateFormat),
    };
  });

  return (
    <div className={classnames(className)}>
      {formattedItems.map((x, i) => {
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
            {i !== items.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
