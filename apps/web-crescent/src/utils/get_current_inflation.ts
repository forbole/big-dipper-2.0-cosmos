import * as R from 'ramda';

/**
 * Helper Function to get inflation amount from a list
 */
export const getCurrentInflationAmount = (
  // eslint-disable-next-line camelcase
  list: {amount: string, end_time: Date, start_time: Date}[] = [],
) => {
  const today = new Date();
  // Get the current inflation schedule from mint params "inflation_schedules" array
  const [currentInflationSchedule] = list.filter(
    (x) => today >= new Date(x.start_time) && today <= new Date(x.end_time),
  );
  let result = 0;
  if (currentInflationSchedule) {
    result = R.pathOr('0', ['amount'], currentInflationSchedule);
  }
  return result;
};
