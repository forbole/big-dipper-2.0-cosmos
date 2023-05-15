import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';
import Layout from '@/components/layout';
import Compute from '@/screens/providers/components/compute';
import DataBlocks from '@/screens/providers/components/data_blocks';
import Memory from '@/screens/providers/components/memory';
import ProvidersList from '@/screens/providers/components/providers_list';
import Storage from '@/screens/providers/components/storage';
import { useProviders } from '@/screens/providers/hooks';
import useStyles from '@/screens/providers/styles';

const Providers = () => {
  const { t } = useAppTranslation('providers');
  const { classes } = useStyles();
  const { state, handleSearch } = useProviders();

  return (
    <>
      <NextSeo
        title={t('providers') ?? undefined}
        openGraph={{
          title: t('providers') ?? undefined,
        }}
      />
      <Layout navTitle={t('providers') ?? undefined} className={classes.root}>
        <DataBlocks
          className={classes.dataBlocks}
          providers={state.activeProvidersCount}
          leases={state.activeLeasesCount}
        />
        <Memory className={classes.memory} memory={state.memory} />
        <Compute className={classes.compute} compute={state.cpu} />
        <Storage className={classes.storage} storage={state.storage} />
        <ProvidersList
          className={classes.providersList}
          list={state.providers}
          handleSearch={handleSearch}
        />
      </Layout>
    </>
  );
};

export default Providers;
