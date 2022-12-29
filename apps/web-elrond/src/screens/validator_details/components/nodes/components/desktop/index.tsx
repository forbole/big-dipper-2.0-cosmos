import { useStyles } from '@/screens/validator_details/components/nodes/components/desktop/styles';
import { columns } from '@/screens/validator_details/components/nodes/components/desktop/utils';
import type { NodeType } from '@/screens/validator_details/components/nodes/types';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { getShardDisplay } from '@/utils/get_shard_display';
import { NODE_DETAILS } from '@/utils/go_to_page';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { FC } from 'react';

const Desktop: FC<{ className?: string; items: NodeType[] }> = (props) => {
  const { t } = useTranslation('nodes');
  const classes = useStyles();

  const formattedItems = props.items.map((x, i) => {
    const shard = getShardDisplay(x.shard);
    return {
      key: `${x.pubkey}-${i}`,
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
