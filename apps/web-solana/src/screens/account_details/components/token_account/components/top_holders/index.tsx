import React from 'react';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  Box,
  NoData,
  Loading,
} from '@components';
import { useScreenSize } from '@hooks';
import { useProfilesRecoil } from '@recoil/profiles';
import { useStyles } from './styles';
import { useHolders } from './hooks';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const TopHolders: React.FC<ComponentDefault> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const { isDesktop } = useScreenSize();
  const { state } = useHolders();

  const dataProfiles = useProfilesRecoil(state.holders.map((x) => x.holder));
  const mergedDataWithProfiles = state.holders.map((x, i) => {
    return ({
      ...x,
      holder: dataProfiles[i],
    });
  });

  let component = null;

  if (state.loading) {
    component = <Loading />;
  } else if (!state.holders.length) {
    component = <NoData />;
  } else if (isDesktop) {
    component = <Desktop items={mergedDataWithProfiles} />;
  } else {
    component = <Mobile items={mergedDataWithProfiles} />;
  }

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Typography variant="h2">
        {t('topHolders')}
      </Typography>
      {component}
    </Box>
  );
};

export default TopHolders;
