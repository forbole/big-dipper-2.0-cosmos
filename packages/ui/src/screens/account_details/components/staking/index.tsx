import Box from '@/components/box';
import TabPanel from '@/components/tab_panel';
import type DelegationsFC from '@/screens/account_details/components/staking/components/delegations';
import type RedelgationsFC from '@/screens/account_details/components/staking/components/redelegations';
import Tabs from '@/screens/account_details/components/staking/components/tabs';
import type UnbondingsFC from '@/screens/account_details/components/staking/components/unbondings';
import { useStaking } from '@/screens/account_details/components/staking/hooks';
import { useStyles } from '@/screens/account_details/components/staking/styles';
import type { RewardsType } from '@/screens/account_details/types';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import React from 'react';

const Delegations = dynamic(
  () => import('@/screens/account_details/components/staking/components/delegations')
) as typeof DelegationsFC;
const Redelgations = dynamic(
  () => import('@/screens/account_details/components/staking/components/redelegations')
) as typeof RedelgationsFC;
const Unbondings = dynamic(
  () => import('@/screens/account_details/components/staking/components/unbondings')
) as typeof UnbondingsFC;

const Staking: React.FC<
  {
    rewards: RewardsType;
    accountDelegationsDocument: string;
    accountRedelegationsDocument: string;
    accountUndelegationsDocument: string;
  } & ComponentDefault
> = ({
  rewards,
  accountDelegationsDocument,
  accountRedelegationsDocument,
  accountUndelegationsDocument,
  className,
}) => {
  const classes = useStyles();
  const { state, handleTabChange } = useStaking(
    rewards,
    accountDelegationsDocument,
    accountRedelegationsDocument,
    accountUndelegationsDocument
  );

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
    <Box className={classnames(className, classes.root)}>
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
