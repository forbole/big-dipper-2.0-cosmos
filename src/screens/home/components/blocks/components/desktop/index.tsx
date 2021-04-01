import React from 'react';
import classnames from 'classnames';
import {
  TableRow,
  TableHead,
  TableCell,
  Table,
  TableBody,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { useBlocksContext } from '@src/screens/home/components/blocks/contexts/blocks';
import { useStyles } from './styles';
import { columns } from './utils';

const Desktop: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { formatUi } = useBlocksContext();
  const { t } = useTranslation('blocks');
  const classes = useStyles();
  const uiData = formatUi('desktop');
  return (
    <div
      className={classnames(className, classes.root)}
    >
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.key}
                align={column.align}
              >
                {t(column.key)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {uiData.map((row, i) => (
            <TableRow key={`row-${i}`}>
              {columns.map((column, index) => {
                const {
                  key, align,
                } = column;
                const item = row[key];
                return (
                  <TableCell align={align} key={`${key}-${index}`}>
                    {item}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
