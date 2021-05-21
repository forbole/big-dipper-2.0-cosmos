import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

const ParamsChange: React.FC<{
  className?: string;
  changes: {
    subspace: string;
    key: string;
    value: string;
  }[];
}> = ({
  changes,
}) => {
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
