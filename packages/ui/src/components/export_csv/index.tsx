/* eslint-disable react/no-unused-prop-types */
import { FC } from 'react';
import numeral from 'numeral';
import dayjs from '@/utils/dayjs';
import { CSVLink } from 'react-csv';
import YAML from 'yaml';
import type { TransactionsListState } from '@/components/transactions_list/types';
import { headers } from '@/components/export_csv/config';

const ExportCSVButton: FC<TransactionsListState> = (props) => {
  const { transactions } = props;

  const messageRes = (tx: any) => {
    const messageList: unknown[] = [];
    if (tx.length === 1) {
      // eslint-disable-next-line no-unused-expressions
      messageList.push((tx[0] as any).json) ?? messageList.push(tx[0]);
      return (tx[0] as any).json ?? messageList.push(tx[0]);
    }
    tx.map((message: unknown) =>
      (message as any).json ? messageList.push((message as any).json) : messageList.push(message)
    );
    return messageList;
  };

  const items = transactions.map((x) => ({
    block: numeral(x.height).format('0,0'),
    hash: x.hash,
    type: `${x.type?.[0] ?? ''}`,
    result: x.success,
    time: dayjs.utc(x.timestamp).fromNow(),
    messages: numeral(x.messages.count).format('0,0'),
    message_details: x.messages.items
      ? YAML.stringify(messageRes(x.messages.items)).replace(/\n/g, '')
      : {},
  }));

  return (
    <CSVLink data={items} filename="Your filename.csv" headers={headers}>
      Button
    </CSVLink>
  );
};

export default ExportCSVButton;
