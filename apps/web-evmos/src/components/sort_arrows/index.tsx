import React from 'react';
import classnames from 'classnames';
import SortDownIcon from '@assets/icon-sort-down.svg';
import { useStyles } from './styles';

const SortArrows: React.FC<{
  className?: string;
  sort?: 'asc' | 'desc';
}> = ({
  className, sort,
}) => {
  const classes = useStyles();

  return (
    <div
      className={classnames(className, classes.root)}
    >
      <SortDownIcon
        className={classnames(
          classes.svg,
          classes.up, {
            desc: sort === 'desc',
          },
        )}
      />
      <SortDownIcon
        className={classnames(classes.svg, classes.down, {
          asc: sort === 'asc',
        })}
      />
    </div>
  );
};

export default SortArrows;
