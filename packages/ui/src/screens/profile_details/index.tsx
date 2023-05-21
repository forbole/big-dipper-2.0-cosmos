import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';
import DesmosProfile from '@/components/desmos_profile';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import Connections from '@/screens/profile_details/components/connections';
import { useProfileDetails } from '@/screens/profile_details/hooks';
import useStyles from '@/screens/profile_details/styles';

const ProfileDetails = () => {
  const { t } = useAppTranslation('profiles');
  const { classes } = useStyles();
  const { state, loading } = useProfileDetails();
  return (
    <>
      <NextSeo
        title={t('profileDetails') ?? undefined}
        openGraph={{
          title: t('profileDetails') ?? undefined,
        }}
      />
      <Layout navTitle={t('profileDetails') ?? undefined}>
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
