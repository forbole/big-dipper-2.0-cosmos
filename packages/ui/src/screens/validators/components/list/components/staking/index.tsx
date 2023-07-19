import useAppTranslation from '@/hooks/useAppTranslation';
import useStyles from '@/screens/validators/components/list/components/staking/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ButtonTooltip from '@/components/button_tooltip';
import type {
  ItemType,
  ValidatorsAvatarNameType,
} from '@/screens/validators/components/list/types';
import useConnectWalletList from '@/components/nav/components/connect_wallet/hooks';
import DelegateDialog from '@/screens/validators/components/list/components/staking/delegate';
import useStakingHooks from '@/screens/validators/components/list/components/staking/hooks';
import RedelegateDialog from '@/screens/validators/components/list/components/staking/redelegate';
import UndelegateDialog from '@/screens/validators/components/list/components/staking/undelegate';
import WithdrawRewardDialog from '@/screens/validators/components/list/components/staking/withdraw';
import StakeIcon from 'shared-utils/assets/icon-stake.svg';
import RewardsIcon from 'shared-utils/assets/icon-withdraw-rewards.svg';

type StakeButtonProps = {
  address: string;
  name: string;
  imageUrl?: string;
  commission: string;
  validators?: ItemType[];
  delegations?: ValidatorsAvatarNameType[];
  rewards?: ValidatorsAvatarNameType[];
  disabled: boolean;
  valRow?: boolean;
};

interface StakingButtonRefProps {
  classes: ReturnType<typeof useStyles>['classes'];
  disabled: boolean;
}

const StakingButtonRef = React.forwardRef<HTMLDivElement, StakingButtonRefProps>((props, ref) => {
  const { classes, disabled } = props;
  const { t } = useAppTranslation();
  return (
    <Box {...props} ref={ref}>
      <Button id="stake-button" className={classes.staking} disabled={disabled}>
        <Typography variant="body2" className={classes.label}>
          {t('validators:stake')}
        </Typography>
        <ExpandMoreIcon />
      </Button>
    </Box>
  );
});

const StakeButton = (props: StakeButtonProps) => {
  const { classes } = useStyles();
  const { t } = useAppTranslation();
  const {
    anchorEl,
    openStakingMenu,
    openDelegateDialog,
    openRedelegateDialog,
    openUndelegateDialog,
    openWithdrawDialog,
    handleOpenStakingMenu,
    handleOpenDelegateDialog,
    handleOpenRedelegateDialog,
    handleOpenUndelegateDialog,
    handleOpenWithdrawRewardsDialog,
    handleCloseStakingMenu,
    handleCloseDelegateDialog,
    handleCloseRedelegateDialog,
    handleCloseUndelegateDialog,
    handleCloseWithdrawRewardsDialog,
  } = useStakingHooks();
  const { handleLogin, tooltipOpen } = useConnectWalletList();

  return (
    <div>
      {props.valRow ? (
        <div className={classes.iconContainer}>
          <Button
            id="stake-button"
            onClick={handleOpenStakingMenu}
            className={classes.iconStaking}
            disabled={props.disabled}
          >
            <StakeIcon />
          </Button>
          <Button
            id="stake-button"
            onClick={handleOpenWithdrawRewardsDialog}
            className={classes.iconRewards}
            disabled={props.disabled}
          >
            <RewardsIcon />
          </Button>
        </div>
      ) : (
        <div className={classes.flexRow}>
          {props.disabled && tooltipOpen ? (
            <ButtonTooltip
              highlightText={t('stakeNow')}
              text={t('buttonTooltipText')}
              buttonText={t('buttonTooltipButtonText')}
              onClick={handleLogin}
              button
            >
              <StakingButtonRef classes={classes} disabled={props.disabled} />
            </ButtonTooltip>
          ) : (
            <Button
              id="stake-button"
              onClick={handleOpenStakingMenu}
              className={classes.staking}
              disabled={props.disabled}
            >
              <Typography variant="body2" className={classes.label}>
                {t('validators:stake')}
              </Typography>
              <ExpandMoreIcon />
            </Button>
          )}
          <div className={classes.claimRewardsBox}>
            <Button
              onClick={handleOpenWithdrawRewardsDialog}
              color="primary"
              className={classes.claimRewardsButton}
              disabled={props.disabled}
            >
              <Typography variant="h5">{t('validators:claimRewards')}</Typography>
            </Button>
          </div>
        </div>
      )}
      <Menu
        id="stake-menu"
        anchorEl={anchorEl}
        open={openStakingMenu}
        onClose={handleCloseStakingMenu}
        className={classes.stakingMenu}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleOpenDelegateDialog}>{t('validators:delegate')}</MenuItem>
        <DelegateDialog
          open={openDelegateDialog}
          onClose={handleCloseDelegateDialog}
          validatorAddress={props.address}
          imageUrl={props.imageUrl ?? ''}
          validatorName={props.name}
          validatorCommission={props.commission}
          validators={props.validators ?? undefined}
        />
        <MenuItem onClick={handleOpenRedelegateDialog}>{t('validators:redelegate')}</MenuItem>
        <RedelegateDialog
          open={openRedelegateDialog}
          onClose={handleCloseRedelegateDialog}
          validatorAddress={props.address}
          imageUrl={props.imageUrl ?? ''}
          validatorName={props.name}
          validatorCommission={props.commission}
          validators={props.validators ?? undefined}
          delegations={props.delegations ?? undefined}
        />
        <MenuItem onClick={handleOpenUndelegateDialog}> {t('validators:undelegate')}</MenuItem>
        <UndelegateDialog
          open={openUndelegateDialog}
          onClose={handleCloseUndelegateDialog}
          validatorAddress={props.address}
          imageUrl={props.imageUrl ?? ''}
          validatorName={props.name}
          validatorCommission={props.commission}
          validators={props.validators ?? undefined}
          delegations={props.delegations ?? undefined}
        />
      </Menu>
      <WithdrawRewardDialog
        open={openWithdrawDialog}
        onClose={handleCloseWithdrawRewardsDialog}
        validatorAddress={props.address}
        imageUrl={props.imageUrl ?? ''}
        validatorName={props.name}
        validatorCommission={props.commission}
        rewards={props.rewards ?? undefined}
      />
    </div>
  );
};

export default StakeButton;
