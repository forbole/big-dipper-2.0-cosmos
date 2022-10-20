import React from 'react';
import {
  Overview,
  Balance,
  Accounts,
} from './components';
import {
  Tokens,
} from '..';
import { useNativeAccount } from './hooks';
import { useStyles } from './styles';

const NativeAccount = () => {
  const classes = useStyles();
  const { state } = useNativeAccount();

  return (
    <>
      <Overview className={classes.overview} overview={state.overview} />
      <Balance className={classes.balance} balance={state.balance} />
      <Accounts className={classes.accounts} />
      <Tokens className={classes.tokens} />
    </>
  );
};

export default NativeAccount;
