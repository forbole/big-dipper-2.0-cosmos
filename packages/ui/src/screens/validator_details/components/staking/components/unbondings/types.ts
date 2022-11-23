import type { UnbondingType } from '@/screens/validator_details/components/staking/types';

export type ItemType = Override<UnbondingType, { address: AvatarName }>;
