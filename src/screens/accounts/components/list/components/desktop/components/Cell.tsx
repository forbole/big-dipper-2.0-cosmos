/* eslint-disable object-curly-newline */
import { TableCell } from '@material-ui/core';
import classnames from 'classnames';
import { FC } from 'react';
import { CellProps } from '../types';

export const Cell: FC<CellProps> = ({ style, rowIndex, children }) => (
  <TableCell style={style} className={classnames({ odd: !(rowIndex % 2) })}>
    {children}
  </TableCell>
);
