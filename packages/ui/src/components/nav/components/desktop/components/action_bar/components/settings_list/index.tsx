import { useSettingList } from '@/components/nav/components/desktop/components/action_bar/components/settings_list/hooks';
import useStyles from '@/components/nav/components/desktop/components/action_bar/components/settings_list/styles';
import { readTx, TX_LIST } from '@/recoil/settings';
import CloseIcon from '@mui/icons-material/Close';
import { default as Dark } from '@mui/icons-material/Brightness2';
import { default as Light } from '@mui/icons-material/Brightness7';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import SettingIcon from 'shared-utils/assets/icon_settings.svg';
import generalConfig from '@/generalConfig';

const release = `${process.env.NEXT_PUBLIC_RELEASE ?? ''}`;

const Settings: FC<ComponentDefault> = (props) => {
  const { classes, cx } = useStyles();
  const router = useRouter();
  const { t, i18n } = useTranslation('common');
  const { open, handleOpen, state, handleChange, handleFormSubmit, handleCancel } = useSettingList({
    lang: i18n.language,
  });
  const txListFormat = useRecoilValue(readTx);

  return (
    <div>
      <ListItemButton className={props.className} onClick={handleOpen}>
        <ListItemIcon className={classes.listItemIcon}>
          <div role="button" className={classes.icon}>
            <SettingIcon style={{ color: 'none' }} />
          </div>
        </ListItemIcon>
        <ListItemText className={classes.listItemText} primary={t('settings')} />
      </ListItemButton>
      <Dialog maxWidth="md" onClose={handleCancel} open={open} className={classes.dialog}>
        <DialogTitle className={classes.header}>
          <div className={classes.title}>
            <Typography variant="h2">{t('settings')}</Typography>
          </div>
          <IconButton aria-label="close" onClick={handleCancel} size="large">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleFormSubmit}>
            <div className={classes.formItem}>
              <Typography className="form-item--label">{t('theme')}</Typography>
              <div className="theme_container">
                <div
                  className={`theme_item ${state.theme === 'dark' ? 'active' : ''}`}
                  role="button"
                  onClick={() => handleChange('theme', 'dark')}
                >
                  <Dark htmlColor={state.theme === 'dark' ? 'white' : undefined} />
                </div>
                <div
                  className={`theme_item ${state.theme === 'light' ? 'active' : ''}`}
                  role="button"
                  onClick={() => handleChange('theme', 'light')}
                >
                  <Light htmlColor={state.theme === 'light' ? 'white' : undefined} />
                </div>
              </div>
            </div>

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
                {router.locales?.map((l) => (
                  <MenuItem key={l} value={l}>
                    {t(l)}
                  </MenuItem>
                ))}
              </Select>
            </div>

            {/* <div className={classes.formItem}>
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
            </div> */}

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
        <div />
        <DialogActions
          style={{
            justifyContent: 'space-between',
            paddingLeft: '24px',
          }}
        >
          <Typography variant="body2" className={classes.version}>
            {t('version')}
            {generalConfig.version}
          </Typography>
          <Button onClick={handleFormSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Settings;
