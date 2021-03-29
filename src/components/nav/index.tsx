import React from 'react';
import {
  Mobile,
  Desktop,
} from './components';
import { NavProvider } from './contexts/nav';
import { useStyles } from './styles';

const Nav:React.FC<{
  title?: string;
}> = ({ title }) => {
  const classes = useStyles();
  return (
    <NavProvider title={title}>
      <Mobile className={classes.mobile} />
      <Desktop className={classes.desktop} />
    </NavProvider>
  );
};

export default Nav;
