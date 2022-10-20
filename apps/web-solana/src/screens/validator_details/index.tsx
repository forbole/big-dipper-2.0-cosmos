import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  LoadAndExist,
  DesmosProfile,
} from '@components';
import { useStyles } from './styles';
import {
  Profile,
  Transactions,
  Staking,
  ValidatorOverview,
  SkipRate,
  VotingPower,
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
    desmosProfile,
    activeStake,
    deactiveStake,
    status,
  } = state;

  return (
    <>
      <NextSeo
        title={t('validatorDetails')}
        openGraph={{
          title: t('validatorDetails'),
        }}
      />
      <Layout navTitle={t('validatorDetails')}>
        <LoadAndExist
          exists={state.exists}
          loading={state.loading}
        >
          <span className={classes.root}>
            {desmosProfile ? (
              <DesmosProfile
                className={classes.profile}
                dtag={desmosProfile.dtag}
                nickname={desmosProfile.nickname}
                imageUrl={desmosProfile.imageUrl}
                coverUrl={desmosProfile.coverUrl}
                bio={desmosProfile.bio}
                connections={desmosProfile.connections}
              />
            ) : (
              <Profile
                className={classes.profile}
                validator={overview.validator}
                identity={overview.identity}
                voteKey={overview.voteKey}
                description={overview.description}
                website={overview.website}
              />
            )}
            <ValidatorOverview
              className={classes.address}
              identity={overview.identity}
              voteKey={overview.voteKey}
              status={status.status}
              jailed={status.jailed}
              condition={status.condition}
              commission={status.commission}
              signedBlockWindow={status.signedBlockWindow}
              missedBlockCounter={status.missedBlockCounter}
              lastSeen={status.lastSeen}
            />
            <SkipRate
              className={classes.skipRate}
            />
            <VotingPower
              className={classes.votingPower}
              data={state.votingPower}
            />
            <Blocks className={classes.blocks} />
            <Staking
              className={classes.staking}
              activeStake={activeStake}
              deactiveStake={deactiveStake}
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
    </>
  );
};

export default ValidatorDetails;
