import React from 'react';
import numeral from 'numeral';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import AvatarName from '@components/avatar_name';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import { TOKEN_DETAILS } from '@utils/go_to_page';
import { columns } from './utils';
import { useStyles } from './styles';
import { TokenType } from '../../../../types';

const Desktop: React.FC<{ items: TokenType[] } & ComponentDefault> = (props) => {
  const { t } = useTranslation('tokens');
  const classes = useStyles();
  const formattedItems = props.items.map((x) => {
    return {
      token: (
        <AvatarName
          imageUrl={x.imageUrl}
          name={x.name}
          address={x.identifier}
          href={TOKEN_DETAILS}
        />
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
    };
  });
  return (
    <div className={classnames(props.className, classes.root)}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => {
              return (
                <TableCell
                  key={column.key}
                  align={column.align}
                  style={{ width: `${column.width}%` }}
                >
                  {t(column.key)}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {formattedItems.map((row, i) => (
            <TableRow key={`holders-row-${i}`}>
              {columns.map((column) => {
                return (
                  <TableCell
                    key={`holders-row-${i}-${column.key}`}
                    align={column.align}
                    style={{ width: `${column.width}%` }}
                  >
                    {row[column.key]}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
