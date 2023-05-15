import { SigningStargateClient, calculateFee, GasPrice } from '@cosmjs/stargate';

export const estimateFee = async (
  client: SigningStargateClient,
  address: string,
  msgs: any[],
  memo: string,
  denom: string
) => {
  const gasPrice = GasPrice.fromString(`0.01${denom}`);
  const gasEstimation = await client.simulate(address, msgs, memo);
  const fee = calculateFee(Math.round(gasEstimation * 1.3), gasPrice);
  return fee;
};
