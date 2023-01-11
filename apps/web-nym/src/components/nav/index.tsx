import Desktop from '@/components/nav/components/desktop';
import Mobile from '@/components/nav/components/mobile';
import useSharedStyles from '@/styles/useSharedStyles';
import { FC } from 'react';

type NavProps = {
  title?: string;
};

const Nav: FC<NavProps> = ({ title }) => {
  const { classes } = useSharedStyles();
  return (
    <>
      <Desktop className={classes.hiddenUntilLg} title={title ?? ''} />
      <Mobile className={classes.hiddenWhenLg} title={title ?? ''} />
    </>
  );
};

export default Nav;
