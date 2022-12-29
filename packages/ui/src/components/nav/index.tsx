import Mobile from '@/components/nav/components/mobile';
import { useStyles } from '@/components/nav/styles';
import { useScreenSize } from '@/hooks';
import dynamic from 'next/dynamic';
import React, { FC } from 'react';

const Desktop = dynamic(() => import('@/components/nav/components/desktop'));

type NavProps = {
  title?: string;
};

const Nav: FC<NavProps> = ({ title }) => {
  const classes = useStyles();
  const { isDesktop } = useScreenSize();
  if (isDesktop) {
    return <Desktop className={classes.desktop} title={title ?? ''} />;
  }
  return <Mobile className={classes.mobile} title={title ?? ''} />;
};

export default Nav;
