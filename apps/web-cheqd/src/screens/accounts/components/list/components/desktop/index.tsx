/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line, object-curly-newline */
import { Table, TableBody, TableHead, TableRow } from '@mui/material';
import Header from '@/screens/accounts/components/list/components/desktop/components/Header';
import Row from '@/screens/accounts/components/list/components/desktop/components/Row';
import useStyles from '@/screens/accounts/components/list/components/desktop/styles';
import { DesktopProps } from '@/screens/accounts/components/list/components/desktop/types';
import { useColumns } from '@/screens/accounts/components/list/components/desktop/utils';

const Desktop: React.FC<DesktopProps> = ({ className, items }) => {
  const columns = useColumns();
  const { classes, cx } = useStyles();

  return (
    <div className={cx(className, classes.root)}>
      <Table>
        {/* ======================================= */}
        {/* Table Header */}
        {/* ======================================= */}
        <TableHead>
          <TableRow>
            {columns.map((column, columnIndex) => (
              <Header
                key={column.key}
                columnIndex={columnIndex}
                style={{ width: `${column.width}%`, textAlign: column.align }}
              />
            ))}
          </TableRow>
        </TableHead>
        {/* ======================================= */}
        {/* Table Body */}
        {/* ======================================= */}
        <TableBody>
          {items?.map((row, rowIndex) => (
            <TableRow key={row.address}>
              {columns.map((column, columnIndex) => (
                <Row
                  key={`${row.address}-${column.key}`}
                  data={row}
                  rowIndex={rowIndex}
                  columnIndex={columnIndex}
                  style={{ width: `${column.width}%`, textAlign: column.align }}
                />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
