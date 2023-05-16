import useConnectWalletList from '@/components/nav/components/connect_wallet/hooks';
import { useStyles } from '@/components/nav/components/connect_wallet/styles';
import { FC } from 'react';
import Avatar from '@/components/avatar';
import WalletDropDown from '@/components/nav/components/wallet_drop_down';
import { readUserAddress, readIsUserLoggedIn } from '@/recoil/user';
import { useRecoilValue } from 'recoil';
import ClickAwayListener from '@mui/material/ClickAwayListener';

type WalletDetailsProps = {
  className?: string;
};

const WalletDetails: FC<WalletDetailsProps> = ({ className }) => {
  const { classes, cx } = useStyles();
  const { showWalletDetails, handleShowWalletDetails, closeWalletDetails, handleLogin } =
    useConnectWalletList();
  const loggedIn = useRecoilValue(readIsUserLoggedIn);
  const userAddress = useRecoilValue(readUserAddress);

  return (
    <ClickAwayListener
      onClickAway={(e: { preventDefault: () => void }) => {
        e.preventDefault();
        closeWalletDetails();
      }}
    >
      <div>
        <div
          onClick={handleShowWalletDetails}
          role="button"
          className={cx(className)}
          tabIndex={0}
          aria-label="wallet-details-button"
        >
          {loggedIn ? <Avatar address={userAddress ?? ''} className={classes.avatar} /> : null}
        </div>
        <WalletDropDown
          className={cx(classes.walletDetailsButton, {
            open: showWalletDetails,
          })}
          handleLogin={handleLogin}
        />
      </div>
    </ClickAwayListener>
  );
};

export default WalletDetails;
