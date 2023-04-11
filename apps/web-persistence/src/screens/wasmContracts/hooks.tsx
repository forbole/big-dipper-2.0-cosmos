import AvatarName from '@/components/avatar_name';
import Timestamp from '@/components/Timestamp';
import { WasmCodeDocument, WasmCodeQuery } from '@/graphql/types/general_types';
import useInfiniteQuery, { makeSummaryVar } from '@/hooks/useInfiniteQuery';
import useShallowMemo from '@/hooks/useShallowMemo';
import CodeId from '@/screens/wasmContracts/components/CodeId';
import InstantiatePermission from '@/screens/wasmContracts/components/CodeInstantiatePermission';
import ContractName from '@/screens/wasmContracts/components/ContractName';
import ContractTypeName from '@/screens/wasmContracts/components/ContractTypeName';
import ShowMore from '@/screens/wasmContracts/components/ShowMore';
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
    ?.map((code) => ({ code, x: code.wasm_contracts[0] }))
    ?.map(({ code, x }) => ({
      contractName: x ? <ContractName name={x.name || x.label} codeId={x.code_id} /> : null,
      contractTypeName: x ? <ContractTypeName contractInfo={x.contract_info} /> : null,
      contractAddress: x ? (
        <AvatarName address={x.contract_address} name={x.contract_address} />
      ) : null,
      height: x ? numeral(x.height).format('0,0') : code.height,
      creator: x ? <AvatarName address={x.creator} name={x.creator} /> : null,
      executes: x ? formatExecutes(x.wasm_execute_contracts_aggregate?.aggregate?.count) : null,
      initiatedAt: x ? <Timestamp timestamp={x.instantiated_at} /> : null,
      lastExecuted: x ? (
        <Timestamp timestamp={x.wasm_execute_contracts_aggregate?.aggregate?.max?.executed_at} />
      ) : null,
      showMore: <ShowMore wasmCode={x.wasm_code} codeId={x.code_id} />,
    })) ?? [];

export const useWasmContracts = (searchText: string) => {
  const cursor = useId();
  const ilike = searchText.trim() ? `%${searchText.trim().replace(/([_%\\])/g, '\\$1')}%` : '';
  const initialVariables = useShallowMemo<WasmCodeQueryVariable>({
    wasm_contract_bool_exp: {
      ...(ilike
        ? {
            _or: [
              { raw_contract_message: { _contains: { name: searchText.trim() } } },
              { label: { _ilike: ilike } },
            ],
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

export const useWasmCodes = () => {
  const cursor = useId();
  const initialVariables = useShallowMemo<WasmCodeQueryVariable>({
    wasm_code_bool_exp: {},
  });
  return useWasmCodesByOffset(cursor, initialVariables, 0);
};

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
