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
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import { FC } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

const variants: Variants = {
  initial: {
    opacity: 0,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  },
  animate: {
    opacity: 1,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  },
};

const Desktop: FC<{ className?: string; items: BlockType[] }> = (props) => {
  const { t } = useTranslation('blocks');
  const { classes, cx } = useStyles();
  const formattedItems = props.items.map((x) => ({
    key: x.hash,
    block: numeral(x.block).format('0,0'),
    hash: (
      <Link shallow href={BLOCK_DETAILS(x.hash)} className="value">
        {getMiddleEllipsis(x.hash, {
          beginning: 13,
          ending: 15,
        })}
      </Link>
    ),
    txs: numeral(x.txs).format('0,0'),
    time: dayjs.utc(dayjs.unix(x.timestamp)).fromNow(),
  }));
  return (
    <div className={cx(classes.root, props.className)}>
      <Table className={classes.table}>
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
          <AnimatePresence initial={false}>
            {formattedItems?.map((row) => (
              <TableRow key={`holders-row-${row.key}`}>
                {columns.map((column) => (
                  <TableCell
                    key={`holders-row-${row.key}-${column.key}`}
                    align={column.align}
                    style={{ width: `${column.width}%` }}
                  >
                    <motion.div
                      key={`${row.key}-${column.key}`}
                      initial="initial"
                      animate="animate"
                      variants={variants}
                      transition={{ duration: 0.3 }}
                    >
                      {row[column.key as keyof typeof row]}
                    </motion.div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </AnimatePresence>
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
