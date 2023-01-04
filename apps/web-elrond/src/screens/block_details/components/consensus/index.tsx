import Box from '@/components/box';
import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks';
import { useStyles } from '@/screens/block_details/components/consensus/styles';
import type { ConsensusType } from '@/screens/block_details/types';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import { FC } from 'react';

const Desktop = dynamic(
  () => import('@/screens/block_details/components/consensus/components/desktop')
);
const Mobile = dynamic(
  () => import('@/screens/block_details/components/consensus/components/mobile')
);

const Consensus: FC<{ className?: string; consensus: ConsensusType[] }> = (props) => {
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
