import AvatarName from '@/components/avatar_name';
import { columns } from '@/screens/account_details/components/staking/components/delegations/components/desktop/utils';
import type { ItemType } from '@/screens/account_details/components/staking/components/delegations/types';
import { formatNumber } from '@/utils/format_token';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

const Desktop: React.FC<{
  className?: string;
  items?: ItemType[];
}> = ({ className, items }) => {
  const { t } = useTranslation('accounts');
  const formattedItems = items?.map((x) => {
    const amount = x.amount ? formatNumber(x.amount.value, x.amount.exponent) : '';
    const reward = x.reward ? formatNumber(x.reward.value, x.reward.exponent) : '';
    return {
      validator: (
        <AvatarName
          name={x.validator.name}
          address={x.validator.address}
          imageUrl={x.validator.imageUrl}
        />
      ),
      amount: `${amount} ${x.amount?.displayDenom.toUpperCase()}`,
      reward: `${reward} ${x.reward?.displayDenom.toUpperCase()}`,
    };
  });

  return (
    <div className={classnames(className)}>
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
