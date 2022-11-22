import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import Layout from '@components/layout';
import LoadAndExist from 'ui/components/load_and_exist';
import { useStyles } from './styles';
import Overview from './components/overview';
import Votes from './components/votes';
import Deposits from './components/deposits';
import VotesGraph from './components/votes_graph';
import { useProposalDetails } from './hooks';
import { shouldShowData } from './utils';

const ProposalDetails = () => {
  const { t } = useTranslation('proposals');
  const classes = useStyles();
  const { state } = useProposalDetails();
  const { overview } = state;

  return (
    <>
      <NextSeo
        title={t('proposalDetails')}
        openGraph={{
          title: t('proposalDetails'),
        }}
      />
      <Layout navTitle={t('proposalDetails')}>
        <LoadAndExist exists={state.exists} loading={state.loading}>
          <span className={classes.root}>
            <Overview className={classes.overview} overview={overview} />
            {shouldShowData(overview.status) && <VotesGraph className={classes.votesGraph} />}
            {shouldShowData(overview.status) && <Votes className={classes.votes} />}
            <Deposits className={classes.deposits} />
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default ProposalDetails;
