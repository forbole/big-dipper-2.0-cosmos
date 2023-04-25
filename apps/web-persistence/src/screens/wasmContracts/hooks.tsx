import AvatarName from '@/components/avatar_name';
import Timestamp from '@/components/Timestamp';
import { WasmCodeDocument, WasmCodeQuery } from '@/graphql/types/general_types';
import useInfiniteQuery, { makeSummaryVar } from '@/hooks/useInfiniteQuery';
import useShallowMemo from '@/hooks/useShallowMemo';
import CodeId from '@/screens/wasmContracts/components/CodeId';
import InstantiatePermission from '@/screens/wasmContracts/components/CodeInstantiatePermission';
import ContractName from '@/screens/wasmContracts/components/ContractName';
import ContractTypeName from '@/screens/wasmContracts/components/ContractTypeName';
import {
  WasmCodeQueryVariable,
  WasmCodeType,
  WasmContractType,
} from '@/screens/wasmContracts/types';
import { useReactiveVar } from '@apollo/client';
import numeral from 'numeral';
import * as R from 'ramda';
import { useId } from 'react';

/* WASM Contract */
const formatExecutes = R.pipe(R.defaultTo(0), numeral, (r) => r.format('0,0'));

const mapDataToModel = (data: WasmCodeQuery | undefined): WasmContractType[] =>
  data?.wasm_code
    ?.map((x) => ({
      x,
      c: x.wasm_contracts[0],
      count: x.wasm_contracts.reduce(
        (s, c) => s + (c.wasm_execute_contracts_aggregate?.aggregate?.count ?? 0),
        0
      ),
      executed_at: x.wasm_contracts.reduce(
        (s, c) => s || c.wasm_execute_contracts_aggregate?.aggregate?.max?.executed_at,
        undefined
      ),
    }))
    ?.map(({ x, c, count, executed_at }) => ({
      contractName: (
        <>
          {c && <ContractName name={c.name || c.label} codeId={x.code_id} />}
          WASM Code ID: <CodeId codeId={x.code_id} />{' '}
        </>
      ),
      contractTypeName: (
        <>
          {c && (
            <div>
              <ContractTypeName contractInfo={c.contract_info} />
            </div>
          )}
          <InstantiatePermission instantiatePermission={x.instantiate_permission} />
        </>
      ),
      contractAddress: c && <AvatarName address={c.contract_address} name={c.contract_address} />,
      height: (
        <>
          {c && <div>{numeral(c.height).format('0,0')}</div>}
          {numeral(x.height).format('0,0')}
        </>
      ),
      creator: !!x.sender && <AvatarName address={x.sender} name={x.sender} />,
      executes: c ? formatExecutes(count) : null,
      initiatedAt: c ? <Timestamp timestamp={c.instantiated_at} /> : null,
      lastExecuted: c ? <Timestamp timestamp={executed_at} /> : null,
    })) ?? [];

export const useWasmContracts = (searchText: string) => {
  const cursor = useId();
  const ilike = searchText.trim() ? `%${searchText.trim().replace(/([_%\\])/g, '\\$1')}%` : '';
  const initialVariables = useShallowMemo<WasmCodeQueryVariable>({
    wasm_code_bool_exp: {
      ...(ilike
        ? {
            wasm_contracts: {
              _or: [
                { raw_contract_message: { _contains: { name: searchText.trim() } } },
                { label: { _ilike: ilike } },
              ],
            },
          }
        : {}),
    },
  });
  return useWasmContractsByOffset(cursor, initialVariables, 0);
};

export const useWasmContractsByOffset = (
  cursor: string,
  variables: WasmCodeQueryVariable,
  offset: number
) => {
  const { maxFetched, itemCount } = useReactiveVar(makeSummaryVar(cursor, { variables }));
  const result = useInfiniteQuery<WasmCodeQuery, WasmCodeQueryVariable, WasmContractType>({
    cursor,
    document: WasmCodeDocument,
    dataMapper: mapDataToModel,
    variables,
    offset,
  });
  return { ...result, variables, maxFetched, itemCount };
};
/* WASM Code */

const wasmCodeFormatter = (data: WasmCodeQuery | undefined): WasmCodeType[] =>
  data?.wasm_code?.map((x) => ({
    id: <CodeId codeId={x.code_id} />,
    height: numeral(x.height).format('0,0'),
    instantiatePermission: (
      <InstantiatePermission instantiatePermission={x.instantiate_permission} />
    ),
    sender: !!x.sender && <AvatarName address={x.sender} name={x.sender} />,
  })) ?? [];

export const useWasmCodesByOffset = (
  cursor: string,
  variables: WasmCodeQueryVariable,
  offset: number
) => {
  const { maxFetched, itemCount } = useReactiveVar(makeSummaryVar(cursor, { variables }));
  const result = useInfiniteQuery<WasmCodeQuery, WasmCodeQueryVariable, WasmCodeType>({
    cursor,
    document: WasmCodeDocument,
    dataMapper: wasmCodeFormatter,
    variables,
    offset,
  });
  return { ...result, variables, maxFetched, itemCount };
};
