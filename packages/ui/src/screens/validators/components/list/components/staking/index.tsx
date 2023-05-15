import Typography from '@mui/material/Typography';
import useStyles from '@/screens/validators/components/list/components/staking/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { useTranslation } from 'next-i18next';
import DelegateDialog from './delegate';
import RedelegateDialog from './redelegate';
import UndelegateDialog from './undelegate';
import useStakingHooks from './hooks';
import SnackBar from './snackbar';

type StakeButtonProps = {
  address: string;
  name: string;
  imageUrl: string;
  commission: string;
};

const StakeButton = (props: StakeButtonProps) => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const {
    handleClick,
    handleClose,
    handleDelegate,
    handleRedelegate,
    handleUndelegate,
    open,
    anchorEl,
    openStakingDialog,
    openRedelegateDialog,
    openUndelegateDialog,
  } = useStakingHooks();

  return (
    <div>
      <Button id="stake-button" onClick={handleClick} className={classes.staking}>
        <Typography variant="body2" className={classes.label}>
          {t('validators:stake')}
        </Typography>
        <ExpandMoreIcon />
      </Button>
      <Menu id="stake-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleDelegate}> {t('validators:delegate')}</MenuItem>
        <DelegateDialog
          open={openStakingDialog}
          onClose={handleClose}
          address={props.address}
          imageUrl={props.imageUrl}
          name={props.name}
          commission={props.commission}
        />
        <MenuItem onClick={handleRedelegate}> {t('validators:redelegate')}</MenuItem>
        <RedelegateDialog
          open={openRedelegateDialog}
          onClose={handleClose}
          address={props.address}
          imageUrl={props.imageUrl}
          name={props.name}
          commission={props.commission}
        />
        <MenuItem onClick={handleUndelegate}> {t('validators:undelegate')}</MenuItem>
        <UndelegateDialog
          open={openUndelegateDialog}
          onClose={handleClose}
          address={props.address}
          imageUrl={props.imageUrl}
          name={props.name}
          commission={props.commission}
        />
        <MenuItem onClick={handleClose}> {t('validators:claimRewards')}</MenuItem>
      </Menu>
      <SnackBar />
    </div>
  );
};

export default StakeButton;
