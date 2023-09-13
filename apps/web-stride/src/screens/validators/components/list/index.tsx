import { FC, ReactNode, useMemo } from 'react';
import Box from '@/components/box';
import LoadAndExist from '@/components/load_and_exist';
import NoData from '@/components/no_data';
import Desktop from '@/screens/validators/components/list/components/desktop';
import Mobile from '@/screens/validators/components/list/components/mobile';
import Tabs from '@/screens/validators/components/list/components/tabs';
import { useValidators } from '@/screens/validators/components/list/hooks';
import useStyles from '@/screens/validators/components/list/styles';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import useCustomProfile from '@/hooks/useCustomProfile';

const List: FC<ComponentDefault> = ({ className }) => {
  const { classes, cx } = useStyles();
  const display = useDisplayStyles().classes;
  const { state, handleTabChange, handleSearch, handleSort, sortItems, search } = useValidators();
  const { profiles: dataProfiles, loading } = useCustomProfile(state.items);
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
    <LoadAndExist loading={state.loading || !!loading} exists={state.exists}>
      <Box className={className}>
        <Tabs tab={state.tab} handleTabChange={handleTabChange} handleSearch={handleSearch} />
        <div className={classes.list}>{list}</div>
      </Box>
    </LoadAndExist>
  );
};

export default List;
