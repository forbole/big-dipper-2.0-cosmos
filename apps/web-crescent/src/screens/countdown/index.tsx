/* eslint-disable */
import React, { useState } from 'react';
import * as R from 'ramda';
import { Typography } from '@material-ui/core';
import { useInterval } from '@hooks';
import dayjs from '@utils/dayjs';
import { useRecoilValue } from 'recoil';
import { chainConfig } from '@configs';
import { readTheme } from '@recoil/settings';
import { useStyles } from './styles';
import { Loading } from '@components';

const Countdown: React.FC<{
  startGenesis: () => void;
}> = ({ startGenesis }) => {
  const theme = useRecoilValue(readTheme);
  const classes = useStyles();
  const [state, setState] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
    interval: 1000,
    loading: false,
  });

  const genesisTime = dayjs.utc(chainConfig.genesis.time);
  const logoUrl = R.pathOr(chainConfig.logo.default, ['logo', theme], chainConfig);

  const intervalCallback = () => {
    const timeNow = dayjs.utc();
    const difference = genesisTime.diff(timeNow);
    if (difference > 0) {
      setState((prevState) => ({
        ...prevState,
        day: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minute: Math.floor((difference / 1000 / 60) % 60),
        second: Math.floor((difference / 1000) % 60)
      }))
    } else {
      setState((prevState) => ({
        ...prevState,
        interval: null,
        loading: true,
      }));
      startGenesis();
    }
  };

  useInterval(intervalCallback, state.interval);


  return (
    <div className={classes.root}>
      <img src={logoUrl} className={classes.logo} alt="logo" />
      <div className={classes.timeContainer}>
        <div className={classes.item}>
          <Typography variant="h1">
            {state.day}
          </Typography>
          <Typography variant="h3">
            Day
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h1">
            {state.hour}
          </Typography>
          <Typography variant="h3">
            Hour
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h1">
            {state.minute}
          </Typography>
          <Typography variant="h3">
            Min
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h1">
            {state.second}
          </Typography>
          <Typography variant="h3">
            Sec
          </Typography>
        </div>
      </div>
      <Typography variant="h2" className={classes.chain}>
      {chainConfig.network}
      </Typography>
      {state.loading && <Loading />}
    </div>
  );
};

export default Countdown;
