import React from 'react';
import BlockIcon from 'shared-utils/assets/icon-block.svg';
import HomeIcon from 'shared-utils/assets/icon-home.svg';
import TransactionIcon from 'shared-utils/assets/icon-transaction.svg';
import TokenIcon from 'shared-utils/assets/icon-token.svg';
import UserIcon from 'shared-utils/assets/icon-user.svg';
import NFTIcon from 'shared-utils/assets/icon-nft.svg';
import {
  HOME,
  BLOCKS,
  VALIDATORS,
  TRANSACTIONS,
  TOKENS,
  NFTS,
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
      icon: <NFTIcon {...iconProps} />,
    },
    {
      key: 'nfts',
      url: NFTS,
      icon: <TokenIcon {...iconProps} />,
    },
  ];
};
