import React from 'react';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import Box from 'ui/components/box';
import NoData from 'ui/components/no_data';
import LoadAndExist from 'ui/components/load_and_exist';
import { useScreenSize } from 'ui/hooks';
import { useProfilesRecoil } from 'ui/recoil/profiles';
import Tabs from './components/tabs';
import { useStyles } from './styles';
import { useValidators } from './hooks';
import type DesktopType from './components/desktop';
import type MobileType from './components/mobile';

const Desktop = dynamic(() => import('./components/desktop')) as typeof DesktopType;
const Mobile = dynamic(() => import('./components/mobile')) as typeof MobileType;

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
