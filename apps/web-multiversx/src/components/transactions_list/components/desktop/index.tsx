import AvatarName from '@/components/avatar_name';
import Result from '@/components/result';
import Timestamp from '@/components/Timestamp';
import useStyles from '@/components/transactions_list/components/desktop/styles';
import { columns } from '@/components/transactions_list/components/desktop/utils';
import Shard from '@/components/transactions_list/components/shard';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { TRANSACTION_DETAILS } from '@/utils/go_to_page';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import { FC } from 'react';

const Desktop: FC<{ className?: string; items: TransactionType[] }> = (props) => {
  const { className, items } = props;
  const { t } = useAppTranslation('transactions');
  const { classes, cx } = useStyles();
  const formattedItems = items.map((x) => ({
    key: `${x.hash}-${x.timestamp}`,
    hash: (
      <Link shallow prefetch={false} href={TRANSACTION_DETAILS(x.hash)} className="value">
        {getMiddleEllipsis(x.hash, {
          beginning: 10,
          ending: 10,
        })}
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
    time: <Timestamp timestamp={x.timestamp} isUnix />,
  }));

  return (
    <div className={cx(classes.root, className)}>
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
          {formattedItems.map((row) => (
            <TableRow key={row.key}>
              {columns.map((column) => (
                <TableCell
                  key={`${row.key}-${column.key}`}
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
