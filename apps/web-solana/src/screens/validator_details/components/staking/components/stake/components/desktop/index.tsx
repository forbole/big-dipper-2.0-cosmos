import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { AvatarName } from '@components';
import { formatNumber } from '@utils/format_token';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
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
    return ({
      address: (
        <AvatarName
          address={x.account.address}
          imageUrl={x.account.imageUrl}
          name={x.account.name.length > 20 ? getMiddleEllipsis(x.account.name, {
            beginning: 12, ending: 10,
          }) : x.account.name}
        />
      ),
      activationEpoch: numeral(x.activationEpoch).format('0,0'),
      amount: `${formatNumber(x.amount.value, x.amount.exponent)} ${x.amount.displayDenom.toUpperCase()}`,
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
