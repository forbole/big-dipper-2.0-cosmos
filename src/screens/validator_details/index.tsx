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
import { useValidatorDetails } from './hooks';

const ValidatorDetails = () => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  const {
    state,
    loadNextPage,
  } = useValidatorDetails();
  const {
    overview,
    delegations,
    redelegations,
    undelegations,
  } = state;
  return (
    <Layout navTitle={t('validatorDetails')} title={t('validatorDetails')}>
      <LoadAndExist
        exists={state.exists}
        loading={state.loading}
      >
        <span className={classes.root}>
          <Profile
            className={classes.profile}
            validator={overview.validator}
            operatorAddress={overview.operatorAddress}
            selfDelegateAddress={overview.selfDelegateAddress}
            description={overview.description}
            status={overview.status}
            jailed={overview.jailed}
            website={overview.website}
            condition={overview.condition}
            commission={overview.commission}
            signedBlockWindow={overview.signedBlockWindow}
            missedBlockCounter={overview.missedBlockCounter}
          />
          <VotingPower
            className={classes.votingPower}
            data={state.votingPower}
          />
          <Blocks className={classes.blocks} />
          <Staking
            className={classes.staking}
            delegations={delegations}
            redelegations={redelegations}
            undelegations={undelegations}
          />
          <Transactions
            className={classes.transactions}
            loadNextPage={loadNextPage}
            data={state.transactions.data}
            hasNextPage={state.transactions.hasNextPage}
            isNextPageLoading={state.transactions.isNextPageLoading}
          />
        </span>
      </LoadAndExist>
    </Layout>
  );
};

export default ValidatorDetails;
