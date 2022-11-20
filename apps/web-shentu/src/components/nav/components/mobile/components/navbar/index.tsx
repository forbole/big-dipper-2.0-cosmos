import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useRecoilValue } from 'recoil';
import { readSelectedNetwork } from 'ui/recoil/big_dipper_networks';
import BigDipperLogoWhite from 'shared-utils/assets/big-dipper-white.svg';
import BigDipperLogoRed from 'shared-utils/assets/big-dipper-red.svg';
import { HOME } from 'ui/utils/go_to_page';
import { readTheme } from 'ui/recoil/settings';
import { useStyles } from './styles';
import type { NavbarProps } from './types';

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
      <div className={classes.actions}>
        {/* =================================== */}
        {/* Network */}
        {/* =================================== */}
        <div className={classes.network} onClick={openNetwork} role="button" tabIndex={0}>
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
        >
          <div className="hamburger-content" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
