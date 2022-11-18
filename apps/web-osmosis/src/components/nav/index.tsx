import React from 'react';
import dynamic from 'next/dynamic';
import { useScreenSize } from 'ui/hooks';
import Mobile from './components/mobile';
import { useStyles } from './styles';
import type DesktopType from './components/desktop';

const Desktop = dynamic(() => import('./components/desktop')) as typeof DesktopType;

const Nav: React.FC<{
  title?: string;
}> = ({ title }) => {
  const classes = useStyles();
  const { isDesktop } = useScreenSize();
  return (
    <>
      {isDesktop ? (
        <Desktop className={classes.desktop} title={title ?? ''} />
      ) : (
        <Mobile className={classes.mobile} title={title ?? ''} />
      )}
    </>
  );
};

export default Nav;
