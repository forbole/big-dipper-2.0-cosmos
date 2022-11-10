import React from 'react';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import Box from 'ui/components/box';
import NoData from '@components/no_data';
import { useScreenSize } from '@hooks';
import { ConsensusType } from '../../types';
import { useStyles } from './styles';
import type DesktopType from './components/desktop';
import type MobileType from './components/mobile';

const Desktop = dynamic(() => import('./components/desktop')) as typeof DesktopType;
const Mobile = dynamic(() => import('./components/mobile')) as typeof MobileType;

const Consensus: React.FC<{ consensus: ConsensusType[] } & ComponentDefault> = (props) => {
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
          {isDesktop ? <Desktop items={props.consensus} /> : <Mobile items={props.consensus} />}
        </div>
      )}
    </Box>
  );
};

export default Consensus;
