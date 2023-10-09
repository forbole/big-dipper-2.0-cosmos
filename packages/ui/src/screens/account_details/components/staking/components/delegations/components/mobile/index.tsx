import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { FC, Fragment } from 'react';
import AvatarName from '@/components/avatar_name';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import useStyles from '@/screens/account_details/components/staking/components/delegations/components/mobile/styles';
import type { ItemType } from '@/screens/account_details/components/staking/components/delegations/types';
import { formatNumber } from '@/utils/format_token';

type DelegationsItemProps = {
  i: number;
  item: ItemType;
  isLast: boolean;
};

const DelegationsItem: FC<DelegationsItemProps> = ({ i, item, isLast }) => {
  const { name, address, imageUrl } = useProfileRecoil(item.validator);
  const { classes } = useStyles();
  const { t } = useTranslation('accounts');

  return (
    <Fragment key={`votes-mobile-${i}`}>
      <div className={classes.list}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('validator')}
          </Typography>
          <AvatarName name={name} address={address} imageUrl={imageUrl} />
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('amount')}
          </Typography>
          <Typography variant="body1" className="value">
            {item.amount ? formatNumber(item.amount.value, item.amount.exponent) : ''}{' '}
            {/* //Kept the "toUpperCase()" in order to show the token symbol in uppercase */}
            {item.amount?.displayDenom.toUpperCase()}
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('commission')}
          </Typography>
          <Typography variant="body1" className="value">
            {item.commission ? `${item.commission} %` : ''}
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('reward')}
          </Typography>
          <Typography variant="body1" className="value">
            {item.reward ? formatNumber(item.reward.value, item.reward.exponent) : ''}{' '}
            {/* //Kept the "toUpperCase()" in order to show the token symbol in uppercase */}
            {item.reward?.displayDenom.toUpperCase()}
          </Typography>
        </div>
      </div>
      {!isLast && <Divider />}
    </Fragment>
  );
};

type MobileProps = {
  className?: string;
  items?: ItemType[];
};

const Mobile: FC<MobileProps> = ({ className, items }) => (
  <div className={className}>
    {items?.map((x, i) => (
      <DelegationsItem
        key={`${x.validator}-${i}`} // eslint-disable-line react/no-array-index-key
        i={i}
        item={x}
        isLast={i === items.length - 1}
      />
    ))}
  </div>
);

export default Mobile;
