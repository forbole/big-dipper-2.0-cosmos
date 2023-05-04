import Typography from '@mui/material/Typography';
import useStyles from '@/screens/validators/components/list/components/staking/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { useTranslation } from 'next-i18next';
import DelegateDialog from './delegate';
import useStakingHooks from './hooks';

type StakeButtonProps = {
  address: string;
  name: string;
  imageUrl: string;
  commission: string;
};

const StakeButton = (props: StakeButtonProps) => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const { handleClick, handleClose, handleDelegate, open, anchorEl, openStakingDialog } =
    useStakingHooks();

  return (
    <div>
      <Button id="stake-button" onClick={handleClick} className={classes.staking}>
        <Typography variant="body1" className={classes.label}>
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
        <MenuItem onClick={handleClose}> {t('validators:redelegate')}</MenuItem>
        <MenuItem onClick={handleClose}> {t('validators:undelegate')}</MenuItem>
        <MenuItem onClick={handleClose}> {t('validators:claimRewards')}</MenuItem>
      </Menu>
    </div>
  );
};

export default StakeButton;
