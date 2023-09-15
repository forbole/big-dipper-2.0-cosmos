import {
  BlockType as BlockTypeBase,
  BlocksState as BlocksStateBase,
} from 'ui/src/screens/blocks/types';

export type BlockType = BlockTypeBase & {
  consumerOperatorAddress: string;
};

export type BlocksState = Omit<BlocksStateBase, 'items'> & {
  items: BlockType[];
};

export type ItemType = BlockType;
