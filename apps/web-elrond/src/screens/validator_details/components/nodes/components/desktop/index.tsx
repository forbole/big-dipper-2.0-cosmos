import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@material-ui/core';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { NODE_DETAILS } from '@utils/go_to_page';
import { getShardDisplay } from '@utils/get_shard_display';
import { columns } from './utils';
import { NodeType } from '../../types';
import { useStyles } from './styles';

const Desktop: React.FC<{ items: NodeType[] } & ComponentDefault> = (props) => {
  const { t } = useTranslation('nodes');
  const classes = useStyles();

  const formattedItems = props.items.map((x) => {
    const shard = getShardDisplay(x.shard);
    return {
      pubkey: (
        <Link href={NODE_DETAILS(x.pubkey)} passHref>
          <Typography variant="body1" className="value" component="a">
            {getMiddleEllipsis(x.pubkey, {
              beginning: 20,
              ending: 20,
            })}
          </Typography>
        </Link>
      ),
      name: x.name,
      version: x.version,
      status: <Typography className={x.status}>{x.status.toUpperCase()}</Typography>,
      online: x.online ? t('nodes:online') : t('nodes:offline'),
      shard: t(`common:${shard.key}`, {
        num: shard.num,
      }),
    };
  });

  return (
    <div className={props.className}>
      <Table className={classes.root}>
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
