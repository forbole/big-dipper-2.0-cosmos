import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import ThemeIcon from '@assets/icon-theme.svg';
import {
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import { useSettingsContext } from '@contexts';
import { useThemeList } from './hooks';
import { useStyles } from './styles';

const ThemeList: React.FC<{
  className?: string;
}> = (props) => {
  const classes = useStyles();
  const {
    themeList,
    theme,
    changeTheme,
  } = useSettingsContext();
  const { t } = useTranslation('common');
  const {
    handleOpen,
    anchor,
    handleClose,
  } = useThemeList();

  const handleOnClick = (value:string) => {
    changeTheme(value);
    handleClose();
  };

  return (
    <div>
      <div
        onClick={handleOpen}
        role="button"
        className={classnames(props.className, classes.selected)}
      >
        <ThemeIcon />
        <Typography variant="body1">
          {t(theme)}
        </Typography>
      </div>
      <Menu
        className={classes.menu}
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
        {themeList
          .filter((l) => l !== theme)
          .map((l) => (
            <div key={l}>
              <MenuItem button component="a" onClick={() => handleOnClick(l)}>
                {t(l)}
              </MenuItem>
            </div>
          ))}
      </Menu>
    </div>
  );
};

export default ThemeList;
