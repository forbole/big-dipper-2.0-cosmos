import Result from '@/components/result';
import Tag from '@/components/tag';
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

  const formattedData = items.map((x, i) => ({
    key: `${x.hash}-${i}`,
    block: (
      <Link shallow prefetch={false} href={BLOCK_DETAILS(x.height)}>
        {numeral(x.height).format('0,0')}
      </Link>
    ),
    hash: (
      <Link shallow prefetch={false} href={TRANSACTION_DETAILS(x.hash)}>
        {getMiddleEllipsis(x.hash, {
          beginning: 4,
          ending: 4,
        })}
      </Link>
    ),
    type: (
      <div>
        <Tag value={x.type?.[0] ?? ''} theme="six" />
        {x.messages > 1 && ` + ${x.messages - 1}`}
      </div>
    ),
    result: <Result success={x.success} />,
    time: <Timestamp timestamp={x.timestamp} />,
    messages: numeral(x.messages).format('0,0'),
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
              // eslint-disable-next-line react/no-array-index-key
              <TableRow key={row.key}>
                {columns.map((column) => {
                  const { key, align } = column;
                  const item = row[key as keyof typeof row];
                  return (
                    <TableCell
                      key={`${row.key}-${key}`}
                      style={{ width: `${column.width}%` }}
                      align={align}
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
