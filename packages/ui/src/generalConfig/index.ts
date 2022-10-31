import type { GeneralConfig } from './types'

if (!process.env.NEXT_PUBLIC_GENERAL_CONFIG) {
  throw new Error('NEXT_PUBLIC_GENERAL_CONFIG is not defined.');
}
const generalConfig = JSON.parse(process.env.NEXT_PUBLIC_GENERAL_CONFIG) as GeneralConfig;

export default generalConfig;
