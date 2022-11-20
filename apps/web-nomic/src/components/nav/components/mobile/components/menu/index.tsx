import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import Language from 'shared-utils/assets/icon-language.svg';
import ThemeIcon from 'shared-utils/assets/icon-theme.svg';
import { THEME_LIST } from 'ui/recoil/settings';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import { useStyles } from './styles';
import MenuItems from '../../../menu_items';
import { useLanguageDrawer, useThemeDrawer } from './hooks';
import type { MenuProps } from './types';

const Menu = (props: MenuProps) => {
  const router = useRouter();
  const { t, lang } = useTranslation('common');

  const { toggleNavMenus, className } = props;

  const classes = useStyles();
  const languageOptions = useLanguageDrawer(lang, toggleNavMenus);

  const themeOptions = useThemeDrawer(toggleNavMenus);
  return (
    <>
      {/* ================================== */}
      {/* Lang Drawer */}
      {/* ================================== */}
      <Drawer
        anchor="bottom"
        open={languageOptions.drawerOpen}
        onClose={languageOptions.toggleDrawer}
        className={classnames(classes.drawer, 'lang-drawer')}
      >
        <div className={classnames('content')}>
          {router.locales
            ?.filter((l) => l !== lang)
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
            ))}
        </div>
      </Drawer>
      {/* ================================== */}
      {/* Theme Drawer */}
      {/* ================================== */}
      <Drawer
        anchor="bottom"
        open={themeOptions.drawerOpen}
        onClose={themeOptions.toggleDrawer}
        className={classes.drawer}
      >
        <div className={classnames('content')}>
          {THEME_LIST.filter((l) => l !== themeOptions.theme).map((l) => (
            <div key={l}>
              <MenuItem button component="a" onClick={() => themeOptions.handleChangeTheme(l)}>
                {t(l)}
              </MenuItem>
            </div>
          ))}
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
            onClick={languageOptions.toggleDrawer}
            tabIndex={0}
            aria-hidden="true"
          >
            <Language />
            <Typography variant="caption">{router.locale ? t(router.locale) : ''}</Typography>
            <ExpandMoreOutlined fontSize="small" />
          </div>
          <div
            className={classes.theme}
            role="button"
            onClick={themeOptions.toggleDrawer}
            tabIndex={0}
            aria-hidden="true"
          >
            <span role="button">
              <ThemeIcon />
            </span>
            <Typography variant="caption">{t(themeOptions.theme)}</Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
