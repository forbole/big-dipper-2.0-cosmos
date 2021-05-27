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
import { useProposalDetails } from './hooks';

const ProposalDetails = () => {
  const { t } = useTranslation('proposals');
  const classes = useStyles();
  const {
    state, handleTabChange,
  } = useProposalDetails();
  const {
    overview,
    content,
    tally,
    votes,
    deposits,
  } = state;

  return (
    <Layout
      title={t('proposalDetails')}
      navTitle={t('proposalDetails')}
    >
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
          <Votes
            className={classes.votes}
            data={votes.data}
            tab={votes.tab}
            yes={votes.yes}
            no={votes.no}
            abstain={votes.abstain}
            veto={votes.veto}
            total={votes.total}
            handleTabChange={handleTabChange}
          />
          <Deposits
            className={classes.deposits}
            data={deposits}
          />
        </span>
      </LoadAndExist>
    </Layout>
  );
};

export default ProposalDetails;
