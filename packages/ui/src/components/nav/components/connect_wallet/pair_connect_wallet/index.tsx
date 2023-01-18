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
import { QRCodeSVG } from 'qrcode.react';
import Loading from '@/components/loading';

type PairWalletConnectDialogProps = {
  open: boolean;
  walletConnectURI: string;
  onClose: () => void;
  onContinue: () => void;
};

const PairConnectWalletDialog: FC<PairWalletConnectDialogProps> = ({
  open,
  walletConnectURI,
  onClose,
  onContinue,
}) => {
  const { classes } = useStyles();
  const { t } = useTranslation();
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
          {walletConnectURI !== '' ? (
            <div className={classes.qrCode}>
              <QRCodeSVG size={200} value={walletConnectURI} />
            </div>
          ) : (
            <Loading className={classes.qrCodeLoading} />
          )}
        </DialogContent>
        <DialogActions>
          <div className={classes.actions}>
            <Button onClick={onContinue} color="primary" className={classes.actionsButton}>
              <Typography variant="h3">{t('common:continue')}</Typography>
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PairConnectWalletDialog;
