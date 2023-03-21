import AppBar from '@mui/material/AppBar';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Drawer from '@mui/material/Drawer';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
// import BigDipperLogoRed from 'shared-utils/assets/big-dipper-red.svg';
// import BigDipperLogoWhite from 'shared-utils/assets/big-dipper-white.svg';
import { readTheme } from '@/recoil/settings';
// import TitleBar from '@/components/nav/components/title_bar';
import MenuItems from '@/components/nav/components/menu_items';
import useStyles from '@/components/nav/components/desktop/styles';
import { useDesktop } from '@/components/nav/components/desktop/hooks';
import ActionBar from '@/components/nav/components/desktop/components/action_bar';
import Logo from '@/assets/logo.svg';
import LogoText from '@/assets/logo-text-white.svg';
import DevnetBadge from '@/assets/devnet-badge.svg';
import TestnetBadge from '@/assets/testnet-badge.svg';
import MainnetBadge from '@/assets/mainnet-badge.svg';
import ArrowIcon from '@/assets/icon_nav.svg';
import NetworkSelector from '../network_selector';

type DesktopProps = {
  className?: string;
  // title: string;
};

const Desktop: FC<DesktopProps> = ({ className }) => {
  const { classes, cx } = useStyles();
  const theme = useRecoilValue(readTheme);
  const netName = process.env.NEXT_PUBLIC_CHAIN_TYPE;
  const { isMenu, toggleMenu, turnOffAll, toggleNetwork, isNetwork } = useDesktop();

  return (
    <ClickAwayListener onClickAway={turnOffAll}>
      <div className={cx(classes.root, className)}>
        <AppBar
          position="fixed"
          className={cx(classes.appBar, {
            open: isMenu,
          })}
        >
          <ActionBar isNetwork={isNetwork} />
          {/* <TitleBar title={title} /> */}
        </AppBar>
        <ArrowIcon
          className={cx(classes.arrowIcon, isMenu ? 'collapse' : '')}
          onClick={toggleMenu}
        />
        <Drawer
          variant="permanent"
          className={cx(classes.drawer, {
            open: isMenu,
            closed: !isMenu,
            [classes.drawerOpen]: isMenu,
            [classes.drawerClose]: !isMenu,
          })}
          classes={{
            paper: cx({
              open: isMenu,
              closed: !isMenu,
              [classes.drawerOpen]: isMenu,
              [classes.drawerClose]: !isMenu,
            }),
          }}
        >
          <div className={classes.logo} role="button" onClick={toggleMenu}>
            {/* FIXME get light and dark theme assets */}
            {<Logo />}
            {
              <div className={classes.logo_text}>
                <LogoText
                  style={{
                    opacity: isMenu ? 1 : 0,
                    transition: '.3s ease',
                  }}
                />
                {netName === 'devnet' ? (
                  <DevnetBadge style={{ opacity: isMenu ? 1 : 0, transition: '.3s ease' }} />
                ) : netName === 'testnet' ? (
                  <TestnetBadge style={{ opacity: isMenu ? 1 : 0, transition: '.3s ease' }} />
                ) : (
                  <MainnetBadge style={{ opacity: isMenu ? 1 : 0, transition: '.3s ease' }} />
                )}
              </div>
            }
          </div>
          {/* {theme === 'light' ? (
            // <BigDipperLogoRed
            //   className={classes.logo}
            //   onClick={toggleMenu}
            //   role="button"
            //   aria-label="toggle menu"
            // />
         
          ) : (
            // <BigDipperLogoWhite
            //   className={classes.logo}
            //   onClick={toggleMenu}
            //   role="button"
            //   aria-label="toggle menu"
            // />
          )} */}
          <MenuItems />
        </Drawer>
        <NetworkSelector isNavOpen={isMenu} />
      </div>
    </ClickAwayListener>
  );
};

export default Desktop;
