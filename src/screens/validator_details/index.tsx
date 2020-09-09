import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
} from '@components';
import { useStyles } from './styles';
import {
  Profile,
  SkipRate,
  Transactions,
  ActiveStake,
  Potential,
} from './components';

const ValidatorDetails = () => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  return (
    <Layout navTitle={t('validatorDetails')} className={classes.root}>
      <Profile className={classes.profile} />
      <SkipRate className={classes.skipRate} />
      <ActiveStake className={classes.activeStakeGraph} />
      <Potential className={classes.potential} />
      <div className={classes.stakeList}>stake list</div>
      <Transactions className={classes.transactions} />
    </Layout>
  );
};

export default ValidatorDetails;
