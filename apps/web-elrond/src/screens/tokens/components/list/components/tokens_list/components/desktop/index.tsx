import AvatarName from '@/components/avatar_name';
import { useStyles } from '@/screens/tokens/components/list/components/tokens_list/components/desktop/styles';
import { columns } from '@/screens/tokens/components/list/components/tokens_list/components/desktop/utils';
import type { TokenType } from '@/screens/tokens/components/list/types';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { TOKEN_DETAILS } from '@/utils/go_to_page';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import React from 'react';

const Desktop: React.FC<{ items: TokenType[] } & ComponentDefault> = (props) => {
  const { t } = useTranslation('tokens');
  const classes = useStyles();
  const formattedItems = props.items.map((x) => ({
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
    <div className={classnames(props.className, classes.root)}>
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
          {formattedItems?.map((row: { [key: string]: unknown }) => (
            <TableRow key={`holders-row-${row.identifier}`}>
              {columns.map((column) => (
                <TableCell
                  key={`holders-row-${row.identifier}-${column.key}`}
                  align={column.align}
                  style={{ width: `${column.width}%` }}
                >
                  {row[column.key]}
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
