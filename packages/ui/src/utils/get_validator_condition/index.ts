/**
 * Util to get a validator's current condition
 * @param signedBlockWindow the chain's
 * @param missedBlockCounter
 * @returns number out of 100
 */
export const getValidatorCondition = (signedBlockWindow: number, missedBlockCounter: number) =>
  (1 - missedBlockCounter / signedBlockWindow) * 100;

/**
 * Returns the css class based on the condition percentage out of 100
 * @param condition the condition percentage
 * @returns `green` | `yellow` | `red`
 */
export const getValidatorConditionClass = (condition: number) => {
  let conditionClass = '';
  if (condition > 90) {
    conditionClass = 'green';
  } else if (condition > 70 && condition < 90) {
    conditionClass = 'yellow';
  } else {
    conditionClass = 'red';
  }

  return conditionClass;
};
