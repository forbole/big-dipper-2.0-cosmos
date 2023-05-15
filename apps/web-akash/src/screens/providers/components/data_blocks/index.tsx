import useAppTranslation from '@/hooks/useAppTranslation';
import numeral from 'numeral';
import { FC } from 'react';
import useStyles from '@/screens/providers/components/data_blocks/styles';
import SingleBlock from '@/screens/providers/components/data_blocks/components/single_block';

type DataBlocksProps = {
  className?: string;
  providers: number;
  leases: number;
};

const DataBlocks: FC<DataBlocksProps> = ({ className, providers, leases }) => {
  const { t } = useAppTranslation('providers');
  const { classes, cx } = useStyles();
  const data = [
    {
      key: 'activeProviders',
      label: t('activeProviders'),
      value: numeral(providers).format('0,0'),
      className: classes.activeProviders,
    },
    {
      key: 'activeLeases',
      label: t('activeLeases'),
      value: numeral(leases).format('0,0'),
      className: classes.activeLeases,
    },
  ];

  return (
    <div className={cx(classes.root, className)}>
      {data.map((x) => (
        <SingleBlock key={x.key} label={x.label} value={x.value} className={x.className} />
      ))}
    </div>
  );
};

export default DataBlocks;
