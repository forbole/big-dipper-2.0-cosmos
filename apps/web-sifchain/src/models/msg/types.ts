export type BaseCategories =
  | 'bank'
  | 'crisis'
  | 'distribution'
  | 'governance'
  | 'slashing'
  | 'staking'
  | 'profiles'
  | 'ibc'
  | 'ibc-transfer'
  | 'authz'
  | 'feegrant'
  | 'vesting'
  | 'others';
export type CustomCategories = 'clp' | 'dispensation' | 'ethbridge' | 'tokenregistry'; // custom modules
export type Categories = BaseCategories | CustomCategories;
