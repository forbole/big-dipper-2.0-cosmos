import Box from '@/components/box';
import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks';
import { useProfilesRecoil } from '@/recoil/profiles';
import type DesktopType from '@/screens/block_details/components/signatures/components/desktop';
import type MobileType from '@/screens/block_details/components/signatures/components/mobile';
import { useStyles } from '@/screens/block_details/components/signatures/styles';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import React from 'react';

const Desktop = dynamic(
  () => import('@/screens/block_details/components/signatures/components/desktop')
) as typeof DesktopType;
const Mobile = dynamic(
  () => import('@/screens/block_details/components/signatures/components/mobile')
) as typeof MobileType;

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
