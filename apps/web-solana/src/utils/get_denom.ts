import { chainConfig } from '@configs';

/**
 * Helper Function to get Denom from a list
 * @param denom The denom you wish to convert to
 * @param value The value in base denom value
 */
export const getDenom = (
  list: {denom: string, amount: string | number}[],
  denom = chainConfig.primaryTokenUnit,
): {
  denom: string;
  amount: string | number;
} => {
  const [selectedDenom] = list.filter((x) => x.denom === denom);
  let results: {
    denom: string;
    amount: string | number;
  } = {
    denom,
    amount: '0',
  };
  if (selectedDenom) {
    results = selectedDenom;
  }
  return results;
};
