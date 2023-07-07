import { SigningStargateClient, calculateFee, GasPrice, StdFee } from '@cosmjs/stargate';
import chainConfig from '@/chainConfig';

const {
  keplrConfig: { keplr },
} = chainConfig();

export const estimateFee = async (
  client: SigningStargateClient,
  address: string,
  msgs: Parameters<SigningStargateClient['simulate']>[1],
  memo: string,
  denom: string
) => {
  const averageGas = getAverageGasPriceStep(keplr ?? '0.01');
  const gasPrice = GasPrice.fromString(`${averageGas}${denom}`);
  const gasEstimation = await client.simulate(address, msgs, memo);
  const roundedGasEstimation = Math.ceil(gasEstimation);
  const fee: StdFee = calculateFee(Math.round(roundedGasEstimation * 1.3), gasPrice);
  return fee;
};

const getAverageGasPriceStep = (jsonString: string) => {
  const config = JSON.parse(jsonString);
  const gasPriceStep: string = config.feeCurrencies[0].gasPriceStep.average;
  return gasPriceStep;
};
