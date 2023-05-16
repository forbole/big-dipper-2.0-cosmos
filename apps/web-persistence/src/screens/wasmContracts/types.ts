import { WasmCodeQuery } from '@/graphql/types/general_types';
import { InfiniteQuery } from '@/hooks/useInfiniteQuery/types';
import { ReactNode } from 'react';
import z from 'zod';

/* WASM Contracts */
export interface WasmContractType {
  contractName: ReactNode;
  contractTypeName: ReactNode;
  contractAddress: ReactNode;
  height: ReactNode;
  creator: ReactNode;
  executes: ReactNode;
  initiatedAt: ReactNode;
  lastExecuted: ReactNode;
}

export type WasmCodeQueryVariable = object;

export type UseWasmContracts = InfiniteQuery<
  WasmCodeQuery,
  WasmCodeQueryVariable,
  WasmContractType
>;

export interface CodeIdProps {
  codeId: WasmCodeQuery['wasm_code'][0]['code_id'];
}

export interface ContractNameProps {
  name: WasmCodeQuery['wasm_code'][0]['wasm_contracts'][0]['name'];
  codeId: WasmCodeQuery['wasm_code'][0]['code_id'];
}

export interface ContractTypeNameProps {
  contractInfo: WasmCodeQuery['wasm_code'][0]['wasm_contracts'][0]['contract_info'];
}

export interface ContractSearchBoxProps {
  searchText: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const zContractName = z.coerce.string().default('').catch('');

export const zInstantiatePermission = z.object({
  permission: z.coerce.number().nullable().optional(),
  address: z.coerce.string().nullable().optional(),
  addresses: z.coerce.string().nullable().optional(),
});
export type InstantiatePermission = z.infer<typeof zInstantiatePermission>;

export interface ShowMoreProps {
  wasmCode: WasmCodeQuery['wasm_code'][0];
  codeId: WasmCodeQuery['wasm_code'][0]['code_id'];
}

export const zContractInfo = z.object({
  contract: z.coerce.string().nullable().optional(),
  version: z.coerce.string().nullable().optional(),
});
export type ContractInfo = z.infer<typeof zContractInfo>;

/* WASM Codes */
export interface InstantiatePermissionProps {
  instantiatePermission: WasmCodeQuery['wasm_code'][0]['instantiate_permission'];
}
export interface WasmCodeType {
  id: ReactNode;
  height: ReactNode;
  instantiatePermission: ReactNode;
  sender: ReactNode;
}

export type UseWasmCodes = InfiniteQuery<WasmCodeQuery, WasmCodeQueryVariable, WasmCodeType>;
