import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';

type ParamsChangeProps = {
  changes: {
    subspace: string;
    key: string;
    value: string;
  }[];
};

const ParamsChange: FC<ParamsChangeProps> = ({ changes }) => {
  const { t } = useAppTranslation('proposals');
  return (
    <div style={{ overflow: 'auto' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t('subspace')}</TableCell>
            <TableCell>{t('key')}</TableCell>
            <TableCell>{t('value')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {changes.map((row) => (
            <TableRow key={row.key}>
              <TableCell>{row.subspace}</TableCell>
              <TableCell>{row.key}</TableCell>
              <TableCell>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ParamsChange;
