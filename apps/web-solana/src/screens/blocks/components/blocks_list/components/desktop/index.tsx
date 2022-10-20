import React from 'react';
import numeral from 'numeral';
import classnames from 'classnames';
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
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import {
  BLOCK_DETAILS,
} from '@utils/go_to_page';
import { AvatarName } from '@components';
import dayjs from '@utils/dayjs';
import { columns } from './utils';
import { useStyles } from './styles';
import { ItemType } from '../../../../types';

const Desktop: React.FC<{items: ItemType[]} & ComponentDefault> = (props) => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();
  const formattedItems = props.items.map((x) => {
    return ({
      slot: (
        <Link href={BLOCK_DETAILS(x.slot)} passHref>
          <Typography variant="body1" className="value" component="a">
            {numeral(x.slot).format('0,0')}
          </Typography>
        </Link>
      ),
      txs: numeral(x.txs).format('0,0'),
      time: dayjs.utc(x.timestamp).fromNow(),
      leader: (
        <AvatarName
          address={x.leader.address}
          imageUrl={x.leader.imageUrl}
          name={x.leader.name.length > 20 ? (
            getMiddleEllipsis(x.leader.name, {
              beginning: 15, ending: 15,
            })
          ) : (
            x.leader.name
          )}
        />
      ),
      hash: getMiddleEllipsis(x.hash, {
        beginning: 20, ending: 20,
      }),
    });
  });
  return (
    <div className={classnames(props.className, classes.root)}>
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
