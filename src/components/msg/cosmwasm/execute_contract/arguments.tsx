import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { Box } from '@components';
import { useGetStyles } from './styles'

const Arguments: React.FC<{
  args: string;
} & ComponentDefault> = ({ args }) => {
  const { classes } = useGetStyles();
  const { t } = useTranslation('transactions');
  return (
    <Box className={classes.root}>
      <Typography variant="h2" className={classes.header}>
        {t('arguments')}
      </Typography>
      <pre className={classes.pre}>
        <code>
          {JSON.stringify(JSON.parse(args), null, 4)}
        </code>
      </pre>
    </Box>
  );
};

export default Arguments;
