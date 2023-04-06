import { FC, useState } from 'react';
import Box from '@/components/box';
import TabPanel from '@/components/tab_panel';
import Delegations from '@/screens/account_details/components/staking/components/delegations';
import Redelgations from '@/screens/account_details/components/staking/components/redelegations';
import Tabs from '@/screens/account_details/components/staking/components/tabs';
import Unbondings from '@/screens/account_details/components/staking/components/unbondings';
import { useStaking } from '@/screens/account_details/components/staking/hooks';
import useStyles from '@/screens/account_details/components/staking/styles';
import type { RewardsType } from '@/screens/account_details/types';
import { formatCount } from '@/screens/validator_details/components/staking';

type StakingProps = {
  className?: string;
  rewards: RewardsType;
};

const Staking: FC<StakingProps> = ({ rewards, className }) => {
  const { classes, cx } = useStyles();
  const [delegationsPage, setDelegationsPage] = useState(0);
  const [redelegationsPage, setRedelegationsPage] = useState(0);
  const [unbondingsPage, setUnbondingsPage] = useState(0);
  const { state, delegations, redelegations, unbondings, handleTabChange } = useStaking(
    rewards,
    delegationsPage,
    redelegationsPage,
    unbondingsPage
  );

  const tabs = [
    {
      id: 0,
      key: 'delegations',
      component: <Delegations delegations={delegations} setPage={setDelegationsPage} />,
      count: formatCount(delegationsPage, delegations),
    },
    {
      id: 1,
      key: 'redelegations',
      component: <Redelgations redelegations={redelegations} setPage={setRedelegationsPage} />,
      count: formatCount(redelegationsPage, redelegations),
    },
    {
      id: 2,
      key: 'unbondings',
      component: <Unbondings unbondings={unbondings} setPage={setUnbondingsPage} />,
      count: formatCount(unbondingsPage, unbondings),
    },
  ];

  return (
    <Box className={cx(classes.root, className)}>
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
