export const getStatusTheme = (key: string) => {
  if (key === 'active') {
    return 'one';
  } if (key === 'jailed') {
    return 'two';
  } if (key === 'unbonding') {
    return 'three';
  }
  return 'zero';
};
