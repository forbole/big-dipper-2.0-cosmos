export const getValidatorCondition = (signedBlockWindow: number, missedBlockCounter: number) => {
  return (1 - (missedBlockCounter / signedBlockWindow)) * 100;
};

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
