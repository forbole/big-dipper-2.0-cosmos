import Result from '@/components/result';
import Tag from '@/components/tag';
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
import { FC } from 'react';

type DesktopProps = {
  className?: string;
  items: TransactionType[];
};

const Desktop: FC<DesktopProps> = ({ className, items }) => {
  const classes = useStyles();
  const { t } = useTranslation('transactions');

  const formattedData = items.map((x, i) => ({
    key: `${x.hash}-${i}`,
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
        <Tag value={x.type?.[0] ?? ''} theme="six" />
        {x.messages > 1 && ` + ${x.messages - 1}`}
      </div>
    ),
    result: <Result success={x.success} />,
    time: dayjs.utc(x.timestamp).fromNow(),
    messages: numeral(x.messages).format('0,0'),
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
          {formattedData.map((row) => (
            // eslint-disable-next-line react/no-array-index-key
            <TableRow key={row.key}>
              {columns.map((column) => {
                const { key, align } = column;
                const item = row[key as keyof typeof row];
                return (
                  <TableCell
                    key={`${row.key}-${key}`}
                    style={{ width: `${column.width}%` }}
                    align={align}
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
