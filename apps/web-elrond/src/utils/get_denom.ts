import chainConfig from '@/chainConfig';

/**
 * Helper Function to get Denom from a list
 * @param denom The denom you wish to convert to
 * @param value The value in base denom value
 */
export const getDenom = (list: MsgCoin[], denom = chainConfig().primaryTokenUnit): MsgCoin => {
  const [selectedDenom] = list.filter((x) => x.denom === denom);
  let results: MsgCoin = {
    denom,
    amount: '0',
  };
  if (selectedDenom) {
    results = selectedDenom;
  }
  return results;
};
