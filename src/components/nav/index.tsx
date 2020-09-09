import React from 'react';
import {
  Mobile,
  Desktop,
} from './components';
import { NetworksProvider } from './contexts/networks';
import { NavProvider } from './contexts/nav';
import { useStyles } from './styles';

const Nav:React.FC<{
  title?: string;
}> = ({ title }) => {
  const classes = useStyles();
  return (
    <NetworksProvider>
      <NavProvider title={title}>
        <Mobile className={classes.mobile} />
        <Desktop className={classes.desktop} />
      </NavProvider>
    </NetworksProvider>
  );
};

export default Nav;
