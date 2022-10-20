import React from 'react';
import {
  Overview,
  Market,
  Header,
  TopHolders,
} from './components';
import { useStyles } from './styles';
import { useTokenAccount } from './hooks';

const TokenAccount = () => {
  const classes = useStyles();
  const {
    state,
  } = useTokenAccount();
  return (
    <div className={classes.root}>
      <Header className={classes.header} header={state.header} />
      <Overview
        className={classes.overview}
        overview={state.overview}
      />
      <Market
        className={classes.market}
        market={state.market}
      />
      <TopHolders className={classes.holders} />
    </div>
  );
};

export default TokenAccount;
