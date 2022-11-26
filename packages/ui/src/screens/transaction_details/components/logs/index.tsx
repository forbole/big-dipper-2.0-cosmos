import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Typography from '@material-ui/core/Typography';
import Box from '@/components/box';
import { useGetStyles } from '@/screens/transaction_details/components/logs/styles';

const Logs: React.FC<
  {
    logs: null | unknown[];
  } & ComponentDefault
> = ({ logs }) => {
  const { classes } = useGetStyles();
  const { t } = useTranslation('transactions');
  return (
    <Box className={classes.root}>
      <Typography variant="h2" className={classes.header}>
        {t('logs')}
      </Typography>
      <pre className={classes.pre}>
        <code>{JSON.stringify(logs, null, 4)}</code>
      </pre>
    </Box>
  );
};

export default Logs;
