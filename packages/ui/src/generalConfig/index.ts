import type { GeneralConfig } from '@/generalConfig/types';

if (!process.env.GENERAL_CONFIG) {
  throw new Error('GENERAL_CONFIG is not defined.');
}

const generalConfig = JSON.parse(process.env.GENERAL_CONFIG) as GeneralConfig;

export default generalConfig;
