import withGetStaticProps from '@/pages/withGetStaticProps';
import WasmContracts from '@/screens/wasmContracts';
import type { NextPage } from 'next';

const WasmContractsPage: NextPage = () => <WasmContracts />;

export const getStaticProps = withGetStaticProps('wasm_contracts');

export default WasmContractsPage;
