import BlockIconInactive from 'shared-utils/assets/icon_block_inactive.svg';
import HomeIconInactive from 'shared-utils/assets/icon_home_inactive.svg';
import ParamIconInactive from 'shared-utils/assets/icon_params_inactive.svg';
import ProposalsIconInactive from 'shared-utils/assets/icon_proposals_inactive.svg';
import TransactionIconInactive from 'shared-utils/assets/icon_transactions_inactive.svg';
import UserIconInactive from 'shared-utils/assets/icon_validators_inactive.svg';
import BlockIconActive from 'shared-utils/assets/icon_block_active.svg';
import HomeIconActive from 'shared-utils/assets/icon_home_active.svg';
import ParamIconActive from 'shared-utils/assets/icon_params_active.svg';
import ProposalsIconActive from 'shared-utils/assets/icon_proposals_active.svg';
import TransactionIconActive from 'shared-utils/assets/icon_transactions_active.svg';
import UserIconActive from 'shared-utils/assets/icon_validators_active.svg';
import { BLOCKS, HOME, PARAMS, PROPOSALS, TRANSACTIONS, VALIDATORS } from '@/utils/go_to_page';

export const getMenuItems = () => {
  const iconProps = {
    width: 21,
    height: 21,
  };

  return [
    {
      key: 'overview',
      url: HOME,
      iconActive: <HomeIconActive {...iconProps} />,
      iconInactive: <HomeIconInactive {...iconProps} />,
    },
    {
      key: 'blocks',
      url: BLOCKS,
      iconActive: <BlockIconActive {...iconProps} />,
      iconInactive: <BlockIconInactive {...iconProps} />,
    },
    {
      key: 'validators',
      url: VALIDATORS,
      iconActive: <UserIconActive {...iconProps} />,
      iconInactive: <UserIconInactive {...iconProps} />,
    },
    {
      key: 'transactions',
      url: TRANSACTIONS,
      iconActive: <TransactionIconActive {...iconProps} />,
      iconInactive: <TransactionIconInactive {...iconProps} />,
    },
    {
      key: 'proposals',
      url: PROPOSALS,

      iconActive: <ProposalsIconActive {...iconProps} />,
      iconInactive: <ProposalsIconInactive {...iconProps} />,
    },
    {
      key: 'params',
      url: PARAMS,
      iconActive: <ParamIconActive {...iconProps} />,
      iconInactive: <ParamIconInactive {...iconProps} />,
    },
  ];
};
