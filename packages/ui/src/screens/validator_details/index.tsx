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
import {
  useValidatorProfileDetails,
  useValidatorOverviewDetails,
  useValidatorVotingPowerDetails,
} from '@/screens/validator_details/hooks';
import useStyles from '@/screens/validator_details/styles';
import LoadAndExist from '@/components/load_and_exist';

const ValidatorDetails = () => {
  const { t } = useAppTranslation('validators');
  const { classes } = useStyles();
  const { state, loading } = useValidatorProfileDetails();
  const { exists, desmosProfile, operatorAddress } = state;
  const { state: validatorOverviewState, loading: validatorOverviewLoading } =
    useValidatorOverviewDetails();
  const { state: validatorVPState, loading: validatorVPLoading } = useValidatorVotingPowerDetails();

  return (
    <>
      <NextSeo
        title={t('validatorDetails') ?? undefined}
        openGraph={{
          title: t('validatorDetails') ?? undefined,
        }}
      />
      <Layout navTitle={t('validatorDetails') ?? undefined}>
        <LoadAndExist loading={loading} exists={state.exists}>
          <div>
            <span className={classes.root}>
              {exists && desmosProfile ? (
                <DesmosProfile className={classes.profile} {...desmosProfile} loading={loading} />
              ) : (
                <Profile
                  className={classes.profile}
                  profile={validatorOverviewState.overview}
                  loading={loading}
                />
              )}
              {!loading ? (
                <>
                  <ValidatorOverview
                    className={classes.address}
                    overview={validatorOverviewState.overview}
                    status={validatorOverviewState.status}
                    loading={validatorOverviewLoading}
                  />
                  <VotingPower
                    className={classes.votingPower}
                    data={validatorVPState.votingPower}
                    status={validatorVPState.votingPower.validatorStatus}
                    loading={validatorVPLoading}
                  />
                </>
              ) : null}
              {!loading && !validatorOverviewLoading && !validatorVPLoading ? (
                <>
                  <Blocks className={classes.blocks} address={operatorAddress} />
                  <Staking className={classes.staking} address={operatorAddress} />
                  <Transactions className={classes.transactions} />
                </>
              ) : null}
            </span>
          </div>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default ValidatorDetails;
