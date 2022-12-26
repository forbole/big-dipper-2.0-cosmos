import Box from '@/components/box';
import TabPanel from '@/components/tab_panel';
import Tabs from '@/screens/validator_details/components/staking/components/tabs';
import { useStaking } from '@/screens/validator_details/components/staking/hooks';
import { useStyles } from '@/screens/validator_details/components/staking/styles';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import React from 'react';

const Delegations = dynamic(
  () => import('@/screens/validator_details/components/staking/components/delegations')
);
const Redelgations = dynamic(
  () => import('@/screens/validator_details/components/staking/components/redelegations')
);
const Unbondings = dynamic(
  () => import('@/screens/validator_details/components/staking/components/unbondings')
);

const Staking: React.FC<ComponentDefault> = (props) => {
  const classes = useStyles();
  const { state, handleTabChange } = useStaking();

  const tabs = [
    {
      id: 0,
      key: 'delegations',
      component: <Delegations delegations={state.delegations} />,
      count: state.delegations.count,
    },
    {
      id: 1,
      key: 'redelegations',
      component: <Redelgations redelegations={state.redelegations} />,
      count: state.redelegations.count,
    },
    {
      id: 2,
      key: 'unbondings',
      component: <Unbondings unbondings={state.unbondings} />,
      count: state.unbondings.count,
    },
  ];

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Tabs tab={state.tab} handleTabChange={handleTabChange} tabs={tabs} />
      {tabs.map((x) => (
        <TabPanel key={x.id} index={x.id} value={state.tab}>
          {x.component}
        </TabPanel>
      ))}
    </Box>
  );
};

export default Staking;
