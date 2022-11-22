import React from 'react';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Typography from '@material-ui/core/Typography';
import Box from 'ui/components/box';
import NoData from 'ui/components/no_data';
import { useProfilesRecoil } from 'ui/recoil/profiles';
import { useScreenSize } from 'ui/hooks';
import { useStyles } from './styles';
import type DesktopType from './components/desktop';
import type MobileType from './components/mobile';

const Desktop = dynamic(() => import('./components/desktop')) as typeof DesktopType;
const Mobile = dynamic(() => import('./components/mobile')) as typeof MobileType;

const Signatures: React.FC<
  ComponentDefault & {
    signatures: string[];
  }
> = ({ className, signatures }) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation('blocks');
  const classes = useStyles();
  const formattedSignatures = useProfilesRecoil(signatures);

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography className={classes.title} variant="h2">
        {t('signatures')}
      </Typography>
      {!signatures.length ? (
        <NoData />
      ) : (
        <div className={classes.wrapper}>
          {isDesktop ? (
            <Desktop className={classes.desktop} signatures={formattedSignatures} />
          ) : (
            <Mobile className={classes.mobile} signatures={formattedSignatures} />
          )}
        </div>
      )}
    </Box>
  );
};

export default Signatures;
