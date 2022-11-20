import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import dayjs, { formatDayJs } from 'ui/utils/dayjs';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { useRecoilValue } from 'recoil';
import { readDate } from 'ui/recoil/settings';
import AvatarName from 'ui/components/avatar_name';
import { formatNumber } from 'ui/utils/format_token';
import { useStyles } from './styles';
import type { ItemType } from '../../types';

const Mobile: React.FC<{
  className?: string;
  items?: ItemType[];
}> = ({ className, items }) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const dateFormat = useRecoilValue(readDate);
  const formattedItems =
    items?.map((x) => ({
        address: (
          <AvatarName
            address={x.address.address}
            imageUrl={x.address.imageUrl}
            name={x.address.name}
          />
        ),
        to: <AvatarName address={x.to.address} imageUrl={x.to.imageUrl} name={x.to.name} />,
        amount: `${formatNumber(
          x.amount.value,
          x.amount.exponent
        )} ${x.amount.displayDenom.toUpperCase()}`,
        completionTime: formatDayJs((dayjs as any).utc(x.completionTime), dateFormat),
      })) ?? [];

  return (
    <div className={classnames(className)}>
      {formattedItems?.map((x, i) => (
          <React.Fragment key={`votes-mobile-${x.completionTime}`}>
            <div className={classes.list}>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('address')}
                </Typography>
                {x.address}
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('to')}
                </Typography>
                {x.to}
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
            {!!items && i !== items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
    </div>
  );
};

export default Mobile;
