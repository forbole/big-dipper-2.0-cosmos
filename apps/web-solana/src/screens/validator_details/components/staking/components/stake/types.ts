import { StakeType } from '../../../../types';

export type ItemType = Override<StakeType, { account: AvatarName }>
