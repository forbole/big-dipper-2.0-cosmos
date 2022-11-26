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
  if (isDesktop) {
    return <Desktop className={classes.desktop} title={title ?? ''} />;
  }
  return <Mobile className={classes.mobile} title={title ?? ''} />;
};

export default Nav;
