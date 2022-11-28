import Layout from '@/components/layout';
import List from '@/screens/validators/components/list';
import { useStyles } from '@/screens/validators/styles';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';

const Validators = () => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  return (
    <>
      <NextSeo
        title={t('validators')}
        openGraph={{
          title: t('validators'),
        }}
      />
      <Layout navTitle={t('validators')} className={classes.root}>
        <List />
      </Layout>
    </>
  );
};

export default Validators;
