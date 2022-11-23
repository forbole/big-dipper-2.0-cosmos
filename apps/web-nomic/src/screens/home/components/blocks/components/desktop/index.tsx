import React from 'react';
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
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { useStyles } from '@/screens/home/components/blocks/components/desktop/styles';
import { columns } from '@/screens/home/components/blocks/components/desktop/utils';
import type { BlockType } from 'src/screens/home/components/blocks/types';

const Desktop: React.FC<{
  className?: string;
  items: BlockType[];
}> = ({ className, items }) => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();

  const formattedData = items.map((x) => ({
    height: (
      <Link href={BLOCK_DETAILS(x.height)} passHref>
        <Typography variant="body1" className="value" component="a">
          {numeral(x.height).format('0,0')}
        </Typography>
      </Link>
    ),
    txs: numeral(x.txs).format('0,0'),
    time: (dayjs as any).utc(x.timestamp).fromNow(),
    hash: getMiddleEllipsis(x.hash, {
      beginning: 15,
      ending: 15,
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
          {formattedData.map((row: any, i) => (
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
