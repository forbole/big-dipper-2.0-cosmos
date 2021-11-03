import { DepositType } from '../../types';

export type ItemType = Override<DepositType, { user: AvatarName }>
