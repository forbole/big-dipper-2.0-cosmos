import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import { FC } from 'react';

type SoftwareUpgradeProps = {
  height: string;
  info: string;
  name: string;
};

const SoftwareUpgrade: FC<SoftwareUpgradeProps> = ({ height, info, name }) => {
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
