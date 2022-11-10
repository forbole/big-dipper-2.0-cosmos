import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import Layout from 'ui/components/layout';
import LoadAndExist from 'ui/components/load_and_exist';
import DesmosProfile from 'ui/components/desmos_profile';
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
  const { state } = useValidatorDetails();
  const { desmosProfile, status } = state;

  return (
    <>
      <NextSeo
        title={t('validatorDetails')}
        openGraph={{
          title: t('validatorDetails'),
        }}
      />
      <Layout navTitle={t('validatorDetails')}>
        <LoadAndExist exists={state.exists} loading={state.loading}>
          <span className={classes.root}>
            {desmosProfile ? (
              <DesmosProfile className={classes.profile} {...desmosProfile} />
            ) : (
              <Profile className={classes.profile} profile={state.overview} />
            )}
            <ValidatorOverview
              className={classes.address}
              overview={state.overview}
              status={state.status}
            />
            <VotingPower
              className={classes.votingPower}
              data={state.votingPower}
              status={status.status}
            />
            <Blocks className={classes.blocks} />
            <Staking className={classes.staking} />
            <Transactions className={classes.transactions} />
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default ValidatorDetails;
