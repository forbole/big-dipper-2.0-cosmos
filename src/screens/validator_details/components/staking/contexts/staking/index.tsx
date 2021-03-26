import React from 'react';
import { useStaking } from './hooks';
import { StakingState } from './types';

const initialState: StakingState = {
  item: {},
};

const StakingContext = React.createContext<StakingState>(initialState);

const StakingProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    item,
  } = useStaking();

  return (
    <StakingContext.Provider
      value={{
        item,
      }}
    >
      {children}
    </StakingContext.Provider>
  );
};

const useStakingContext = () => React.useContext(StakingContext);

export {
  useStakingContext,
  StakingProvider,
  StakingContext,
};
