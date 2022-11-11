import React from 'react';
import classnames from 'classnames';
import { TableRow, TableHead, TableCell, Table, TableBody, Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import dayjs from 'ui/utils/dayjs';
import Link from 'next/link';
import { BLOCK_DETAILS } from 'ui/utils/go_to_page';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import { useStyles } from './styles';
import { columns } from './utils';
import { BlockType } from '../../types';

const Desktop: React.FC<{
  className?: string;
  items: BlockType[];
}> = ({ className, items }) => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();

  const formattedData = items.map((x) => {
    return {
      height: (
        <Link href={BLOCK_DETAILS(x.height)} passHref>
          <Typography variant="body1" className="value" component="a">
            {numeral(x.height).format('0,0')}
          </Typography>
        </Link>
      ),
      txs: numeral(x.txs).format('0,0'),
      time: dayjs.utc(x.timestamp).fromNow(),
      hash: `0x${getMiddleEllipsis(x.hash, {
        beginning: 6,
        ending: 5,
      })}`,
    };
  });

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
