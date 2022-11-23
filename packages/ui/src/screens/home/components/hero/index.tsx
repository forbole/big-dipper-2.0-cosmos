import React from 'react';
import Box from '@/components/box';
import OnlineVotingPower from '@/screens/home/components/hero/components/online_voting_power';
import TokenPrice from '@/screens/home/components/hero/components/token_price';
import { useHero } from '@/screens/home/components/hero/hooks';

const Hero: React.FC<ComponentDefault> = (props) => {
  const { state } = useHero();
  let component = null;
  if (!state.loading) {
    if (state.tokenPriceHistory.length) {
      component = <TokenPrice items={state.tokenPriceHistory} />;
    } else {
      component = <OnlineVotingPower />;
    }
  }

  return <Box className={props.className}>{component}</Box>;
};

export default Hero;
