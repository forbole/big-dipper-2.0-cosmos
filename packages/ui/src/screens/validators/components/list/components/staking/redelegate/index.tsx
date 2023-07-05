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
import Loading from '@/components/loading';
import AvatarNameFilterInput from '@/screens/validators/components/list/components/staking/avatar_name_filter';
import ValidatorFilterInput from '@/screens/validators/components/list/components/staking/validator_filter';
import type {
  ItemType,
  ValidatorsAvatarNameType,
} from '@/screens/validators/components/list/types';
import CustomSnackbar from '@/components/snackbar';
import useStakingHooks from '@/screens/validators/components/list/components/staking/hooks';

type RedelegateDialogProps = {
  open: boolean;
  onClose: () => void;
  validatorAddress: string;
  validatorName: string;
  imageUrl: string;
  validatorCommission: string;
  delegations?: ValidatorsAvatarNameType[];
  validators?: ItemType[];
};

const RedelegateDialog: FC<RedelegateDialogProps> = ({
  open,
  onClose,
  validatorAddress,
  validatorName,
  imageUrl,
  validatorCommission,
  delegations,
  validators,
}) => {
  const { classes } = useStyles();
  const { t } = useAppTranslation();
  const {
    setTxAmount,
    setMemoValue,
    setValidatorSourceAddress,
    setValAddress,
    handleStakingAction,
    loading,
    delegationSuccess,
    txHash,
    setDelegationSuccess,
    setOpenSuccessSnackbar,
    openSuccessSnackbar,
    handleCloseSnackBar,
    resetDialogInfo,
    amount,
    errorMsg,
    memo,
    tokenFormatDenom,
    stakedToken,
    validatorSourceAddress,
    valAddress,
  } = useStakingHooks({ validators, delegations });

  // set sources address to validatorAddress input if validatorAddress prop is passed
  React.useEffect(() => {
    if (validatorAddress && delegations) {
      setValidatorSourceAddress(validatorAddress);
    }
    return () => setValidatorSourceAddress('');
  }, [delegations, setValidatorSourceAddress, validatorAddress]);

  React.useEffect(() => {
    if (delegationSuccess) {
      onClose();
      setOpenSuccessSnackbar(true);
      resetDialogInfo();
      setDelegationSuccess(false);
    }
    return () => setDelegationSuccess(false);
  }, [delegationSuccess, onClose, resetDialogInfo, setDelegationSuccess, setOpenSuccessSnackbar]);

  return (
    <div>
      <Dialog maxWidth="md" onClose={onClose} open={open} className={classes.dialog}>
        <DialogTitle>
          <div className={classes.header}>
            <Typography className={classes.title} gutterBottom>
              {t('validators:redelegation')}
            </Typography>
          </div>

          <Typography className={classes.subtitle}>{t('validators:redelegateFrom')}</Typography>
          {delegations && !validatorAddress ? (
            <AvatarNameFilterInput
              options={delegations.map((item) => item.validator)}
              setValidatorAvatarAddress={setValidatorSourceAddress}
              validatorAvatarAddress={validatorSourceAddress}
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
          <Typography className={classes.subtitle}>{t('validators:redelegateTo')}</Typography>
          {validators ? (
            <ValidatorFilterInput
              options={validators}
              setValidatorAddress={setValAddress}
              validatorAddress={valAddress}
            />
          ) : (
            <Loading />
          )}
        </DialogTitle>
        <DialogContent>
          <div className={classes.redelegateContent}>
            <Typography className={classes.subtitle} align="left">
              {t('validators:howMuchToRedelegate')}
            </Typography>
            <Typography className={classes.subtitle} align="right">
              {t('validators:stakedAmount')}
              <div className={classes.amountLabel}>{stakedToken}</div>
            </Typography>
          </div>
          <TextField
            value={amount}
            required
            hiddenLabel
            fullWidth
            placeholder={t('validators:amountPlaceholder')}
            variant="filled"
            id="redelegate-amount-input"
            type="number"
            InputProps={{
              disableUnderline: true,
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
            id="redelegate-memo-input"
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
              onClick={() => handleStakingAction(validatorAddress, 'redelegate')}
              color="primary"
              className={classes.delegateButton}
              disabled={stakedToken === `0 ${tokenFormatDenom?.displayDenom.toUpperCase()}`}
            >
              {loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <Typography variant="h5">{t('validators:redelegate')}</Typography>
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

export default RedelegateDialog;
