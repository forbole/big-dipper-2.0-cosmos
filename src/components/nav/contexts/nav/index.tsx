import React from 'react';
import { useChainContext } from '@contexts';
import { NavState } from './types';

const initialState: NavState = {
  rawData: {
    price: 0,
    supply: 0,
    marketCap: 0,
    inflation: 0,
    communityPool: 0,
  },
};

const NavContext = React.createContext<NavState>(initialState);

const NavProvider: React.FC<{
  children: React.ReactNode;
  title: string;
}> = ({
  children, title,
}) => {
  const {
    market: {
      rawData,
      uiData,
    },
  } = useChainContext();

  return (
    <NavContext.Provider
      value={{
        title,
        rawData,
        uiData,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

const useNavContext = () => React.useContext(NavContext);

export {
  useNavContext,
  NavProvider,
  NavContext,
};
