/* eslint-disable react/no-unused-prop-types */
import { FC } from 'react';
import Button from '@mui/material/Button';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import FileSaver from 'file-saver';
import useStyles from '@/components/export_csv/styles';
import type { TransactionsListState } from '@/components/transactions_list/types';
import { useMessageDetailsHook } from './hooks';

const ExportCSVButton: FC<TransactionsListState> = (props) => {
  const { transactions } = props;
  const { classes } = useStyles();
  const csv = useMessageDetailsHook(transactions);

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
