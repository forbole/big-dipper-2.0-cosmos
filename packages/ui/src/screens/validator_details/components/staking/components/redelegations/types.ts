import type { RedelegationType } from '@/screens/validator_details/components/staking/types';

export type ItemType = Override<RedelegationType, { to: AvatarName; address: AvatarName }>;
