import Box from '@/components/box';
import LoadAndExist from '@/components/load_and_exist';
import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks';
import useShallowMemo from '@/hooks/useShallowMemo';
import { useProfilesRecoil } from '@/recoil/profiles/hooks';
import Tabs from '@/screens/validators/components/list/components/tabs';
import { useValidators } from '@/screens/validators/components/list/hooks';
import { useStyles } from '@/screens/validators/components/list/styles';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import React, { FC, ReactNode, useMemo } from 'react';

const Desktop = dynamic(() => import('@/screens/validators/components/list/components/desktop'));
const Mobile = dynamic(() => import('@/screens/validators/components/list/components/mobile'));

const List: FC<ComponentDefault> = ({ className }) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { state, handleTabChange, handleSearch, handleSort, sortItems, search } = useValidators();
  const validatorsMemo = useShallowMemo(state.items.map((x) => x.validator));
  const { profiles: dataProfiles, loading } = useProfilesRecoil(validatorsMemo);
  const mergedDataWithProfilesMemo = useShallowMemo(
    state.items.map((x, i) => ({
      ...x,
      validator: dataProfiles?.[i],
    }))
  );
  const items = useMemo(
    () => sortItems(mergedDataWithProfilesMemo),
    [mergedDataWithProfilesMemo, sortItems]
  );

  let list: ReactNode;

  if (!items.length) {
    list = <NoData />;
  } else if (isDesktop) {
    list = (
      <Desktop
        className={classes.desktop}
        sortDirection={state.sortDirection}
        sortKey={state.sortKey}
        handleSort={handleSort}
        items={items}
        search={search}
      />
    );
  } else {
    list = <Mobile className={classes.mobile} items={items} search={search} />;
  }

  return (
    <LoadAndExist loading={state.loading || !!loading} exists={state.exists}>
      <Box className={classnames(className)}>
        <Tabs tab={state.tab} handleTabChange={handleTabChange} handleSearch={handleSearch} />
        <div className={classes.list}>{list}</div>
      </Box>
    </LoadAndExist>
  );
};

export default List;
