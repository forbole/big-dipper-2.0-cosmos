import React from 'react';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import {
  Box, NoData,
} from '@components';
import { useScreenSize } from '@hooks';
import { useStyles } from './styles';
import { useBlockContext } from '../../contexts/block';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Signatures: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation('blocks');
  const classes = useStyles();
  const {
    rawData,
  } = useBlockContext();

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography className={classes.title} variant="h2">{t('signatures')}</Typography>
      {!rawData.signatures.length ? (
        <NoData />
      ) : (
        <div className={classes.wrapper}>
          {isDesktop ? (
            <Desktop className={classes.desktop} />
          ) : (
            <Mobile className={classes.mobile} />
          )}
        </div>
      )}
    </Box>
  );
};

export default Signatures;
