/* eslint-disable object-curly-newline */
import { SortArrows } from '@components';
import { TableCell } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import { memo } from 'react';
import { HeaderProps } from '../types';
import { useColumns } from '../utils';

export const Header = memo(
  ({ columnIndex, style }: HeaderProps) => {
    const { t } = useTranslation('accounts');
    const columns = useColumns();

    const { key, align } = columns[columnIndex];
    return (
      <TableCell style={style}>
        <Typography variant="h4" align={align}>
          {t(key)}
          {key === 'top_rank' && <SortArrows sort="asc" />}
        </Typography>
      </TableCell>
    );
  },
);
