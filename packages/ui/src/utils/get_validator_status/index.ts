/**
 * Util to get the validator status and theme
 * @param status 0-3
 * @param jailed boolean
 * @returns an object with status and theme
 */
export const getValidatorStatus = (status: number, jailed: boolean, tombstoned: boolean) => {
  const results: { status: string; theme: TagTheme } = {
    status: 'na',
    theme: 'zero',
  };

  // jailed and tombstone statuses are prioritised over their unbonding state
  if (tombstoned) {
    results.status = 'tombstoned';
    results.theme = 'two';
    return results;
  }

  if (jailed) {
    results.status = 'jailed';
    results.theme = 'two';
    return results;
  }

  if (status === 0) {
    results.status = 'active';
    results.theme = 'one';
  } else if (status === 2) {
    results.status = 'below-threshold';
    results.theme = 'three';
  } else if (status === 1) {
    results.status = 'below-capacity';
    results.theme = 'zero';
  } else if (status === 3) {
    results.status = 'inactive';
    results.theme = 'zero';
  } else if (status === 4) {
    results.status = 'jailed';
    results.theme = 'zero';
  } else {
    results.status = 'unknown';
    results.theme = 'zero';
  }

  return results;
};
