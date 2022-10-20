import React from 'react';
import {
  Overview,
} from './components';
import { useStyles } from './styles';
import { useTokenDetailAccount } from './hooks';

const TokenAccount = () => {
  const classes = useStyles();
  const { state } = useTokenDetailAccount();

  return (
    <Overview className={classes.overview} overview={state.overview} />
  );
};

export default TokenAccount;
