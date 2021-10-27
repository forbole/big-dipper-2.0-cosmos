import { DelegationType as Delegation } from '../../../../types';

export type ItemType = Override<Delegation, { validator: AvatarName }>
