import React from 'react';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import {
  Box, TabPanel,
} from '@components';
import { Tabs } from './components';
import { useStaking } from './hooks';
import { useStyles } from './styles';
import {
  RewardsType,
} from '../../types';

const Delegations = dynamic(() => import('./components/delegations'));
const Redelgations = dynamic(() => import('./components/redelegations'));
const Unbondings = dynamic(() => import('./components/unbondings'));

const Staking: React.FC<{rewards: RewardsType} & ComponentDefault> = (props) => {
  const classes = useStyles();
  const {
    state,
    handleTabChange,
    handleUnbondingPageCallback,
    handleRedelegationPageCallback,
  } = useStaking(props.rewards);

  const tabs = [
    {
      id: 0,
      key: 'delegations',
      component: (
        <Delegations
          delegations={state.delegations}
        />
      ),
      count: state.delegations.count,
    },
    {
      id: 1,
      key: 'redelegations',
      component: (
        <Redelgations
          redelegations={state.redelegations}
          handlePageCallback={handleRedelegationPageCallback}
        />
      ),
      count: state.redelegations.count,
    },
    {
      id: 2,
      key: 'unbondings',
      component: (
        <Unbondings
          unbondings={state.unbondings}
          handlePageCallback={handleUnbondingPageCallback}
        />
      ),
      count: state.unbondings.count,
    },
  ];

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Tabs
        tab={state.tab}
        handleTabChange={handleTabChange}
        tabs={tabs}
      />
      {tabs.map((x) => {
        return (
          <TabPanel
            key={x.id}
            index={x.id}
            value={state.tab}
          >
            {x.component}
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default Staking;
