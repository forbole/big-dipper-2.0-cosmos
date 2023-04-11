/* eslint-disable object-curly-newline */
import TableCell from '@mui/material/TableCell';
import { FC } from 'react';
import { CellProps } from '@/screens/accounts/components/list/components/desktop/types';

export const Cell: FC<CellProps> = ({ style, children, cx }) => (
  <TableCell style={style} className={cx}>
    {children}
  </TableCell>
);
