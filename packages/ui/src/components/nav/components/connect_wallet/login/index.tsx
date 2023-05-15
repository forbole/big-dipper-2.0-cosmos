import chainConfig from '@/chainConfig';
import { useStyles } from '@/components/nav/components/connect_wallet/styles';
import { ChainInfo } from '@keplr-wallet/types';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import KeplrIcon from 'shared-utils/assets/keplr-wallet.svg';
import WalletConnectIcon from 'shared-utils/assets/wallet-connect.svg';

// Get the keplr chain info from chainConfig
const { keplr } = chainConfig();

let keplrCustomChainInfo: ChainInfo | undefined;
if (keplr) {
  keplrCustomChainInfo = JSON.parse(keplr);
}

type LoginDialogProps = {
  open: boolean;
  onClose: () => void;
  handleConnectWallet: (wallet: string) => void;
};

const LoginDialog: FC<LoginDialogProps> = ({ open, onClose, handleConnectWallet }) => {
  const { classes } = useStyles();
  const { t } = useAppTranslation();

  return (
    <div>
      <Dialog maxWidth="md" onClose={onClose} open={open} className={classes.dialog}>
        <DialogTitle>
          <div className={classes.header}>
            <Typography className={classes.title} gutterBottom>
              {t('common:welcomeToBigDipper')}
            </Typography>
            <div>
              <Typography className={classes.subtitle}>{t('common:chooseYourWallet')}</Typography>
            </div>
            <IconButton aria-label="close" onClick={onClose} className={classes.closeButton}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <div className={classes.dialogContentButton}>
            <Button
              aria-label="connect-walletconnect-wallet-button"
              onClick={(e: { preventDefault: () => void }) => {
                e.preventDefault();
                handleConnectWallet('Wallet Connect');
              }}
              className={classes.walletButton}
            >
              <div className={classes.walletIcon}>
                <WalletConnectIcon />
                <div className={classes.walletConnectLabel}>Wallet Connect</div>
              </div>
            </Button>
          </div>
          {!!keplrCustomChainInfo && (
            <div className={classes.dialogContentButton}>
              <Button
                onClick={(e: { preventDefault: () => void }) => {
                  e.preventDefault();
                  handleConnectWallet('Keplr Extension');
                }}
                aria-label="connect-keplr-extension-button"
                className={classes.walletButton}
              >
                <div className={classes.walletIcon}>
                  <KeplrIcon />
                  <div className={classes.walletConnectLabel}>Keplr</div>
                </div>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginDialog;
