import useAppTranslation from '@/hooks/useAppTranslation';
import useStyles from '@/screens/validators/components/list/components/staking/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import DelegateDialog from './delegate';
import useStakingHooks from './hooks';
import RedelegateDialog from './redelegate';
import UndelegateDialog from './undelegate';

type StakeButtonProps = {
  address: string;
  name: string;
  imageUrl?: string;
  commission: string;
};

const StakeButton = (props: StakeButtonProps) => {
  const { classes } = useStyles();
  const { t } = useAppTranslation();
  const {
    anchorEl,
    openStakingMenu,
    openDelegateDialog,
    openRedelegateDialog,
    openUndelegateDialog,
    handleOpenStakingMenu,
    handleOpenDelegateDialog,
    handleOpenRedelegateDialog,
    handleOpenUndelegateDialog,
    handleCloseStakingMenu,
    handleCloseDelegateDialog,
    handleCloseRedelegateDialog,
    handleCloseUndelegateDialog,
  } = useStakingHooks();

  return (
    <div>
      <Button id="stake-button" onClick={handleOpenStakingMenu} className={classes.staking}>
        <Typography variant="body2" className={classes.label}>
          {t('validators:stake')}
        </Typography>
        <ExpandMoreIcon />
      </Button>
      <Menu
        id="stake-menu"
        anchorEl={anchorEl}
        open={openStakingMenu}
        onClose={handleCloseStakingMenu}
      >
        <MenuItem onClick={handleOpenDelegateDialog}> {t('validators:delegate')}</MenuItem>
        <DelegateDialog
          open={openDelegateDialog}
          onClose={handleCloseDelegateDialog}
          validatorAddress={props.address}
          imageUrl={props.imageUrl ?? ''}
          validatorName={props.name}
          validatorCommission={props.commission}
        />
        <MenuItem onClick={handleOpenRedelegateDialog}> {t('validators:redelegate')}</MenuItem>
        <RedelegateDialog
          open={openRedelegateDialog}
          onClose={handleCloseRedelegateDialog}
          validatorAddress={props.address}
          imageUrl={props.imageUrl ?? ''}
          validatorName={props.name}
          validatorCommission={props.commission}
        />
        <MenuItem onClick={handleOpenUndelegateDialog}> {t('validators:undelegate')}</MenuItem>
        <UndelegateDialog
          open={openUndelegateDialog}
          onClose={handleCloseUndelegateDialog}
          validatorAddress={props.address}
          imageUrl={props.imageUrl ?? ''}
          validatorName={props.name}
          validatorCommission={props.commission}
        />
        {/* <MenuItem onClick={handleCloseClaimRewardsDialog}> {t('validators:claimRewards')}</MenuItem> */}
      </Menu>
    </div>
  );
};

export default StakeButton;
