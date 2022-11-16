import type { DelegationType } from '../../types';

export type ItemType = Override<DelegationType, { validator: AvatarName }>;
