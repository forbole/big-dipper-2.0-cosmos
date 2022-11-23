import AppBar from '@material-ui/core/AppBar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Drawer from '@material-ui/core/Drawer';
import classnames from 'classnames';
import React from 'react';
import { useRecoilValue } from 'recoil';
import BigDipperLogoRed from 'shared-utils/assets/big-dipper-red.svg';
import BigDipperLogoWhite from 'shared-utils/assets/big-dipper-white.svg';
import MenuItems from '@/components/nav/components/menu_items';
import TitleBar from '@/components/nav/components/title_bar';
import { readTheme } from '@/recoil/settings';
import ActionBar from '@/components/nav/components/desktop/components/action_bar';
import { useDesktop } from '@/components/nav/components/desktop/hooks';
import { useStyles } from '@/components/nav/components/desktop/styles';

const Desktop: React.FC<{
  className?: string;
  title: string;
}> = ({ className, title }) => {
  const classes = useStyles();
  const theme = useRecoilValue(readTheme);
  const { isMenu, toggleMenu, turnOffAll, toggleNetwork, isNetwork } = useDesktop();
  return (
    <ClickAwayListener onClickAway={turnOffAll}>
      <div className={classnames(className, classes.root)}>
        <AppBar
          position="fixed"
          className={classnames(classes.appBar, {
            open: isMenu,
          })}
        >
          <ActionBar toggleNetwork={toggleNetwork} isNetwork={isNetwork} />
          <TitleBar title={title} />
        </AppBar>
        <Drawer
          variant="permanent"
          className={classnames(classes.drawer, {
            open: isMenu,
            closed: !isMenu,
            [classes.drawerOpen]: isMenu,
            [classes.drawerClose]: !isMenu,
          })}
          classes={{
            paper: classnames({
              open: isMenu,
              closed: !isMenu,
              [classes.drawerOpen]: isMenu,
              [classes.drawerClose]: !isMenu,
            }),
          }}
        >
          {theme === 'light' ? (
            <BigDipperLogoRed className={classes.logo} onClick={toggleMenu} role="button" />
          ) : (
            <BigDipperLogoWhite className={classes.logo} onClick={toggleMenu} role="button" />
          )}
          <MenuItems />
        </Drawer>
      </div>
    </ClickAwayListener>
  );
};

export default Desktop;
