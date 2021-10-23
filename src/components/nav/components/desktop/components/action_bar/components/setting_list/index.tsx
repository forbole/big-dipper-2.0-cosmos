import React from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import SettingIcon from '@assets/icon-setting.svg';
import {
  MenuItem,
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
import {
  THEME_LIST, DATE_LIST, TX_LIST,
} from '@recoil/settings';
import { useSettingList } from './hooks';
import { useStyles } from './styles';

const Settings: React.FC<{
  className?: string;
}> = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const {
    t, lang,
  } = useTranslation('common');
  const {
    open,
    handleOpen,
    state,
    handleChange,
    handleFormSubmit,
    handleCancel,
  } = useSettingList({ lang });

  return (
    <div>
      <div
        onClick={handleOpen}
        role="button"
        className={classnames(props.className, classes.icon)}
      >
        <SettingIcon />
      </div>
      <Dialog
        maxWidth="md"
        onClose={handleCancel}
        open={open}
        className={classes.dialog}
      >
        <DialogTitle disableTypography className={classes.header}>
          <Typography variant="h2">{t('settings')}</Typography>
          <IconButton
            aria-label="close"
            onClick={handleCancel}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleFormSubmit}>
            <div className={classes.formItem}>
              <Typography className="form-item--label">
                {t('theme')}
              </Typography>
              <Select
                variant="outlined"
                value={state.theme}
                onChange={(e) => handleChange('theme', e?.target?.value)}
                MenuProps={{ MenuListProps: {
                  disablePadding: true,
                } }}
              >
                {THEME_LIST
                  .map((l) => (
                    <MenuItem
                      key={l}
                      value={l}
                    >
                      {t(l)}
                    </MenuItem>
                  ))}
              </Select>
            </div>

            <div className={classes.formItem}>
              <Typography className="form-item--label">
                {t('language')}
              </Typography>
              <Select
                variant="outlined"
                value={state.lang}
                onChange={(e) => handleChange('lang', e?.target?.value)}
                MenuProps={{ MenuListProps: {
                  disablePadding: true,
                } }}
              >
                {router.locales
                  .map((l) => (
                    <MenuItem
                      key={l}
                      value={l}
                    >
                      {t(l)}
                    </MenuItem>
                  ))}
              </Select>
            </div>

            <div className={classes.formItem}>
              <Typography className="form-item--label">
                {t('dateFormat')}
              </Typography>
              <Select
                variant="outlined"
                value={state.dateFormat}
                onChange={(e) => handleChange('dateFormat', e?.target?.value)}
                MenuProps={{ MenuListProps: {
                  disablePadding: true,
                } }}
              >
                {DATE_LIST
                  .map((l) => (
                    <MenuItem
                      key={l}
                      value={l}
                    >
                      {t(l)}
                    </MenuItem>
                  ))}
              </Select>
            </div>

            <div className={classes.formItem}>
              <Typography className="form-item--label">
                {t('txListFormat')}
              </Typography>
              <Select
                variant="outlined"
                value={state.txListFormat}
                onChange={(e) => handleChange('txListFormat', e?.target?.value)}
                MenuProps={{ MenuListProps: {
                  disablePadding: true,
                } }}
              >
                {TX_LIST
                  .map((l) => (
                    <MenuItem
                      key={l}
                      value={l}
                    >
                      {t(l)}
                    </MenuItem>
                  ))}
              </Select>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleFormSubmit}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Settings;
