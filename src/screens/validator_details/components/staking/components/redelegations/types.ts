import { RedelegationType } from '../../../../types';

export type ItemType = Override<RedelegationType, {
  delegator: AvatarName,
  to:AvatarName,
  from: AvatarName
}>
