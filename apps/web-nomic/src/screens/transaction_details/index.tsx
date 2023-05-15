import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import Overview from '@/screens/transaction_details/components/overview';
import { useTransactionDetails } from '@/screens/transaction_details/hooks';
import useStyles from '@/screens/transaction_details/styles';

const TransactionDetails = () => {
  const { t } = useAppTranslation('transactions');
  const { classes } = useStyles();
  const { state } = useTransactionDetails();
  const { overview } = state;

  return (
    <>
      <NextSeo
        title={t('transactionDetails') ?? undefined}
        openGraph={{
          title: t('transactionDetails') ?? undefined,
        }}
      />
      <Layout navTitle={t('transactionDetails') ?? undefined}>
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
