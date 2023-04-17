import { WasmCodeWithByteCodeQuery } from '@/graphql/types/general_types';
import { BoxProps } from '@mui/material/Box';
import { ReactNode } from 'react';

export interface OverviewProps extends BoxProps {
  overview: WasmCodeWithByteCodeQuery['wasm_code'][0]['wasm_contracts'][0];
  codeId: WasmCodeWithByteCodeQuery['wasm_code'][0]['code_id'];
  count: number | undefined;
  executed_at: string | undefined;
}

export interface WasmCodeProps extends BoxProps {
  wasmCode: WasmCodeWithByteCodeQuery['wasm_code'][0];
}

export interface ByteCodeProps extends BoxProps {
  byteCode: WasmCodeWithByteCodeQuery['wasm_code'][0]['byte_code'];
}

export interface BlockDetailsType {
  overview: ReactNode;
  wasmCode: ReactNode;
  byteCode: ReactNode;
}

export interface BlockDetailState {
  loading: boolean;
  items: BlockDetailsType[];
}
