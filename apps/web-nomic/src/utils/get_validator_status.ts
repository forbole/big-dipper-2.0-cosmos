/**
 * Util to get the validator status and theme
 * @param status changes from Cosmos 0-3 to Nomic boolean
 * @param jailed boolean
 * @returns an object with status and theme
 */
export const getValidatorStatus = (inActiveSet: string, jailed: string, tombstoned: string) => {
  const results: { status: string; theme: TagTheme } = {
    status: 'na',
    theme: 'zero',
  };

  // jailed and tombstone statuses are prioritised over their unbonding state
  if (tombstoned === 'true') {
    results.status = 'Tombstoned';
    results.theme = 'two';
    return results;
  }

  if (jailed === 'true') {
    results.status = 'Jailed';
    results.theme = 'two';
    return results;
  }

  if (inActiveSet === 'true') {
    results.status = 'Active';
    results.theme = 'one';
  } else {
    results.status = 'Inactive';
    results.theme = 'zero';
  }

  return results;
};
