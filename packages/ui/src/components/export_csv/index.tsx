/* eslint-disable react/no-unused-prop-types */
import { FC } from 'react';
import { CSVLink } from 'react-csv';
import type { TransactionsListState } from '@/components/transactions_list/types';

const ExportCSVButton: FC<TransactionsListState> = (props) => {
  const { transactions } = props;

  return (
    <CSVLink data={transactions} filename="Your filename.csv">
      Button
    </CSVLink>
  );
};

export default ExportCSVButton;
