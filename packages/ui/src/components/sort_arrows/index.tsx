import { FC } from 'react';
import SortDownIcon from 'shared-utils/assets/icon-sort-down.svg';
import useStyles from '@/components/sort_arrows/styles';

type SortArrowsProps = {
  className?: string;
  sort?: 'asc' | 'desc';
};

const SortArrows: FC<SortArrowsProps> = ({ className, sort }) => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, className)}>
      <SortDownIcon
        className={cx(classes.svg, classes.up, {
          desc: sort === 'desc',
        })}
      />
      <SortDownIcon
        className={cx(classes.svg, classes.down, {
          asc: sort === 'asc',
        })}
      />
    </div>
  );
};

export default SortArrows;
