import MenuItems from '@/components/nav/components/menu_items';
import {
  useLanguageDrawer,
  useThemeDrawer,
} from '@/components/nav/components/mobile/components/menu/hooks';
import useStyles from '@/components/nav/components/mobile/components/menu/styles';
import type { MenuProps } from '@/components/nav/components/mobile/components/menu/types';
import { THEME_LIST } from '@/recoil/settings';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Language from 'shared-utils/assets/icon-language.svg';
import ThemeIcon from 'shared-utils/assets/icon-theme.svg';

const Menu = (props: MenuProps) => {
  const router = useRouter();
  const { t, lang } = useTranslation('common');

  const { toggleNavMenus, className } = props;

  const { classes, cx } = useStyles();
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
        className={cx(classes.drawer, 'lang-drawer')}
        aria-label="lang-drawer"
      >
        <div className="content">
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
                  <MenuItem component="a">{t(l)}</MenuItem>
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
        <div className="content">
          {THEME_LIST.filter((l) => l !== themeOptions.theme).map((l) => (
            <div key={l}>
              <MenuItem component="a" onClick={() => themeOptions.handleThemeChange(l)}>
                {t(l)}
              </MenuItem>
            </div>
          ))}
        </div>
      </Drawer>
      {/* ================================== */}
      {/* Main Content */}
      {/* ================================== */}
      <div className={cx(className, classes.root)}>
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
            aria-label={router.locale ? t(router.locale) : 'toggle language'}
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
            aria-label={t(themeOptions.theme)}
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
