import { SigningStargateClient, calculateFee, GasPrice, StdFee } from '@cosmjs/stargate';
import chainConfig from '@/chainConfig';
import { ChainInfo } from '@keplr-wallet/types';

const { keplrConfig } = chainConfig();
const keplr = keplrConfig?.keplr;

export const estimateFee = async (
  client: SigningStargateClient,
  address: string,
  msgs: Parameters<SigningStargateClient['simulate']>[1],
  memo: string,
  denom: string
) => {
  const averageGas = keplr ? getAverageGasPriceStep(keplr) : '0.01';
  const gasPrice = GasPrice.fromString(`${averageGas}${denom}`);
  const gasEstimation = await client.simulate(address, msgs, memo);
  const roundedGasEstimation = Math.ceil(gasEstimation);
  const fee: StdFee = calculateFee(Math.round(roundedGasEstimation * 1.3), gasPrice);
  return fee;
};

const getAverageGasPriceStep = (jsonString: string) => {
  const config: ChainInfo = JSON.parse(jsonString);
  const gasPriceStep = config.feeCurrencies?.[0]?.gasPriceStep?.average;
  return gasPriceStep;
};
