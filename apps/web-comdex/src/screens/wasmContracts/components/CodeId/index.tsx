import { CodeIdProps } from '@/screens/wasmContracts/types';
import { WASM_CONTRACTS_DETAILS } from '@/utils/go_to_page';
import Link from 'next/link';
import numeral from 'numeral';
import { FC } from 'react';

const CodeId: FC<CodeIdProps> = ({ codeId }) => {
  if (!codeId) return null;
  return (
    <Link href={WASM_CONTRACTS_DETAILS(String(codeId))}>
      <span>{numeral(codeId).format('0,0')}</span>
    </Link>
  );
};

export default CodeId;
