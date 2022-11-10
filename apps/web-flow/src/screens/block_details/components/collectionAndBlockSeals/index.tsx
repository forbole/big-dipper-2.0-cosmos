import React from 'react';
import classnames from 'classnames';
// import dynamic from 'next/dynamic';
import Box from 'ui/components/box';
import LoadAndExist from 'ui/components/load_and_exist';
import TabPanel from 'ui/components/tab_panel';
import { Tabs } from './components';
import { useStyles } from './styles';
import { useValidators } from './hooks';
import { TabType } from './types';

// const Collections = dynamic(() => import('./components/collections'));
// const BlockSeals = dynamic(() => import('./components/blockSeals'));

const CollectionsAndBlockSeals: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  const { state, handleTabChange, handleSearch } = useValidators();

  // const state = {
  //   loading: false,
  //   exists: true,
  //   tab: 0,
  //   search: '',
  //   validators: [],
  //   providers: [],
  // };

  const tabs: TabType[] = [
    {
      id: 0,
      key: 'collections',
      component: (
        // <Collections />
        <div>Collections</div>
      ),
    },
    {
      id: 1,
      key: 'blockSeals',
      component: (
        // <BlockSeals />
        <div>Block Seals</div>
      ),
    },
  ];

  return (
    <LoadAndExist loading={state.loading} exists={state.exists}>
      <Box className={classnames(className, classes.root)}>
        <Tabs
          tabs={tabs}
          tab={state.tab}
          handleTabChange={handleTabChange}
          handleSearch={handleSearch}
        />
        {tabs.map((x) => {
          return (
            <TabPanel key={x.id} index={x.id} value={state.tab}>
              <div className={classes.list}>{x.component}</div>
            </TabPanel>
          );
        })}
      </Box>
    </LoadAndExist>
  );
};

export default CollectionsAndBlockSeals;
