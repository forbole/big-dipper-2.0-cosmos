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
  const { state } = accountBalance;

  return (
    <>
      <NextSeo
        title={t('accountDetails') ?? undefined}
        openGraph={{
          title: t('accountDetails') ?? undefined,
        }}
      />
      <Layout navTitle={t('accountDetails') ?? undefined}>
        <LoadAndExist loading={profileState.loading} exists={profileState.exists}>
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
            <Balance
              className={classes.balance}
              available={state.balance.available}
              delegate={state.balance.delegate}
              unbonding={state.balance.unbonding}
              reward={state.balance.reward}
              commission={state.balance.commission}
              total={state.balance.total}
              loading={state.loading}
            />
            <OtherTokens
              className={classes.otherTokens}
              otherTokens={state.otherTokens}
              loading={state.loading}
            />
            <Staking className={classes.staking} />
            <Transactions className={classes.transactions} />
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default AccountDetails;
