import { FC } from 'react';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import Box from '@/components/box';
import { formatNumber } from '@/utils/format_token';
import useStyles from '@/screens/validator_details/components/stake/styles';
import type { StakeType } from '@/screens/validator_details/types';

const Stake: FC<{ className?: string; stake: StakeType }> = ({ className, stake }) => {
  const { t } = useAppTranslation('validators');

  const { classes, cx } = useStyles({ percentage: stake.stakePercent });

  return (
    <Box className={cx(classes.root, className)}>
      <Typography variant="h2">{t('stake')}</Typography>
      <div className={classes.data}>
        <Typography variant="h3" className="primary__data">
          {`${stake.stakePercent}%`}
        </Typography>
        <Typography variant="body1">
          {formatNumber(stake.locked.value, 2)} / {formatNumber(stake.totalStaked.value, 2)}
        </Typography>
      </div>
      <div className={classes.chart}>
        <div className={classes.active} />
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('stake')}
        </Typography>
        <Typography variant="body1" className="value">
          {formatNumber(stake.stake.value, 2)} {stake.stake.displayDenom.toUpperCase()}
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('topUp')}
        </Typography>
        <Typography variant="body1" className="value">
          {formatNumber(stake.topUp.value, 2)} {stake.topUp.displayDenom.toUpperCase()}
        </Typography>
      </div>
    </Box>
  );
};

export default Stake;
