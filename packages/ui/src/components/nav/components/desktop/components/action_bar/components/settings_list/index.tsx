import React from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import SettingIcon from 'shared-utils/assets/icon-setting.svg';
import generalConfig from '@/generalConfig';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import CloseIcon from '@material-ui/icons/Close';
import { THEME_LIST, DATE_LIST, TX_LIST } from '@/recoil/settings';
import { useSettingList } from '@/components/nav/components/desktop/components/action_bar/components/settings_list/hooks';
import { useStyles } from '@/components/nav/components/desktop/components/action_bar/components/settings_list/styles';

const Settings: React.FC<{
  className?: string;
}> = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const { t, lang } = useTranslation('common');
  const { open, handleOpen, state, handleChange, handleFormSubmit, handleCancel } = useSettingList({
    lang,
  });

  return (
    <div>
      <div
        onClick={handleOpen}
        role="button"
        className={classnames(props.className, classes.icon)}
        tabIndex={0}
        aria-label="settings-button"
      >
        <SettingIcon />
      </div>
      <Dialog maxWidth="md" onClose={handleCancel} open={open} className={classes.dialog}>
        <DialogTitle disableTypography className={classes.header}>
          <div className={classes.title}>
            <Typography variant="h2">{t('settings')}</Typography>
            <Typography variant="body2" className={classes.version}>
              ({generalConfig.version})
            </Typography>
          </div>
          <IconButton aria-label="close" onClick={handleCancel}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleFormSubmit}>
            <div className={classes.formItem}>
              <Typography className="form-item--label">{t('theme')}</Typography>
              <Select
                variant="outlined"
                value={state.theme}
                onChange={(e) => handleChange('theme', e?.target?.value)}
                MenuProps={{
                  MenuListProps: {
                    disablePadding: true,
                  },
                }}
              >
                {THEME_LIST.map((l) => (
                  <MenuItem key={l} value={l}>
                    {t(l)}
                  </MenuItem>
                ))}
              </Select>
            </div>

            <div className={classes.formItem}>
              <Typography className="form-item--label">{t('language')}</Typography>
              <Select
                variant="outlined"
                value={state.lang}
                onChange={(e) => handleChange('lang', e?.target?.value)}
                MenuProps={{
                  MenuListProps: {
                    disablePadding: true,
                  },
                }}
              >
                {router.locales?.map((l) => (
                  <MenuItem key={l} value={l}>
                    {t(l)}
                  </MenuItem>
                ))}
              </Select>
            </div>

            <div className={classes.formItem}>
              <Typography className="form-item--label">{t('dateFormat')}</Typography>
              <Select
                variant="outlined"
                value={state.dateFormat}
                onChange={(e) => handleChange('dateFormat', e?.target?.value)}
                MenuProps={{
                  MenuListProps: {
                    disablePadding: true,
                  },
                }}
              >
                {DATE_LIST.map((l) => (
                  <MenuItem key={l} value={l}>
                    {t(l)}
                  </MenuItem>
                ))}
              </Select>
            </div>

            <div className={classes.formItem}>
              <Typography className="form-item--label">{t('txListFormat')}</Typography>
              <Select
                variant="outlined"
                value={state.txListFormat}
                onChange={(e) => handleChange('txListFormat', e?.target?.value)}
                MenuProps={{
                  MenuListProps: {
                    disablePadding: true,
                  },
                }}
              >
                {TX_LIST.map((l) => (
                  <MenuItem key={l} value={l}>
                    {t(l)}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Settings;
