import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import Color from 'color';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import {
  InfoPopover, Box,
} from '@components';
import { useStyles } from './styles';

const Potential: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('validators');
  const {
    classes, theme,
  } = useStyles();

  const data = [
    {
      subject: t('rootDistance'),
      value: 65,
    },
    {
      subject: t('fee'),
      value: 65,
    },
    {
      subject: t('skipRate'),
      value: 65,
    },
    {
      subject: t('voteDistance'),
      value: 65,
    },
    {
      subject: t('activeStake'),
      value: 65,
    },
  ];

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2">
        {t('potential')}
        <InfoPopover
          content={t('potentialExplanation')}
        />
      </Typography>
      <div className={classes.contentWrapper}>
        <div className={classes.chart}>
          <ResponsiveContainer width="99%">
            <RadarChart
              data={data}
            >
              <PolarGrid stroke={theme.palette.divider} />
              <PolarAngleAxis dataKey="subject" />
              <Radar
                dataKey="value"
                stroke={theme.palette.primary.main}
                fill={Color(theme.palette.primary.main).alpha(0.24).string()}
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className={classes.listContentWrapper}>
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('rootDistance')}
            </Typography>
            <Typography variant="body1" className="value">
              59,968,000
            </Typography>
          </div>
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('fee')}
            </Typography>
            <Typography variant="body1" className="value">
              7.2%
            </Typography>
          </div>
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('skipRate')}
            </Typography>
            <Typography variant="body1" className="value">
              43.2%
            </Typography>
          </div>
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('voteDistance')}
            </Typography>
            <Typography variant="body1" className="value">
              59,968,000
            </Typography>
          </div>
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('activeStake')}
            </Typography>
            <Typography variant="body1" className="value">
              59,968,000
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Potential;
