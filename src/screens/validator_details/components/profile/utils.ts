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
  } else {
    results.status = 'unknown';
    results.theme = 'zero';
  }

  return results;
};
