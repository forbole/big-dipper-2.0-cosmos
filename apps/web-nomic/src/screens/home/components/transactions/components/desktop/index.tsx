import Timestamp from '@/components/Timestamp';
import useStyles from '@/screens/home/components/transactions/components/desktop/styles';
import { columns } from '@/screens/home/components/transactions/components/desktop/utils';
import type { TransactionType } from '@/screens/home/components/transactions/types';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS, TRANSACTION_DETAILS } from '@/utils/go_to_page';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import { FC } from 'react';

type DesktopProps = {
  className?: string;
  items: TransactionType[];
};

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

const Desktop: FC<DesktopProps> = ({ className, items }) => {
  const { classes, cx } = useStyles();
  const { t } = useAppTranslation('transactions');

  const formattedData = items.map((x) => ({
    key: `${x.hash}-${x.timestamp}`,
    block: (
      <Link shallow prefetch={false} href={BLOCK_DETAILS(x.height)}>
        {numeral(x.height).format('0,0')}
      </Link>
    ),
    hash: (
      <Link shallow prefetch={false} href={TRANSACTION_DETAILS(x.hash)}>
        {getMiddleEllipsis(x.hash, {
          beginning: 15,
          ending: 15,
        })}
      </Link>
    ),
    time: <Timestamp timestamp={x.timestamp} />,
  }));

  return (
    <div className={cx(classes.root, className)}>
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
            {formattedData.map((row) => (
              <TableRow key={row.key}>
                {columns.map((column) => {
                  const { key, align } = column;
                  const item = row[key as keyof typeof row];
                  return (
                    <TableCell
                      style={{ width: `${column.width}%` }}
                      align={align}
                      key={`${row.key}-${key}`}
                    >
                      <motion.div
                        key={`${row.key}-${key}`}
                        initial="initial"
                        animate="animate"
                        variants={variants}
                        transition={{ duration: 0.3 }}
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
