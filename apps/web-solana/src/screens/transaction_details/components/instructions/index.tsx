import React from 'react';
import { Box } from '@components';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { InstructionType } from '../../types';
import { batchInstructions } from './utils';
import { useStyles } from './styles';
import { Instruction } from './components';

const Instructions: React.FC<{ instructions: InstructionType[] } & ComponentDefault> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation('transactions');

  const formatInstructions = batchInstructions(props.instructions);

  return (
    <Box className={classes.root}>
      <Typography variant="h2">
        {t('instructions')}
      </Typography>
      {formatInstructions.map((x) => {
        return (
          <React.Fragment key={x[0].index}>
            <Instruction instructions={x} />
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default Instructions;
