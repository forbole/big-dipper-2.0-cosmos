import React from 'react';
import { NavState } from './types';
import { useNav } from './hooks';

const initialState: NavState = {
  rawData: {
    price: 0,
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
    rawData,
    uiData,
  } = useNav(initialState);

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
