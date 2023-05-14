import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import { FC } from 'react';
import { NFT_DETAILS, TOKEN_DETAILS } from '@/utils/go_to_page';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { formatNumber } from '@/utils/format_token';
import type { OperationType } from '@/screens/transaction_details/types';
import { columns } from '@/screens/transaction_details/components/operations/components/desktop/utils';
import AvatarName from '@/components/avatar_name';

const Desktop: FC<{ className?: string; items: OperationType[] }> = (props) => {
  const { t } = useAppTranslation('transactions');
  const formattedItems = props.items.map((x, i) => {
    const isToken = x?.identifier ?? ''.split('-').length === 2;
    const isNft = x?.identifier ?? ''.split('-').length === 3;
    let link;
    if (isToken) {
      link = TOKEN_DETAILS;
    }
    if (isNft) {
      link = NFT_DETAILS;
    }

    return {
      key: `${x.identifier}-${i}}`,
      action: x.action.replace(/([A-Z])/g, ' $1').toUpperCase(),
      identifier: x.identifier,
      sender: (
        <AvatarName
          address={x.sender}
          name={getMiddleEllipsis(x.sender, {
            beginning: 15,
            ending: 20,
          })}
        />
      ),
      receiver: (
        <AvatarName
          address={x.receiver}
          name={getMiddleEllipsis(x.receiver, {
            beginning: 15,
            ending: 20,
          })}
        />
      ),
      value: link ? (
        <div>
          <Typography component="span">{formatNumber(x.value.value, x.value.exponent)} </Typography>
          <Link shallow prefetch={false} href={link(x.identifier)}>
            {x.value.displayDenom.toUpperCase()}
          </Link>
        </div>
      ) : (
        `${formatNumber(x.value.value, x.value.exponent)} ${x.value.displayDenom.toUpperCase()}`
      ),
    };
  });
  return (
    <div className={props.className}>
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
                  key={`${row.key}-${column.key}`}
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
