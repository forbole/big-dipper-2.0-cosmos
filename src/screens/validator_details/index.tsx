import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  LoadAndExist,
  DesmosProfile,
} from '@components';
import { chainConfig } from '@configs';
import { useStyles } from './styles';
import {
  Profile,
  VotingPower,
  Transactions,
  Staking,
  Blocks,
  Address,
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
    desmosProfile,
  } = state;
  const fakeDesmosProfileData = [...new Array(3).fill({
    network: 'Desmos',
    identifier: 'desmos124xa66ghhq5hrgv28slhmszgvcqa0skcfwphh3',
    creationTime: '2021-05-14T02:58:58.471405',
  }), ...new Array(3).fill({
    network: 'Instagram',
    identifier: '@ryuash',
    creationTime: '2021-05-14T02:58:58.471405',
  })];

  return (
    <Layout navTitle={t('validatorDetails')} title={t('validatorDetails')}>
      <LoadAndExist
        exists={state.exists}
        loading={state.loading}
      >
        <span className={classes.root}>
          <Address
            className={classes.address}
            operatorAddress={overview.operatorAddress}
            selfDelegateAddress={overview.selfDelegateAddress}
          />
          {desmosProfile ? (
            <DesmosProfile
              className={classes.profile}
              dtag={desmosProfile.dtag}
              nickname={desmosProfile.nickname}
              imageUrl={desmosProfile.imageUrl}
              bio={desmosProfile.bio}
              connections={fakeDesmosProfileData}
              validator={{
                status: overview.status,
                jailed: overview.jailed,
                condition: overview.condition,
                commission: overview.commission,
                signedBlockWindow: overview.signedBlockWindow,
                missedBlockCounter: overview.missedBlockCounter,
              }}
            />
          ) : (
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
          )}
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
