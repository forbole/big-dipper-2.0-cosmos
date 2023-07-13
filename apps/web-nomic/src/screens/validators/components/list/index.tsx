import Box from '@/components/box';
import LoadAndExist from '@/components/load_and_exist';
import NoData from '@/components/no_data';
// import useAppTranslation from '@/hooks/useAppTranslation';
import useShallowMemo from '@/hooks/useShallowMemo';
import { useProfilesRecoil } from '@/recoil/profiles/hooks';
// import { readIsUserLoggedIn, readUserAddress } from '@/recoil/user/selectors';
// import { useRecoilValue } from 'recoil';
import Desktop from '@/screens/validators/components/list/components/desktop';
import Mobile from '@/screens/validators/components/list/components/mobile';
// import StakeButton from '@/screens/validators/components/list/components/staking/index';
import Tabs from '@/screens/validators/components/list/components/tabs';
import { useValidators } from '@/screens/validators/components/list/hooks';
// import useStakingDistribution from '@/screens/validators/components/list/useStakingDistribution';
import useStyles from '@/screens/validators/components/list/styles';
import { useDisplayStyles } from '@/styles/useSharedStyles';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { FC, ReactNode, useMemo } from 'react';
// import Link from 'next/link';
// import { ACCOUNT_DETAILS } from '@/utils/go_to_page';
// import chainConfig from '@/chainConfig';

const List: FC<ComponentDefault> = ({ className }) => {
  const { classes, cx } = useStyles();
  //   const { t } = useAppTranslation();
  const display = useDisplayStyles().classes;
  const {
    state,
    //   delegationValidators,
    //   rewardValidators,
    handleTabChange,
    handleSearch,
    handleSort,
    sortItems,
    //   sortForbole,
    search,
  } = useValidators();
  //   const { handleStakingDistribution } = useStakingDistribution();
  //   const { primaryTokenUnit } = chainConfig();

  const validatorsMemo = useShallowMemo(state.items.map((x) => x.validator));
  const { profiles: dataProfiles, loading } = useProfilesRecoil(validatorsMemo);
  const items = useMemo(
    () => sortItems(state.items.map((x, i) => ({ ...x, validator: dataProfiles?.[i] }))),
    [state.items, dataProfiles, sortItems]
  );

  //   // full validator list
  //   const validatorItems = useMemo(
  //     () => sortForbole(state.items.map((v, j) => ({ ...v, validator: dataProfiles?.[j] }))),
  //     [sortForbole, state.items, dataProfiles]
  //   );

  //   // const redelegations Memo
  //   const delegationsMemo = useShallowMemo(delegationValidators?.map((y) => y.validator)) ?? [];
  //   const { profiles: delegationProfiles } = useProfilesRecoil(delegationsMemo);
  //   const delegationItems = useMemo(
  //     () =>
  //       delegationValidators?.map((d, j) => ({
  //         coins: d.coins?.[0],
  //         validator: { ...delegationProfiles?.[j], status: d.status, condition: d.condition },
  //       })) ?? [],
  //     [delegationValidators, delegationProfiles]
  //   );

  //   // const rewards Memo
  //   const rewardsMemo = useShallowMemo(rewardValidators?.map((z) => z.validator)) ?? [];
  //   const { profiles: rewardProfiles } = useProfilesRecoil(rewardsMemo);
  //   const rewardItems = useMemo(
  //     () =>
  //       rewardValidators?.map((d, j) => ({
  //         coins: d.coins?.[0] ?? { amount: '0', denom: primaryTokenUnit },
  //         validator: { ...rewardProfiles?.[j], status: d.status, condition: d.condition },
  //       })) ?? [],
  //     [rewardValidators, primaryTokenUnit, rewardProfiles]
  //   );

  //   const loggedIn = useRecoilValue(readIsUserLoggedIn);
  //   const address = useRecoilValue(readUserAddress);

  let list: ReactNode;

  if (!items.length) {
    list = <NoData />;
  } else {
    list = (
      <>
        <Desktop
          sortDirection={state.sortDirection}
          sortKey={state.sortKey}
          handleSort={handleSort}
          items={items}
          search={search}
          className={display.hiddenUntilLg}
          validators={[]}
          delegations={[]}
          rewards={[]}
        />
        <Mobile
          items={items}
          search={search}
          className={cx(display.hiddenWhenLg, classes.mobile)}
        />
      </>
    );
  }

  return (
    <div>
      {/* <div className={classes.stakingButtons}>
        <div className={classes.stakingDistribution}>
          <Link shallow prefetch={false} href={ACCOUNT_DETAILS(address)} className="value">
            <Button
              onClick={handleStakingDistribution}
              color="primary"
              className={classes.stakingDistrButton}
              disabled={!loggedIn}
              variant="text"
            >
              <Typography variant="h5">{t('validators:stakingDistribution')}</Typography>
            </Button>
          </Link>
        </div>
        <div>
          <StakeButton
            validators={validatorItems}
            delegations={delegationItems}
            rewards={rewardItems}
            address=""
            imageUrl=""
            name=""
            commission=""
            disabled={!loggedIn}
          />
        </div>
      </div> */}
      <LoadAndExist loading={state.loading || !!loading} exists={state.exists}>
        <Box className={className}>
          <Tabs tab={state.tab} handleTabChange={handleTabChange} handleSearch={handleSearch} />
          <div className={classes.list}>{list}</div>
        </Box>
      </LoadAndExist>
    </div>
  );
};

export default List;
