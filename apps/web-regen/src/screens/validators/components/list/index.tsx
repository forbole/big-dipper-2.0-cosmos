import React from 'react';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import Box from '@components/box';
import NoData from '@components/no_data';
import LoadAndExist from '@components/load_and_exist';
import { useScreenSize } from '@hooks';
import { useProfilesRecoil } from '@recoil/profiles';
import { Tabs } from './components';
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
  const mergedDataWithProfiles = state.items.map((x, i) => {
    return {
      ...x,
      validator: dataProfiles[i],
    };
  });
  const items = sortItems(mergedDataWithProfiles);

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
                <Mobile className={classes.mobile} items={items} />
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
