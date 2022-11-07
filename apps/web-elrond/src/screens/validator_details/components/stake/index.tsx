import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import Box from '@components/box';
import { formatNumber } from 'ui/utils/format_token';
import { useStyles } from './styles';
import { StakeType } from '../../types';

const Stake: React.FC<{ stake: StakeType } & ComponentDefault> = ({ className, stake }) => {
  const { t } = useTranslation('validators');

  const classes = useStyles(stake.stakePercent);

  return (
    <Box className={classnames(className, classes.root)}>
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
