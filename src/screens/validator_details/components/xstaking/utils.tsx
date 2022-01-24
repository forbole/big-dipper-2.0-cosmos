import {
  Delegations,
  Redelgations,
  Undelegations,
} from './components';
import {
  RedelegationType, UndelegationType, DelegationType,
} from '../../types';

export const getTabs = (staking: {
  delegations: DelegationType[];
  redelegations: RedelegationType[];
  undelegations: UndelegationType[];
}) => {
  return ([
    {
      id: 0,
      key: 'delegations',
      component: Delegations,
      count: staking.delegations.length,
    },
    {
      id: 1,
      key: 'redelegations',
      component: Redelgations,
      count: staking.redelegations.length,
    },
    {
      id: 2,
      key: 'undelegations',
      component: Undelegations,
      count: staking.undelegations.length,
    },
  ]);
};
