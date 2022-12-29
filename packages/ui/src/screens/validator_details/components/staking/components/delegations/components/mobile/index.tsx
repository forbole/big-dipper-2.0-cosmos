import AvatarName from '@/components/avatar_name';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { useStyles } from '@/screens/validator_details/components/staking/components/delegations/components/mobile/styles';
import type { ItemType } from '@/screens/validator_details/components/staking/components/delegations/types';
import { formatNumber } from '@/utils/format_token';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, Fragment } from 'react';

type DelegationsItemProps = {
  i: number;
  item: ItemType;
  isLast: boolean;
};

const DelegationsItem: FC<DelegationsItemProps> = ({ i, item, isLast }) => {
  const { name, address, imageUrl } = useProfileRecoil(item.address);
  const classes = useStyles();
  const { t } = useTranslation('accounts');

  return (
    <Fragment key={`votes-mobile-${i}`}>
      <div className={classes.list}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('address')}
          </Typography>
          <AvatarName name={name} address={address} imageUrl={imageUrl} />
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('amount')}
          </Typography>
          <Typography variant="body1" className="value">
            {item.amount ? formatNumber(item.amount.value, item.amount.exponent) : ''}{' '}
            {item.amount?.displayDenom.toUpperCase()}
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
  <div className={classnames(className)}>
    {items?.map((x, i) => (
      <DelegationsItem
        // eslint-disable-next-line react/no-array-index-key
        key={`${x.address}-${i}`}
        i={i}
        item={x}
        isLast={!items || i === items.length - 1}
      />
    ))}
  </div>
);

export default Mobile;
