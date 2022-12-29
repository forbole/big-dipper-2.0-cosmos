import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type ParamsChangeProps = {
  changes: {
    subspace: string;
    key: string;
    value: string;
  }[];
};

const ParamsChange: FC<ParamsChangeProps> = ({ changes }) => {
  const { t } = useTranslation('proposals');
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
