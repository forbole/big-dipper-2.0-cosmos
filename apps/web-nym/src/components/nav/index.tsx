import React from 'react';
import { useScreenSize } from '@/hooks';
import Mobile from '@/components/nav/components/mobile';
import { useStyles } from '@/components/nav/styles';
import Desktop from '@/components/nav/components/desktop';

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
