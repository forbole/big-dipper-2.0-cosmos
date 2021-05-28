import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  LoadAndExist,
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
import { useValidatorDetails } from './hooks';

const ValidatorDetails = () => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  const { state } = useValidatorDetails();
  return (
    <Layout navTitle={t('validatorDetails')} title={t('validatorDetails')}>
      <AccountProvider>
        {({
          exists, loading,
        }) => {
          return (
            <LoadAndExist
              exists={state.exists}
              loading={state.loading}
            >
              <span className={classes.root}>
                <Profile className={classes.profile} />
                <VotingPower className={classes.votingPower} />
                <Blocks className={classes.blocks} />
                <Staking className={classes.staking} />
                <Transactions className={classes.transactions} />
              </span>
            </LoadAndExist>
          );
        }}
      </AccountProvider>

    </Layout>
  );
};

export default ValidatorDetails;
