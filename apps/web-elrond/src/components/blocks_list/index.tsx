import Desktop from '@/components/blocks_list/components/desktop';
import Mobile from '@/components/blocks_list/components/mobile';
import type { BlockListType } from '@/components/blocks_list/types';
import useSharedStyles from '@/styles/useSharedStyles';
import { FC } from 'react';

const BlocksList: FC<BlockListType & ComponentDefault> = (props) => {
  const { classes } = useSharedStyles();
  return (
    <>
      <Desktop items={props.items} className={classes.hiddenUntilLg} />
      <Mobile items={props.items} className={classes.hiddenWhenLg} />
    </>
  );
};

export default BlocksList;
