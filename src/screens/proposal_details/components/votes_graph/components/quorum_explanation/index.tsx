import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

const QuorumExplanation = (props: {
  quorum: number;
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>
        <Trans
          i18nKey="proposals:quorumExplanation"
          components={[
            <b />,
          ]}
          values={{
            quorum: props.quorum,
          }}
        />
      </Typography>
    </div>
  );
};

export default QuorumExplanation;
