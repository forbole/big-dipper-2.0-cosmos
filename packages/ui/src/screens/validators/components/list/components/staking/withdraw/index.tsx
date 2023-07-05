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
import AvatarNameFilterInput from '@/screens/validators/components/list/components/staking/avatar_name_filter';
import type { ValidatorsAvatarNameType } from '@/screens/validators/components/list/types';
import CustomSnackbar from '@/components/snackbar';
import useStakingHooks from '@/screens/validators/components/list/components/staking/hooks';

type WithdrawRewardDialogProps = {
  open: boolean;
  onClose: () => void;
  validatorAddress: string;
  validatorName: string;
  imageUrl: string;
  validatorCommission: string;
  rewards?: ValidatorsAvatarNameType[];
};

const WithdrawRewardDialog: FC<WithdrawRewardDialogProps> = ({
  open,
  onClose,
  validatorAddress,
  validatorName,
  imageUrl,
  validatorCommission,
  rewards,
}) => {
  const { classes } = useStyles();
  const { t } = useAppTranslation();
  const {
    memo,
    tokenFormatDenom,
    rewardToken,
    errorMsg,
    withdrawSuccess,
    txHash,
    validatorRewardAddress,
    loading,
    resetWithdrawDialogInfo,
    handleStakingAction,
    setMemoValue,
    setValidatorRewardAddress,
    setWithdrawSuccess,
    setOpenSuccessSnackbar,
    openSuccessSnackbar,
    handleCloseSnackBar,
  } = useStakingHooks({ rewards });

  // set sources reward validator address to validatorAddress input if validatorAddress prop is passed
  React.useEffect(() => {
    setValidatorRewardAddress(validatorAddress);
    return () => setValidatorRewardAddress('');
  }, [rewards, setValidatorRewardAddress, validatorAddress]);

  React.useEffect(() => {
    if (withdrawSuccess) {
      onClose();
      setOpenSuccessSnackbar(true);
      resetWithdrawDialogInfo();
      setWithdrawSuccess(false);
    }
    return () => setWithdrawSuccess(false);
  }, [
    onClose,
    resetWithdrawDialogInfo,
    setOpenSuccessSnackbar,
    setWithdrawSuccess,
    withdrawSuccess,
  ]);

  return (
    <div>
      <Dialog maxWidth="md" onClose={onClose} open={open} className={classes.dialog}>
        <DialogTitle>
          <div className={classes.header}>
            <Typography className={classes.title} gutterBottom>
              {t('validators:claimRewards')}
            </Typography>
          </div>

          <Typography className={classes.subtitle}>{t('validators:claimFrom')}</Typography>
          {rewards && !validatorAddress ? (
            <AvatarNameFilterInput
              options={rewards.map((item) => item.validator)}
              setValidatorAvatarAddress={setValidatorRewardAddress}
              validatorAvatarAddress={validatorRewardAddress}
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
              {t('validators:claimAmount')}
            </Typography>
            <Typography className={classes.subtitle} align="right">
              <div className={classes.amountLabel}>{rewardToken}</div>
            </Typography>
          </div>
          <Typography className={classes.subtitle} id="memo">
            {t('validators:memo')}
          </Typography>
          <TextField
            value={memo}
            hiddenLabel
            fullWidth
            placeholder={t('validators:optional')}
            variant="filled"
            id="undelegate-memo-input"
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
              onClick={() =>
                handleStakingAction(
                  validatorRewardAddress === '' ? validatorAddress : validatorRewardAddress,
                  'claim rewards'
                )
              }
              color="primary"
              className={classes.delegateButton}
              disabled={rewardToken === `0 ${tokenFormatDenom?.displayDenom.toUpperCase()}`}
            >
              {loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <Typography variant="h5">{t('validators:claim')}</Typography>
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

export default WithdrawRewardDialog;
