import { WasmContractDocument, WasmContractQuery } from '@/graphql/types/general_types';
import useInfiniteQuery, { makeSummaryVar } from '@/hooks/useInfiniteQuery';
import useShallowMemo from '@/hooks/useShallowMemo';
import { ContractQueryVariable, ContractType } from '@/screens/wasmContracts/types';
import { useReactiveVar } from '@apollo/client';
import { useId } from 'react';
import z from 'zod';

const zContractType = z
  .object({
    contract: z.string().optional(),
  })
  .optional()
  .catch(undefined);

/**
 * It takes a WasmContractQuery object and returns an array of WasmContract objects
 * @param {WasmContractQuery | undefined} data - WasmContractQuery | undefined
 */
const formatter = (data: WasmContractQuery | undefined): ContractType[] =>
  data?.wasm_contract?.map((x) => ({
    contractName: x.name || x.label,
    contractType: zContractType.parse(x.contract_info)?.contract ?? '',
    contractAddress: x.contract_address,
    height: x.height,
    creator: x.creator,
    executes: x.wasm_execute_contracts_aggregate.aggregate?.count || 0,
    initiatedAt: x.instantiated_at,
    lastExecuted: x.wasm_execute_contracts_aggregate.aggregate?.max?.executed_at,
  })) ?? [];

export const useContracts = (searchText: string) => {
  const cursor = useId();
  const ilike = searchText.trim() ? `%${searchText.trim().replace(/([_%\\])/g, '\\$1')}%` : '';
  const initialVariables = useShallowMemo<ContractQueryVariable>({
    wasm_contract_bool_exp: {
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
  const result = useInfiniteQuery<WasmContractQuery, ContractQueryVariable, ContractType>({
    cursor,
    document: WasmContractDocument,
    formatter,
    variables,
    offset,
  });
  return { ...result, variables, maxFetched, itemCount };
};
