import React from 'react';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Typography from '@material-ui/core/Typography';
import Box from '@/components/box';
import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks';
import type { ConsensusType } from '@/screens/block_details/types';
import { useStyles } from '@/screens/block_details/components/consensus/styles';

const Desktop = dynamic(
  () => import('@/screens/block_details/components/consensus/components/desktop')
);
const Mobile = dynamic(
  () => import('@/screens/block_details/components/consensus/components/mobile')
);

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
