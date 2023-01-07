import useStyles from '@/screens/home/components/transactions/components/desktop/styles';
import { columns } from '@/screens/home/components/transactions/components/desktop/utils';
import type { TransactionType } from '@/screens/home/components/transactions/types';
import dayjs from '@/utils/dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS, TRANSACTION_DETAILS } from '@/utils/go_to_page';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import { FC } from 'react';

type DesktopProps = {
  className?: string;
  items: TransactionType[];
};

const Desktop: FC<DesktopProps> = ({ className, items }) => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('transactions');

  const formattedData = items.map((x) => ({
    key: `${x.hash}-${x.timestamp}`,
    block: <Link href={BLOCK_DETAILS(x.height)}>{numeral(x.height).format('0,0')}</Link>,
    hash: (
      <Link href={TRANSACTION_DETAILS(x.hash)}>
        {getMiddleEllipsis(x.hash, {
          beginning: 15,
          ending: 15,
        })}
      </Link>
    ),
    time: dayjs.utc(x.timestamp).fromNow(),
  }));

  return (
    <div className={cx(classes.root, className)}>
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
          {formattedData.map((row) => (
            <TableRow key={row.key}>
              {columns.map((column) => {
                const { key, align } = column;
                const item = row[key as keyof typeof row];
                return (
                  <TableCell
                    style={{ width: `${column.width}%` }}
                    align={align}
                    key={`${row.key}-${key}`}
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
