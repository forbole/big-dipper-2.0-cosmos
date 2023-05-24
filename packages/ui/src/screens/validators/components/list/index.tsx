import Box from '@/components/box';
import LoadAndExist from '@/components/load_and_exist';
import NoData from '@/components/no_data';
import useAppTranslation from '@/hooks/useAppTranslation';
import useShallowMemo from '@/hooks/useShallowMemo';
import { useProfilesRecoil } from '@/recoil/profiles/hooks';
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

const List: FC<ComponentDefault> = ({ className }) => {
  const { classes, cx } = useStyles();
  const { t } = useAppTranslation();
  const display = useDisplayStyles().classes;
  const { state, handleTabChange, handleSearch, handleSort, sortItems, search } = useValidators();
  const { handleStakingDistribution } = useStakingDistribution();

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
      <div className={classes.stakingButtons}>
        <div className={classes.staking}>
          <StakeButton address="address" imageUrl="imageUrl" name="name" commission="12" />
        </div>
        <div className={classes.stakingDistribution}>
          <Button
            onClick={handleStakingDistribution}
            color="primary"
            className={classes.stakingDistrButton}
          >
            <Typography variant="h5">{t('validators:stakingDistribution')}</Typography>
          </Button>
        </div>
      </div>
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
