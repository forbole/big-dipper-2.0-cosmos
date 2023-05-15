import { FC } from 'react';
import numeral from 'numeral';
import useAppTranslation from '@/hooks/useAppTranslation';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@/components/box';
import NoData from '@/components/no_data';
import useStyles from '@/screens/node_details/components/consensus/styles';
import type { ConsensusType } from '@/screens/node_details/types';

const Consensus: FC<{ className?: string; consensus: ConsensusType }> = (props) => {
  const { t } = useAppTranslation('nodes');
  const { classes, cx } = useStyles();

  return (
    <Box className={cx(classes.root, props.className)}>
      <Typography variant="h2">{t('consensus')}</Typography>
      {props.consensus.length ? (
        <div className={classes.blocks}>
          {props.consensus.map((x) => (
            <Tooltip
              key={x.round}
              enterTouchDelay={50}
              title={
                <Box className={classes.toolTip}>
                  <div className={classes.item}>
                    <Typography variant="h4" className="label">
                      {t('round')}
                    </Typography>
                    <Typography variant="body1" className="value">
                      {numeral(x.round).format('0,0')}
                    </Typography>
                  </div>
                </Box>
              }
              placement="top"
            >
              <div
                className={cx(classes.singleBlock, {
                  signed: x.proposed,
                })}
              />
            </Tooltip>
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </Box>
  );
};

export default Consensus;
