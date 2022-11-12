import React from 'react';
import Box from 'ui/components/box';
import { OnlineVotingPower, TokenPrice } from './components';
import { useHero } from './hooks';

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
