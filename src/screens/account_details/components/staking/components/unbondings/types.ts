import { UnbondingType } from '../../../../types';

export type ItemType = Override<UnbondingType, { validator: AvatarName }>
