import useConnectWalletList from '@/components/nav/components/connect_wallet/hooks';
import { useStyles } from '@/components/nav/components/connect_wallet/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabPanel from '@/components/tab_panel';
import { a11yProps } from '@/utils/a11yProps';
// import { QRCodeSVG } from 'qrcode.react';

type ConnectWalletConnectDialogProps = {
  open: boolean;
  onClose: () => void;
};

const ConnectWalletConnectDialog: FC<ConnectWalletConnectDialogProps> = ({ open, onClose }) => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const { handleConnectWallet, tabValue, handleTabChange } = useConnectWalletList();

  return (
    <div>
      <Dialog maxWidth="md" onClose={onClose} open={open} className={classes.dialog}>
        <DialogTitle>
          <div>
            <div className={classes.grayDot} />
            <Typography variant="h2" className={classes.walletConnectHeader}>
              Wallet Connect
            </Typography>
          </div>
          <IconButton aria-label="close" onClick={onClose} className={classes.closeButton}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div className={classes.walletConnectContent}>
            <div className={classes.grayDot} />
            <Typography variant="h4" className={classes.walletConnectMsg}>
              {t('common:scanWalletConnectQR')}
            </Typography>
          </div>

          <div className={classes.tabs}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              centered
              allowScrollButtonsMobile
              TabIndicatorProps={{
                style: {
                  display: 'none',
                },
              }}
            >
              <Tab
                value={1}
                label="QR code"
                {...a11yProps(1)}
                className={classes.tabButton}
                selected
                style={{ minWidth: '20%' }}
              />
              <Tab
                value={2}
                label="Desktop"
                {...a11yProps(2)}
                className={classes.tabButton}
                style={{ minWidth: '23%' }}
              />
            </Tabs>
            <TabPanel value={tabValue} index={1}>
              QR Code
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
              Desktop
            </TabPanel>
          </div>
        </DialogContent>
        <DialogActions>
          <div className={classes.actions}>
            <Button onClick={handleConnectWallet} color="primary" className={classes.actionsButton}>
              <Typography variant="h3">{t('common:continue')}</Typography>
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConnectWalletConnectDialog;
