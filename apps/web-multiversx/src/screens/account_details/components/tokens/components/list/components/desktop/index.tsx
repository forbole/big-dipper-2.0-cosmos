import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import { TOKEN_DETAILS } from '@/utils/go_to_page';
import { formatNumber } from '@/utils/format_token';
import type { OtherTokenType } from '@/screens/account_details/components/tokens/types';
import { columns } from '@/screens/account_details/components/tokens/components/list/components/desktop/utils';
import useStyles from '@/screens/account_details/components/tokens/components/list/components/desktop/styles';
import AvatarName from '@/components/avatar_name';

const Desktop: FC<{ className?: string; items: OtherTokenType[] }> = (props) => {
  const { t } = useAppTranslation('accounts');
  const { classes, cx } = useStyles();
  const formattedItems = props.items.map((x, i) => ({
    key: `${x.identifier}-${i}`,
    identifier: x.identifier,
    token: (
      <AvatarName address={x.identifier} imageUrl={x.imageUrl} name={x.name} href={TOKEN_DETAILS} />
    ),
    balance: `${formatNumber(
      x.balance.value,
      x.balance.exponent
    )} ${x.balance.displayDenom.toUpperCase()}`,
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
            <TableRow key={`holders-row-${row.key}`}>
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
