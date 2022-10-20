import React from 'react';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import {
  usePagination,
  useScreenSize,
} from '@hooks';
import {
  Pagination,
  NoData,
} from '@components';
import { useStyles } from './styles';
import { TokenType } from '../../types';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const List: React.FC<{
  className?: string;
  data: TokenType[];
  count: number;
}> = ({
  className,
  data,
  count,
}) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    sliceItems,
  } = usePagination({});

  const items = sliceItems(data);

  let component = null;

  if (!items.length) {
    component = <NoData />;
  } else if (isDesktop) {
    component = <Desktop items={items} />;
  } else {
    component = <Mobile items={items} />;
  }

  return (
    <div className={classnames(className)}>
      {component}
      <Pagination
        className={classes.paginate}
        total={count}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default List;
