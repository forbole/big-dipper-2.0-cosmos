import { FC, useState } from 'react';
import Box from '@/components/box';
import TabPanel from '@/components/tab_panel';
import Delegations from '@/screens/account_details/components/staking/components/delegations';
import Redelgations from '@/screens/account_details/components/staking/components/redelegations';
import Tabs from '@/screens/account_details/components/staking/components/tabs';
import Unbondings from '@/screens/account_details/components/staking/components/unbondings';
import { useStaking } from '@/screens/account_details/components/staking/hooks';
import useStyles from '@/screens/account_details/components/staking/styles';
import { formatCount } from '@/screens/validator_details/components/staking';
import Loading from '@/components/loading';
import { useAccountRewards } from '@/screens/account_details/hooks';

type StakingProps = {
  className?: string;
};

const Staking: FC<StakingProps> = ({ className }) => {
  const { classes, cx } = useStyles();
  const [delegationsPage, setDelegationsPage] = useState(0);
  const [redelegationsPage, setRedelegationsPage] = useState(0);
  const [unbondingsPage, setUnbondingsPage] = useState(0);
  const accountRewards = useAccountRewards();
  const { state } = accountRewards;

  const { stakingState, delegations, redelegations, unbondings, handleTabChange } = useStaking(
    state.rewards,
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
      {state.loading ? (
        <Loading />
      ) : (
        <>
          <Tabs tab={stakingState.tab} handleTabChange={handleTabChange} tabs={tabs} />
          {tabs.map((x) => (
            <TabPanel key={x.id} index={x.id} value={stakingState.tab}>
              {x.component}
            </TabPanel>
          ))}
        </>
      )}
    </Box>
  );
};

export default Staking;
