import { getValidatorStatus } from '@/utils/get_validator_status';

export const getStatusTheme = getValidatorStatus;

export const getCondition = (condition: number, inActiveSet: string) => {
  let result = 'na';
  if (inActiveSet === 'true') {
    if (condition > 90) {
      result = 'good';
    } else if (condition > 70 && condition < 90) {
      result = 'moderate';
    } else {
      result = 'bad';
    }
  }
  return result;
};
