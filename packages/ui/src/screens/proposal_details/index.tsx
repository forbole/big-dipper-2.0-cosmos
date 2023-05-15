import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import Deposits from '@/screens/proposal_details/components/deposits';
import Overview from '@/screens/proposal_details/components/overview';
import Votes from '@/screens/proposal_details/components/votes';
import VotesGraph from '@/screens/proposal_details/components/votes_graph';
import { useProposalDetails } from '@/screens/proposal_details/hooks';
import useStyles from '@/screens/proposal_details/styles';
import { shouldShowData } from '@/screens/proposal_details/utils';

const ProposalDetails = () => {
  const { t } = useAppTranslation('proposals');
  const { classes } = useStyles();
  const { state } = useProposalDetails();
  const { overview } = state;

  return (
    <>
      <NextSeo
        title={t('proposalDetails') ?? undefined}
        openGraph={{
          title: t('proposalDetails') ?? undefined,
        }}
      />
      <Layout navTitle={t('proposalDetails') ?? undefined}>
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
