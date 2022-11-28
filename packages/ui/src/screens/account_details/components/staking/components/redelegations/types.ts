import type { RedelegationType } from '@/screens/account_details/components/staking/types';

export type ItemType = Override<RedelegationType, { to: AvatarName; from: AvatarName }>;
