import {
  BLOCKS,
  HOME,
  PARAMS,
  PROPOSALS,
  TRANSACTIONS,
  VALIDATORS,
  WASM_CONTRACTS,
} from '@/utils/go_to_page';
import BlockIcon from 'shared-utils/assets/icon-block.svg';
import HomeIcon from 'shared-utils/assets/icon-home.svg';
import ParamIcon from 'shared-utils/assets/icon-param.svg';
import ProposalsIcon from 'shared-utils/assets/icon-proposals.svg';
import TransactionIcon from 'shared-utils/assets/icon-transaction.svg';
import UserIcon from 'shared-utils/assets/icon-user.svg';
import WasmContractIcon from 'shared-utils/assets/icon-wasm-contract.svg';

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
      key: 'proposals',
      url: PROPOSALS,
      icon: <ProposalsIcon {...iconProps} />,
    },
    {
      key: 'params',
      url: PARAMS,
      icon: <ParamIcon {...iconProps} />,
    },
    {
      key: 'wasmContracts',
      url: WASM_CONTRACTS,
      icon: <WasmContractIcon {...iconProps} />,
    },
  ];
};
