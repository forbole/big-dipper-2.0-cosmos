import React from 'react';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import Box from '@/components/box';
import NoData from '@/components/no_data';
import LoadAndExist from '@/components/load_and_exist';
import { useScreenSize } from '@/hooks';
import { useProfilesRecoil } from '@/recoil/profiles';
import Tabs from '@/screens/validators/components/list/components/tabs';
import { useStyles } from '@/screens/validators/components/list/styles';
import { useValidators } from '@/screens/validators/components/list/hooks';
import type DesktopType from '@/screens/validators/components/list/components/desktop';
import type MobileType from '@/screens/validators/components/list/components/mobile';

const Desktop = dynamic(
  () => import('@/screens/validators/components/list/components/desktop')
) as typeof DesktopType;
const Mobile = dynamic(
  () => import('@/screens/validators/components/list/components/mobile')
) as typeof MobileType;

const List: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { state, handleTabChange, handleSearch, handleSort, sortItems } = useValidators();
  const dataProfiles = useProfilesRecoil(state.items.map((x) => x.validator));
  const mergedDataWithProfiles = state.items.map((x, i) => ({
    ...(x as object),
    validator: dataProfiles[i],
  }));
  const items = sortItems(mergedDataWithProfiles as any);

  return (
    <LoadAndExist loading={state.loading} exists={state.exists}>
      <Box className={classnames(className)}>
        <Tabs tab={state.tab} handleTabChange={handleTabChange} handleSearch={handleSearch} />
        <div className={classes.list}>
          {items.length ? (
            <>
              {isDesktop ? (
                <Desktop
                  className={classes.desktop}
                  sortDirection={state.sortDirection}
                  sortKey={state.sortKey}
                  handleSort={handleSort}
                  items={items}
                />
              ) : (
                <Mobile className={classes.mobile} items={items as any} />
              )}
            </>
          ) : (
            <NoData />
          )}
        </div>
      </Box>
    </LoadAndExist>
  );
};

export default List;
