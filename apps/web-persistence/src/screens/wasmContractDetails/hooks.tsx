import {
  useWasmCodeWithByteCodeQuery,
  WasmCodeWithByteCodeQuery,
} from '@/graphql/types/general_types';
import ByteCode from '@/screens/wasmContractDetails/components/ByteCode';
import Overview from '@/screens/wasmContractDetails/components/Overview';
import WasmCode from '@/screens/wasmContractDetails/components/WasmCode';
import { BlockDetailsType } from '@/screens/wasmContractDetails/types';
import { useRouter } from 'next/router';
import numeral from 'numeral';
import { useEffect } from 'react';

export const mapDataToModel = (data: WasmCodeWithByteCodeQuery | undefined): BlockDetailsType[] =>
  data?.wasm_code?.map((wasmCode) => ({
    overview: wasmCode.wasm_contracts[0] ? (
      <Overview
        overview={wasmCode.wasm_contracts[0]}
        codeId={wasmCode.code_id}
        count={wasmCode.wasm_contracts.reduce(
          (s, c) => s + (c?.wasm_execute_contracts_aggregate?.aggregate?.count ?? 0),
          0
        )}
        executed_at={wasmCode.wasm_contracts.reduce(
          (s, c) => s || c?.wasm_execute_contracts_aggregate?.aggregate?.max?.executed_at,
          undefined
        )}
      />
    ) : undefined,
    wasmCode: <WasmCode wasmCode={wasmCode} />,
    byteCode: <ByteCode byteCode={wasmCode.byte_code} />,
  })) ?? [];

export const useWasmContractDetails = () => {
  const router = useRouter();

  // ==========================
  // Fetch Data
  // ==========================
  const { loading, error, data, refetch } = useWasmCodeWithByteCodeQuery({
    variables: {
      wasm_code_bool_exp: {
        code_id: {
          _eq: numeral(router.query.id).value(),
        },
      },
    },
  });

  /* Refetch when loading is stop and there is an error. */
  const shouldRefetch = !!error && !loading;
  useEffect(() => {
    if (shouldRefetch) refetch();
  }, [shouldRefetch, refetch]);

  /* Using the `useMemo` hook to memoize the `mapDataToModel` function. */
  const items = mapDataToModel(data);

  return {
    loading,
    error,
    items,
  };
};
