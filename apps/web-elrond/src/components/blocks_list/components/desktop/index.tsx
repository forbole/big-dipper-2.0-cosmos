import React from 'react';
import numeral from 'numeral';
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
import dayjs from '@utils/dayjs';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import { getShardDisplay } from '@utils/get_shard_display';
import { columns } from './utils';

const Desktop: React.FC<{items: BlockType[]} & ComponentDefault> = (props) => {
  const { t } = useTranslation('blocks');
  const formattedItems = props.items.map((x) => {
    const shard = getShardDisplay(x.shard);
    return ({
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
    });
  });
  return (
    <div className={props.className}>
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
