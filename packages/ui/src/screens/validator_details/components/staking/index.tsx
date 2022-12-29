/* eslint-disable no-nested-ternary */
import Box from '@/components/box';
import TabPanel from '@/components/tab_panel';
import Tabs from '@/screens/validator_details/components/staking/components/tabs';
import { ROWS_PER_PAGE, useStaking } from '@/screens/validator_details/components/staking/hooks';
import { useStyles } from '@/screens/validator_details/components/staking/styles';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import numeral from 'numeral';
import React, { FC, useState } from 'react';

const Delegations = dynamic(
  () => import('@/screens/validator_details/components/staking/components/delegations')
);
const Redelgations = dynamic(
  () => import('@/screens/validator_details/components/staking/components/redelegations')
);
const Unbondings = dynamic(
  () => import('@/screens/validator_details/components/staking/components/unbondings')
);

export function formatCount(
  page: number,
  items: { count?: unknown; data?: unknown[]; loading: boolean } | undefined
) {
  const count = items?.count;

  if (Number.isInteger(count)) return numeral(count).format('0,0');

  const length = items?.data?.length ?? 0;

  if (length === 0) {
    if (items?.loading) {
      if (page === 0) return '-';
    }

    return `${numeral(page * ROWS_PER_PAGE).format('0,0')}+`;
  }

  if (length >= ROWS_PER_PAGE) {
    return `${numeral((page + 1) * ROWS_PER_PAGE).format('0,0')}+`;
  }

  return numeral(page * ROWS_PER_PAGE + length).format('0,0');
}

const Staking: FC<ComponentDefault> = (props) => {
  const classes = useStyles();
  const [delegationsPage, setDelegationsPage] = useState(0);
  const [redelegationsPage, setRedelegationsPage] = useState(0);
  const [unbondingsPage, setUnbondingsPage] = useState(0);
  const { state, delegations, redelegations, unbondings, handleTabChange } = useStaking(
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
