import React from 'react';
import { Box } from '@components';
import { OnlineVotingPower } from './components';
import { useHero } from './hooks';

const Hero: React.FC<ComponentDefault> = (props) => {
  const { state } = useHero();
  let component = null;
  if (!state.loading) {
    component = <OnlineVotingPower />;
  }

  return (
    <Box className={props.className}>
      {component}
    </Box>
  );
};

export default Hero;
