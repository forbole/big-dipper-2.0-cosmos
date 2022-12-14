import AvatarName from '@/components/avatar_name';
import { readDate } from '@/recoil/settings';
import { useStyles } from '@/screens/validator_details/components/staking/components/unbondings/components/mobile/styles';
import type { ItemType } from '@/screens/validator_details/components/staking/components/unbondings/types';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { formatNumber } from '@/utils/format_token';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { useRecoilValue } from 'recoil';

const Mobile: React.FC<{
  className?: string;
  items: ItemType[];
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
      amount: x.amount
        ? `${formatNumber(
            x.amount.value,
            x.amount.exponent
          )} ${x.amount.displayDenom.toUpperCase()}`
        : '',
      completionTime: formatDayJs(dayjs.utc(x.completionTime), dateFormat),
    })) ?? [];

  return (
    <div className={classnames(className)}>
      {formattedItems?.map((x, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={`votes-mobile-${i}`}>
          <div className={classes.list}>
            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('address')}
              </Typography>
              {x.address}
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
