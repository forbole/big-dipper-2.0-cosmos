import Box from '@/components/box';
import { useStyles } from '@/components/nav/components/wallet_drop_down/styles';
import classnames from 'classnames';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { useConnectWalletList } from '@/components/nav/components/connect_wallet/hooks';
import useTranslation from 'next-translate/useTranslation';
import Avatar from '@/components/avatar';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import CopyIcon from 'shared-utils/assets/icon-copy-text.svg';
import { useAddress } from '@/screens/validator_details/components/validator_overview/hooks';
import LogoutIcon from 'shared-utils/assets/icon-logout.svg';
import { useRecoilValue } from 'recoil';
import { readUserAddress } from '@/recoil/user';
import Link from 'next/link';
import { ACCOUNT_DETAILS } from '@/utils/go_to_page';

import React from 'react';

const WalletDropDown: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('common');
  const classes = useStyles();
  const { handleCopyToClipboard } = useAddress(t);
  const address = useRecoilValue(readUserAddress);
  const { handleCancel, handleLogout } = useConnectWalletList();

  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classes.walletDetails}>
        <div className={classes.walletInfo}>
          <div className={classes.walletAvatar}>
            <Avatar address={address} className={classes.avatar} />
            <div className={classes.whiteDot} />
            <div className={classes.greenDot} />
          </div>
          <div className={classes.walletLabel}>
            Wallet
            <div>
              <Typography variant="caption" className={classes.walletAddress}>
                {getMiddleEllipsis(address, {
                  beginning: 9,
                  ending: 3,
                })}
              </Typography>
              <CopyIcon
                onClick={() => handleCopyToClipboard(address)}
                className={classes.copyIcon}
              />
            </div>
          </div>
        </div>
        <Divider className={classes.divider} />
        <div
          onClick={handleCancel}
          role="button"
          className={classes.accountDetailsButton}
          tabIndex={0}
          aria-label="account-details-button"
        >
          <Link href={ACCOUNT_DETAILS(address)} passHref>
            <div className={classes.accountDetailsLabel}>
              <div className={classes.blackDot} />
              <div className={classes.accountDetails}>{t('accountDetails')}</div>
            </div>
          </Link>
        </div>
      </div>
      <div
        onClick={handleCancel}
        role="button"
        className={classes.changeWalletButton}
        tabIndex={0}
        aria-label="change-wallet-button"
      >
        <div className={classes.changeWalletButtonLabel}>{t('changeWallet')}</div>
      </div>
      <Divider className={classes.bottomDivider} />
      <div className={classes.signOut}>
        <div
          onClick={handleCancel}
          role="button"
          className={classes.signOutButton}
          tabIndex={0}
          aria-label="sign-out-button"
        >
          <div className={classes.signOutLabel}>
            <LogoutIcon onClick={() => handleLogout} className={classes.signOutIcon} />
            <div className={classes.signOutText}>{t('signOut')}</div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default WalletDropDown;
