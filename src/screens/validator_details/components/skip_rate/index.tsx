import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Typography, Button,
} from '@material-ui/core';
import { Box } from '@components';
import { useStyles } from './styles';
import { useSkipRate } from './hooks';

const SkipRate: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('validators');
  const {
    setEpoch,
    epoch,
    percentage,
  } = useSkipRate();
  const classes = useStyles(percentage);

  const epochOptions: {
    key: 0 | 1 | 2;
    display: string;
  }[] = [
    {
      key: 0,
      display: t('lastEpoch'),
    },
    {
      key: 1,
      display: t('numEpoch', {
        num: 10,
      }),
    },
    {
      key: 2,
      display: t('numEpoch', {
        num: 30,
      }),
    },
  ];
  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2">
        {t('skipRate')}
      </Typography>
      <div className={classes.actionsWrapper}>
        <div className={classes.data}>
          <Typography variant="h3" className="primary__data">
            4.9%
          </Typography>
          <Typography variant="body1">
            5904 / 203
          </Typography>
        </div>
        <div className={classes.options}>
          {epochOptions.map((x) => {
            return (
              <Button
                key={x.key}
                className={classnames({
                  selected: x.key === epoch,
                })}
                onClick={() => setEpoch(x.key)}
              >
                {x.display}
              </Button>
            );
          })}
        </div>
      </div>
      <div className={classes.chart}>
        <div className={classes.active} />
      </div>
    </Box>
  );
};

export default SkipRate;
