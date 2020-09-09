import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import {
  Drawer,
  MenuItem,
  Typography,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { useSettingsContext } from '@contexts';
import Language from '@assets/icon-language.svg';
import ThemeIcon from '@assets/icon-theme.svg';
import {
  ExpandMoreOutlined,
} from '@material-ui/icons';
import { useStyles } from './styles';
import { MenuItems } from '../../..';
import { useMenu } from './hooks';
import { MenuProps } from './types';

const Menu = (props: MenuProps) => {
  const router = useRouter();
  const {
    t,
    lang,
  } = useTranslation('common');
  const {
    theme,
    toggleThemeMode,
  } = useSettingsContext();

  const {
    toggleNavMenus,
    className,
  } = props;
  const classes = useStyles();
  const {
    toggleDrawer,
    drawerOpen,
  } = useMenu(lang, toggleNavMenus);

  return (
    <>
      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={toggleDrawer}
        className={classes.drawer}
      >
        <div className={classnames('content')}>
          {
            router.locales
              .filter((l) => l !== lang)
              .map((l) => (
                <div key={l}>
                  <Link
                    href={{
                      pathname: router.pathname,
                      query: router.query,
                    }}
                    locale={l}
                    passHref
                  >
                    <MenuItem button component="a">
                      {t(l)}
                    </MenuItem>
                  </Link>
                </div>
              ))
            }
        </div>
      </Drawer>
      {/* ================================== */}
      {/* Main Content */}
      {/* ================================== */}
      <div className={classnames(className, classes.root)}>
        <div className={classes.menu}>
          <MenuItems />
        </div>
        {/* ========================= */}
        {/* Footer Actions */}
        {/* ========================= */}
        <div className={classes.footerActions}>
          <div
            className={classes.language}
            role="button"
            onClick={toggleDrawer}
          >
            <Language />
            <Typography variant="caption">{t(router.locale)}</Typography>
            <ExpandMoreOutlined fontSize="small" />
          </div>
          <div className={classes.theme}>
            <span onClick={toggleThemeMode} role="button">
              <ThemeIcon />
            </span>
            <Typography variant="caption">{t(theme)}</Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
