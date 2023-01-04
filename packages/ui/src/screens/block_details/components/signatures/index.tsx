import Box from '@/components/box';
import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks';
import { useStyles } from '@/screens/block_details/components/signatures/styles';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import React, { FC } from 'react';

const Desktop = dynamic(
  () => import('@/screens/block_details/components/signatures/components/desktop')
);
const Mobile = dynamic(
  () => import('@/screens/block_details/components/signatures/components/mobile')
);

type SignaturesProps = ComponentDefault & {
  signatures: string[];
};

const Signatures: FC<SignaturesProps> = ({ className, signatures }) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation('blocks');
  const classes = useStyles();

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
            <Desktop className={classes.desktop} signatures={signatures} />
          ) : (
            <Mobile className={classes.mobile} signatures={signatures} />
          )}
        </div>
      )}
    </Box>
  );
};

export default Signatures;
