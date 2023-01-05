import AvatarName from '@/components/avatar_name';
import useStyles from '@/screens/tokens/components/list/components/tokens_list/components/desktop/styles';
import { columns } from '@/screens/tokens/components/list/components/tokens_list/components/desktop/utils';
import type { TokenType } from '@/screens/tokens/components/list/types';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { TOKEN_DETAILS } from '@/utils/go_to_page';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import React, { FC } from 'react';

const Desktop: FC<{ className?: string; items: TokenType[] }> = (props) => {
  const { t } = useTranslation('tokens');
  const { classes, cx } = useStyles();
  const formattedItems = props.items.map((x, i) => ({
    key: `${x.identifier}-${i}`,
    token: (
      <AvatarName imageUrl={x.imageUrl} name={x.name} address={x.identifier} href={TOKEN_DETAILS} />
    ),
    identifier: x.identifier,
    owner: (
      <AvatarName
        name={getMiddleEllipsis(x.owner, {
          beginning: 20,
          ending: 15,
        })}
        address={x.owner}
      />
    ),
    transactions: numeral(x.transactions).format('0,0'),
    accounts: numeral(x.accounts).format('0,0'),
  }));
  return (
    <div className={cx(props.className, classes.root)}>
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
