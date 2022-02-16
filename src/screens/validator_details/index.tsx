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
  VotingPower,
  Transactions,
  Staking,
  Blocks,
  ValidatorOverview,
} from './components';
import { useValidatorDetails } from './hooks';

const ValidatorDetails = () => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  const {
    state,
  } = useValidatorDetails();
  const {
    overview,
    desmosProfile,
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
                operatorAddress={overview.operatorAddress}
                selfDelegateAddress={overview.selfDelegateAddress}
                description={overview.description}
                website={overview.website}
              />
            )}
            <ValidatorOverview
              className={classes.address}
              operatorAddress={overview.operatorAddress}
              selfDelegateAddress={overview.selfDelegateAddress}
              status={status.status}
              jailed={status.jailed}
              tombstoned={status.tombstoned}
              condition={status.condition}
              commission={status.commission}
              signedBlockWindow={status.signedBlockWindow}
              missedBlockCounter={status.missedBlockCounter}
              lastSeen={status.lastSeen}
            />
            <VotingPower
              className={classes.votingPower}
              data={state.votingPower}
              status={status.status}
            />
            <Blocks className={classes.blocks} />
            <Staking
              className={classes.staking}
            />
            <Transactions
              className={classes.transactions}
            />
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default ValidatorDetails;
