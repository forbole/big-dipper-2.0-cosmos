import * as R from 'ramda';
import Big from 'big.js';
import { LogType } from '../../types';

export const formatLogs = (logs: LogType[]): {value: string, indent: number}[][] => {
  const results = [];
  let indent = 0;
  let currentBatch = [];
  for (let i = 0; i < logs.length; i += 1) {
    const current = logs[i];
    const keywords = current.split(' ');
    if (keywords.includes('invoke') && keywords.includes('[1]')) { // reset current batch
      if (currentBatch.length) {
        results.push(currentBatch);
      }
      currentBatch = [];
    }

    currentBatch.push({
      value: current,
      indent,
    });

    if (keywords.includes('invoke') && !current.includes('Program log')) {
      indent = Big(R.pathOr('0', [1], keywords[keywords.length - 1])).minus(1).toNumber();
    }

    if (keywords.includes('success') || keywords.includes('error')) { // end of a batch
      indent = indent === 0 ? 0 : indent - 1;
    }
  }

  if (currentBatch.length) { // clean up
    results.push(currentBatch);
  }
  return results;
};
