import React from 'react';
import classnames from 'classnames';
import {
  Box, TabPanel,
} from '@components';
import {
  Tabs,
  Delegations,
  Redelgations,
  Unbondings,
} from './components';
import { useStaking } from './hooks';

import { useStyles } from './styles';
import {
  RedelegationType, UnbondingType, DelegationType,
} from '../../types';

const Staking: React.FC<{
  className?: string;
  delegations: {
    data: DelegationType[];
    count: number;
  }
  redelegations: {
    data: RedelegationType[];
    count: number;
  }
  unbondings: {
    data: UnbondingType[];
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
      key: 'delegations',
      component: (
        <Delegations
          data={props.delegations.data}
          count={props.delegations.count}
        />
      ),
      count: props.delegations.count,
    },
    {
      id: 1,
      key: 'redelegations',
      component: (
        <Redelgations />
      ),
      data: props.redelegations,
      count: props.redelegations.count,
    },
    {
      id: 2,
      key: 'unbondings',
      component: (
        <Unbondings />
      ),
      count: props.unbondings.count,
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
