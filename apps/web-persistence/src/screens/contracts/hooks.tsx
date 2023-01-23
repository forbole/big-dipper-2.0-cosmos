import { MarkerAccountDocument, MarkerAccountQuery } from '@/graphql/types/general_types';
import useInfiniteQuery, { makeSummaryVar } from '@/hooks/useInfiniteQuery';
import useShallowMemo from '@/hooks/useShallowMemo';
import MarketType from '@/screens/contracts/components/MarkerType';
import Price from '@/screens/contracts/components/Price';
import ShowMore from '@/screens/contracts/components/ShowMore';
import Supply from '@/screens/contracts/components/Supply';
import TokenName from '@/screens/contracts/components/TokenName';
import { AccessControl, ContractQueryVariable, ContractType } from '@/screens/contracts/types';
import { useReactiveVar } from '@apollo/client';
import { useId } from 'react';

/**
 * It takes a MarkerAccountQuery object and returns an array of MarkerAccount objects
 * @param {MarkerAccountQuery | undefined} data - MarkerAccountQuery | undefined
 */
const formatter = (data: MarkerAccountQuery | undefined): ContractType[] =>
  data?.marker_account?.map((x) => {
    let accessControls: AccessControl[] = [];
    try {
      if (/^\[.*\]$/.test(x.access_control))
        accessControls = JSON.parse(x.access_control) as AccessControl[];
    } catch (_) {
      // ignore
    }
    return {
      tokenName: (
        <TokenName address={x.address} denom={x.denom} tokenName={x.token_unit?.token_name} />
      ),
      price: <Price denom={x.token_unit?.denom ?? ''} />,
      markerType: <MarketType markerType={x.marker_type} />,
      supply: <Supply supply={x.supply} />,
      showMore: (
        <ShowMore
          accessControls={accessControls}
          allowGovernanceControl={x.allow_governance_control}
          statusId={x.status}
        />
      ),
    };
  }) ?? [];

export const useContracts = (searchText: string) => {
  const cursor = useId();
  const ilike = searchText.trim() ? `%${searchText.trim().replace(/([_%\\])/g, '\\$1')}%` : '';
  const initialVariables = useShallowMemo<ContractQueryVariable>({
    marker_account_bool_exp: {
      ...(ilike ? { denom: { _ilike: ilike } } : {}),
    },
  });
  return useContractsByOffset(cursor, initialVariables, 0);
};

export const useContractsByOffset = (
  cursor: string,
  variables: ContractQueryVariable,
  offset: number
) => {
  const { maxFetched, itemCount } = useReactiveVar(makeSummaryVar(cursor, { variables }));
  const result = useInfiniteQuery<MarkerAccountQuery, ContractQueryVariable, ContractType>({
    cursor,
    document: MarkerAccountDocument,
    formatter,
    variables,
    offset,
  });
  return { ...result, variables, maxFetched, itemCount };
};
