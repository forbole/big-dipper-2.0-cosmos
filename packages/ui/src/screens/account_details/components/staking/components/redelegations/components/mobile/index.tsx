import AvatarName from '@/components/avatar_name';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { readDate } from '@/recoil/settings';
import { useStyles } from '@/screens/account_details/components/staking/components/redelegations/components/mobile/styles';
import type { ItemType } from '@/screens/account_details/components/staking/components/redelegations/types';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { formatNumber } from '@/utils/format_token';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

type Props = {
  className?: string;
  items?: ItemType[];
};

const RedelegationsItem: FC<{
  i: number;
  item: ItemType;
  items: ItemType[];
}> = ({ i, item, items }) => {
  const from = useProfileRecoil(item.from);
  const to = useProfileRecoil(item.to);
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const dateFormat = useRecoilValue(readDate);
  return (
    <React.Fragment key={`votes-mobile-${i}`}>
      <div className={classes.list}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('from')}
          </Typography>
          <AvatarName address={from.address} imageUrl={from.imageUrl} name={from.name} />
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('to')}
          </Typography>
          <AvatarName address={to.address} imageUrl={to.imageUrl} name={to.name} />
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('completionTime')}
          </Typography>
          {formatDayJs(dayjs.utc(item.completionTime), dateFormat)}
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('amount')}
          </Typography>
          {item.amount
            ? `${formatNumber(
                item.amount.value,
                item.amount.exponent
              )} ${item.amount.displayDenom.toUpperCase()}`
            : ''}
        </div>
      </div>
      {!!items && i !== items.length - 1 && <Divider />}
    </React.Fragment>
  );
};

const Mobile: FC<Props> = ({ className, items }) => (
  <div className={classnames(className)}>
    {items?.map((x, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <RedelegationsItem key={i} i={i} item={x} items={items} />
    ))}
  </div>
);

export default Mobile;
