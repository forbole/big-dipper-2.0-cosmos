import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  NotFound,
  LinearLoading,
} from '@components';
import { useStyles } from './styles';
import {
  Profile,
  VotingPower,
  Transactions,
  Staking,
  Blocks,
} from './components';
import { AccountProvider } from './contexts/account';

const ValidatorDetails = () => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  return (
    <Layout navTitle={t('validatorDetails')}>
      <AccountProvider>
        {({
          exists, loading,
        }) => {
          if (loading) {
            return <LinearLoading />;
          }

          if (!exists && !loading) {
            return <NotFound />;
          }

          return (
            <span className={classes.root}>
              <Profile className={classes.profile} />
              <VotingPower className={classes.votingPower} />
              <Blocks className={classes.blocks} />
              <Staking className={classes.staking} />
              <Transactions className={classes.transactions} />
            </span>
          );
        }}
      </AccountProvider>

    </Layout>
  );
};

export default ValidatorDetails;
