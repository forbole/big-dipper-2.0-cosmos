import { useStyles } from '@/components/nav/components/mobile/components/navbar/styles';
import type { NavbarProps } from '@/components/nav/components/mobile/components/navbar/types';
import { readSelectedNetwork } from '@/recoil/big_dipper_networks';
import { readTheme } from '@/recoil/settings';
import { HOME } from '@/utils/go_to_page';
import ExpandMore from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import BigDipperLogoRed from 'shared-utils/assets/big-dipper-red.svg';
import BigDipperLogoWhite from 'shared-utils/assets/big-dipper-white.svg';
import ConnectWallet from '@/components/nav/components/connect_wallet';

const Navbar = (props: NavbarProps) => {
  const classes = useStyles();
  const theme = useRecoilValue(readTheme);
  const selected = useRecoilValue(readSelectedNetwork);
  const { isOpen, openNetwork, toggleNavMenus } = props;

  return (
    <div className={classes.root}>
      <Link href={HOME}>
        <a className={classes.a}>
          {theme === 'light' ? (
            <BigDipperLogoRed className={classes.logo} />
          ) : (
            <BigDipperLogoWhite className={classes.logo} />
          )}
        </a>
      </Link>
      <ConnectWallet />
      <div className={classes.actions}>
        {/* =================================== */}
        {/* Network */}
        {/* =================================== */}
        <div
          className={classes.network}
          onClick={openNetwork}
          role="button"
          tabIndex={0}
          aria-label={selected}
        >
          <p className="text">{selected}</p>
          <ExpandMore fontSize="small" />
        </div>
        {/* =================================== */}
        {/* Hamburger */}
        {/* =================================== */}
        <div
          role="button"
          onClick={toggleNavMenus}
          className={classnames(classes.hamburger, {
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
