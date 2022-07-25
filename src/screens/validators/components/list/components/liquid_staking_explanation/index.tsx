import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

const LiquidStakingExplanation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>
        <Trans
          i18nKey="validators:liquidStakingExplanation"
          components={[
            <b />,
          ]}
        />
      </Typography>
    </div>
  );
};

export default LiquidStakingExplanation;
