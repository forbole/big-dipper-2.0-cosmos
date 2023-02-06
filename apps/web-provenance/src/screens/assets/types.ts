import { MarkerAccountQuery, Marker_Account_Bool_Exp } from '@/graphql/types/general_types';
import { InfiniteQuery } from '@/hooks/useInfiniteQuery/types';
import { ReactNode } from 'react';

export interface AssetType {
  tokenName: ReactNode;
  price: ReactNode;
  markerType: ReactNode;
  supply: ReactNode;
  showMore: ReactNode;
}

export interface AssetQueryVariable {
  marker_account_bool_exp: Marker_Account_Bool_Exp;
}

export type UseAssets = InfiniteQuery<MarkerAccountQuery, AssetQueryVariable, AssetType>;

export interface PriceProps {
  denom: string;
}

export interface MarkerProps {
  markerType: string;
}

export interface AccessControl {
  address: string;
  permissions: number[];
}

export type ShowMoreProps = {
  accessControls: AccessControl[];
  allowGovernanceControl: boolean;
  statusId: string;
};

export const permissionList = [
  ['Unspecified', 'Defines a no-op vote option.'],
  ['Mint', 'To increase the supply of a marker'],
  ['Burn', 'To decrease the supply of the marker using coin held by the marker.'],
  ['Deposit', 'To set a marker reference to this marker in the metadata/scopes module'],
  ['Withdraw', 'To remove marker references to this marker in from metadata/scopes or'],
  [
    'Delete',
    'To move a proposed, finalized or active marker into the cancelled state. This access also allows cancelled markers to be marked for deletion',
  ],
  ['Admin', 'To add access grants for accounts to the list of marker permissions.'],
  [
    'Transfer',
    'To invoke a send operation using the marker module to facilitate exchange. This capability is useful when the marker denomination has "send enabled = false" preventing normal bank transfer',
  ],
];

export const statusList = {
  '0': 'Unspecified - Unknown/Invalid Marker Status',
  '1': 'Proposed - Initial configuration period, updates allowed, token supply not created.',
  '2': 'Finalized - Configuration finalized, ready for supply creation.',
  '3': 'Active - Supply is created, rules are in force.',
  '4': 'Cancelled - Marker has been cancelled, pending destroy.',
  '5': 'Destroyed - Marker supply has all been recalled, marker is considered destroyed and no further actions allowed.',
};
