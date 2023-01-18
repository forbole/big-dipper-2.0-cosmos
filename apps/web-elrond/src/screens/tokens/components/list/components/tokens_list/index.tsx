import NoData from '@/components/no_data';
import Desktop from '@/screens/tokens/components/list/components/tokens_list/components/desktop';
import Mobile from '@/screens/tokens/components/list/components/tokens_list/components/mobile';
import type { TokenType } from '@/screens/tokens/components/list/types';
import useSharedStyles from '@/styles/useSharedStyles';
import { FC } from 'react';

const TokenList: FC<{ items: TokenType[] }> = (props) => {
  const { classes } = useSharedStyles();

  if (!props.items.length) {
    return <NoData />;
  }

  return (
    <>
      <Desktop items={props.items} className={classes.hiddenUntilLg} />
      <Mobile items={props.items} className={classes.hiddenWhenLg} />
    </>
  );
};

export default TokenList;
