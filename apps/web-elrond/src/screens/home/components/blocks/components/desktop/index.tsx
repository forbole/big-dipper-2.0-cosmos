import useStyles from '@/screens/home/components/blocks/components/desktop/styles';
import { columns } from '@/screens/home/components/blocks/components/desktop/utils';
import type { BlockType } from '@/screens/home/components/blocks/types';
import dayjs from '@/utils/dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import { FC } from 'react';

const Desktop: FC<{ className?: string; items: BlockType[] }> = (props) => {
  const { t } = useTranslation('blocks');
  const { classes, cx } = useStyles();
  const formattedItems = props.items.map((x) => ({
    key: `${x.block}-${x.timestamp}`,
    block: numeral(x.block).format('0,0'),
    hash: (
      <Link href={BLOCK_DETAILS(x.hash)} className="value">
        {getMiddleEllipsis(x.hash, {
          beginning: 13,
          ending: 15,
        })}
      </Link>
    ),
    txs: numeral(x.txs).format('0,0'),
    time: dayjs.utc(dayjs.unix(x.timestamp)).fromNow(),
  }));
  return (
    <div className={cx(classes.root, props.className)}>
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
          {formattedItems?.map((row) => (
            <TableRow key={`holders-row-${row.key}`}>
              {columns.map((column) => (
                <TableCell
                  key={`holders-row-${row.key}-${column.key}`}
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
