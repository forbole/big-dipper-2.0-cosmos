import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

const Countdown = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1">
        Genesis Countdown
      </Typography>
    </div>
  );
};

export default Countdown;
