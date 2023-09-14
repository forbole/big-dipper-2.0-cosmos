import { ValidatorWithAvatar } from './types';

export const sortForbole = (items: ValidatorWithAvatar[]) => {
  const sorted = [...items];

  sorted.sort((a, b) => {
    const compareA = a.validator.name.toLowerCase();
    const compareB = b.validator.name.toLowerCase();

    if (compareA === 'forbole' && compareB !== 'forbole') {
      return -1;
    }
    if (compareA !== 'forbole' && compareB === 'forbole') {
      return 1;
    }

    return 0;
  });

  return sorted;
};
