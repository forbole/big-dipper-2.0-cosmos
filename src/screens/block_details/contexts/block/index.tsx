import React from 'react';
import { useBlock } from './hooks';
import { BlockState } from './types';

const initialState: BlockState = {
  item: {},
  rawData: {
    exists: false,
    loading: true,
    block: {
      height: 0,
      hash: '',
      txs: 0,
      timestamp: '',
      proposer: '',
      votingPower: 0,
    },
    supply: {
      bonded: 0,
    },
    transactions: [],
  },
  uiData: {
    block: [],
    transactions: [],
  },
};

const BlockContext = React.createContext<BlockState>(initialState);

const BlockProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    item,
    rawData,
    uiData,
  } = useBlock(initialState);

  return (
    <BlockContext.Provider
      value={{
        item,
        rawData,
        uiData,
      }}
    >
      {children}
    </BlockContext.Provider>
  );
};

const useBlockContext = () => React.useContext(BlockContext);

export {
  useBlockContext,
  BlockProvider,
  BlockContext,
};
