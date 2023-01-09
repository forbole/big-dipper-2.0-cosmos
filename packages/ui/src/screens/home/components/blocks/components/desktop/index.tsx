import AvatarName from '@/components/avatar_name';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import useStyles from '@/screens/home/components/blocks/components/desktop/styles';
import { columns } from '@/screens/home/components/blocks/components/desktop/utils';
import type { ItemType } from '@/screens/home/components/blocks/types';
import dayjs from '@/utils/dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import { FC } from 'react';

type BlockRowProps = {
  item: ItemType;
  i: number;
};

const variants: Variants = {
  initial: {
    height: 0,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    clipPath: 'polygon(0% 50px, 100% 50px, 100% 50px, 0% 50px)',
  },
  animate: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    clipPath: 'polygon(0% 0px, 100% 0px, 100% 50px, 0% 50px)',
  },
  exit: {
    height: 0,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    clipPath: 'polygon(0% 0px, 100% 0px, 100% 0px, 0% 0px)',
    position: 'absolute',
    opacity: 0,
    marginTop: 50,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const BlockRow: FC<BlockRowProps> = ({ item, i }) => {
  const { name, address, imageUrl } = useProfileRecoil(item.proposer);
  const { theme } = useStyles();

  const formattedData = {
    height: (
      <Link href={BLOCK_DETAILS(item.height)} className="value">
        {numeral(item.height).format('0,0')}
      </Link>
    ),
    txs: numeral(item.txs).format('0,0'),
    time: dayjs.utc(item.timestamp).fromNow(),
    proposer: <AvatarName address={address} imageUrl={imageUrl} name={name} />,
    hash: getMiddleEllipsis(item.hash, {
      beginning: 6,
      ending: 5,
    }),
  };
  return (
    <TableRow>
      {columns.map((column) => {
        const { key, align } = column;
        return (
          <TableCell
            key={`${item.height}-${key}`}
            align={align}
            sx={{
              background: i % 2 === 0 ? theme.palette.custom.general.surfaceTwo : 'transparent',
            }}
          >
            <motion.div
              key={`${item.height}-${key}`}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 1.5 }}
            >
              {formattedData[key as keyof typeof formattedData]}
            </motion.div>
          </TableCell>
        );
      })}
    </TableRow>
  );
};

type DesktopProps = {
  className?: string;
  items: ItemType[];
};

const Desktop: FC<DesktopProps> = ({ className, items }) => {
  const { t } = useTranslation('blocks');
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, className)}>
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
          <AnimatePresence initial={false}>
            {items.map((row, i) => (
              <BlockRow key={row.height} item={row} i={i} />
            ))}
          </AnimatePresence>
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
