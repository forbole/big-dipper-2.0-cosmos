import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';
import DesmosProfile from '@/components/desmos_profile';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import Balance from '@/screens/account_details/components/balance';
import OtherTokens from '@/screens/account_details/components/other_tokens';
import Overview from '@/screens/account_details/components/overview';
import Staking from '@/screens/account_details/components/staking';
import Transactions from '@/screens/account_details/components/transactions';
import { useAccountProfileDetails, useAccountBalance } from '@/screens/account_details/hooks';
import useStyles from '@/screens/account_details/styles';

const AccountDetails = () => {
  const { t } = useAppTranslation('accounts');
  const { classes } = useStyles();
  const { profileState } = useAccountProfileDetails();
  const accountBalance = useAccountBalance();
  const { state: accountBalanceState } = accountBalance;

  return (
    <>
      <NextSeo
        title={t('accountDetails') ?? undefined}
        openGraph={{
          title: t('accountDetails') ?? undefined,
        }}
      />
      <Layout navTitle={t('accountDetails') ?? undefined}>
        <LoadAndExist loading={profileState.loading} exists={accountBalanceState.exists}>
          <span className={classes.root}>
            {!!profileState.desmosProfile && (
              <DesmosProfile
                dtag={profileState.desmosProfile.dtag}
                nickname={profileState.desmosProfile.nickname}
                imageUrl={profileState.desmosProfile.imageUrl}
                bio={profileState.desmosProfile.bio}
                connections={profileState.desmosProfile.connections}
                coverUrl={profileState.desmosProfile.coverUrl}
              />
            )}
            <Overview className={classes.overview} />
            {!profileState.loading ? (
              <>
                <Balance
                  className={classes.balance}
                  available={accountBalanceState.balance.available}
                  delegate={accountBalanceState.balance.delegate}
                  unbonding={accountBalanceState.balance.unbonding}
                  reward={accountBalanceState.balance.reward}
                  commission={accountBalanceState.balance.commission}
                  total={accountBalanceState.balance.total}
                  loading={accountBalanceState.loading}
                />
                <OtherTokens
                  className={classes.otherTokens}
                  otherTokens={accountBalanceState.otherTokens}
                  loading={accountBalanceState.loading}
                />
              </>
            ) : null}
            {!profileState.loading && !accountBalanceState.loading ? (
              <>
                <Staking className={classes.staking} />
                <Transactions className={classes.transactions} />
              </>
            ) : null}
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default AccountDetails;
