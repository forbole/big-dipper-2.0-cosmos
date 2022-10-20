import React from 'react';
import numeral from 'numeral';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from '@material-ui/core';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import {
  TRANSACTION_DETAILS,
  BLOCK_DETAILS,
} from '@utils/go_to_page';
import { Result } from '@components';
import dayjs from '@utils/dayjs';
import { columns } from './utils';
import { useStyles } from './styles';

const Desktop: React.FC<{items: Transactions[]} & ComponentDefault> = (props) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const formattedItems = props.items.map((x) => {
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
              beginning: 20, ending: 15,
            })}
          </Typography>
        </Link>
      ),
      result: (
        <Result success={x.success} />
      ),
      time: dayjs.utc(x.timestamp).fromNow(),
      instructions: numeral(x.numInstructions).format('0,0'),
    });
  });
  return (
    <div className={classnames(props.className, classes.root)}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => {
              return (
                <TableCell
                  key={column.key}
                  align={column.align}
                  style={{ width: `${column.width}%` }}
                >
                  {t(column.key)}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {formattedItems.map((row, i) => (
            <TableRow key={`holders-row-${i}`}>
              {columns.map((column) => {
                return (
                  <TableCell
                    key={`holders-row-${i}-${column.key}`}
                    align={column.align}
                    style={{ width: `${column.width}%` }}
                  >
                    {row[column.key]}
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
