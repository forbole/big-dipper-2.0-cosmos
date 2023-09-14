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
  const display = useDisplayStyles().classes;
  const { state, handleTabChange, handleSearch, handleSort, sortItems, search } = useValidators();

  const validatorsMemo = useShallowMemo(state.items.map((x) => x.validator));
  const { profiles: dataProfiles, loading } = useProfilesRecoil(validatorsMemo);
  const items = useMemo(
    () => sortItems(state.items.map((x, i) => ({ ...x, validator: dataProfiles?.[i] }))),
    [state.items, dataProfiles, sortItems]
  );

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
