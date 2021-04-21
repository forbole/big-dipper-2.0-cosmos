import {
  Delegations,
  Redelgations,
  Undelegations,
} from './components';

export const getTabs = () => {
  return ([
    {
      id: 0,
      key: 'delegations',
      component: Delegations,
    },
    {
      id: 1,
      key: 'redelegations',
      component: Redelgations,
    },
    {
      id: 2,
      key: 'undelegations',
      component: Undelegations,
    },
  ]);
};
