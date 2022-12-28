import AvatarName from '@/components/avatar_name';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { useStyles } from '@/screens/validator_details/components/staking/components/delegations/components/mobile/styles';
import type { ItemType } from '@/screens/validator_details/components/staking/components/delegations/types';
import { formatNumber } from '@/utils/format_token';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

type Props = {
  className?: string;
  items?: ItemType[];
};

const DelegationsItem: FC<{
  i: number;
  item: ItemType;
  items: ItemType[];
}> = ({ i, item, items }) => {
  const { name, address, imageUrl } = useProfileRecoil(item.address);
  const classes = useStyles();
  const { t } = useTranslation('accounts');

  return (
    <React.Fragment key={`votes-mobile-${i}`}>
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
      {!!items && i !== items.length - 1 && <Divider />}
    </React.Fragment>
  );
};

const Mobile: FC<Props> = ({ className, items }) => (
  <div className={classnames(className)}>
    {items?.map((x, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <DelegationsItem i={i} item={x} items={items} />
    ))}
  </div>
);

export default Mobile;
