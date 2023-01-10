import Box from '@/components/box';
import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks';
import useStyles from '@/screens/block_details/components/consensus/styles';
import type { ConsensusType } from '@/screens/block_details/types';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

import Desktop from '@/screens/block_details/components/consensus/components/desktop';
import Mobile from '@/screens/block_details/components/consensus/components/mobile';

const Consensus: FC<{ className?: string; consensus: ConsensusType[] }> = (props) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation('blocks');
  const { classes, cx } = useStyles();
  return (
    <Box className={cx(classes.root, props.className)}>
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
