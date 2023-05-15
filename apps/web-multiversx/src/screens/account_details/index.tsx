import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import Nfts from '@/screens/account_details/components/nfts';
import Overview from '@/screens/account_details/components/overview';
import Profile from '@/screens/account_details/components/profile';
import Tokens from '@/screens/account_details/components/tokens';
import Transactions from '@/screens/account_details/components/transactions';
import { useAccountDetails } from '@/screens/account_details/hooks';
import useStyles from '@/screens/account_details/styles';

const AccountDetails = () => {
  const { classes } = useStyles();
  const { t } = useAppTranslation('accounts');
  const { state } = useAccountDetails();
  return (
    <>
      <NextSeo
        title={t('accountDetails') ?? undefined}
        openGraph={{
          title: t('accountDetails') ?? undefined,
        }}
      />
      <Layout navTitle={t('accountDetails') ?? undefined}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          <div className={classes.root}>
            <Profile className={classes.profile} profile={state.profile} />
            <Overview className={classes.overview} overview={state.overview} />
            <Tokens />
            <Nfts />
            <Transactions className={classes.transactions} />
          </div>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default AccountDetails;
