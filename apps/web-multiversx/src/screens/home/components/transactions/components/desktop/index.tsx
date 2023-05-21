import AvatarName from '@/components/avatar_name';
import Result from '@/components/result';
import Timestamp from '@/components/Timestamp';
import useStyles from '@/screens/home/components/transactions/components/desktop/styles';
import { columns } from '@/screens/home/components/transactions/components/desktop/utils';
import type { TransactionType } from '@/screens/home/components/transactions/types';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { TRANSACTION_DETAILS } from '@/utils/go_to_page';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import { FC } from 'react';

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

const Desktop: FC<{ className?: string; items: TransactionType[] }> = (props) => {
  const { t } = useAppTranslation('transactions');
  const { classes, cx } = useStyles();
  const formattedItems = props.items.map((x) => ({
    key: `${x.hash}-${x.timestamp}`,
    hash: (
      <Link shallow prefetch={false} href={TRANSACTION_DETAILS(x.hash)} className="value">
        {getMiddleEllipsis(x.hash, {
          beginning: 10,
          ending: 5,
        })}
      </Link>
    ),
    from: (
      <AvatarName
        address={x.from}
        name={getMiddleEllipsis(x.from, {
          beginning: 7,
          ending: 5,
        })}
      />
    ),
    to: (
      <AvatarName
        address={x.to}
        name={getMiddleEllipsis(x.to, {
          beginning: 7,
          ending: 5,
        })}
      />
    ),
    status: <Result status={x.status} />,
    time: <Timestamp timestamp={x.timestamp} isUnix />,
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
