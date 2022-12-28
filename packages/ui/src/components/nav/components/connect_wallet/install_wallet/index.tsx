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
import Trans from 'next-translate/Trans';

const InstallWallet: React.FC<{
  walletName: string;
  walletUrl: string;
}> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation('common');
  const { handleConnectWallet, handleCloseInstallExtensionDialog, openInstallExtensionDialog } =
    useConnectWalletList();

  return (
    <div>
      <Dialog
        maxWidth="md"
        onClose={handleCloseInstallExtensionDialog}
        open={openInstallExtensionDialog}
        className={classes.dialog}
      >
        <DialogTitle disableTypography>
          <div className={classes.warningMsg}>
            <div>
              <Typography variant="h2" align="center" className={classes.warningMsgHeader}>
                {t('pleaseInstallWallet', {
                  wallet: props.walletName,
                })}
              </Typography>
            </div>
            <IconButton
              aria-label="close"
              onClick={handleCloseInstallExtensionDialog}
              className={classes.closeButton}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className={classes.warningMsgDetails}>
            <Typography variant="h4" align="center">
              <Trans
                i18nKey="common:couldntFindWalletExtension"
                components={[
                  <a target="_blank" rel="noreferrer" href={props.walletUrl}>
                    {}
                  </a>,
                ]}
                values={{
                  wallet: props.walletName,
                }}
              />
            </Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <div className={classes.actions}>
            <Button onClick={handleConnectWallet} color="primary" className={classes.actionsButton}>
              <Typography variant="h3">{t('retry')}</Typography>
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InstallWallet;
