import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';
import DesmosProfile from '@/components/desmos_profile';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import Blocks from '@/screens/validator_details/components/blocks';
import Profile from '@/screens/validator_details/components/profile';
import Staking from '@/screens/validator_details/components/staking';
import Transactions from '@/screens/validator_details/components/transactions';
import ValidatorOverview from '@/screens/validator_details/components/validator_overview';
import VotingPower from '@/screens/validator_details/components/voting_power';
import { useValidatorDetails } from '@/screens/validator_details/hooks';
import useStyles from '@/screens/validator_details/styles';

const ValidatorDetails = () => {
  const { t } = useAppTranslation('validators');
  const { classes } = useStyles();
  const { state, loading } = useValidatorDetails();
  const { desmosProfile, exists, overview, status, votingPower } = state;

  return (
    <>
      <NextSeo
        title={t('validatorDetails') ?? undefined}
        openGraph={{
          title: t('validatorDetails') ?? undefined,
        }}
      />
      <Layout navTitle={t('validatorDetails') ?? undefined}>
        <LoadAndExist exists={exists} loading={loading}>
          <span className={classes.root}>
            {desmosProfile ? (
              <DesmosProfile className={classes.profile} {...desmosProfile} />
            ) : (
              <Profile className={classes.profile} profile={overview} />
            )}
            <ValidatorOverview className={classes.address} overview={overview} status={status} />
            <VotingPower
              className={classes.votingPower}
              data={votingPower}
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
