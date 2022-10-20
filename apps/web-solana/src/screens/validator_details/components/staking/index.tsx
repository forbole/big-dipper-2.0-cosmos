import React from 'react';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import {
  Box, TabPanel,
} from '@components';
import { Tabs } from './components';
import { useStaking } from './hooks';
import { useStyles } from './styles';
import { StakeType } from '../../types';

const Stake = dynamic(() => import('./components/stake'));

const Staking: React.FC<{
  className?: string;
  activeStake: {
    data: StakeType[];
    count: number;
  }
  deactiveStake: {
    data: StakeType[];
    count: number;
  }
}> = (props) => {
  const classes = useStyles();
  const {
    state,
    handleTabChange,
  } = useStaking();

  const tabs = [
    {
      id: 0,
      key: 'activeStake',
      component: (
        <Stake
          data={props.activeStake.data}
          count={props.activeStake.count}
        />
      ),
      count: props.activeStake.count,
    },
    {
      id: 1,
      key: 'deactiveStake',
      component: (
        <Stake
          data={props.deactiveStake.data}
          count={props.deactiveStake.count}
        />
      ),
      data: props.deactiveStake,
      count: props.deactiveStake.count,
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
