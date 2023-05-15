import { useSettingList } from '@/components/nav/components/desktop/components/action_bar/components/settings_list/hooks';
import useStyles from '@/components/nav/components/desktop/components/action_bar/components/settings_list/styles';
import { DATE_LIST, TX_LIST } from '@/recoil/settings';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { useRouter } from 'next/router';
import { FC } from 'react';
import SettingIcon from 'shared-utils/assets/icon-setting.svg';
import Toggle from '@/components/toggle';

const release = `${process.env.NEXT_PUBLIC_RELEASE ?? ''}`;

const Settings: FC<ComponentDefault> = (props) => {
  const { classes, cx } = useStyles();
  const router = useRouter();
  const { t, i18n } = useAppTranslation('common');
  const {
    open,
    handleOpen,
    state,
    time,
    handleChange,
    handleFormSubmit,
    handleTimeFormatChange,
    handleCancel,
  } = useSettingList({
    lang: i18n.language,
  });

  return (
    <div>
      <div
        onClick={handleOpen}
        role="button"
        className={cx(props.className, classes.icon)}
        tabIndex={0}
        aria-label="settings-button"
      >
        <SettingIcon />
      </div>
      <Dialog maxWidth="md" onClose={handleCancel} open={open} className={classes.dialog}>
        <DialogTitle className={classes.header}>
          <div className={classes.title}>
            <Typography variant="h2">{t('settings')}</Typography>
            <Typography variant="body2" className={classes.version}>
              ({release})
            </Typography>
          </div>
          <IconButton aria-label="close" onClick={handleCancel} size="large">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleFormSubmit}>
            <div className={classes.formItem}>
              <Typography className="form-item--label">{t('language')}</Typography>
              <Select
                variant="outlined"
                value={state.lang}
                onChange={(e) => handleChange('lang', (e?.target?.value as string) ?? '')}
                MenuProps={{
                  MenuListProps: {
                    disablePadding: true,
                  },
                }}
              >
                {router?.locales?.map((l) => (
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
                onChange={(e) => handleChange('dateFormat', (e?.target?.value as string) ?? '')}
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
              <Toggle
                className={classes.timeToggleDiv}
                onToggle={handleTimeFormatChange}
                checked={time === '24-hour'}
                placeholder={t(time)}
              />
            </div>

            <div className={classes.formItem}>
              <Typography className="form-item--label">{t('txListFormat')}</Typography>
              <Select
                variant="outlined"
                value={state.txListFormat}
                onChange={(e) => handleChange('txListFormat', (e?.target?.value as string) ?? '')}
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
