/* eslint-disable */
import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { useInterval } from '@hooks';
import dayjs from '@utils/dayjs';
import { chainConfig } from '@src/chain_config';
import { useStyles } from './styles';

const Countdown = () => {
  const classes = useStyles();
  // const utcTimeNow = dayjs.utc().diff(genesisTime,'day');
  // .format('YYYY-MM-DDTHH:mm:ss');
  const genesisTime = dayjs.utc(chainConfig.genesis.time);
  const [state, setState] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  const intervalCallback = () => {
    const timeNow = dayjs.utc();
    const difference = genesisTime.diff(timeNow);
    if (difference > 0) {
      setState({
        day: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minute: Math.floor((difference / 1000 / 60) % 60),
        second: Math.floor((difference / 1000) % 60)
      })
    }
  };

  useInterval(intervalCallback, 1000);

  return (
    <div className={classes.root}>
      <Typography variant="h2">
        Genesis Countdown
      </Typography>
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
    </div>
  );
};

export default Countdown;
