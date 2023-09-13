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
import { useAccountDetails } from '@/screens/account_details/hooks';
import { useValidators } from '@/screens/validators/components/list/hooks';
import useStyles from '@/screens/account_details/styles';
import useShallowMemo from '@/hooks/useShallowMemo';
import { useProfilesRecoil } from '@/recoil/profiles/hooks';
import { readIsUserLoggedIn } from '@/recoil/user/selectors';
import { useRecoilValue } from 'recoil';
import { useMemo } from 'react';
import chainConfig from '@/chainConfig';

const AccountDetails = () => {
  const { t } = useAppTranslation('accounts');
  const { classes } = useStyles();
  const { state } = useAccountDetails();
  const { state: valState, delegationValidators, rewardValidators } = useValidators();
  const { primaryTokenUnit } = chainConfig();

  const validatorsMemo = useShallowMemo(valState.items.map((x) => x.validator));
  const { profiles: dataProfiles } = useProfilesRecoil(validatorsMemo);

  // full validator list
  const validatorItems = useMemo(
    () => valState.items.map((v, j) => ({ ...v, validator: dataProfiles?.[j] })),
    [valState.items, dataProfiles]
  );

  // const redelegations Memo
  const delegationsMemo = useShallowMemo(delegationValidators?.map((y) => y.validator)) ?? [];
  const { profiles: delegationProfiles } = useProfilesRecoil(delegationsMemo);
  const delegationItems = useMemo(
    () =>
      delegationValidators?.map((d, j) => ({
        coins: d.coins?.[0],
        validator: { ...delegationProfiles?.[j], status: d.status, condition: d.condition },
      })) ?? [],
    [delegationValidators, delegationProfiles]
  );

  // const rewards Memo
  const rewardsMemo = useShallowMemo(rewardValidators?.map((z) => z.validator)) ?? [];
  const { profiles: rewardProfiles } = useProfilesRecoil(rewardsMemo);
  const rewardItems = useMemo(
    () =>
      rewardValidators?.map((d, j) => ({
        coins: d.coins?.[0] ?? { amount: '0', denom: primaryTokenUnit },
        validator: { ...rewardProfiles?.[j], status: d.status, condition: d.condition },
      })) ?? [],
    [rewardValidators, primaryTokenUnit, rewardProfiles]
  );

  const loggedIn = useRecoilValue(readIsUserLoggedIn);

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
              validators={validatorItems}
              delegations={delegationItems}
              rewards={rewardItems}
              loggedIn={loggedIn}
            />
            <OtherTokens className={classes.otherTokens} otherTokens={state.otherTokens} />
            <Staking className={classes.staking} rewards={state.rewards} />
            <Transactions className={classes.transactions} loading={state.balanceLoading} />
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default AccountDetails;
