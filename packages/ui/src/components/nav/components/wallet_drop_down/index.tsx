import Avatar from '@/components/avatar';
import Box from '@/components/box';
import { useStyles } from '@/components/nav/components/wallet_drop_down/styles';
import useAppTranslation from '@/hooks/useAppTranslation';
import { readUserAddress, readWalletName } from '@/recoil/user';
import { useAddress } from '@/screens/validator_details/components/validator_overview/hooks';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { ACCOUNT_DETAILS } from '@/utils/go_to_page';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import CopyIcon from 'shared-utils/assets/icon-copy-text.svg';
import NextIcon from 'shared-utils/assets/icon-next.svg';

type WalletDropDownProps = {
  className?: string;
  handleLogin: () => void;
};

const WalletDropDown: FC<WalletDropDownProps> = ({ className, handleLogin }) => {
  const { t } = useAppTranslation('common');
  const { classes, cx } = useStyles();
  const { handleCopyToClipboard } = useAddress(t);
  const address = useRecoilValue(readUserAddress);
  const walletName = useRecoilValue(readWalletName);

  return (
    <Box className={cx(className, classes.root)}>
      <Typography variant="h1" className={classes.walletTitle}>
        {t('walletTitle')}
      </Typography>
      <div className={classes.walletDetails}>
        <Link href={ACCOUNT_DETAILS(address)} passHref>
          <div className={classes.walletInfo}>
            <div className={classes.walletAvatar}>
              <Avatar address={address} className={classes.avatar} />
              <div className={classes.greenDot} />
            </div>
            <div className={classes.walletLabel}>
              {walletName}
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
            <NextIcon className={classes.next} />
          </div>
        </Link>
      </div>
      <div
        onClick={handleLogin}
        role="button"
        className={classes.changeWalletButton}
        tabIndex={0}
        aria-label="change-wallet-button"
      >
        <div className={classes.changeWalletButtonLabel}>{t('changeWallet')}</div>
      </div>
    </Box>
  );
};

export default WalletDropDown;
