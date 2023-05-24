import AvatarName from '@/components/avatar_name';
import useAppTranslation from '@/hooks/useAppTranslation';
import useStyles from '@/screens/validators/components/list/components/staking/styles';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { FC } from 'react';
import useStakingHooks from '../hooks';

type DelegateDialogProps = {
  open: boolean;
  onClose: () => void;
  validatorAddress: string;
  validatorName: string;
  imageUrl: string;
  validatorCommission: string;
};

const DelegateDialog: FC<DelegateDialogProps> = ({
  open,
  onClose,
  validatorAddress,
  validatorName,
  imageUrl,
  validatorCommission,
}) => {
  const { classes } = useStyles();
  const { t } = useAppTranslation();
  const {
    amount,
    errorMsg,
    memo,
    token,
    tokenFormatDenom,
    handleStakingAction,
    setTxAmount,
    setMemoValue,
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
              address={validatorAddress}
              imageUrl={imageUrl}
              name={validatorName}
              className={classes.validatorAvatar}
            />
            <Typography className={classes.commissionLabel}>
              {t('validators:commission')}
              <Typography className={classes.commissionValue}>{validatorCommission} </Typography>
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
              setTxAmount(event.target.value);
            }}
          />
          <Typography className={classes.subtitle} id="memo">
            {t('validators:memo')}
          </Typography>
          <TextField
            value={memo}
            hiddenLabel
            fullWidth
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
          {errorMsg !== '' ? (
            <Typography variant="h5" className={classes.errorMsg}>
              Error: {errorMsg}
            </Typography>
          ) : null}
        </DialogContent>
        <DialogActions>
          <div className={classes.dialogActions}>
            <Button
              onClick={() => handleStakingAction(validatorAddress, 'delegate')}
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
