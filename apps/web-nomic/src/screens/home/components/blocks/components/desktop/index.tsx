import useStyles from '@/screens/home/components/blocks/components/desktop/styles';
import { columns } from '@/screens/home/components/blocks/components/desktop/utils';
import type { BlockType } from '@/screens/home/components/blocks/types';
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

type DesktopProps = {
  className?: string;
  items: BlockType[];
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

const Desktop: FC<DesktopProps> = ({ className, items }) => {
  const { t } = useTranslation('blocks');
  const { classes, cx } = useStyles();

  const formattedData = items.map((x) => ({
    key: `${x.height}-${x.timestamp}`,
    height: (
      <Link shallow prefetch={false} href={BLOCK_DETAILS(x.height)} className="value">
        {numeral(x.height).format('0,0')}
      </Link>
    ),
    txs: numeral(x.txs).format('0,0'),
    time: dayjs.utc(x.timestamp).fromNow(),
    hash: getMiddleEllipsis(x.hash, {
      beginning: 15,
      ending: 15,
    }),
  }));

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
            {formattedData.map((row) => (
              <TableRow key={row.key}>
                {columns.map((column) => {
                  const { key, align } = column;
                  const item = row[key as keyof typeof row];
                  return (
                    <TableCell key={`${row.height}-${key}`} align={align}>
                      <motion.div
                        key={`${row.height}-${key}`}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 1.5 }}
                      >
                        {item}
                      </motion.div>
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </AnimatePresence>
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
