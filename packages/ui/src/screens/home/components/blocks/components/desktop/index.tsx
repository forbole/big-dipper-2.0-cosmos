import AvatarName from '@/components/avatar_name';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { useStyles } from '@/screens/home/components/blocks/components/desktop/styles';
import { columns } from '@/screens/home/components/blocks/components/desktop/utils';
import type { ItemType } from '@/screens/home/components/blocks/types';
import dayjs from '@/utils/dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import { FC, ReactNode, useMemo } from 'react';

type Props = {
  className?: string;
  items: ItemType[];
};

const BlockRow: FC<{ items: ItemType[]; i: number; item: ItemType }> = ({ items, i, item }) => {
  const { name, address, imageUrl } = useProfileRecoil(item.proposer);

  const formattedData: { [key: string]: ReactNode } = useMemo(
    () => ({
      height: (
        <Link href={BLOCK_DETAILS(item.height)} passHref>
          <Typography variant="body1" className="value" component="a">
            {numeral(item.height).format('0,0')}
          </Typography>
        </Link>
      ),
      txs: numeral(item.txs).format('0,0'),
      time: dayjs.utc(item.timestamp).fromNow(),
      proposer: <AvatarName address={address} imageUrl={imageUrl} name={name} />,
      hash: getMiddleEllipsis(item.hash, {
        beginning: 6,
        ending: 5,
      }),
    }),
    [item, name, address, imageUrl]
  );
  return (
    <TableRow key={`${items[i].height}`}>
      {columns.map((column, index) => {
        const { key, align } = column;
        return (
          // eslint-disable-next-line react/no-array-index-key
          <TableCell align={align} key={`${index}-${key}`}>
            {formattedData[key]}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

const Desktop: FC<Props> = ({ className, items }) => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();

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
          {items.map((row, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <BlockRow key={i} items={items} i={i} item={row} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
