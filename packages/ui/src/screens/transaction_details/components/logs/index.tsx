import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import useStyles from '@/screens/transaction_details/components/logs/styles';
import Box from '@/components/box';

type LogsProps = {
  logs: null | unknown[];
};

const Logs: FC<LogsProps> = ({ logs }) => {
  const { classes } = useStyles();
  const { t } = useAppTranslation('transactions');
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
