import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import SettingIcon from '@assets/icon-setting.svg';
import {
  MenuItem,
  Menu,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Select,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { useSettingsContext } from '@contexts';
import { useSettingList } from './hooks';
import { useStyles } from './styles';

const Settings: React.FC<{
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
    open,
    handleOpen,
    handleClose,
    state,
    handleChange,
    handleFormSubmit,
  } = useSettingList({
    theme,
  });
  console.log(state.theme, 'theme');

  // const handleOnClick = (value:string) => {
  //   changeTheme(value);
  //   handleClose();
  // };

  return (
    <div>
      <div
        onClick={handleOpen}
        role="button"
        className={classnames(props.className)}
      >
        <SettingIcon />
      </div>
      <Dialog
        maxWidth="md"
        onClose={handleClose}
        open={open}
        className={classes.dialog}
      >
        <DialogTitle disableTypography className={classes.header}>
          <Typography variant="h2">Settings</Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleFormSubmit}>
            <div className={classes.formItem}>
              <Typography className="form-item--label">
                Theme
              </Typography>
              <Select
                variant="outlined"
                value={state.theme}
                onChange={(e) => handleChange('theme', e?.target?.value)}
                MenuProps={{ MenuListProps: {
                  disablePadding: true,
                } }}
              >
                {themeList
                  .map((l) => (
                    <MenuItem
                      key={l}
                      value={l}
                    >
                      {t(l)}
                    </MenuItem>
                  ))}
                {/* <MenuItem value={10}>some random ass theme</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Settings;
