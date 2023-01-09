import Desktop from '@/components/nav/components/desktop';
import Mobile from '@/components/nav/components/mobile';
import useStyles from '@/components/nav/styles';
import { useScreenSize } from '@/hooks';
import { FC } from 'react';

type NavProps = {
  title?: string;
};

const Nav: FC<NavProps> = ({ title }) => {
  const { classes } = useStyles();
  const { isDesktop } = useScreenSize();
  if (isDesktop) {
    return <Desktop className={classes.desktop} title={title ?? ''} />;
  }
  return <Mobile className={classes.mobile} title={title ?? ''} />;
};

export default Nav;
