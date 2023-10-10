import AvatarName from '@/components/avatar_name';
import Timestamp from '@/components/Timestamp';
import useAppTranslation from '@/hooks/useAppTranslation';
import useProviderCustomValidator from '@/hooks/useProviderCustomValidator';
import useStyles from '@/screens/home/components/blocks/components/desktop/styles';
import { columns } from '@/screens/home/components/blocks/components/desktop/utils';
import type { ItemType } from '@/screens/home/components/blocks/types';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS, VALIDATOR_DETAILS } from '@/utils/go_to_page';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Link from 'next/link';
import numeral from 'numeral';
import { FC } from 'react';

type BlockRowProps = {
  item: ItemType;
};

const variants: Variants = {
  initial: {
    height: 0,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    clipPath: 'inset(0 50 0 50)',
  },
  animate: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    clipPath: 'inset(0 0 0 0)',
  },
  exit: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'absolute',
    marginTop: [50, 60],
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const BlockRow: FC<BlockRowProps> = ({ item }) => {
  const { profile } = useProviderCustomValidator(item.proposer);
  const formattedData = {
    height: (
      <Link shallow prefetch={false} href={BLOCK_DETAILS(item.height)} className="value">
        {numeral(item.height).format('0,0')}
      </Link>
    ),
    txs: numeral(item.txs).format('0,0'),
    time: <Timestamp timestamp={item.timestamp} />,
    proposer: (
      <AvatarName
        address={profile?.address ?? ''}
        imageUrl={profile?.imageUrl ?? ''}
        name={profile?.name ?? ''}
        href={VALIDATOR_DETAILS}
      />
    ),
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
          <TableCell key={`${item.hash}-${key}`} align={align}>
            <motion.div
              key={`${item.hash}-${key}`}
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
  const { t } = useAppTranslation('blocks');
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
            {items.map((row) => (
              <BlockRow key={row.hash} item={row} />
            ))}
          </AnimatePresence>
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
