import type { UnbondingType } from '../../types';

export type ItemType = Override<UnbondingType, { address: AvatarName }>;
