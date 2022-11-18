import React from 'react';
import { useScreenSize } from 'ui/hooks';
import Mobile from './components/mobile';
import { useStyles } from './styles';
import Desktop from './components/desktop';

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
