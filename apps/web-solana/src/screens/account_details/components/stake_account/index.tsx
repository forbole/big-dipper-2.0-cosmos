import React from 'react';
import {
  Overview,
  StakeInfo,
} from './components';
import { useStyles } from './styles';
import { useTokenDetailAccount } from './hooks';

const StakeAccount = () => {
  const classes = useStyles();
  const { state } = useTokenDetailAccount();

  return (
    <>
      <Overview className={classes.overview} overview={state.overview} />
      <StakeInfo className={classes.overview} stake={state.stakeInfo} />
    </>
  );
};

export default StakeAccount;
