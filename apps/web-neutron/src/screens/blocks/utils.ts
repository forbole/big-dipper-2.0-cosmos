import { ItemType } from '@/screens/blocks/types';

export const resolveProfileAddress = (item: ItemType, profile: AvatarName) => ({
  ...profile,
  name: item.consumerOperatorAddress,
  address: item.consumerOperatorAddress,
});
