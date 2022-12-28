import AvatarName from '@/components/avatar_name';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { readDate } from '@/recoil/settings';
import { useStyles } from '@/screens/proposal_details/components/deposits/components/mobile/styles';
import type { ItemType } from '@/screens/proposal_details/components/deposits/types';
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

const DepositsRow: FC<{ i: number; item: ItemType; items: ItemType[] }> = ({ i, item, items }) => {
  const { t } = useTranslation('proposals');
  const classes = useStyles();
  const dateFormat = useRecoilValue(readDate);
  const { name, address, imageUrl } = useProfileRecoil(item.user);

  return (
    <React.Fragment key={`depositors-mobile-${i}`}>
      <div className={classes.list}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('depositor')}
          </Typography>
          {address ? <AvatarName address={address} imageUrl={imageUrl} name={name} /> : <>-</>}
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('amount')}
          </Typography>
          <Typography variant="body1" className="value">
            {item.amount
              ? `${formatNumber(
                  item.amount.value,
                  item.amount.exponent
                )} ${item.amount.displayDenom.toUpperCase()}`
              : ''}
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('time')}
          </Typography>
          <Typography variant="body1" className="value">
            {formatDayJs(dayjs.utc(item.timestamp), dateFormat)}
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
      <DepositsRow key={i} i={i} item={x} items={items} />
    ))}
  </div>
);

export default Mobile;
