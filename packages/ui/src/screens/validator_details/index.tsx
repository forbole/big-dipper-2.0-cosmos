import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';
import DesmosProfile from '@/components/desmos_profile';
import Layout from '@/components/layout';
import Blocks from '@/screens/validator_details/components/blocks';
import Profile from '@/screens/validator_details/components/profile';
import Staking from '@/screens/validator_details/components/staking';
import Transactions from '@/screens/validator_details/components/transactions';
import ValidatorOverview from '@/screens/validator_details/components/validator_overview';
import VotingPower from '@/screens/validator_details/components/voting_power';
import { useValidatorProfileDetails } from '@/screens/validator_details/hooks';
import useStyles from '@/screens/validator_details/styles';
import LoadAndExist from '@/components/load_and_exist';

const ValidatorDetails = () => {
  const { t } = useAppTranslation('validators');
  const { classes } = useStyles();
  const { state, loading } = useValidatorProfileDetails();
  const { exists, desmosProfile, operatorAddress } = state;

  return (
    <>
      <NextSeo
        title={t('validatorDetails') ?? undefined}
        openGraph={{
          title: t('validatorDetails') ?? undefined,
        }}
      />
      <Layout navTitle={t('validatorDetails') ?? undefined}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          <div>
            <span className={classes.root}>
              {exists && desmosProfile ? (
                <DesmosProfile className={classes.profile} {...desmosProfile} loading={loading} />
              ) : (
                <Profile className={classes.profile} />
              )}
              <ValidatorOverview className={classes.address} />
              <VotingPower className={classes.votingPower} />
              <Blocks className={classes.blocks} address={operatorAddress} />
              <Staking className={classes.staking} address={operatorAddress} />
              <Transactions className={classes.transactions} />
            </span>
          </div>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default ValidatorDetails;
