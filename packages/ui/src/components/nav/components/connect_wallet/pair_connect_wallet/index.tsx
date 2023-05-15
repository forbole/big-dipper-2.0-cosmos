import { useStyles } from '@/components/nav/components/connect_wallet/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useScreenSize } from '@/hooks/use_screen_size';
import LinearLoading from '@/components/linear_loading';

type PairWalletConnectDialogProps = {
  open: boolean;
  walletConnectURI: string;
  onClose: () => void;
};

const PairConnectWalletDialog: FC<PairWalletConnectDialogProps> = ({
  open,
  walletConnectURI,
  onClose,
}) => {
  const { classes } = useStyles();
  const { t } = useAppTranslation();
  const { isDesktop } = useScreenSize();
  return (
    <div>
      <Dialog maxWidth="md" onClose={onClose} open={open} className={classes.dialog}>
        <DialogTitle>
          <div className={classes.header}>
            <Typography className={classes.title} gutterBottom>
              {t('common:connectWalletConnect')}
            </Typography>
            <div>
              <Typography className={classes.subtitle}>
                {t('common:scanWalletConnectQR')}
              </Typography>
            </div>
            <IconButton aria-label="close" onClick={onClose} className={classes.closeButton}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          {walletConnectURI !== '' ? (
            <div className={classes.qrContent}>
              <QRCodeSVG
                size={isDesktop ? 230 : 130}
                value={walletConnectURI}
                className={classes.qrCode}
              />
            </div>
          ) : (
            <LinearLoading className={classes.loading} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PairConnectWalletDialog;
