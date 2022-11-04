import React from 'react';
import dynamic from 'next/dynamic';
import NoData from '@components/no_data';
import Box from '@components/box';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { useScreenSize } from '@hooks';
import { OperationType } from '../../types';
import { useStyles } from './styles';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Operations: React.FC<{items: OperationType[]} & ComponentDefault> = (props) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const { isDesktop } = useScreenSize();

  if (!props.items.length) {
    return (
      <NoData />
    );
  }

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant="h2">{t('operations')}</Typography>
      {isDesktop ? (
        <Desktop items={props.items} />
      ) : (
        <Mobile items={props.items} />
      )}
    </Box>
  );
};

export default Operations;
