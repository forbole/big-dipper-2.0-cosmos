import useStyles from '@/components/nav/components/menu_items/styles';
import { getMenuItems } from '@/components/nav/components/menu_items/utils';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
              <ListItemIcon>{x.icon}</ListItemIcon>
              <ListItemText primary={t(x.key)} />
            </ListItemButton>
          </Link>
        );
      })}
    </List>
  );
};

export default MenuItems;
