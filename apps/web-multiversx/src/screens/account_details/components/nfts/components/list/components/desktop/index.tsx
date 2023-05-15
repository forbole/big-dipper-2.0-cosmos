import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import { FC } from 'react';
import { NFT_DETAILS } from '@/utils/go_to_page';
import type { OtherTokenType } from '@/screens/account_details/components/nfts/types';
import { columns } from '@/screens/account_details/components/nfts/components/list/components/desktop/utils';
import useStyles from '@/screens/account_details/components/nfts/components/list/components/desktop/styles';

const Desktop: FC<{ className?: string; items: OtherTokenType[] }> = (props) => {
  const { t } = useAppTranslation('accounts');
  const { classes, cx } = useStyles();
  const formattedItems = props.items.map((x, i) => ({
    key: `${x.identifier}-${i}`,
    identifier: x.identifier,
    nft: (
      <Link shallow prefetch={false} href={NFT_DETAILS(x.identifier)} className="value">
        {x.name}
      </Link>
    ),
    type: x.type,
  }));

  return (
    <div className={cx(classes.root, props.className)}>
      <Table>
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
          {formattedItems?.map((row) => (
            <TableRow key={row.key}>
              {columns.map((column) => (
                <TableCell
                  key={`holders-row-${row.key}-${column.key}`}
                  align={column.align}
                  style={{ width: `${column.width}%` }}
                >
                  {row[column.key as keyof typeof row]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
