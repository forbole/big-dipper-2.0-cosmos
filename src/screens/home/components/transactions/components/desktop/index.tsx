import React from 'react';
import classnames from 'classnames';
import dayjs from 'dayjs';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import relativeTime from 'dayjs/plugin/relativeTime';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import {
  TableRow,
  TableHead,
  TableCell,
  Table,
  TableBody,
  Typography,
} from '@material-ui/core';
import { useTransactionsContext } from '@src/screens/home/components/transactions/contexts/transactions';
import {
  BLOCK_DETAILS, TRANSACTION_DETAILS,
} from '@utils/go_to_page';
import { Result } from '@components';
import { useStyles } from './styles';
import { columns } from './utils';

const Desktop: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  const { transactions } = useTransactionsContext();
  const { t } = useTranslation('transactions');

  const formatSlots = transactions.map((x) => {
    dayjs.extend(relativeTime);
    return ({
      block: (
        <Link href={BLOCK_DETAILS(123)} passHref>
          <Typography variant="body1" component="a">
            {x.block}
          </Typography>
        </Link>
      ),
      hash: (
        <Link href={TRANSACTION_DETAILS(x.signature)} passHref>
          <Typography variant="body1" component="a">
            {getMiddleEllipsis(x.hash, {
              beginning: 15, ending: 5,
            })}
          </Typography>
        </Link>
      ),
      result: (
        <Result success={x.success} />
      ),
      time: dayjs(x.time).fromNow(),
    });
  });

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
          {formatSlots.map((row, i) => (
            <TableRow key={`row-${i}`}>
              {columns.map((column, index) => {
                const {
                  key, align,
                } = column;
                const item = row[key];
                return (
                  <TableCell
                    style={{ width: `${column.width}%` }}
                    align={align}
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
