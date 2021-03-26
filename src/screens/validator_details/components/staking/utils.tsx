import {
  Delegations,
  Redelgations,
  Undelegations,
} from './components';

export const tabLabels = [
  {
    id: 0,
    key: 'delegations',
    num: 30,
    component: Delegations,
  },
  {
    id: 1,
    key: 'redelegations',
    num: 3,
    component: Redelgations,
  },
  {
    id: 2,
    key: 'undelegations',
    num: 3,
    component: Undelegations,
  },
];

export const getTabs = () => {
  return ([
    {
      id: 0,
      key: 'delegations',
      num: 30,
      component: Delegations,
    },
    {
      id: 1,
      key: 'redelegations',
      num: 3,
      component: Redelgations,
    },
    {
      id: 2,
      key: 'undelegations',
      num: 3,
      component: Undelegations,
    },
  ]);
};
