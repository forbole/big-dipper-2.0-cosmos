/* eslint-disable object-curly-newline */
import SortArrows from '@/components/sort_arrows';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { memo } from 'react';
import { HeaderProps } from '@/screens/accounts/components/list/components/desktop/types';
import { useColumns } from '../utils';

const Header = memo(({ columnIndex, style }: HeaderProps) => {
  const { t } = useAppTranslation('accounts');
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
});

export default Header;
