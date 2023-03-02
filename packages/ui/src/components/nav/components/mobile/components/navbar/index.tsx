import useStyles from '@/components/nav/components/mobile/components/navbar/styles';
import type { NavbarProps } from '@/components/nav/components/mobile/components/navbar/types';
import { readTheme } from '@/recoil/settings';
import { HOME } from '@/utils/go_to_page';
import Logo from '@/assets/logo-full.svg';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

const Navbar = (props: NavbarProps) => {
  const { classes, cx } = useStyles();
  const theme = useRecoilValue(readTheme);
  const { isOpen, toggleNavMenus } = props; //Deleted openNetwork since its not being used

  return (
    <div className={classes.root}>
      <Link shallow href={HOME} className={classes.a}>
        <Logo />
      </Link>
      <div className={classes.actions}>
        <div
          role="button"
          onClick={toggleNavMenus}
          className={cx(classes.hamburger, {
            active: isOpen,
          })}
          tabIndex={0}
          aria-label={isOpen ? 'close navigation menu' : 'open navigation menu'}
        >
          <div className="hamburger-content" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
