import { UndelegationType } from '../../../../types';

export type ItemType = Override<UndelegationType, { delegator: AvatarName }>
