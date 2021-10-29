import { DelegationType } from '../../../../types';

export type ItemType = Override<DelegationType, { delegator: AvatarName }>
