import withGetStaticProps from '@/pages/withGetStaticProps';
import WasmContracts from '@/screens/wasmContracts';
import type { NextPage } from 'next';
import nextI18NextConfig from '../../../next-i18next.config';

const WasmContractsPage: NextPage = () => <WasmContracts />;

export const getStaticProps = withGetStaticProps(nextI18NextConfig, 'wasm_contracts');

export default WasmContractsPage;
