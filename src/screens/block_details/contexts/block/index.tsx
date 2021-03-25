import React from 'react';
import { useBlock } from './hooks';
import { BlockState } from './types';

const initialState: BlockState = {
  item: {},
};

const BlockContext = React.createContext<BlockState>(initialState);

const BlockProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    item,
  } = useBlock();

  return (
    <BlockContext.Provider
      value={{
        item,
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
