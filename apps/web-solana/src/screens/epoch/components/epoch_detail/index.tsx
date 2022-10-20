import React from 'react';
import dynamic from 'next/dynamic';
import { Box } from '@components';
import { useScreenSize } from '@hooks';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { EpochDetailType } from './types';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const EpochDetail: React.FC<{
  epochDetail:EpochDetailType[];
  title:string;
} & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation('epoch');

  return (
    <Box className={classnames(props.className)}>
      <Typography variant="h2">{t(props.title)}</Typography>
      {isDesktop ? (
        <Desktop epochDetail={props.epochDetail} />
      ) : (
        <Mobile epochDetail={props.epochDetail} />
      )}
    </Box>
  );
};

export default EpochDetail;
