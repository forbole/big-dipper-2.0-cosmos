import React from 'react';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import {
  Box, NoData,
} from '@components';
import { useProfilesRecoil } from '@recoil/profiles';
import { useScreenSize } from '@hooks';
import { useStyles } from './styles';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Signatures: React.FC<ComponentDefault & {
  signatures: string[];
}> = ({
  className,
  signatures,
}) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation('blocks');
  const classes = useStyles();
  const formattedSignatures = useProfilesRecoil(signatures);

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography className={classes.title} variant="h2">{t('signatures')}</Typography>
      {!signatures.length ? (
        <NoData />
      ) : (
        <div className={classes.wrapper}>
          {isDesktop ? (
            <Desktop
              className={classes.desktop}
              signatures={formattedSignatures}
            />
          ) : (
            <Mobile
              className={classes.mobile}
              signatures={formattedSignatures}
            />
          )}
        </div>
      )}
    </Box>
  );
};

export default Signatures;
