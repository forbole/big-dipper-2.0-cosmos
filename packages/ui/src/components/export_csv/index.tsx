/* eslint-disable react/no-unused-prop-types */
import { useMessageDetailsHook } from '@/components/export_csv/hooks';
import useStyles from '@/components/export_csv/styles';
import type { TransactionsListState } from '@/components/transactions_list/types';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import Button from '@mui/material/Button';
import FileSaver from 'file-saver';
import { FC } from 'react';

export interface CSVButtonTypes extends TransactionsListState {
  loadMoreItems: (() => Promise<void>) | (() => null);
  hasNextPage: boolean;
}

const ExportCSVButton: FC<CSVButtonTypes> = (props) => {
  const { transactions, itemCount, hasNextPage, loadMoreItems = () => null } = props;
  const { classes } = useStyles();
  const csv = useMessageDetailsHook({
    transactions,
    itemCount,
    loadMoreItems,
    hasNextPage,
  });

  const handleCSVExport = () => {
    try {
      const csvData = new File([csv as unknown as string], 'transaction.csv', {
        type: 'text/csv;charset=utf-8',
      });
      FileSaver.saveAs(csvData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Button
      className={classes.button}
      variant="contained"
      startIcon={<UploadFileOutlinedIcon fontSize="small" />}
      onClick={handleCSVExport}
    >
      EXPORT
    </Button>
  );
};

export default ExportCSVButton;
