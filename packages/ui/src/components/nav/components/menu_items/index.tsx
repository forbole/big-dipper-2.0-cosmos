import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getMenuItems } from '@/components/nav/components/menu_items/utils';
import useStyles from '@/components/nav/components/menu_items/styles';
import { SettingsList } from '../desktop/components/action_bar/components';

const MenuItems = () => {
  const { classes, cx } = useStyles();
  const router = useRouter();
  const { t } = useTranslation('common');
  const items = getMenuItems();

  return (
    <List>
      {items?.map((x) => {
        let isActive = false;
        if (x.url === router?.asPath) {
          isActive = true;
        }
        if (router?.asPath?.includes(x.url) && x.url !== '/') {
          isActive = true;
        }

        return (
          <Link shallow key={x.key} href={x.url} legacyBehavior passHref>
            <ListItemButton
              className={cx(classes.root, {
                active: isActive,
              })}
              component="a"
            >
              <ListItemIcon className={cx(classes.listItemIcon, isActive ? 'active' : '')}>
                {isActive ? x.iconActive : x.iconInactive}
              </ListItemIcon>
              <ListItemText className={classes.listItemText} primary={t(x.key)} />
            </ListItemButton>
          </Link>
        );
      })}
      <SettingsList className={classes.root} />
    </List>
  );
};

export default MenuItems;
