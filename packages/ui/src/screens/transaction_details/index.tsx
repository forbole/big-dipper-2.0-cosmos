import { NextSeo } from 'next-seo';
import { useTranslation } from 'next-i18next';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import Logs from '@/screens/transaction_details/components/logs';
import Messages from '@/screens/transaction_details/components/messages';
import Overview from '@/screens/transaction_details/components/overview';
import { useTransactionDetails } from '@/screens/transaction_details/hooks';
import useStyles from '@/screens/transaction_details/styles';

const TransactionDetails = () => {
  const { t } = useTranslation('transactions');
  const { classes } = useStyles();
  const { state, onMessageFilterCallback, toggleMessageDisplay, filterMessages } =
    useTransactionDetails();
  const { overview, logs, messages } = state;

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
            <div className={classes.top}>
              <Overview data={overview} />
              <Messages
                className={classes.messages}
                messages={filterMessages(messages.items)}
                viewRaw={messages.viewRaw}
                toggleMessageDisplay={toggleMessageDisplay}
                onMessageFilterCallback={onMessageFilterCallback}
              />
            </div>
            {!!logs && <Logs logs={logs} />}
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default TransactionDetails;
