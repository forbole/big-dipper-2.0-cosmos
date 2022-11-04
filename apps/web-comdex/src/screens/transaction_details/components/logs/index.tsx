import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import Box from '@components/box';
import { useGetStyles } from './styles';

const Logs: React.FC<{
  logs: null | any[];
} & ComponentDefault> = ({ logs }) => {
  const { classes } = useGetStyles();
  const { t } = useTranslation('transactions');
  return (
    <Box className={classes.root}>
      <Typography variant="h2" className={classes.header}>
        {t('logs')}
      </Typography>
      <pre className={classes.pre}>
        <code>
          {JSON.stringify(logs, null, 4)}
        </code>
      </pre>
    </Box>
  );
};

export default Logs;
