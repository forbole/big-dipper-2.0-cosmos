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
import { AvatarName } from '@components';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { formatNumber } from '@utils/format_token';
import { columns } from './utils';
import { ItemType } from '../../types';

const Desktop: React.FC<{
  className?: string;
  items: ItemType[];
}> = ({
  className,
  items,
}) => {
  const { t } = useTranslation('validators');

  const formattedData = items.map((x) => {
    const amount = formatNumber(x.amount.value, x.amount.exponent);
    return ({
      address: (
        <AvatarName
          address={x.delegator.address}
          imageUrl={x.delegator.imageUrl}
          name={x.delegator.name.length > 20 ? getMiddleEllipsis(x.delegator.name, {
            beginning: 12, ending: 10,
          }) : x.delegator.name}
        />
      ),
      amount: `${amount} ${x.amount.displayDenom.toUpperCase()}`,
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
          {formattedData.map((row, i) => (
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
