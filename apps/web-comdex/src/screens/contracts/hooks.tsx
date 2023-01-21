import { MarkerAccountDocument, MarkerAccountQuery } from '@/graphql/types/general_types';
import useInfiniteQuery from '@/hooks/useInfiniteQuery';
import useShallowMemo from '@/hooks/useShallowMemo';
import MarketType from '@/screens/contracts/components/MarkerType';
import Price from '@/screens/contracts/components/Price';
import ShowMore from '@/screens/contracts/components/ShowMore';
import Supply from '@/screens/contracts/components/Supply';
import TokenName from '@/screens/contracts/components/TokenName';
import { AccessControl, ContractQueryVariable, ContractType } from '@/screens/contracts/types';

/**
 * It takes a MarkerAccountQuery object and returns an array of MarkerAccount objects
 * @param {MarkerAccountQuery | undefined} data - MarkerAccountQuery | undefined
 */
const formatter = (data: MarkerAccountQuery | undefined): ContractType[] =>
  data?.marker_account?.map((x) => {
    let accessControls: AccessControl[] = [];
    try {
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
  const ilike = searchText.trim() ? `%${searchText.trim().replace(/([_%\\])/g, '\\$1')}%` : '';
  const initialVariables = useShallowMemo<ContractQueryVariable>({
    marker_account_bool_exp: {
      ...(ilike ? { denom: { _ilike: ilike } } : {}),
    },
  });
  return useContractsByOffset(initialVariables, 0);
};

export const useContractsByOffset = (variables: ContractQueryVariable, offset: number) => {
  const result = useInfiniteQuery<MarkerAccountQuery, ContractQueryVariable, ContractType>({
    document: MarkerAccountDocument,
    formatter,
    variables,
    offset,
  });
  const cursor = useShallowMemo(JSON.stringify(variables));
  return { ...result, variables, cursor };
};
