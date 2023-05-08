import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import useStyles from '@/screens/validators/components/list/components/staking/styles';
import AvatarName from '@/components/avatar_name';
import useStakingHooks from '../hooks';

type DelegateDialogProps = {
  open: boolean;
  onClose: () => void;
  address: string;
  name: string;
  imageUrl: string;
  commission: string;
};

const DelegateDialog: FC<DelegateDialogProps> = ({
  open,
  onClose,
  address,
  name,
  imageUrl,
  commission,
}) => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const {
    setDelegateAmount,
    setMemoValue,
    handleDelegateAction,
    amount,
    memo,
    tokenFormatDenom,
    token,
  } = useStakingHooks();

  return (
    <div>
      <Dialog maxWidth="md" onClose={onClose} open={open} className={classes.dialog}>
        <DialogTitle>
          <div className={classes.header}>
            <Typography className={classes.title} gutterBottom>
              {t('validators:delegation')}
            </Typography>
          </div>

          <Typography className={classes.subtitle}>{t('validators:delegateTo')}</Typography>
          <div className={classes.validatorCard}>
            <AvatarName
              address={address}
              imageUrl={imageUrl}
              name={name}
              className={classes.validatorAvatar}
            />
            <Typography className={classes.commissionLabel}>
              {t('validators:commission')}
              <Typography className={classes.commissionValue}>{commission} </Typography>
            </Typography>
            <IconButton aria-label="close" onClick={onClose} className={classes.closeButton}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className={classes.ddd}>
            <Typography className={classes.subtitle} align="left">
              {t('validators:howMuchToDelegate')}
            </Typography>
            <Typography className={classes.subtitle} align="right">
              {t('validators:amount')}
              <div className={classes.amountLabel}>{token}</div>
            </Typography>
          </div>
          <TextField
            value={amount}
            required
            hiddenLabel
            fullWidth
            // margin="normal"
            placeholder={t('validators:amountPlaceholder')}
            variant="filled"
            id="delegate-amount-input"
            InputProps={{
              disableUnderline: true,
              endAdornment: tokenFormatDenom?.displayDenom.toUpperCase(),
              style: {
                height: '44px',
              },
            }}
            className={classes.textField}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDelegateAmount(event.target.value);
            }}
          />
          <Typography className={classes.subtitle} id="memo">
            {t('validators:memo')}
          </Typography>
          <TextField
            value={memo}
            hiddenLabel
            fullWidth
            // margin="dense"
            // multiline={true}
            // rows={1}
            placeholder={t('validators:optional')}
            variant="filled"
            id="delegate-memo-input"
            InputProps={{
              disableUnderline: true,
              style: {
                height: '44px',
              },
            }}
            className={classes.textField}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setMemoValue(event.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <div className={classes.dialogActions}>
            <Button
              onClick={handleDelegateAction}
              color="primary"
              className={classes.delegateButton}
            >
              <Typography variant="h5">{t('validators:delegate')}</Typography>
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DelegateDialog;
