import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';

const CommunitySpend: React.FC<{
  className?: string;
  recipient: string;
  amount: string;
}> = ({
  recipient,
  amount,
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
            <TableCell>{t('amount')}</TableCell>
            <TableCell>{amount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t('recipient')}</TableCell>
            <TableCell>{recipient}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CommunitySpend;
