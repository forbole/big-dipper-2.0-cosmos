import Box from '@/components/box';
import LoadAndExist from '@/components/load_and_exist';
import NoData from '@/components/no_data';
import useAppTranslation from '@/hooks/useAppTranslation';
import useShallowMemo from '@/hooks/useShallowMemo';
import { useProfilesRecoil } from '@/recoil/profiles/hooks';
import { readIsUserLoggedIn, readUserAddress } from '@/recoil/user/selectors';
import { useRecoilValue } from 'recoil';
import Desktop from '@/screens/validators/components/list/components/desktop';
import Mobile from '@/screens/validators/components/list/components/mobile';
import StakeButton from '@/screens/validators/components/list/components/staking/index';
import Tabs from '@/screens/validators/components/list/components/tabs';
import { useStakingDistribution, useValidators } from '@/screens/validators/components/list/hooks';
import useStyles from '@/screens/validators/components/list/styles';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FC, ReactNode, useMemo } from 'react';
import Link from 'next/link';
import { ACCOUNT_DETAILS } from '@/utils/go_to_page';

const List: FC<ComponentDefault> = ({ className }) => {
  const { classes, cx } = useStyles();
  const { t } = useAppTranslation();
  const display = useDisplayStyles().classes;
  const {
    state,
    delegationValidators,
    handleTabChange,
    handleSearch,
    handleSort,
    sortItems,
    search,
  } = useValidators();
  const { handleStakingDistribution } = useStakingDistribution();

  const validatorsMemo = useShallowMemo(state.items.map((x) => x.validator));
  const { profiles: dataProfiles, loading } = useProfilesRecoil(validatorsMemo);
  const items = useMemo(
    () => sortItems(state.items.map((x, i) => ({ ...x, validator: dataProfiles?.[i] }))),
    [state.items, dataProfiles, sortItems]
  );

  // const redelegations Memo
  const delegationsMemo = useShallowMemo(delegationValidators?.map((y) => y.validator)) ?? [];
  const { profiles: delegationProfiles } = useProfilesRecoil(delegationsMemo);
  const delegationItems = useMemo(
    () => delegationProfiles.map((d, j) => dataProfiles?.[j]),
    [delegationProfiles, dataProfiles]
  );

  console.log('check', delegationItems);

  const loggedIn = useRecoilValue(readIsUserLoggedIn);
  const address = useRecoilValue(readUserAddress);

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
      {loggedIn && (
        <div className={classes.stakingButtons}>
          <div>
            <StakeButton
              validators={items}
              delegations={delegationItems}
              address=""
              imageUrl=""
              name=""
              commission=""
            />
          </div>
          <div className={classes.stakingDistribution}>
            <Link shallow prefetch={false} href={ACCOUNT_DETAILS(address)} className="value">
              <Button
                onClick={handleStakingDistribution}
                color="primary"
                className={classes.stakingDistrButton}
              >
                <Typography variant="h5">{t('validators:stakingDistribution')}</Typography>
              </Button>
            </Link>
          </div>
        </div>
      )}
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
