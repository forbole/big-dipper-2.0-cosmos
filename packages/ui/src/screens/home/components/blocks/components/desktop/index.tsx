import React, { ReactNode } from 'react';
import classnames from 'classnames';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import dayjs from '@/utils/dayjs';
import Link from 'next/link';
import AvatarName from '@/components/avatar_name';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import type { ItemType } from 'src/screens/home/components/blocks/types';
import { useStyles } from '@/screens/home/components/blocks/components/desktop/styles';
import { columns } from '@/screens/home/components/blocks/components/desktop/utils';

const Desktop: React.FC<{
  className?: string;
  items: ItemType[];
}> = ({ className, items }) => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();

  const formattedData = items.map((x): { [key: string]: ReactNode } => ({
    height: (
      <Link href={BLOCK_DETAILS(x.height)} passHref>
        <Typography variant="body1" className="value" component="a">
          {numeral(x.height).format('0,0')}
        </Typography>
      </Link>
    ),
    txs: numeral(x.txs).format('0,0'),
    time: dayjs.utc(x.timestamp).fromNow(),
    proposer: (
      <AvatarName
        address={x.proposer.address}
        imageUrl={x.proposer.imageUrl}
        name={x.proposer.name}
      />
    ),
    hash: getMiddleEllipsis(x.hash, {
      beginning: 6,
      ending: 5,
    }),
  }));

  return (
    <div className={classnames(className, classes.root)}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.key} align={column.align}>
                {t(column.key)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {formattedData.map((row, i) => (
            <TableRow key={`${items[i].height}`}>
              {columns.map((column, index) => {
                const { key, align } = column;
                const item = row[key];
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <TableCell align={align} key={`${key}-${index}`}>
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
