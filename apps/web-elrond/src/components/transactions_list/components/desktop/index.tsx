import React, { ReactNode } from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { TRANSACTION_DETAILS } from '@/utils/go_to_page';
import Result from '@/components/result';
import AvatarName from '@/components/avatar_name';
import dayjs from '@/utils/dayjs';
import { columns } from '@/components/transactions_list/components/desktop/utils';
import { useStyles } from '@/components/transactions_list/components/desktop/styles';
import Shard from '@/components/transactions_list/components/shard';

const Desktop: React.FC<{ items: TransactionType[] } & ComponentDefault> = (props) => {
  const { className, items } = props;
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const formattedItems = items.map((x): { [key: string]: ReactNode } => ({
    hash: (
      <Link href={TRANSACTION_DETAILS(x.hash)} passHref>
        <Typography variant="body1" className="value" component="a">
          {getMiddleEllipsis(x.hash, {
            beginning: 10,
            ending: 10,
          })}
        </Typography>
      </Link>
    ),
    shard: <Shard to={x.toShard} from={x.fromShard} />,
    from: (
      <AvatarName
        address={x.from}
        name={getMiddleEllipsis(x.from, {
          beginning: 10,
          ending: 10,
        })}
      />
    ),
    to: (
      <AvatarName
        address={x.to}
        name={getMiddleEllipsis(x.to, {
          beginning: 10,
          ending: 10,
        })}
      />
    ),
    status: <Result status={x.status} />,
    time: dayjs.utc(dayjs.unix(x.timestamp)).fromNow(),
  }));
  return (
    <div className={classnames(className, classes.root)}>
      <Table>
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
          {formattedItems.map((row, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <TableRow key={`holders-row-${i}`}>
              {columns.map((column) => (
                <TableCell
                  // eslint-disable-next-line react/no-array-index-key
                  key={`holders-row-${i}-${column.key}`}
                  align={column.align}
                  style={{ width: `${column.width}%` }}
                >
                  {row[column.key as keyof typeof row]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
