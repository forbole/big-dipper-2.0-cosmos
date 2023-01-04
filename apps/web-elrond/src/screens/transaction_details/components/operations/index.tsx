import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import NoData from '@/components/no_data';
import Box from '@/components/box';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import { useScreenSize } from '@/hooks';
import type { OperationType } from '@/screens/transaction_details/types';
import { useStyles } from '@/screens/transaction_details/components/operations/styles';

const Desktop = dynamic(
  () => import('@/screens/transaction_details/components/operations/components/desktop')
);
const Mobile = dynamic(
  () => import('@/screens/transaction_details/components/operations/components/mobile')
);

const Operations: FC<{ items: OperationType[] }> = (props) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const { isDesktop } = useScreenSize();

  if (!props.items.length) {
    return <NoData />;
  }

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant="h2">
        {t('operations')}
      </Typography>
      {isDesktop ? <Desktop items={props.items} /> : <Mobile items={props.items} />}
    </Box>
  );
};

export default Operations;
