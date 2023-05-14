import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import { FC } from 'react';
import { NODE_DETAILS } from '@/utils/go_to_page';
import { getShardDisplay } from '@/utils/get_shard_display';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import type { NodeType } from '@/screens/validator_details/components/nodes/types';
import { columns } from '@/screens/validator_details/components/nodes/components/desktop/utils';
import useStyles from '@/screens/validator_details/components/nodes/components/desktop/styles';

const Desktop: FC<{ className?: string; items: NodeType[] }> = (props) => {
  const { t } = useAppTranslation('nodes');
  const { classes } = useStyles();

  const formattedItems = props.items.map((x, i) => {
    const shard = getShardDisplay(x.shard);
    return {
      key: `${x.pubkey}-${i}`,
      pubkey: (
        <Link shallow prefetch={false} href={NODE_DETAILS(x.pubkey)} className="value">
          {getMiddleEllipsis(x.pubkey, {
            beginning: 20,
            ending: 20,
          })}
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
