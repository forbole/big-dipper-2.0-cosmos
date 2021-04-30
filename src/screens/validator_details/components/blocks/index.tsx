import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Typography,
  Tooltip,
} from '@material-ui/core';
import { Box } from '@components';
import { useStyles } from './styles';
import { useBlocks } from './hooks';

const Blocks: React.FC<{
  className?: string;
}> = ({
  className,
}) => {
  const { t } = useTranslation('validators');
  const {
    uiData, rawData,
  } = useBlocks();

  const classes = useStyles();
  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2">
        {t('lastBlocks')}
      </Typography>
      <div className={classes.blocks}>
        {uiData.map((x, i) => {
          return (
            <Tooltip
              key={`blocks-tooltip-${i}`}
              enterTouchDelay={50}
              title={(
                <Box className={classes.toolTip}>
                  <div className={classes.item}>
                    <Typography variant="h4" className="label">
                      {t('proposer')}
                    </Typography>
                    {x.proposer}
                  </div>
                  <div className={classes.item}>
                    <Typography variant="h4" className="label">
                      {t('block')}
                    </Typography>
                    <Typography variant="body1" className="value">
                      {x.block}
                    </Typography>
                  </div>
                  <div className={classes.item}>
                    <Typography variant="h4" className="label">
                      {t('votingPower')}
                    </Typography>
                    <Typography variant="body1" className="value">
                      {x.votingPower}
                    </Typography>
                  </div>
                  <div className={classes.item}>
                    <Typography variant="h4" className="label">
                      {t('txs')}
                    </Typography>
                    <Typography variant="body1" className="value">
                      {x.txs}
                    </Typography>
                  </div>
                  <div className={classes.item}>
                    <Typography variant="h4" className="label">
                      {t('signed')}
                    </Typography>
                    {x.signed}
                  </div>
                </Box>
            )}
              placement="top"
            >
              <div
                key={i}
                className={classnames(
                  classes.singleBlock,
                  {
                    signed: rawData[i].signed,
                  },
                )}
              />
            </Tooltip>
          );
        })}
      </div>
    </Box>
  );
};

export default Blocks;
