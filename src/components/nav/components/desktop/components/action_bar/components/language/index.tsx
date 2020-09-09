import React from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import LanguageIcon from '@assets/icon-language.svg';
import {
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import { useStyles } from './styles';
import { useLanguage } from './hooks';

const Language = () => {
  const router = useRouter();
  const classes = useStyles();
  const {
    t,
    lang,
  } = useTranslation('common');
  const {
    handleOpen,
    anchor,
    handleClose,
  } = useLanguage();

  return (
    <div>
      <div
        onClick={handleOpen}
        role="button"
        className={classes.selected}
      >
        <LanguageIcon />
        <Typography variant="body1">
          {t(lang)}
        </Typography>
      </div>
      <Menu
        anchorEl={anchor}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        keepMounted
        open={!!anchor}
        onClose={handleClose}
      >
        {router.locales
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
          ))}
      </Menu>
    </div>
  );
};

export default Language;
