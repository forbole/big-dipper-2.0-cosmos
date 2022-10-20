import React from 'react';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import {
  Box, NoData,
} from '@components';
import { useScreenSize } from '@hooks';
import { ConsensusType } from '../../types';
import { useStyles } from './styles';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Consensus: React.FC<{consensus: ConsensusType[]} & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation('blocks');
  const classes = useStyles();
  return (
    <Box className={classnames(props.className, classes.root)}>
      <Typography variant="h2">{t('consensus')}</Typography>
      {!props.consensus.length ? (
        <NoData />
      ) : (
        <div className={classes.wrapper}>
          {isDesktop ? (
            <Desktop
              items={props.consensus}
            />
          ) : (
            <Mobile
              items={props.consensus}
            />
          )}
        </div>
      )}
    </Box>
  );
};

export default Consensus;
