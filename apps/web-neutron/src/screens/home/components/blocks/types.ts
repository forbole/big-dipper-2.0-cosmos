import {
  BlockType as BlockTypeBase,
  BlocksState as BlockStateBase,
} from 'ui/src/screens/home/components/blocks/types';

export type BlockType = BlockTypeBase & {
  consumerOperatorAddress: string;
};

export type BlocksState = Omit<BlockStateBase, 'items'> & {
  items: BlockType[];
};

export type ItemType = BlockType;
