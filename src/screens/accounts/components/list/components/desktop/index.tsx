/* eslint-disable react/jsx-one-expression-per-line, object-curly-newline */
import { Table, TableBody, TableHead, TableRow } from '@material-ui/core';
import classnames from 'classnames';
import { Header } from './components/Header';
import { Row } from './components/Row';
import { useStyles } from './styles';
import { DesktopProps } from './types';
import { useColumns } from './utils';

const Desktop: React.FC<DesktopProps> = ({ className, items }) => {
  const classes = useStyles();
  const columns = useColumns();

  return (
    <div className={classnames(className, classes.root)}>
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
