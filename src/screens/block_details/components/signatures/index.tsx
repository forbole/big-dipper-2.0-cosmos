import React from 'react';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { useRecoilValue } from 'recoil';
import { readProfiles } from '@recoil/profiles';
import { Typography } from '@material-ui/core';
import {
  Box, NoData,
} from '@components';
import { useScreenSize } from '@hooks';
import { useStyles } from './styles';
import { Signature } from './types';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Signatures: React.FC<ComponentDefault & {
  signatures: string[];
}> = ({
  className,
  ...props
}) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation('blocks');
  const classes = useStyles();
  const signatures = useRecoilValue(readProfiles(props.signatures));
  const formattedSignatures: Signature[] = signatures.map((x, i) => ({
    // ...x,
    moniker: x.
    address: props.signatures[i],
  }));

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
              signatures={[]}
              // signatures={signatures}
            />
          )}
        </div>
      )}
    </Box>
  );
};

export default Signatures;
