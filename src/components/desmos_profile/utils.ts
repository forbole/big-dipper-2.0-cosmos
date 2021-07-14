export const getStatusTheme = (status: number, jailed: boolean) => {
  const results = {
    status: 'na',
    theme: 'zero',
  };

  if (status === 3) {
    results.status = 'active';
    results.theme = 'one';
  } else if (status === 2 && jailed) {
    results.status = 'jailed';
    results.theme = 'two';
  } else if (status === 2 && !jailed) {
    results.status = 'unbonding';
    results.theme = 'three';
  } else if (status === 1) {
    results.status = 'unbonded';
    results.theme = 'zero';
  } else {
    results.status = 'unknown';
    results.theme = 'zero';
  }

  return results;
};

export const getCondition = (condition: number, status: number) => {
  let result = 'na';
  if (status === 3) {
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
