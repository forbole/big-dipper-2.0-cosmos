import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import AvatarName from '@/components/avatar_name';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { readDate, readTimeFormat } from '@/recoil/settings';
import useStyles from '@/screens/account_details/components/staking/components/unbondings/components/mobile/styles';
import type { ItemType } from '@/screens/account_details/components/staking/components/unbondings/types';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { formatNumber } from '@/utils/format_token';

type UnbondingsItemProps = {
  item: ItemType;
  isLast: boolean;
};

const UnbondingsItem: FC<UnbondingsItemProps> = ({ item, isLast }) => {
  const { name, address, imageUrl } = useProfileRecoil(item.validator);
  const { classes } = useStyles();
  const { t } = useAppTranslation('accounts');
  const dateFormat = useRecoilValue(readDate);
  const timeFormat = useRecoilValue(readTimeFormat);
  return (
    <>
      <div className={classes.list}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('validator')}
          </Typography>
          <AvatarName address={address} imageUrl={imageUrl} name={name} location="unbondingRow" />
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('completionTime')}
          </Typography>
          {formatDayJs(dayjs.utc(item.completionTime), dateFormat, timeFormat)}
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
      {!isLast && <Divider />}
    </>
  );
};

type MobileProps = {
  className?: string;
  items: ItemType[];
};

const Mobile: FC<MobileProps> = ({ className, items }) => (
  <div className={className}>
    {items?.map((x, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <UnbondingsItem key={`${x.validator}-${i}`} item={x} isLast={i === items.length - 1} />
    ))}
  </div>
);

export default Mobile;
