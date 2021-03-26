import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
} from '@components';
import { useStyles } from './styles';
import {
  Profile,
  VotingPower,
  Transactions,
  Staking,
} from './components';

const ValidatorDetails = () => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  return (
    <Layout navTitle={t('validatorDetails')} className={classes.root}>
      <Profile className={classes.profile} />
      <VotingPower className={classes.votingPower} />
      <div className={classes.blocks}>blocks</div>
      <Staking className={classes.staking} />
      <Transactions className={classes.transactions} />
    </Layout>
  );
};

export default ValidatorDetails;
