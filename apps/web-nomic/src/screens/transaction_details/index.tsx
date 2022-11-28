import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import Overview from '@/screens/transaction_details/components/overview';
import { useTransactionDetails } from '@/screens/transaction_details/hooks';
import { useStyles } from '@/screens/transaction_details/styles';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';

const TransactionDetails = () => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const { state } = useTransactionDetails();
  const { overview } = state;

  return (
    <>
      <NextSeo
        title={t('transactionDetails')}
        openGraph={{
          title: t('transactionDetails'),
        }}
      />
      <Layout navTitle={t('transactionDetails')}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          <span className={classes.root}>
            <Overview data={overview} />
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default TransactionDetails;
