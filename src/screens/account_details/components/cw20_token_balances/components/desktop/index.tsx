import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import {
  AvatarName,
} from '@components';
import { formatNumber } from '@utils/format_token';
import { Cw20TokenBalance } from '@src/screens/account_details/types';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { columns } from './utils';

const Desktop: React.FC<{
  className?: string;
  balances?: Cw20TokenBalance[]
}> = ({
  className,
  balances,
}) => {
  const { t } = useTranslation('accounts');
  const balancesFormatted = balances.map((b) => {
    const balance = formatNumber(b.balance.toString(), b.exponent);
    return ({
      token: (
        <AvatarName
          name={`${b.name} (${b.denom.toUpperCase()})`}
          address={b.tokenAddress}
          imageUrl={b.logo}
        />
      ),
      balance: `${balance} ${b.denom.toUpperCase()}`,
      address: getMiddleEllipsis(b.tokenAddress, {
        beginning: 15, ending: 10,
      }),
    });
  });

  return (
    <div className={classnames(className)}>
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
          {balancesFormatted.map((b, i) => (
            <TableRow key={`holders-row-${i}`}>
              {columns.map((column) => {
                return (
                  <TableCell
                    key={`holders-row-${i}-${column.key}`}
                    align={column.align}
                    style={{ width: `${column.width}%` }}
                  >
                    {b[column.key]}
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
