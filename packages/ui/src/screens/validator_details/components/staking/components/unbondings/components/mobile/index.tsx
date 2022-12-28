import AvatarName from '@/components/avatar_name';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { readDate } from '@/recoil/settings';
import { useStyles } from '@/screens/validator_details/components/staking/components/unbondings/components/mobile/styles';
import type { ItemType } from '@/screens/validator_details/components/staking/components/unbondings/types';
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
  items: ItemType[];
};

const UnbondingsItem: FC<{
  i: number;
  item: ItemType;
  items: ItemType[];
}> = ({ i, item, items }) => {
  const { name, address, imageUrl } = useProfileRecoil(item.address);
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const dateFormat = useRecoilValue(readDate);
  return (
    <React.Fragment key={`votes-mobile-${i}`}>
      <div className={classes.list}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('address')}
          </Typography>
          <AvatarName address={address} imageUrl={imageUrl} name={name} />
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
      <UnbondingsItem key={i} i={i} item={x} items={items} />
    ))}
  </div>
);

export default Mobile;
