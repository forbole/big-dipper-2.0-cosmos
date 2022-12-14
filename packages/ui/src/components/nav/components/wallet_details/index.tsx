import { useConnectWalletList } from '@/components/nav/components/connect_wallet/hooks';
import { useStyles } from '@/components/nav/components/wallet_details/styles';
import classnames from 'classnames';
// import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import Avatar from '@/components/avatar';

const WalletDetails: React.FC<{
  className?: string;
}> = (props) => {
  const classes = useStyles();
  // const { t } = useTranslation('common');
  const {
    // open,
    loggedIn,
    // showWallet,
    handleOpen,
    // handleCancel,
    handleLogoutWallet,
    // handleConnectWallet,
  } = useConnectWalletList();

  return (
    <div>
      <div
        onClick={!loggedIn ? handleOpen : handleLogoutWallet}
        role="button"
        className={classnames(props.className)}
        tabIndex={0}
        aria-label="connect-wallet-button"
      >
        {loggedIn ? <Avatar address="" className={classes.icon} /> : null}
      </div>
    </div>
  );
};

export default WalletDetails;
