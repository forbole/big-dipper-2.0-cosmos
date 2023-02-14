import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { FC } from 'react';

const AllowGovernanceControl: FC<{ allowGovernanceControl: boolean }> = ({
  allowGovernanceControl,
}) => (
  <Box>
    Allow Governance Control <Checkbox disabled checked={allowGovernanceControl} />
  </Box>
);

export default AllowGovernanceControl;
