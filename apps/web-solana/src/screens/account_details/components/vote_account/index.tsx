import React from 'react';
import {
  Overview,
  Validator,
  SkipRate,
} from './components';
import { useStyles } from './styles';
import { useVoteAccount } from './hooks';

const VoteAccount = () => {
  const classes = useStyles();
  const { state } = useVoteAccount();

  return (
    <>
      <Validator className={classes.validator} validator={state.validatorProfile} />
      <Overview className={classes.overview} overview={state.overview} />
      <SkipRate className={classes.skipRate} skipRate={state.skipRate} />
    </>
  );
};

export default VoteAccount;
