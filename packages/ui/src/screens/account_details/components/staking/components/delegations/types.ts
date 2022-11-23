import type { DelegationType } from '@/screens/account_details/components/staking/types';

export type ItemType = Override<DelegationType, { validator: AvatarName }>;
