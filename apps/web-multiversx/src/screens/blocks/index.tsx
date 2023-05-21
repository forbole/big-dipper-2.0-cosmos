import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';
import Layout from '@/components/layout';
import List from '@/screens/blocks/components/list';
import useStyles from '@/screens/blocks/styles';

const Blocks = () => {
  const { classes } = useStyles();
  const { t } = useAppTranslation('blocks');

  return (
    <>
      <NextSeo
        title={t('blocks') ?? undefined}
        openGraph={{
          title: t('blocks') ?? undefined,
        }}
      />
      <Layout navTitle={t('blocks') ?? undefined} className={classes.root}>
        <List />
      </Layout>
    </>
  );
};

export default Blocks;
