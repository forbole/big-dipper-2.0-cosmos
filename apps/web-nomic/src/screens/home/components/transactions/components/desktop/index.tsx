import { useStyles } from '@/screens/home/components/transactions/components/desktop/styles';
import { columns } from '@/screens/home/components/transactions/components/desktop/utils';
import type { TransactionType } from '@/screens/home/components/transactions/types';
import dayjs from '@/utils/dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS, TRANSACTION_DETAILS } from '@/utils/go_to_page';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import React, { ReactNode } from 'react';

const Desktop: React.FC<{
  className?: string;
  items: TransactionType[];
}> = ({ className, items }) => {
  const classes = useStyles();
  const { t } = useTranslation('transactions');

  const formattedData = items.map((x): { [key: string]: ReactNode } => ({
    block: (
      <Link href={BLOCK_DETAILS(x.height)} passHref>
        <Typography variant="body1" component="a">
          {numeral(x.height).format('0,0')}
        </Typography>
      </Link>
    ),
    hash: (
      <Link href={TRANSACTION_DETAILS(x.hash)} passHref>
        <Typography variant="body1" component="a">
          {getMiddleEllipsis(x.hash, {
            beginning: 15,
            ending: 15,
          })}
        </Typography>
      </Link>
    ),
    time: dayjs.utc(x.timestamp).fromNow(),
  }));

  return (
    <div className={classnames(className, classes.root)}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.key}
                align={column.align}
                style={{ width: `${column.width}%` }}
              >
                {t(column.key)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {formattedData.map((row, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <TableRow key={`row-${i}`}>
              {columns.map((column, index) => {
                const { key, align } = column;
                const item = row[key];
                return (
                  <TableCell
                    style={{ width: `${column.width}%` }}
                    align={align}
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${key}-${index}`}
                  >
                    {item}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
