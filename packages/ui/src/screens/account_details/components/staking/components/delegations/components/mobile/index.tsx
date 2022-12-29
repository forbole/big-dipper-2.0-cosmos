import AvatarName from '@/components/avatar_name';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { useStyles } from '@/screens/account_details/components/staking/components/delegations/components/mobile/styles';
import type { ItemType } from '@/screens/account_details/components/staking/components/delegations/types';
import { formatNumber } from '@/utils/format_token';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type DelegationsItemProps = {
  item: ItemType;
  isLast: boolean;
};

const DelegationsItem: FC<DelegationsItemProps> = ({ item, isLast }) => {
  const { name, address, imageUrl } = useProfileRecoil(item.validator);
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  return (
    <>
      <div className={classes.list}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('validator')}
          </Typography>
          <AvatarName name={name} address={address} imageUrl={imageUrl} />
        </div>
        <div className={classes.flex}>
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('amount')}
            </Typography>
            <Typography variant="body1" className="value">
              {item.amount ? formatNumber(item.amount.value, item.amount.exponent) : ''}{' '}
              {item.amount?.displayDenom.toUpperCase()}
            </Typography>
          </div>
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('reward')}
            </Typography>
            <Typography variant="body1" className="value">
              {item.reward ? formatNumber(item.reward.value, item.reward.exponent) : ''}{' '}
              {item.reward?.displayDenom.toUpperCase()}
            </Typography>
          </div>
        </div>
      </div>
      {!isLast && <Divider />}
    </>
  );
};

type MobileProps = {
  className?: string;
  items?: ItemType[];
};

const Mobile: FC<MobileProps> = ({ className, items }) => (
  <div className={classnames(className)}>
    {items?.map((x, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <DelegationsItem key={`${x.validator}-${i}`} item={x} isLast={i === items.length - 1} />
    ))}
  </div>
);

export default Mobile;
