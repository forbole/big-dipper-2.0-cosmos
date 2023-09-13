import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';
import DesmosProfile from '@/components/desmos_profile';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import Balance from '@/screens/account_details/components/balance';
import OtherTokens from '@/screens/account_details/components/other_tokens';
import Overview from '@/screens/account_details/components/overview';
import Transactions from '@/screens/account_details/components/transactions';
import { useAccountDetails } from '@/screens/account_details/hooks';
import useStyles from '@/screens/account_details/styles';

const AccountDetails = () => {
  const { t } = useAppTranslation('accounts');
  const { classes } = useStyles();
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
          <span className={classes.root}>
            {!!state.desmosProfile && (
              <DesmosProfile
                dtag={state.desmosProfile.dtag}
                nickname={state.desmosProfile.nickname}
                imageUrl={state.desmosProfile.imageUrl}
                bio={state.desmosProfile.bio}
                connections={state.desmosProfile.connections}
                coverUrl={state.desmosProfile.coverUrl}
              />
            )}
            <Overview
              className={classes.overview}
              withdrawalAddress={state.overview.withdrawalAddress}
              address={state.overview.address}
            />
            <Balance
              className={classes.balance}
              available={state.balance.available}
              delegate={state.balance.delegate}
              unbonding={state.balance.unbonding}
              reward={state.balance.reward}
              commission={state.balance.commission}
              total={state.balance.total}
            />
            <OtherTokens className={classes.otherTokens} otherTokens={state.otherTokens} />
            {/* <Staking className={classes.staking} rewards={state.rewards} /> */}
            <Transactions className={classes.transactions} loading={state.balanceLoading} />
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default AccountDetails;
