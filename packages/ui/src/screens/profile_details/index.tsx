import DesmosProfile from '@/components/desmos_profile';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import Connections from '@/screens/profile_details/components/connections';
import { useProfileDetails } from '@/screens/profile_details/hooks';
import useStyles from '@/screens/profile_details/styles';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';

const ProfileDetails = () => {
  const { t } = useTranslation('profiles');
  const { classes } = useStyles();
  const { state, loading } = useProfileDetails();

  return (
    <>
      <NextSeo
        title={t('profileDetails')}
        openGraph={{
          title: t('profileDetails'),
        }}
      />
      <Layout navTitle={t('profileDetails')}>
        <LoadAndExist loading={loading} exists={state.exists}>
          {!!state.desmosProfile && (
            <span className={classes.root}>
              <DesmosProfile
                dtag={state.desmosProfile.dtag}
                nickname={state.desmosProfile.nickname}
                imageUrl={state.desmosProfile.imageUrl}
                bio={state.desmosProfile.bio}
                connections={[]}
                coverUrl={state.desmosProfile.coverUrl}
              />
              <Connections data={state.desmosProfile.connections} />
            </span>
          )}
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default ProfileDetails;
