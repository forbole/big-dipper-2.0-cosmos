import React from 'react';
import {
  Overview,
} from './components';
import { useStyles } from './styles';
import { useNonceAccount } from './hooks';

const NonceAccount = () => {
  const classes = useStyles();
  const { state } = useNonceAccount();

  return (
    <>
      <Overview className={classes.overview} overview={state.overview} />
    </>
  );
};

export default NonceAccount;
