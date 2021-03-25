import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import {
  TableRow,
  TableHead,
  TableCell,
  Table,
  TableBody,
  Typography,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  AvatarName,
} from '@components';
import { useBlocksContext } from '@src/screens/home/components/blocks/contexts/blocks';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import { useStyles } from './styles';
import { columns } from './utils';

const Desktop: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { blocks } = useBlocksContext();
  const { t } = useTranslation('blocks');
  const classes = useStyles();

  const formatSlots = blocks.map((x) => {
    dayjs.extend(relativeTime);
    return ({
      height: (
        <Link href={BLOCK_DETAILS(123)} passHref>
          <Typography variant="body1" component="a">
            {x.height}
          </Typography>
        </Link>
      ),
      proposer: (
        <AvatarName
          address={x.proposer.identity}
          imageUrl={x.proposer.image}
          name={x.proposer.moniker}
        />
      ),
      hash: getMiddleEllipsis(x.hash, {
        beginning: 6, ending: 5,
      }),
      txs: x.tx,
      time: dayjs(x.time).fromNow(),
    });
  });

  return (
    <div
      className={classnames(className, classes.root)}
    >
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.key}
                align={column.align}
              >
                {t(column.key)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {formatSlots.map((row, i) => (
            <TableRow key={`row-${i}`}>
              {columns.map((column, index) => {
                const {
                  key, align,
                } = column;
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
