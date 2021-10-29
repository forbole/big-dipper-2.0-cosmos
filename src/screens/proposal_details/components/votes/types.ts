import { VoteType } from '../../types';

export type ItemType = Override<VoteType, { user: AvatarName }>
