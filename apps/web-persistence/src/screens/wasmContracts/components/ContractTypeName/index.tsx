import { zContractInfo, ContractTypeNameProps } from '@/screens/wasmContracts/types';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';
import * as R from 'ramda';
import { memo } from 'react';

const predefined = {
  'crates.io:cw0': ['CW0: Common Types for specs', 'CW0 Contract'],
  'crates.io:cw1': ['CW1 Spec: Proxy Contracts', 'CW1 Contract'],
  'crates.io:cw1155': ['CW1155 Spec: Multiple Tokens', 'CW1155 Contract'],
  'crates.io:cw1155-base': ['CW1155 Basic', 'CW1155 Basic Contract'],
  'crates.io:cw1-subkeys': ['CW1 Subkeys', 'CW1 Subkeys Contract'],
  'crates.io:cw1-whitelist': ['CW1 Whitelist', 'CW1 Whitelist Contract'],
  'crates.io:cw2': ['CW2 Spec: Contract Info', 'CW2 Contract'],
  'crates.io:cw20': ['CW20 Spec: Fungible Tokens', 'CW20: Fungible Tokens Contract'],
  'crates.io:cw20-atomic-swap': ['Atomic Swaps', 'CW20 Atomic Swaps Contract'],
  'crates.io:cw20-base': ['CW20 Basic', 'CW20 Basic Contract'],
  'crates.io:cw20-bonding': ['CW20 Bonding curve', 'CW20 Bonding Contract'],
  'crates.io:cw20-escrow': ['CW20 Escrow', 'CW20 Escrow Contract'],
  'crates.io:cw20-ics20': ['CW20 ICS20', 'CW20 ICS20 Contract'],
  'crates.io:cw20-staking': ['Staking Derivatives', 'CW20 Staking Contract'],
  'crates.io:cw3': ['CW3 Spec: MultiSig/Voting Contracts', 'CW3 Contract'],
  'crates.io:cw3-fixed-multisig': ['CW3 Fixed Multisig', 'CW3 Fixed Multisig Contract'],
  'crates.io:cw3-flex-multisig': ['CW3 Flexible Multisig', 'CW3 Flexible Multisig Contract'],
  'crates.io:cw4': ['CW4 Spec: Group Members', 'CW4 Contract'],
  'crates.io:cw4-group': ['CW4 Group', 'CW4 Group Contract'],
  'crates.io:cw4-stake': ['CW4 Stake', 'CW4 Stake Contract'],
  'crates.io:cw721': ['CW721 Spec: Non Fungible Tokens', 'CW721 Contract'],
  'crates.io:cw721-base': ['Cw721 Basic', 'CW721 Basic Contract'],
  'crates.io:cw721-metadata-onchain': ['CW721 Metadata Onchain', 'CW721 Metadata Onchain Contract'],
  'crates.io:cw-controllers': [
    'CW Controllers: Common controllers for many contracts',
    'CW Controllers Contract',
  ],
  'crates.io:cw-multi-test': [
    'Multi Test: Test helpers for multi-contract interactions',
    'CW Multi Test Contract',
  ],
  'crates.io:cw-storage-macro': [
    'CW-Storage-Plus: Macro helpers for storage-plus',
    'CW-Storage Macro Contract',
  ],
  'crates.io:cw-storage-plus': [
    'cw-storage-plus: Storage abstractions for CosmWasm',
    'CW-Storage Plus Contract',
  ],
  'crates.io:cw-utils': ['Utils: Common types / utilities for specs', 'CW-Utils Contract'],
};

const parseContractInfo = R.pipe(
  R.tryCatch(JSON.parse, R.always(undefined)),
  zContractInfo.nullable().optional().parse
);

const ContractTypeName = memo(({ contractInfo }: ContractTypeNameProps) => {
  const { contract, version } = parseContractInfo(contractInfo) ?? {};
  if (contract) {
    const value = predefined[contract as keyof typeof predefined];
    if (value) {
      return (
        <Tooltip
          title={
            <>
              {value[0]} {version && <b>v{version}</b>}
            </>
          }
          placement="bottom-start"
          arrow
        >
          <Link
            prefetch={false}
            href={`https://crates.io/crates/${contract.replace(/^crates\.io:/, '')}`}
            target="_blank"
            rel="noreferrer"
          >
            {value[1]}
          </Link>
        </Tooltip>
      );
    }
  }
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (
    <Tooltip
      title={
        <>
          {contract} {version && <b>v{version}</b>}
        </>
      }
      placement="bottom-start"
      arrow
    >
      <span>{contract}</span>
    </Tooltip>
  );
});

export default ContractTypeName;
