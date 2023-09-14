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
import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';
import { FC } from 'react';
import ValidatorFilterInput from '@/screens/validators/components/list/components/staking/validator_filter';
import type { ValidatorWithAvatar } from '@/screens/validators/components/list/types';
import useStakingHooks from '@/screens/validators/components/list/components/staking/hooks';
import CustomSnackbar from '@/components/snackbar';

type DelegateDialogProps = {
  open: boolean;
  onClose: () => void;
  validatorAddress: string;
  validatorName: string;
  imageUrl: string;
  validatorCommission: string;
  validators?: ValidatorWithAvatar[];
};

const DelegateDialog: FC<DelegateDialogProps> = ({
  open: openDelegateDialog,
  onClose,
  validatorAddress,
  validatorName,
  imageUrl,
  validatorCommission,
  validators,
}) => {
  const { classes } = useStyles();
  const { t } = useAppTranslation();
  const {
    amount,
    errorMsg,
    memo,
    token,
    tokenFormatDenom,
    loading,
    feeLoading,
    handleStakingAction,
    setTxAmount,
    setMemoValue,
    setValAddress,
    valAddress,
    delegationSuccess,
    setDelegationSuccess,
    setOpenSuccessSnackbar,
    openSuccessSnackbar,
    handleCloseSnackBar,
    txHash,
    resetDialogInfo,
    handleMaxFee,
  } = useStakingHooks({ validators });

  // Add a useEffect to close the delegation dialog when the delegationSuccess state is true
  React.useEffect(() => {
    if (delegationSuccess) {
      onClose();
      setOpenSuccessSnackbar(true);
      resetDialogInfo();
      setDelegationSuccess(false);
    }
    return () => setDelegationSuccess(false);
  }, [delegationSuccess, onClose, resetDialogInfo, setDelegationSuccess, setOpenSuccessSnackbar]);

  React.useEffect(() => {
    if (validatorAddress) {
      setValAddress(validatorAddress);
    }
  }, [setValAddress, validatorAddress, validators]);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (errorMsg !== '') {
      timer = setTimeout(() => {
        resetDialogInfo();
        onClose();
      }, 60000);
    }
    return () => clearTimeout(timer);
  }, [errorMsg, onClose, resetDialogInfo]);

  return (
    <div>
      <Dialog maxWidth="md" onClose={onClose} open={openDelegateDialog} className={classes.dialog}>
        <DialogTitle>
          <div className={classes.header}>
            <Typography className={classes.title} gutterBottom>
              {t('validators:delegation')}
            </Typography>
          </div>

          <Typography className={classes.subtitle}>{t('validators:delegateTo')}</Typography>
          {validators && !validatorAddress ? (
            <ValidatorFilterInput
              options={validators}
              setValidatorAddress={setValAddress}
              validatorAddress={valAddress}
            />
          ) : (
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
          )}
        </DialogTitle>
        <DialogContent>
          <div className={classes.redelegateContent}>
            <Typography className={classes.subtitle} align="left">
              {t('validators:howMuchToDelegate')}
            </Typography>
            <Typography className={classes.subtitle} align="right">
              {t('validators:amount')}
              <Button
                variant="text"
                className={classes.amountButton}
                disabled={validators && !validatorAddress ? !valAddress : !validatorAddress}
                onClick={() => handleMaxFee(token, valAddress, 'delegate')}
              >
                <div>{token}</div>
              </Button>
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
            type="number"
            InputProps={{
              disableUnderline: true,
              startAdornment: feeLoading && <CircularProgress size={20} />,
              endAdornment: tokenFormatDenom?.displayDenom.toUpperCase(),
              style: {
                height: '44px',
              },
              inputProps: { min: 0, step: 0.000001 },
            }}
            className={classes.textField}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setTxAmount(parseFloat(event.target.value));
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
          {errorMsg && (
            <Typography variant="h5" className={classes.errorMsg}>
              Error: {errorMsg}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <div className={classes.dialogActions}>
            <Button
              onClick={() => handleStakingAction('delegate')}
              color="primary"
              className={classes.delegateButton}
              disabled={!valAddress || token === '0'}
            >
              {loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <Typography variant="h5">{t('validators:delegate')}</Typography>
              )}
            </Button>
          </div>
        </DialogActions>
      </Dialog>
      <CustomSnackbar
        open={openSuccessSnackbar}
        onClose={handleCloseSnackBar}
        type="success"
        actionMsg="viewTxs"
        msg="trackingOfTxDetailsIsNowAvailable"
        trans="validators"
        link={txHash}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      />
    </div>
  );
};

export default DelegateDialog;
