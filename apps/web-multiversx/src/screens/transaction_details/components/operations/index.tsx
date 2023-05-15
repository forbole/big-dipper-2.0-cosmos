import Box from '@/components/box';
import NoData from '@/components/no_data';
import Desktop from '@/screens/transaction_details/components/operations/components/desktop';
import Mobile from '@/screens/transaction_details/components/operations/components/mobile';
import useStyles from '@/screens/transaction_details/components/operations/styles';
import type { OperationType } from '@/screens/transaction_details/types';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';

const Operations: FC<{ items: OperationType[] }> = (props) => {
  const { t } = useAppTranslation('transactions');
  const { classes } = useStyles();
  const display = useDisplayStyles().classes;

  if (!props.items.length) {
    return <NoData />;
  }

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant="h2">
        {t('operations')}
      </Typography>
      <Desktop items={props.items} className={display.hiddenUntilLg} />
      <Mobile items={props.items} className={display.hiddenWhenLg} />
    </Box>
  );
};

export default Operations;
