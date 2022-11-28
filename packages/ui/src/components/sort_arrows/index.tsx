import { useStyles } from '@/components/sort_arrows/styles';
import classnames from 'classnames';
import React from 'react';
import SortDownIcon from 'shared-utils/assets/icon-sort-down.svg';

const SortArrows: React.FC<{
  className?: string;
  sort?: 'asc' | 'desc';
}> = ({ className, sort }) => {
  const classes = useStyles();

  return (
    <div className={classnames(className, classes.root)}>
      <SortDownIcon
        className={classnames(classes.svg, classes.up, {
          desc: sort === 'desc',
        })}
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
