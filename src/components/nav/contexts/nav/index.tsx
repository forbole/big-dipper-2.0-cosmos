import React from 'react';
import { NavState } from './types';

const fakeData = {
  price: 0,
  marketCap: 0,
  inflation: 0,
  communityPool: 0,
};

const initialState: NavState = {
  ...fakeData,
};

const NavContext = React.createContext<NavState>(initialState);

const NavProvider: React.FC<{
  children: React.ReactNode;
  title: string;
}> = ({
  children, title,
}) => {
  return (
    <NavContext.Provider
      value={{
        title,
        ...fakeData,
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
