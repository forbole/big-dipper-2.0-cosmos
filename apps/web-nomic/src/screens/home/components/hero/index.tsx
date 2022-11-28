import Box from '@/components/box';
import OnlineVotingPower from '@/screens/home/components/hero/components/online_voting_power';
import { useHero } from '@/screens/home/components/hero/hooks';
import React from 'react';

const Hero: React.FC<ComponentDefault> = (props) => {
  const { state } = useHero();
  let component = null;
  if (!state.loading) {
    component = <OnlineVotingPower />;
  }

  return <Box className={props.className}>{component}</Box>;
};

export default Hero;
