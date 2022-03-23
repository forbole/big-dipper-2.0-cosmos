import React from 'react';
import numeral from 'numeral';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { useStyles } from './styles';
import { useOnlineVotingPower } from './hooks';

const OnlineVotingPower: React.FC<ComponentDefault> = () => {
  const { t } = useTranslation('home');
  const { state } = useOnlineVotingPower();

  const votingPowerPercent = state.totalVotingPower === 0
    ? numeral(0) : numeral((state.votingPower / state.totalVotingPower) * 100);

  const classes = useStyles(votingPowerPercent.format(0));

  return (
    <div className={classes.root}>
      <Typography variant="h2">
        {t('onlineVotingPower')}
      </Typography>
      <div className={classes.data}>
        <Typography variant="h3" className="primary__data">
          {`${votingPowerPercent.format('0,0.00', (n) => ~~n)}%`}
        </Typography>
        <Typography variant="body1">
          {numeral(state.votingPower).format('0,0')}
          {' '}
          /
          {' '}
          {numeral(state.totalVotingPower).format('0,0')}
        </Typography>
      </div>
      <div className={classes.chart}>
        <div className={classes.active} />
      </div>
      <div className={classes.itemsContainer}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('validators')}
          </Typography>
          <Typography variant="body1" className="value">
            {numeral(state.activeValidators).format('0,0')}
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('votingPowerPercent')}
          </Typography>
          <Typography variant="body1" className="value">
            {`${votingPowerPercent.format('0,0.00', (n) => ~~n)}%`}
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('votingPower')}
          </Typography>
          <Typography variant="body1" className="value">
            {numeral(state.votingPower).format('0,0')}
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('totalVotingPower')}
          </Typography>
          <Typography variant="body1" className="value">
            {numeral(state.totalVotingPower).format('0,0')}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default OnlineVotingPower;
