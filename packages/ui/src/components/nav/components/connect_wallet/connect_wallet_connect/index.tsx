import { useConnectWalletList } from '@/components/nav/components/connect_wallet/hooks';
import { useStyles } from '@/components/nav/components/connect_wallet/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabPanel from '@/components/tab_panel';
import { a11yProps } from '@/utils/a11yProps';

const ConnectWalletConnectDialog: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('common');
  const {
    handleConnectWallet,
    handleConnectWalletConnectDialog,
    openConnectWalletConnectDialog,
    tabValue,
    handleTabChange,
  } = useConnectWalletList();

  return (
    <div>
      <Dialog
        maxWidth="md"
        onClose={handleConnectWalletConnectDialog}
        open={openConnectWalletConnectDialog}
        className={classes.dialog}
      >
        <DialogTitle disableTypography>
          <div>
            <div className={classes.grayDot} />
            <Typography variant="h2" className={classes.walletConnectHeader}>
              Wallet Connect
            </Typography>
          </div>
          <IconButton
            aria-label="close"
            onClick={handleConnectWalletConnectDialog}
            className={classes.closeButton}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div className={classes.walletConnectContent}>
            <div className={classes.grayDot} />
            <Typography variant="h4" className={classes.walletConnectMsg}>
              {t('scanWalletConnectQR')}
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
                wrapped
                {...a11yProps(0)}
                className={classes.tabButton}
                selected
              />
              <Tab
                value={2}
                label="Desktop"
                wrapped
                {...a11yProps(1)}
                className={classes.tabButton}
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
              <Typography variant="h3">{t('Continue')}</Typography>
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConnectWalletConnectDialog;
