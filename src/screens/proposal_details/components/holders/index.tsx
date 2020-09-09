import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import {
  Box,
} from '@components';
import { useStyles } from './styles';
import { HoldersProvider } from './contexts/holders';
import {
  Desktop,
  Mobile,
  Paginate,
} from './components';

const Holders: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('tokens');
  const classes = useStyles();
  return (
    <HoldersProvider>
      <Box className={classnames(className)}>
        <Typography className={classes.title} variant="h2">{t('holders')}</Typography>
        <Mobile className={classes.mobile} />
        <Desktop className={classes.desktop} />
        <Paginate />
      </Box>
    </HoldersProvider>
  );
};

export default Holders;
