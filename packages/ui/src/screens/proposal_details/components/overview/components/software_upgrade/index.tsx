import React from 'react';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const SoftwareUpgrade: React.FC<{
  height: string;
  info: string;
  name: string;
}> = ({ height, info, name }) => {
  const { t } = useTranslation('proposals');
  return (
    <div
      style={{
        overflow: 'auto',
        whiteSpace: 'nowrap',
      }}
    >
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>{t('name')}</TableCell>
            <TableCell>{name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t('height')}</TableCell>
            <TableCell>{numeral(height).format('0,0')}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t('info')}</TableCell>
            <TableCell>{info}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default SoftwareUpgrade;
