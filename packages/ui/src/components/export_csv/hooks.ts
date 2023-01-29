import * as React from 'react';
import numeral from 'numeral';
import dayjs from '@/utils/dayjs';
import { AsyncParser } from '@json2csv/node';
import { unwind, flatten } from '@json2csv/transforms';
import { stringQuoteOnlyIfNecessary as stringQuoteOnlyIfNecessaryFormatter } from '@json2csv/formatters';

export const useMessageDetailsHook = (transactions: Transactions[]) => {
  const [csv, setCSV] = React.useState<any[]>();

  const items = transactions.map((x) => ({
    block: numeral(x.height).format('0,0'),
    hash: x.hash,
    type: x.type?.[0] ?? '',
    result: x.success,
    time: dayjs.utc(x.timestamp).fromNow(),
    messages: numeral(x.messages.count).format('0,0'),
    message_details: x.messages.items,
  }));

  const options = {
    transforms: [
      unwind({
        paths: ['message_details'],
        blankOut: true,
      }),
      flatten({ object: true, array: true }),
    ],
    fields: [
      {
        label: 'Block',
        value: 'block',
      },
      {
        label: 'Hash',
        value: 'hash',
      },
      {
        label: 'Type',
        value: 'type',
      },
      {
        label: 'Time',
        value: 'time',
      },
      {
        label: 'Result',
        value: 'result',
      },
      {
        label: 'Messages',
        value: 'messages',
      },
      {
        label: 'Category',
        value: 'message_details.category',
      },
      {
        label: '@type',
        value: 'message_details.json.@type',
      },
      {
        label: 'Denom',
        value: 'message_details.json.amount.denom',
      },
      {
        label: 'Amount',
        value: 'message_details.json.amount.amount',
      },
      {
        label: 'Delegator Address',
        value: 'message_details.json.delegator_address',
      },
      {
        label: 'Validator Address',
        value: 'message_details.json.validator_address',
      },
    ],
    formatters: {
      string: stringQuoteOnlyIfNecessaryFormatter({ eol: '\n' }),
    },
  };

  // eslint-disable-next-line consistent-return
  const convertToCSVString = async (item: any, opts: any) => {
    if (item) {
      try {
        const parser = new AsyncParser(opts);
        const csvData = await parser.parse(item).promise();
        setCSV(csvData);
      } catch (err) {
        console.error(err);
      }
    }
  };

  React.useEffect(() => {
    convertToCSVString(JSON.stringify(items), options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, transactions]);

  return csv;
};
