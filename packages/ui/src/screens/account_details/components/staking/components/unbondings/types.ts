import type { UnbondingType } from '@/screens/account_details/components/staking/types';

export type ItemType = Override<UnbondingType, { validator: AvatarName }>;
