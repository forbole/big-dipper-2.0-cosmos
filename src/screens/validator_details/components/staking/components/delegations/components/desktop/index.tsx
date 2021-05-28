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
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { chainConfig } from '@src/chain_config';
import { columns } from './utils';
import { DelegationType } from '../../../../../../types';

const Desktop: React.FC<{
  className?: string;
  items: DelegationType[];
}> = ({
  className,
  items,
}) => {
  const { t } = useTranslation('validators');

  const formattedData = items.map((x) => {
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
      amount: `${numeral(x.amount).format('0,0.[0000]')} ${chainConfig.display.toUpperCase()}`,
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
