import withGetStaticProps from '@/pages/withGetStaticProps';
import WasmContractDetails from '@/screens/wasmContractDetails';
import type { NextPage } from 'next';
import nextI18NextConfig from '../../../next-i18next.config';

const WasmContractDetailsPage: NextPage = () => <WasmContractDetails />;

export const getStaticPaths = () => ({ paths: [], fallback: 'blocking' });
export const getStaticProps = withGetStaticProps(nextI18NextConfig, 'wasm_contracts');

export default WasmContractDetailsPage;
