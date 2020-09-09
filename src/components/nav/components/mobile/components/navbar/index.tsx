import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { ExpandMore } from '@material-ui/icons';
import { useSettingsContext } from '@contexts';
import BigDipperLogoWhite from '@assets/big-dipper-white.svg';
import BigDipperLogoRed from '@assets/big-dipper-red.svg';
import { chainConfig } from '@src/chain_config';
import { HOME } from '@utils/go_to_page';
import { useStyles } from './styles';
import { NavbarProps } from './types';

const Navbar = (props:NavbarProps) => {
  const classes = useStyles();
  const { theme } = useSettingsContext();
  const {
    isOpen,
    openNetwork,
    toggleNavMenus,
  } = props;
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
        <div
          className={classes.network}
          onClick={openNetwork}
          role="button"
        >
          <p className="text">
            {chainConfig.network}
          </p>
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
        >
          <div className="hamburger-content" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
