import DesmosProfile from '@/components/desmos_profile';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import Blocks from '@/screens/validator_details/components/blocks';
import Profile from '@/screens/validator_details/components/profile';
import ValidatorOverview from '@/screens/validator_details/components/validator_overview';
import VotingPower from '@/screens/validator_details/components/voting_power';
import { useValidatorDetails } from '@/screens/validator_details/hooks';
import { useStyles } from '@/screens/validator_details/styles';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';

const ValidatorDetails = () => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  const { state } = useValidatorDetails();
  const { desmosProfile, exists, loading, overview, status, votingPower } = state;

  return (
    <>
      <NextSeo
        title={t('validatorDetails')}
        openGraph={{
          title: t('validatorDetails'),
        }}
      />
      <Layout navTitle={t('validatorDetails')}>
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
              inActiveSet={status.inActiveSet}
            />
            <Blocks className={classes.blocks} />
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default ValidatorDetails;
