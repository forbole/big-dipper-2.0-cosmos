import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { Box } from '@components';
import { useStyles } from './styles';
import {
  Desktop,
  Mobile,
} from './components';

const Signatures: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography className={classes.title} variant="h2">{t('signatures')}</Typography>
      <div className={classes.wrapper}>
        <Mobile className={classes.mobile} />
        <Desktop className={classes.desktop} />
      </div>
    </Box>
  );
};

export default Signatures;
