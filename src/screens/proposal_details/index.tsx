import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  NotFound,
  LinearLoading,
  LoadAndExist,
} from '@components';
import { Satellite } from '@material-ui/icons';
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

  return (
    <Layout
      title={t('proposalDetails')}
      navTitle={t('proposalDetails')}
    >
      <ProposalProvider>
        {({
          exists, loading,
        }) => {
          if (state.loading) {
            return <LinearLoading />;
          }

          if (!exists && !loading) {
            return <NotFound />;
          }

          return (
          // <LoadAndExist
          //   exists={state.exists}
          //   loading={state.loading}
          // >
            <span className={classes.root}>
              <Overview className={classes.overview} />
              <VotesGraph className={classes.votesGraph} />
              <Votes className={classes.votes} />
              <Deposits className={classes.deposits} />
            </span>
          // {/* </LoadAndExist> */}
          );
        }}
      </ProposalProvider>
    </Layout>
  );
};

export default ProposalDetails;
