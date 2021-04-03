import React from 'react';
import { useBlock } from './hooks';
import { BlockState } from './types';

const initialState: BlockState = {
  rawData: {
    exists: true,
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
    signatures: [],
  },
  uiData: {
    block: [],
    transactions: [],
    signatures: [],
  },
};

const BlockContext = React.createContext<BlockState>(initialState);

const BlockProvider: React.FC = (props: {
  children: (options: {
    exists: boolean;
    loading: boolean;
  }) => React.ReactNode;
}) => {
  const { children } = props;

  const {
    rawData,
    uiData,
  } = useBlock(initialState);

  return (
    <BlockContext.Provider
      value={{
        rawData,
        uiData,
      }}
    >
      {children({
        exists: rawData.exists,
        loading: rawData.loading,
      })}
    </BlockContext.Provider>
  );
};

const useBlockContext = () => React.useContext(BlockContext);

export {
  useBlockContext,
  BlockProvider,
  BlockContext,
};
