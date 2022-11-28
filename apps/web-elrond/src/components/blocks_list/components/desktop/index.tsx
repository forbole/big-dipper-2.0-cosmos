import { columns } from '@/components/blocks_list/components/desktop/utils';
import dayjs from '@/utils/dayjs';
import { getShardDisplay } from '@/utils/get_shard_display';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import React from 'react';

const Desktop: React.FC<{ items: BlockType[] } & ComponentDefault> = (props) => {
  const { t } = useTranslation('blocks');
  const formattedItems = props.items.map((x) => {
    const shard = getShardDisplay(x.shard);
    return {
      block: numeral(x.block).format('0,0'),
      shard: t(shard.key, {
        num: shard.num,
      }),
      hash: (
        <Link href={BLOCK_DETAILS(x.hash)} passHref>
          <Typography variant="body1" className="value" component="a">
            {x.hash}
          </Typography>
        </Link>
      ),
      txs: numeral(x.txs).format('0,0'),
      time: dayjs.utc(dayjs.unix(x.timestamp)).fromNow(),
    };
  });
  return (
    <div className={props.className}>
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
          {formattedItems?.map((row: { [key: string]: unknown }) => (
            <TableRow key={`holders-row-${row.identifier}`}>
              {columns.map((column) => (
                <TableCell
                  key={`holders-row-${row.identifier}-${column.key}`}
                  align={column.align}
                  style={{ width: `${column.width}%` }}
                >
                  {row[column.key]}
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
