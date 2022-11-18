import React from 'react';
import Box from 'ui/components/box';
import OnlineVotingPower from './components/online_voting_power';
import { useHero } from './hooks';

const Hero: React.FC<ComponentDefault> = (props) => {
  const { state } = useHero();
  let component = null;
  if (!state.loading) {
    component = <OnlineVotingPower />;
  }

  return <Box className={props.className}>{component}</Box>;
};

export default Hero;
