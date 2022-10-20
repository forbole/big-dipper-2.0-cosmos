import BlockIcon from '@assets/icon-block.svg';
import HomeIcon from '@assets/icon-home.svg';
import TokenIcon from '@assets/icon-token.svg';
import TransactionIcon from '@assets/icon-transaction.svg';
import UserIcon from '@assets/icon-user.svg';
import EpochIcon from '@assets/icon-epoch.svg';
import {
  HOME, BLOCKS, VALIDATORS, TRANSACTIONS, TOKENS, EPOCH,
} from '@utils/go_to_page';

export const getMenuItems = () => {
  const iconProps = {
    width: 24,
    height: 24,
  };

  return [
    {
      key: 'overview',
      url: HOME,
      icon: <HomeIcon {...iconProps} />,
    },
    {
      key: 'blocks',
      url: BLOCKS,
      icon: <BlockIcon {...iconProps} />,
    },
    {
      key: 'validators',
      url: VALIDATORS,
      icon: <UserIcon {...iconProps} />,
    },
    {
      key: 'transactions',
      url: TRANSACTIONS,
      icon: <TransactionIcon {...iconProps} />,
    },
    {
      key: 'tokens',
      url: TOKENS,
      icon: <TokenIcon {...iconProps} />,
    },
    {
      key: 'epoch',
      url: EPOCH,
      icon: <EpochIcon {...iconProps} />,
    },
  ];
};
