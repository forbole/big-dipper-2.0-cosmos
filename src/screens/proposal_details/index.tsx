import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
} from '@components';
import { useStyles } from './styles';

import {
  Overview,
  // Votes,
  // Deposits,
  // VotesGraph,
} from './components';
import { ProposalProvider } from './contexts/proposal';

const ProposalDetails = () => {
  const { t } = useTranslation('proposals');
  const classes = useStyles();

  return (
    <Layout
      title={t('proposalDetails')}
      navTitle={t('proposalDetails')}
      className={classes.root}
    >
      <ProposalProvider>
        <Overview className={classes.overview} />
        {/* <VotesGraph className={classes.votesGraph} />
        <Votes className={classes.votes} />
        <Deposits className={classes.deposits} /> */}
      </ProposalProvider>
    </Layout>
  );
};

export default ProposalDetails;
