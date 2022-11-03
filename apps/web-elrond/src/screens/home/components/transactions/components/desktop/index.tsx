import React from 'react';
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
import {
  Result, AvatarName, Tag,
} from '@components';
import {
  TRANSACTION_DETAILS,
} from '@utils/go_to_page';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import dayjs from '@utils/dayjs';
import { columns } from './utils';
import { useStyles } from './styles';
import { TransactionType } from '../../types';

const Desktop:React.FC<{ items: TransactionType[] } &ComponentDefault> = (props) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const formattedItems = props.items.map((x) => {
    return ({
      hash: (
        <Link href={TRANSACTION_DETAILS(x.hash)} passHref>
          <Typography variant="body1" className="value" component="a">
            {getMiddleEllipsis(x.hash, {
              beginning: 4, ending: 4,
            })}
          </Typography>
        </Link>
      ),
      type: (
        <div>
          <Tag
            value={x.type[0]}
            theme="six"
          />
          {(x.messages > 1) && (` + ${x.messages - 1}`)}
        </div>
      ),
      from: (
        <AvatarName
          address={x.from}
          name={getMiddleEllipsis(x.from, {
            beginning: 7, ending: 5,
          })}
        />
      ),
      to: (
        <AvatarName
          address={x.to}
          name={getMiddleEllipsis(x.to, {
            beginning: 7, ending: 5,
          })}
        />
      ),
      status: (
        <Result status={x.status} />
      ),
      time: dayjs.utc(dayjs.unix(x.timestamp)).fromNow(),
    });
  });
  return (
    <div className={classnames(props.className, classes.root)}>
      <Table className={classes.table}>
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
