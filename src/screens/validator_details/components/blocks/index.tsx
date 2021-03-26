import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Typography,
  Tooltip,
} from '@material-ui/core';
import {
  Box, AvatarName, Result,
} from '@components';
import { useStyles } from './styles';

const Blocks: React.FC<{
  className?: string;
}> = ({
  className,
}) => {
  const { t } = useTranslation('validators');
  const fakeBlock = {
    signed: true,
    block: '120,322',
    proposer: {
      image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      moniker: 'Forbole',
      identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
    },
    votingPower: '70%',
    gas: '345 / 345',
  };

  const fakeBlockTwo = {
    signed: false,
    block: '120,322',
    proposer: {
      image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      moniker: 'Forbole',
      identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
    },
    votingPower: '70%',
    gas: '345 / 345',
  };

  const blocks = [...Array(50).fill(fakeBlock), ...Array(50).fill(fakeBlockTwo)];

  const formattedBlocks = blocks.map((x) => {
    return ({
      proposer: (
        <AvatarName
          address={x?.proposer?.identity}
          imageUrl={x?.proposer?.image}
          name={x?.proposer?.moniker}
        />
      ),
      block: x.block,
      votingPower: x.votingPower,
      gas: x.gas,
      signed: (
        <Result success={x.signed} />
      ),
    });
  });

  const classes = useStyles();
  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2">
        {t('lastBlocks')}
      </Typography>
      <div className={classes.blocks}>
        {formattedBlocks.map((x, i) => {
          return (
            <Tooltip
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
                      {t('gas')}
                    </Typography>
                    <Typography variant="body1" className="value">
                      {x.gas}
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
                    signed: blocks[i].signed,
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
