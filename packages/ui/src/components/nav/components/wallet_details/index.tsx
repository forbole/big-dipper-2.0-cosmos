import useConnectWalletList from '@/components/nav/components/connect_wallet/hooks';
import { useStyles } from '@/components/nav/components/connect_wallet/styles';
import classnames from 'classnames';
import React from 'react';
import Avatar from '@/components/avatar';
import WalletDropDown from '@/components/nav/components/wallet_drop_down';
import { readUserAddress, readIsUserLoggedIn } from '@/recoil/user';
import { useRecoilValue } from 'recoil';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const WalletDetails: React.FC<{
  className?: string;
}> = (props) => {
  const classes = useStyles();
  const { showWalletDetails, handleShowWalletDetails, handleCloseWalletDetails } =
    useConnectWalletList();
  const loggedIn = useRecoilValue(readIsUserLoggedIn);
  const userAddress = useRecoilValue(readUserAddress);

  return (
    <ClickAwayListener
      onClickAway={(e) => {
        e.preventDefault();
        handleCloseWalletDetails();
      }}
    >
      <div>
        <div
          onClick={handleShowWalletDetails}
          role="button"
          className={classnames(props.className)}
          tabIndex={0}
          aria-label="wallet-details-button"
        >
          {loggedIn ? <Avatar address={userAddress ?? ''} className={classes.avatar} /> : null}
        </div>
        <WalletDropDown
          className={classnames(classes.networkList, {
            open: showWalletDetails,
          })}
        />
      </div>
    </ClickAwayListener>
  );
};

export default WalletDetails;
