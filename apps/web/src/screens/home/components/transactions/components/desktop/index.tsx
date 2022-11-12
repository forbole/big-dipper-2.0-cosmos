import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import dayjs from 'ui/utils/dayjs';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { Typography, TableRow, TableHead, TableCell, Table, TableBody } from '@material-ui/core';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import { BLOCK_DETAILS, TRANSACTION_DETAILS } from 'ui/utils/go_to_page';
import Result from 'ui/components/result';
import Tag from 'ui/components/tag';
import { useStyles } from './styles';
import { columns } from './utils';
import { TransactionType } from '../../types';

const Desktop: React.FC<{
  className?: string;
  items: TransactionType[];
}> = ({ className, items }) => {
  const classes = useStyles();
  const { t } = useTranslation('transactions');

  const formattedData = items.map((x) => {
    return {
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
              beginning: 4,
              ending: 4,
            })}
          </Typography>
        </Link>
      ),
      type: (
        <div>
          <Tag value={x.type[0]} theme="six" />
          {x.messages > 1 && ` + ${x.messages - 1}`}
        </div>
      ),
      result: <Result success={x.success} />,
      time: dayjs.utc(x.timestamp).fromNow(),
      messages: numeral(x.messages).format('0,0'),
    };
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
          {formattedData.map((row: any, i) => (
            <TableRow key={`row-${i}`}>
              {columns.map((column, index) => {
                const { key, align } = column;
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
