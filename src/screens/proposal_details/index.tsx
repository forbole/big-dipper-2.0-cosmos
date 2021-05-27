import React from 'react';
import useTranslation from 'next-translate/useTranslation';
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
import { ProposalProvider } from './contexts/proposal';
import { useProposalDetails } from './hooks';

const ProposalDetails = () => {
  const { t } = useTranslation('proposals');
  const classes = useStyles();
  const { state } = useProposalDetails();
  const {
    overview,
    content,
    tally,
  } = state;
  console.log(state, 'state');
  return (
    <Layout
      title={t('proposalDetails')}
      navTitle={t('proposalDetails')}
    >
      <ProposalProvider>
        {({
          exists, loading,
        }) => {
          return (
            <LoadAndExist
              exists={state.exists}
              loading={state.loading}
            >
              <span className={classes.root}>
                <Overview
                  className={classes.overview}
                  title={overview.title}
                  id={overview.id}
                  description={overview.description}
                  status={overview.status}
                  submitTime={overview.submitTime}
                  depositEndTime={overview.depositEndTime}
                  votingStartTime={overview.votingStartTime}
                  votingEndTime={overview.votingEndTime}
                  content={content}
                />
                <VotesGraph
                  className={classes.votesGraph}
                  data={tally}
                />
                <Votes className={classes.votes} />
                <Deposits className={classes.deposits} />
              </span>
            </LoadAndExist>
          );
        }}
      </ProposalProvider>
    </Layout>
  );
};

export default ProposalDetails;
