import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import {
  Typography,
  TableRow,
  TableHead,
  TableCell,
  Table,
  TableBody,
} from '@material-ui/core';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import {
  BLOCK_DETAILS, TRANSACTION_DETAILS,
} from '@utils/go_to_page';
import { Result } from '@components';
import { useStyles } from './styles';
import { columns } from './utils';
import { TransactionType } from '../../types';

const Desktop: React.FC<{
  className?: string;
  items: TransactionType[];
}> = ({
  className, items,
}) => {
  const classes = useStyles();
  const { t } = useTranslation('transactions');

  const formattedData = items.map((x) => {
    return ({
      slot: (
        <Link href={BLOCK_DETAILS(x.slot)} passHref>
          <Typography variant="body1" component="a">
            {numeral(x.slot).format('0,0')}
          </Typography>
        </Link>
      ),
      signature: (
        <Link href={TRANSACTION_DETAILS(x.signature)} passHref>
          <Typography variant="body1" component="a">
            {getMiddleEllipsis(x.signature, {
              beginning: 15, ending: 5,
            })}
          </Typography>
        </Link>
      ),
      result: (
        <Result success={x.success} />
      ),
      time: dayjs.utc(x.timestamp).fromNow(),
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
          {formattedData.map((row, i) => (
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
