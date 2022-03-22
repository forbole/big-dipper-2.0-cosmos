import React from 'react';
import { Box } from '@components';
import { OnlineVotingPower } from './components';

const Hero: React.FC<ComponentDefault> = (props) => {
  return (
    <Box className={props.className}>
      <OnlineVotingPower />
    </Box>
  );
};

export default Hero;
