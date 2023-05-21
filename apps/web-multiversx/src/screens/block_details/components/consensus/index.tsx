import Box from '@/components/box';
import NoData from '@/components/no_data';
import Desktop from '@/screens/block_details/components/consensus/components/desktop';
import Mobile from '@/screens/block_details/components/consensus/components/mobile';
import useStyles from '@/screens/block_details/components/consensus/styles';
import type { ConsensusType } from '@/screens/block_details/types';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';

const Consensus: FC<{ className?: string; consensus: ConsensusType[] }> = (props) => {
  const { t } = useAppTranslation('blocks');
  const { classes, cx } = useStyles();
  const display = useDisplayStyles().classes;
  return (
    <Box className={cx(classes.root, props.className)}>
      <Typography variant="h2">{t('consensus')}</Typography>
      {!props.consensus.length ? (
        <NoData />
      ) : (
        <div className={classes.wrapper}>
          <Desktop items={props.consensus} className={display.hiddenUntilLg} />
          <Mobile items={props.consensus} className={display.hiddenWhenLg} />
        </div>
      )}
    </Box>
  );
};

export default Consensus;
