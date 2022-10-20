import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import {
  Typography,
  Tooltip,
} from '@material-ui/core';
import {
// useProfilesRecoil,
} from '@recoil/profiles';
import {
  Box,
  // AvatarName,
  Result,
} from '@components';
import { useStyles } from './styles';
import { useBlocks } from './hooks';

const Blocks: React.FC<{
  className?: string;
}> = ({
  className,
}) => {
  const { t } = useTranslation('validators');
  const { state } = useBlocks();

  const classes = useStyles();
  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2">
        {t('lastBlocks')}
      </Typography>
      <div className={classes.blocks}>
        {state.map((x, i) => {
          return (
            <Tooltip
              key={`blocks-tooltip-${i}`}
              enterTouchDelay={50}
              title={(
                <Box className={classes.toolTip}>
                  <div className={classes.item}>
                    <Typography variant="h4" className="label">
                      {t('block')}
                    </Typography>
                    <Typography variant="body1" className="value">
                      {numeral(x.height).format('0,0')}
                    </Typography>
                  </div>
                  <div className={classes.item}>
                    <Typography variant="h4" className="label">
                      {t('signed')}
                    </Typography>
                    <Result success={x.signed} />
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
                    signed: state[i].signed,
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
