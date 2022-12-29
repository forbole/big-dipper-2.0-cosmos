import React, { FC } from 'react';
import numeral from 'numeral';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@/components/box';
import NoData from '@/components/no_data';
import { useStyles } from '@/screens/node_details/components/consensus/styles';
import type { ConsensusType } from '@/screens/node_details/types';

const Consensus: FC<{ className?: string; consensus: ConsensusType }> = (props) => {
  const { t } = useTranslation('nodes');
  const classes = useStyles();

  return (
    <Box className={classnames(props.className, classes.root)}>
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
                className={classnames(classes.singleBlock, {
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
