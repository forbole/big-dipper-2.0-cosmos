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
import * as React from 'react';
import useStakingHooks from '../hooks';

type RedelegateDialogProps = {
  open: boolean;
  onClose: () => void;
  address: string;
  name: string;
  imageUrl: string;
  commission: string;
};

const RedelegateDialog: FC<RedelegateDialogProps> = ({
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
    setRedelegateAmount,
    setMemoValue,
    handleRedelegateAction,
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
              {t('validators:redelegation')}
            </Typography>
          </div>

          <Typography className={classes.subtitle}>{t('validators:redelegateFrom')}</Typography>
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
              {t('validators:howMuchToRedelegate')}
            </Typography>
            <Typography className={classes.subtitle} align="right">
              {t('validators:stakedAmount')}
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
              setRedelegateAmount(event.target.value);
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
        </DialogContent>
        <DialogActions>
          <div className={classes.dialogActions}>
            <Button
              onClick={handleRedelegateAction}
              color="primary"
              className={classes.delegateButton}
            >
              <Typography variant="h5">{t('validators:redelegate')}</Typography>
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RedelegateDialog;
