import {
  Delegations,
  Redelgations,
  Unbondings,
} from './components';
import {
  RedelegationType, UnbondingType, DelegationType,
} from '../../types';

export const getTabs = (staking: {
  delegations: DelegationType[];
  redelegations: RedelegationType[];
  unbondings: UnbondingType[];
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
      key: 'unbondings',
      component: Unbondings,
      count: staking.unbondings.length,
    },
  ]);
};
