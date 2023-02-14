import { WasmCodeQuery, WasmContractQuery } from '@/graphql/types/general_types';
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
  showMore: ReactNode;
}

export type WasmContractQueryVariable = object;

export type UseWasmContracts = InfiniteQuery<
  WasmContractQuery,
  WasmContractQueryVariable,
  WasmContractType
>;

export interface CodeIdProps {
  codeId: WasmContractQuery['wasm_contract'][0]['code_id'];
}

export interface ContractNameProps {
  name: WasmContractQuery['wasm_contract'][0]['name'];
  codeId: WasmContractQuery['wasm_contract'][0]['code_id'];
}

export interface ContractTypeNameProps {
  contractInfo: WasmContractQuery['wasm_contract'][0]['contract_info'];
}

export interface ContractSearchBoxProps {
  searchText: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const zContractName = z.coerce.string().default('').catch('');

export const zInstantiatePermission = z
  .object({
    permission: z.coerce.number().optional(),
    address: z.coerce.string().optional(),
    addresses: z.coerce.string().optional(),
  })
  .optional()
  .catch(undefined);
export type InstantiatePermission = z.infer<typeof zInstantiatePermission>;

export interface ShowMoreProps {
  wasmCode: WasmContractQuery['wasm_contract'][0]['wasm_code'];
  codeId: WasmContractQuery['wasm_contract'][0]['code_id'];
}

export const zContractInfo = z
  .object({
    contract: z.coerce.string().optional(),
    version: z.coerce.string().optional(),
  })
  .optional()
  .catch(undefined);
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

export type WasmCodeQueryVariable = object;

export type UseWasmCodes = InfiniteQuery<WasmCodeQuery, WasmCodeQueryVariable, WasmCodeType>;
