import React from 'react';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useTranslation from 'next-translate/useTranslation';
import { useStyles } from '@/components/nav/components/menu_items/styles';
import { getMenuItems } from '@/components/nav/components/menu_items/utils';

const MenuItems = () => {
  const classes = useStyles();
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
          <Link href={x.url} key={x.key} passHref>
            <ListItem
              button
              className={classnames(classes.root, {
                active: isActive,
              })}
              component="a"
            >
              <ListItemIcon>{x.icon}</ListItemIcon>
              <ListItemText primary={t(x.key)} />
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
};

export default MenuItems;
