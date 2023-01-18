import Box from '@/components/box';
import NoData from '@/components/no_data';
import Desktop from '@/screens/transaction_details/components/operations/components/desktop';
import Mobile from '@/screens/transaction_details/components/operations/components/mobile';
import useStyles from '@/screens/transaction_details/components/operations/styles';
import type { OperationType } from '@/screens/transaction_details/types';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const Operations: FC<{ items: OperationType[] }> = (props) => {
  const { t } = useTranslation('transactions');
  const { classes } = useStyles();

  if (!props.items.length) {
    return <NoData />;
  }

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant="h2">
        {t('operations')}
      </Typography>
      <Desktop items={props.items} className={classes.hiddenUntilLg} />
      <Mobile items={props.items} className={classes.hiddenWhenLg} />
    </Box>
  );
};

export default Operations;
