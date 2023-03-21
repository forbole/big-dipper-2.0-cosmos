import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { FC, Fragment } from 'react';
import { useRecoilValue } from 'recoil';
import AvatarName from '@/components/avatar_name';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { readDate } from '@/recoil/settings';
import useStyles from '@/screens/proposal_details/components/deposits/components/mobile/styles';
import type { ItemType } from '@/screens/proposal_details/components/deposits/types';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { formatNumber } from '@/utils/format_token';

type DepositRowProps = {
  i: number;
  item: ItemType;
  isLast: boolean;
};

const DepositsRow: FC<DepositRowProps> = ({ i, item, isLast }) => {
  const { t } = useTranslation('proposals');
  const { classes } = useStyles();
  const dateFormat = useRecoilValue(readDate);
  const { name, address, imageUrl } = useProfileRecoil(item.user);

  return (
    <Fragment key={`depositors-mobile-${i}`}>
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
                  //Removed ".toUpperCase()" from the end of the line below per Reza's request
                )} ${item.amount.displayDenom}`
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
      // eslint-disable-next-line react/no-array-index-key
      <DepositsRow key={i} i={i} item={x} isLast={i === items.length - 1} />
    ))}
  </div>
);

export default Mobile;
