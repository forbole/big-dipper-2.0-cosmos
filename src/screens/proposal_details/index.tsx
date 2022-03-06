import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  LoadAndExist,
} from '@components';
import { useStyles } from './styles';
import {
  Overview,
  Votes,
  Deposits,
  VotesGraph,
} from './components';
import { useProposalDetails } from './hooks';
import { shouldShowData } from './utils';

const ProposalDetails = () => {
  const { t } = useTranslation('proposals');
  const classes = useStyles();
  const {
    state,
    // handleTabChange,
  } = useProposalDetails();
  const {
    overview,
    // content,
    // tally,
    // votes,
    // deposits,
  } = state;

  return (
    <>
      <NextSeo
        title={t('proposalDetails')}
        openGraph={{
          title: t('proposalDetails'),
        }}
      />
      <Layout
        navTitle={t('proposalDetails')}
      >
        <LoadAndExist
          exists={state.exists}
          loading={state.loading}
        >
          <span className={classes.root}>
            <Overview
              className={classes.overview}
              overview={overview}
            />
            {shouldShowData(overview.status) && (
            <VotesGraph className={classes.votesGraph} />
            )}
            {shouldShowData(overview.status) && (
            <Votes className={classes.votes} />
            )}
            <Deposits
              className={classes.deposits}
            />
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default ProposalDetails;
