import React from 'react';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';

const SoftwareUpgrade: React.FC<{
  className?: string;
  height: string;
  info: string;
  name: string;
}> = ({
  height,
  info,
  name,
}) => {
  const { t } = useTranslation('proposals');
  return (
    <div
      style={{
        overflow: 'auto', whiteSpace: 'nowrap',
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
