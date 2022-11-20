import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { formatNumber } from 'ui/utils/format_token';
import { TOKEN_DETAILS } from '@utils/go_to_page';
import AvatarName from '@components/avatar_name';
import { columns } from './utils';
import { useStyles } from './styles';
import type { OtherTokenType } from '../../../../types';

const Desktop: React.FC<{ items: OtherTokenType[] } & ComponentDefault> = (props) => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const formattedItems = props.items.map((x) => ({
      identifier: x.identifier,
      token: (
        <AvatarName
          address={x.identifier}
          imageUrl={x.imageUrl}
          name={x.name}
          href={TOKEN_DETAILS}
        />
      ),
      balance: `${formatNumber(
        x.balance.value,
        x.balance.exponent
      )} ${x.balance.displayDenom.toUpperCase()}`,
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
